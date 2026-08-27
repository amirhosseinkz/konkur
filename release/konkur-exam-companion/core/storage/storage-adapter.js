(function registerStorageAdapter(global) {
  "use strict";

  const app = global.KonkurApp;
  const schema = app.storage.schema;

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function isQuotaError(error) {
    return error && (error.name === "QuotaExceededError" || error.code === 22 || error.code === 1014);
  }

  class StorageAdapter {
    constructor(options) {
      const settings = options || {};
      this.key = settings.key || schema.ROOT_KEY;
      this.clock = settings.clock || (() => new Date());
      this.storage = settings.storage === undefined ? this.resolveStorage() : settings.storage;
      this.migrations = settings.migrations || Object.freeze({});
      this.memoryState = schema.createDefaults(this.clock);
      this.status = "uninitialized";
      this.lastRecovery = null;
      this.unsupportedSerialized = null;
    }

    resolveStorage() {
      try {
        return global.localStorage;
      } catch (error) {
        return null;
      }
    }

    detectAvailability() {
      if (!this.storage) {
        return false;
      }

      const probeKey = `${this.key}:probe`;
      try {
        this.storage.setItem(probeKey, "1");
        this.storage.removeItem(probeKey);
        return true;
      } catch (error) {
        return false;
      }
    }

    initialize() {
      if (this.status !== "uninitialized") {
        return this.snapshot();
      }

      if (!this.storage) {
        this.status = "unavailable";
        return this.snapshot();
      }

      let serialized;
      try {
        serialized = this.storage.getItem(this.key);
      } catch (error) {
        this.status = "read-failed";
        return this.snapshot();
      }
      const writable = this.detectAvailability();
      if (serialized === null) {
        if (!writable) {
          this.status = "unavailable";
          return this.snapshot();
        }
        const writeResult = this.write(this.memoryState);
        this.status = writeResult.ok ? "ready" : writeResult.status;
        return this.snapshot();
      }

      let parsed;
      try {
        parsed = JSON.parse(serialized);
      } catch (error) {
        return this.recover(serialized, [{ section: "root", code: "invalid-json" }]);
      }

      if (parsed && Number.isInteger(parsed.schemaVersion) && parsed.schemaVersion > schema.SCHEMA_VERSION) {
        this.unsupportedSerialized = serialized;
        this.status = "unsupported-future-version";
        return this.snapshot();
      }

      const migrated = this.migrate(parsed);
      if (!migrated.ok) {
        return this.recover(serialized, migrated.errors, parsed);
      }

      const validation = schema.validateRoot(migrated.value);
      if (!validation.valid) {
        return this.recover(serialized, validation.errors, migrated.value);
      }

      this.memoryState = clone(migrated.value);
      this.restoreRecoveryMetadata();
      this.status = writable ? "ready" : "read-only";
      return this.snapshot();
    }

    migrate(value) {
      if (!value || !Number.isInteger(value.schemaVersion) || value.schemaVersion < 1) {
        return { ok: false, errors: [{ section: "root", code: "invalid-version" }] };
      }

      let migrated = clone(value);
      while (migrated.schemaVersion < schema.SCHEMA_VERSION) {
        const migration = this.migrations[migrated.schemaVersion];
        if (typeof migration !== "function") {
          return { ok: false, errors: [{ section: "root", code: "missing-migration" }] };
        }
        try {
          const fromVersion = migrated.schemaVersion;
          migrated = migration(clone(migrated));
          if (!migrated || migrated.schemaVersion !== fromVersion + 1) {
            throw new Error("Migration did not advance exactly one version.");
          }
          migrated.migration.migrationHistory.push({
            fromVersion,
            toVersion: migrated.schemaVersion,
            startedAt: this.clock().toISOString(),
            completedAt: this.clock().toISOString(),
            status: "completed"
          });
        } catch (error) {
          return { ok: false, errors: [{ section: "root", code: "migration-failed" }] };
        }
      }
      return { ok: true, value: migrated, errors: [] };
    }

    recover(serialized, errors, parsedValue) {
      const timestamp = this.clock().toISOString();
      let backupKey = `${this.key}:corrupt:${timestamp.replace(/[:.]/g, "-")}`;
      let backupFailed = false;
      try {
        this.storage.setItem(backupKey, serialized);
      } catch (error) {
        backupFailed = true;
        backupKey = null;
      }

      const defaults = schema.createDefaults(this.clock);
      const source = parsedValue && typeof parsedValue === "object" ? parsedValue : {};
      const invalidSections = new Set(errors.map((error) => error.section));
      const quarantinedPaths = [];

      Object.keys(schema.sectionValidators()).forEach((section) => {
        if (Object.prototype.hasOwnProperty.call(source, section)) {
          const sanitized = schema.sanitizeSection(section, source[section], defaults[section]);
          defaults[section] = sanitized.value;
          quarantinedPaths.push(...sanitized.invalidPaths);
        }
      });

      defaults.migration.recoveryEvents.push({
        dataset: invalidSections.has("root") ? "root" : Array.from(invalidSections).join(","),
        timestamp,
        action: "partial-reset",
        reason: "schema-validation-failed",
        backupKey,
        quarantinedPaths
      });
      defaults.updatedAt = timestamp;
      this.memoryState = defaults;
      this.lastRecovery = { backupKey, errors: clone(errors), originalSerialized: serialized };
      if (backupFailed) {
        this.status = "recovery-backup-failed";
        return this.snapshot();
      }
      const writeResult = this.write(defaults);
      this.status = writeResult.ok ? "recovered" : writeResult.status;
      return this.snapshot();
    }

    restoreRecoveryMetadata() {
      const events = this.memoryState.migration.recoveryEvents || [];
      const latest = [...events].reverse().find((event) => event.backupKey);
      if (!latest || !this.storage) {
        return;
      }
      try {
        const originalSerialized = this.storage.getItem(latest.backupKey);
        if (originalSerialized !== null) {
          this.lastRecovery = {
            backupKey: latest.backupKey,
            errors: [],
            originalSerialized
          };
        }
      } catch (error) {
        this.lastRecovery = null;
      }
    }

    write(nextState) {
      const validation = schema.validateRoot(nextState);
      if (!validation.valid) {
        return { ok: false, status: "invalid-state", errors: validation.errors };
      }

      if (!this.storage || this.status === "unsupported-future-version") {
        return { ok: false, status: this.status === "unsupported-future-version" ? this.status : "unavailable" };
      }

      const value = clone(nextState);
      value.updatedAt = this.clock().toISOString();
      try {
        this.storage.setItem(this.key, JSON.stringify(value));
        this.memoryState = value;
        this.status = "ready";
        return { ok: true, status: this.status };
      } catch (error) {
        if (isQuotaError(error)) {
          const retryValue = this.prepareQuotaRetry(value);
          try {
            this.storage.setItem(this.key, JSON.stringify(retryValue));
            this.memoryState = retryValue;
            this.status = "ready";
            return { ok: true, status: "ready", recoveredFromQuota: true };
          } catch (retryError) {
            this.status = "quota-error";
            return { ok: false, status: "quota-error", error: retryError };
          }
        }
        this.status = "write-failed";
        return { ok: false, status: "write-failed", error };
      }
    }

    prepareQuotaRetry(value) {
      const retryValue = clone(value);
      const translations = retryValue.cache.translationsByKey;
      Object.keys(translations).forEach((key) => {
        const entry = translations[key];
        if (entry.status === "stale" || (entry.expiresAt && Date.parse(entry.expiresAt) <= this.clock().getTime())) {
          delete translations[key];
        }
      });
      retryValue.statistics.snapshotHistory = retryValue.statistics.currentSnapshot
        ? [retryValue.statistics.currentSnapshot]
        : [];
      return retryValue;
    }

    updateSection(section, value) {
      const validators = schema.sectionValidators();
      if (!validators[section] || !validators[section](value)) {
        return { ok: false, status: "invalid-section" };
      }

      const nextState = clone(this.memoryState);
      nextState[section] = clone(value);
      return this.write(nextState);
    }

    resetSection(section) {
      const defaults = schema.createDefaults(this.clock);
      const validators = schema.sectionValidators();
      if (!validators[section]) {
        return { ok: false, status: "unknown-section" };
      }
      return this.updateSection(section, defaults[section]);
    }

    resetAll() {
      return this.write(schema.createDefaults(this.clock));
    }

    exportState() {
      if (this.status === "unsupported-future-version") {
        return { ok: false, status: this.status, content: null };
      }
      return { ok: true, status: this.status, content: JSON.stringify({
        application: "konkur-exam-companion",
        exportVersion: 1,
        exportedAt: this.clock().toISOString(),
        storageSchemaVersion: schema.SCHEMA_VERSION,
        state: clone(this.memoryState)
      }, null, 2) };
    }

    exportRecoveryBackup() {
      if (!this.lastRecovery) {
        return { ok: false, status: "no-recovery-backup", content: null };
      }
      return {
        ok: true,
        status: "recovery-backup",
        content: this.lastRecovery.originalSerialized,
        backupKey: this.lastRecovery.backupKey
      };
    }

    exportUnsupportedState() {
      return this.unsupportedSerialized
        ? { ok: true, status: "unsupported-backup", content: this.unsupportedSerialized }
        : { ok: false, status: "no-unsupported-backup", content: null };
    }

    inspectImport(serialized) {
      let envelope;
      try {
        envelope = JSON.parse(serialized);
      } catch (error) {
        return { ok: false, status: "invalid-import-json" };
      }

      if (!envelope || envelope.application !== "konkur-exam-companion" || !envelope.state) {
        return { ok: false, status: "invalid-import-envelope" };
      }

      if (envelope.exportVersion !== 1
        || !global.KonkurApp.validation.validators.isIsoTimestamp(envelope.exportedAt)) {
        return { ok: false, status: "invalid-import-envelope" };
      }

      if (envelope.storageSchemaVersion > schema.SCHEMA_VERSION) {
        return { ok: false, status: "unsupported-future-version" };
      }

      if (envelope.storageSchemaVersion !== envelope.state.schemaVersion) {
        return { ok: false, status: "invalid-import-envelope" };
      }

      const validation = schema.validateRoot(envelope.state);
      if (!validation.valid) {
        return { ok: false, status: "invalid-import-state", errors: validation.errors };
      }

      return {
        ok: true,
        status: "valid-import",
        envelope,
        summary: {
          attempts: Object.keys(envelope.state.attempts).length,
          sessions: Object.keys(envelope.state.examSessions).length,
          bookmarks: Object.keys(envelope.state.bookmarks).length
        }
      };
    }

    mergeStates(incoming) {
      const current = clone(this.memoryState);
      const conflicts = [];
      const mergeMutableMap = (target, additions, path) => {
        Object.entries(additions).forEach(([id, record]) => {
          const existing = target[id];
          if (!existing) {
            target[id] = clone(record);
            return;
          }
          const incomingTime = Date.parse(record.updatedAt);
          const existingTime = Date.parse(existing.updatedAt);
          if (incomingTime > existingTime) {
            target[id] = clone(record);
          } else if (incomingTime === existingTime && JSON.stringify(existing) !== JSON.stringify(record)) {
            conflicts.push(`${path}.${id}`);
          }
        });
      };
      ["attempts", "examSessions"].forEach((section) => {
        Object.entries(incoming[section]).forEach(([id, record]) => {
          if (current[section][id] && JSON.stringify(current[section][id]) !== JSON.stringify(record)) {
            conflicts.push(`${section}.${id}`);
          } else {
            current[section][id] = clone(record);
          }
        });
      });
      if (Date.parse(incoming.settings.updatedAt) > Date.parse(current.settings.updatedAt)) {
        current.settings = clone(incoming.settings);
      } else if (incoming.settings.updatedAt === current.settings.updatedAt
        && JSON.stringify(incoming.settings) !== JSON.stringify(current.settings)) {
        conflicts.push("settings");
      }
      mergeMutableMap(current.progress.lessonsById, incoming.progress.lessonsById, "progress.lessonsById");
      mergeMutableMap(current.progress.topicsById, incoming.progress.topicsById, "progress.topicsById");
      mergeMutableMap(current.bookmarks, incoming.bookmarks, "bookmarks");
      mergeMutableMap(current.review.queueById, incoming.review.queueById, "review.queueById");
      mergeMutableMap(current.review.flashcardsById, incoming.review.flashcardsById, "review.flashcardsById");
      mergeMutableMap(current.cache.translationsByKey, incoming.cache.translationsByKey, "cache.translationsByKey");
      const historyById = new Map(current.searchHistory.map((item) => [item.id, item]));
      incoming.searchHistory.forEach((item) => {
        const existing = historyById.get(item.id);
        if (existing && JSON.stringify(existing) !== JSON.stringify(item)) conflicts.push(`searchHistory.${item.id}`);
        else historyById.set(item.id, clone(item));
      });
      if (conflicts.length) {
        return { ok: false, status: "import-conflict", conflicts };
      }
      const history = Array.from(historyById.values())
        .sort((left, right) => Date.parse(right.searchedAt) - Date.parse(left.searchedAt));
      const seenQueries = new Set();
      current.searchHistory = history.filter((item) => {
        if (seenQueries.has(item.query)) return false;
        seenQueries.add(item.query);
        return true;
      }).slice(0, 50);
      current.statistics = schema.createDefaults(this.clock).statistics;
      return { ok: true, status: "merged", state: current, conflicts: [] };
    }

    importState(serialized, mode) {
      const inspection = this.inspectImport(serialized);
      if (!inspection.ok) {
        return inspection;
      }
      if (mode === "merge") {
        const merged = this.mergeStates(inspection.envelope.state);
        return merged.ok ? this.write(merged.state) : merged;
      }
      if (mode !== undefined && mode !== "replace") {
        return { ok: false, status: "invalid-import-mode" };
      }
      return this.write(inspection.envelope.state);
    }

    getState() {
      return clone(this.memoryState);
    }

    snapshot() {
      return Object.freeze({
        status: this.status,
        state: this.getState(),
        recovery: this.lastRecovery ? clone(this.lastRecovery) : null
      });
    }
  }

  const defaultKey = document.documentElement.dataset.testEnvironment === "true"
    ? `${schema.ROOT_KEY}:test-browser`
    : schema.ROOT_KEY;
  const defaultAdapter = new StorageAdapter({ key: defaultKey });
  app.register("storage", "adapter", {
    initialize: defaultAdapter.initialize.bind(defaultAdapter),
    migrateState: defaultAdapter.migrate.bind(defaultAdapter),
    write: defaultAdapter.write.bind(defaultAdapter),
    updateSection: defaultAdapter.updateSection.bind(defaultAdapter),
    resetSection: defaultAdapter.resetSection.bind(defaultAdapter),
    resetAll: defaultAdapter.resetAll.bind(defaultAdapter),
    exportState: defaultAdapter.exportState.bind(defaultAdapter),
    exportRecoveryBackup: defaultAdapter.exportRecoveryBackup.bind(defaultAdapter),
    exportUnsupportedState: defaultAdapter.exportUnsupportedState.bind(defaultAdapter),
    importState: defaultAdapter.importState.bind(defaultAdapter),
    inspectImport: defaultAdapter.inspectImport.bind(defaultAdapter),
    getState: defaultAdapter.getState.bind(defaultAdapter),
    snapshot: defaultAdapter.snapshot.bind(defaultAdapter),
    createAdapter(options) {
      return new StorageAdapter(options);
    }
  });
})(window);
