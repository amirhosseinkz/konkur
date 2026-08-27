(function registerDatasetRegistry(global) {
  "use strict";

  const app = global.KonkurApp;
  const validators = app.validation.validators;

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function deepFreeze(value) {
    if (!value || typeof value !== "object" || Object.isFrozen(value)) {
      return value;
    }

    Object.freeze(value);
    Object.values(value).forEach(deepFreeze);
    return value;
  }

  class DatasetRegistry {
    constructor(options) {
      this.allowTestFixtures = Boolean(options && options.allowTestFixtures);
      this.datasets = new Map();
      this.registrationErrors = [];
    }

    register(dataset) {
      const validation = validators.validateDataset(dataset, {
        allowTestFixtures: this.allowTestFixtures
      });

      if (!validation.valid) {
        const result = Object.freeze({ ok: false, code: "invalid-dataset", issues: validation.issues });
        this.registrationErrors.push(result);
        return result;
      }

      if (this.datasets.has(dataset.datasetId)) {
        const result = Object.freeze({
          ok: false,
          code: "duplicate-dataset",
          issues: Object.freeze([{ path: "dataset.datasetId", message: "Dataset already registered." }])
        });
        this.registrationErrors.push(result);
        return result;
      }

      this.datasets.set(dataset.datasetId, deepFreeze(clone(dataset)));
      return Object.freeze({ ok: true, datasetId: dataset.datasetId, issues: Object.freeze([]) });
    }

    validateAll() {
      const datasets = this.getDatasets();
      const issues = [...this.registrationErrors.flatMap((error) => error.issues)];
      const recordKeys = new Set();
      const revisionsById = new Map();

      datasets.forEach((dataset) => {
        dataset.records.forEach((record) => {
          if (recordKeys.has(record.recordKey)) {
            issues.push({
              code: "duplicate-record-key",
              path: `${dataset.datasetId}.${record.recordKey}`,
              message: "Record key is duplicated across datasets."
            });
          }
          recordKeys.add(record.recordKey);
          const revisions = revisionsById.get(record.id) || [];
          revisions.push(record);
          revisionsById.set(record.id, revisions);
        });
      });

      revisionsById.forEach((revisions, id) => {
        const versions = revisions.map((record) => record.version).sort((left, right) => left - right);
        if (new Set(versions).size !== versions.length) {
          issues.push({ code: "duplicate-version", path: id, message: "Entity revision version is duplicated." });
        }
        versions.forEach((version, index) => {
          if (version !== index + 1) {
            issues.push({ code: "version-gap", path: id, message: "Entity revisions must be contiguous from version one." });
          }
        });
      });

      const references = validators.validateReferences(
        datasets.filter((dataset) => dataset.datasetType !== "test-fixture")
      );
      issues.push(...references.issues);

      return Object.freeze({
        valid: issues.length === 0,
        datasetCount: datasets.length,
        recordCount: recordKeys.size,
        issues: Object.freeze(issues)
      });
    }

    getDatasets() {
      return Array.from(this.datasets.values()).sort((left, right) => (
        left.datasetId.localeCompare(right.datasetId)
      ));
    }

    getDataset(datasetId) {
      return this.datasets.get(datasetId) || null;
    }

    getActiveRecords() {
      const byId = new Map();
      this.getDatasets().forEach((dataset) => {
        dataset.records.forEach((record) => {
          if (dataset.datasetType === "test-fixture") {
            byId.set(record.id, { datasetType: dataset.datasetType, record });
            return;
          }
          const eligible = dataset.datasetType === "source-records"
            ? record.verificationStatus !== "unavailable"
            : record.publicationStatus === "published"
              && (!record.educationalApproval || record.educationalApproval.status === "approved"
                || record.educationalApproval.status === "not-applicable");
          const current = byId.get(record.id);
          if (eligible && (!current || record.version > current.record.version)) {
            byId.set(record.id, { datasetType: dataset.datasetType, record });
          }
        });
      });
      return Array.from(byId.values()).sort((left, right) => left.record.id.localeCompare(right.record.id));
    }

    getSearchDocuments() {
      const active = this.getActiveRecords();
      const aliasesByTarget = new Map();
      active.filter((entry) => entry.datasetType === "search-aliases").forEach((entry) => {
        entry.record.targetEntityIds.forEach((targetId) => {
          const aliases = aliasesByTarget.get(targetId) || [];
          aliases.push(entry.record.alias);
          aliasesByTarget.set(targetId, aliases);
        });
      });

      return active.flatMap((entry) => {
        const record = entry.record;
        if (entry.datasetType === "test-fixture" && record.searchDocument) {
          return [clone(record.searchDocument)];
        }
        if (["source-records", "search-aliases", "official-answers", "official-corrections", "question-options"].includes(entry.datasetType)) {
          return [];
        }
        const title = this.localizedText(record.title || record.front || record.statement || record.trap || record.text);
        if (!title) {
          return [];
        }
        return [{
          entityId: record.id,
          entityType: entry.datasetType,
          title,
          body: this.collectSearchBody(record),
          route: this.routeFor(entry.datasetType),
          aliases: aliasesByTarget.get(record.id) || []
        }];
      });
    }

    localizedText(value) {
      if (typeof value === "string") {
        return value;
      }
      if (value && typeof value === "object") {
        return value[value.primaryLocale] || value.fa || value.en || "";
      }
      return "";
    }

    collectSearchBody(record) {
      const fields = ["summary", "back", "description", "correctReason", "wrongThinking", "correctThinking", "shortcut"];
      return fields.map((field) => this.localizedText(record[field])).filter(Boolean).join(" ");
    }

    routeFor(datasetType) {
      const routeByType = {
        subjects: "#/subjects",
        topics: "#/subjects",
        lessons: "#/subjects",
        questions: "#/subjects",
        flashcards: "#/flashcards",
        "golden-rules": "#/subjects",
        "exam-traps": "#/review",
        explanations: "#/review",
        "wrong-option-analyses": "#/review",
        "pattern-clusters": "#/subjects",
        "five-minute-reviews": "#/review",
        "crash-courses": "#/subjects",
        "cheat-sheets": "#/review",
        "related-topics": "#/subjects",
        "related-questions": "#/subjects"
      };
      return routeByType[datasetType] || "#/search";
    }

    clear() {
      this.datasets.clear();
      this.registrationErrors.length = 0;
    }
  }

  const allowTestFixtures = document.documentElement.dataset.testEnvironment === "true";
  const instance = new DatasetRegistry({ allowTestFixtures });

  app.register("content", "registry", {
    register: instance.register.bind(instance),
    validateAll: instance.validateAll.bind(instance),
    getDatasets: instance.getDatasets.bind(instance),
    getDataset: instance.getDataset.bind(instance),
    getActiveRecords: instance.getActiveRecords.bind(instance),
    getSearchDocuments: instance.getSearchDocuments.bind(instance),
    createRegistry(options) {
      return new DatasetRegistry(options);
    }
  });
})(window);
