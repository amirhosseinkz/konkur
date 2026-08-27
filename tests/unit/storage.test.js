(function defineStorageTests(global) {
  "use strict";

  const app = global.KonkurApp;
  const harness = app.tests.harness;
  const TEST_KEY = "konkurExamCompanion:test";
  const fixedClock = () => new Date("2026-07-14T12:00:00.000Z");

  class MemoryStorage {
    constructor(initial) {
      this.values = new Map(Object.entries(initial || {}));
    }
    getItem(key) {
      return this.values.has(key) ? this.values.get(key) : null;
    }
    setItem(key, value) {
      this.values.set(key, String(value));
    }
    removeItem(key) {
      this.values.delete(key);
    }
  }

  class ReadFailureStorage extends MemoryStorage {
    getItem() {
      throw new Error("read blocked");
    }
  }

  class ReadOnlyStorage extends MemoryStorage {
    setItem() {
      throw new Error("write blocked");
    }
    removeItem() {
      throw new Error("write blocked");
    }
  }

  class QuotaOnceStorage extends MemoryStorage {
    constructor() {
      super();
      this.mainWrites = 0;
    }
    setItem(key, value) {
      if (key === TEST_KEY && this.mainWrites === 0) {
        this.mainWrites += 1;
        const error = new Error("quota");
        error.name = "QuotaExceededError";
        throw error;
      }
      super.setItem(key, value);
    }
  }

  harness.test("storage defaults conform to schema version one", () => {
    const defaults = app.storage.schema.createDefaults(fixedClock);
    const validation = app.storage.schema.validateRoot(defaults);
    harness.equal(defaults.schemaVersion, 1);
    harness.equal(validation.valid, true);
  });

  harness.test("missing storage initializes validated defaults", () => {
    const storage = new MemoryStorage();
    const adapter = app.storage.adapter.createAdapter({ key: TEST_KEY, storage, clock: fixedClock });
    const result = adapter.initialize();
    harness.equal(result.status, "ready");
    harness.assert(storage.getItem(TEST_KEY));
  });

  harness.test("corrupt JSON is backed up before recovery", () => {
    const storage = new MemoryStorage({ [TEST_KEY]: "{broken" });
    const adapter = app.storage.adapter.createAdapter({ key: TEST_KEY, storage, clock: fixedClock });
    const result = adapter.initialize();
    harness.equal(result.status, "recovered");
    harness.assert(result.recovery.backupKey.startsWith(`${TEST_KEY}:corrupt:`));
    harness.equal(storage.getItem(result.recovery.backupKey), "{broken");
  });

  harness.test("invalid section recovery preserves valid siblings", () => {
    const state = app.storage.schema.createDefaults(fixedClock);
    state.settings.appearance = "light";
    state.bookmarks["bookmark:test:item"] = {
      id: "bookmark:test:item",
      entityType: "topic",
      entityId: "test:item",
      createdAt: fixedClock().toISOString(),
      updatedAt: fixedClock().toISOString()
    };
    const storage = new MemoryStorage({ [TEST_KEY]: JSON.stringify(state) });
    const adapter = app.storage.adapter.createAdapter({ key: TEST_KEY, storage, clock: fixedClock });
    const result = adapter.initialize();
    harness.equal(result.status, "recovered");
    harness.equal(result.state.settings.appearance, "dark");
    harness.assert(result.state.bookmarks["bookmark:test:item"]);
  });

  harness.test("future schema versions are preserved without overwrite", () => {
    const future = app.storage.schema.createDefaults(fixedClock);
    future.schemaVersion = 2;
    const serialized = JSON.stringify(future);
    const storage = new MemoryStorage({ [TEST_KEY]: serialized });
    const adapter = app.storage.adapter.createAdapter({ key: TEST_KEY, storage, clock: fixedClock });
    const result = adapter.initialize();
    harness.equal(result.status, "unsupported-future-version");
    harness.equal(storage.getItem(TEST_KEY), serialized);
  });

  harness.test("one storage section can reset without clearing siblings", () => {
    const storage = new MemoryStorage();
    const adapter = app.storage.adapter.createAdapter({ key: TEST_KEY, storage, clock: fixedClock });
    adapter.initialize();
    const state = adapter.getState();
    state.searchHistory.push({ id: "search:test", query: "x", displayQuery: "x", searchedAt: fixedClock().toISOString(), resultCount: 0 });
    adapter.write(state);
    adapter.resetSection("searchHistory");
    harness.equal(adapter.getState().searchHistory.length, 0);
    harness.equal(adapter.getState().settings.appearance, "dark");
  });

  harness.test("read failures fall back to memory without a fatal exception", () => {
    const adapter = app.storage.adapter.createAdapter({ key: TEST_KEY, storage: new ReadFailureStorage(), clock: fixedClock });
    harness.equal(adapter.initialize().status, "read-failed");
    harness.equal(adapter.getState().schemaVersion, 1);
  });

  harness.test("existing state remains available when storage is read-only", () => {
    const state = app.storage.schema.createDefaults(fixedClock);
    state.settings.language = "fa";
    const adapter = app.storage.adapter.createAdapter({
      key: TEST_KEY,
      storage: new ReadOnlyStorage({ [TEST_KEY]: JSON.stringify(state) }),
      clock: fixedClock
    });
    const result = adapter.initialize();
    harness.equal(result.status, "read-only");
    harness.equal(result.state.settings.language, "fa");
  });

  harness.test("failed corruption backup keeps the original bytes exportable", () => {
    const storage = new ReadOnlyStorage({ [TEST_KEY]: "{broken" });
    const adapter = app.storage.adapter.createAdapter({ key: TEST_KEY, storage, clock: fixedClock });
    const result = adapter.initialize();
    harness.equal(result.status, "recovery-backup-failed");
    harness.equal(storage.getItem(TEST_KEY), "{broken");
    harness.equal(adapter.exportRecoveryBackup().content, "{broken");
  });

  harness.test("quota cleanup retries once without deleting authoritative state", () => {
    const adapter = app.storage.adapter.createAdapter({ key: TEST_KEY, storage: new QuotaOnceStorage(), clock: fixedClock });
    const result = adapter.initialize();
    harness.equal(result.status, "ready");
    harness.equal(adapter.getState().schemaVersion, 1);
  });

  harness.test("recovery backup can be explicitly exported", () => {
    const storage = new MemoryStorage({ [TEST_KEY]: "{broken" });
    const adapter = app.storage.adapter.createAdapter({ key: TEST_KEY, storage, clock: fixedClock });
    adapter.initialize();
    const backup = adapter.exportRecoveryBackup();
    harness.equal(backup.ok, true);
    harness.equal(backup.content, "{broken");
  });

  harness.test("unsupported future state exports only through raw backup", () => {
    const future = app.storage.schema.createDefaults(fixedClock);
    future.schemaVersion = 2;
    const serialized = JSON.stringify(future);
    const adapter = app.storage.adapter.createAdapter({
      key: TEST_KEY,
      storage: new MemoryStorage({ [TEST_KEY]: serialized }),
      clock: fixedClock
    });
    adapter.initialize();
    harness.equal(adapter.exportState().ok, false);
    harness.equal(adapter.exportUnsupportedState().content, serialized);
  });

  harness.test("current state export imports through a validated envelope", () => {
    const first = app.storage.adapter.createAdapter({ key: TEST_KEY, storage: new MemoryStorage(), clock: fixedClock });
    first.initialize();
    const exported = first.exportState();
    const second = app.storage.adapter.createAdapter({ key: `${TEST_KEY}:import`, storage: new MemoryStorage(), clock: fixedClock });
    second.initialize();
    harness.equal(second.importState(exported.content).ok, true);
    harness.equal(second.getState().schemaVersion, 1);
  });

  harness.test("malformed import envelope is rejected without replacing state", () => {
    const adapter = app.storage.adapter.createAdapter({ key: TEST_KEY, storage: new MemoryStorage(), clock: fixedClock });
    adapter.initialize();
    const before = adapter.getState();
    harness.equal(adapter.importState("{}").ok, false);
    harness.deepEqual(adapter.getState(), before);
  });

  harness.test("migration pipeline is idempotent for the current schema", () => {
    const current = app.storage.schema.createDefaults(fixedClock);
    const first = app.storage.adapter.migrateState(current);
    const second = app.storage.adapter.migrateState(first.value);
    harness.equal(first.ok, true);
    harness.equal(second.ok, true);
    harness.deepEqual(second.value, first.value);
  });

  harness.test("partial recovery quarantines one invalid map record", () => {
    const state = app.storage.schema.createDefaults(fixedClock);
    state.bookmarks["bookmark:topic:test:item"] = {
      id: "bookmark:topic:test:item",
      entityType: "topic",
      entityId: "topic:test:item",
      createdAt: fixedClock().toISOString(),
      updatedAt: fixedClock().toISOString()
    };
    state.bookmarks["bookmark:topic:broken"] = { id: "wrong-id" };
    const storage = new MemoryStorage({ [TEST_KEY]: JSON.stringify(state) });
    const adapter = app.storage.adapter.createAdapter({ key: TEST_KEY, storage, clock: fixedClock });
    const result = adapter.initialize();
    harness.equal(result.status, "recovered");
    harness.assert(result.state.bookmarks["bookmark:topic:test:item"]);
    harness.equal(result.state.bookmarks["bookmark:topic:broken"], undefined);
  });

  harness.test("recovery backup remains discoverable after adapter restart", () => {
    const storage = new MemoryStorage({ [TEST_KEY]: "{broken" });
    const first = app.storage.adapter.createAdapter({ key: TEST_KEY, storage, clock: fixedClock });
    first.initialize();
    const second = app.storage.adapter.createAdapter({ key: TEST_KEY, storage, clock: fixedClock });
    second.initialize();
    harness.equal(second.exportRecoveryBackup().content, "{broken");
  });

  harness.test("validated import supports deterministic merge mode", () => {
    const source = app.storage.adapter.createAdapter({ key: `${TEST_KEY}:source`, storage: new MemoryStorage(), clock: fixedClock });
    source.initialize();
    const sourceState = source.getState();
    sourceState.settings.language = "fa";
    sourceState.settings.updatedAt = "2026-07-14T12:01:00.000Z";
    source.write(sourceState);
    const target = app.storage.adapter.createAdapter({ key: `${TEST_KEY}:target`, storage: new MemoryStorage(), clock: fixedClock });
    target.initialize();
    const result = target.importState(source.exportState().content, "merge");
    harness.equal(result.ok, true, `Expected merge success, received ${result.status}: ${(result.conflicts || []).join(", ")}`);
    harness.equal(target.getState().settings.language, "fa", "Expected the newer imported settings.");
  });

  harness.test("merge rejects divergent settings with equal timestamps", () => {
    const source = app.storage.adapter.createAdapter({ key: `${TEST_KEY}:source-conflict`, storage: new MemoryStorage(), clock: fixedClock });
    source.initialize();
    const sourceState = source.getState();
    sourceState.settings.language = "fa";
    source.write(sourceState);
    const target = app.storage.adapter.createAdapter({ key: `${TEST_KEY}:target-conflict`, storage: new MemoryStorage(), clock: fixedClock });
    target.initialize();
    const result = target.importState(source.exportState().content, "merge");
    harness.equal(result.status, "import-conflict");
    harness.assert(result.conflicts.includes("settings"));
  });
})(window);
