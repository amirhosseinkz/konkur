(function registerSourceRegistry(global) {
  "use strict";

  const app = global.KonkurApp;
  const sourceValidation = app.validation.sourceValidation;

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

  function sameExamScope(left, right) {
    return ["examFamilyId", "examGroupId", "examSetCode"].every((field) => left[field] === right[field]);
  }

  class SourceRegistry {
    constructor(options) {
      this.allowTestFixtures = Boolean(options && options.allowTestFixtures);
      this.datasets = new Map();
      this.registrationErrors = [];
    }

    register(dataset) {
      const validation = sourceValidation.validateSourceDataset(dataset, {
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
          issues: Object.freeze([{ path: "dataset.datasetId", message: "Source dataset already registered." }])
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
          issues.push({ code: "duplicate-version", path: id, message: "Source revision version is duplicated." });
        }
        versions.forEach((version, index) => {
          if (version !== index + 1) {
            issues.push({ code: "version-gap", path: id, message: "Source revisions must be contiguous from version one." });
          }
        });
      });

      const crossRefs = this.validateCrossReferences(datasets);
      issues.push(...crossRefs);

      return Object.freeze({
        valid: issues.length === 0,
        datasetCount: datasets.length,
        recordCount: recordKeys.size,
        issues: Object.freeze(issues)
      });
    }

    validateCrossReferences(datasets) {
      const issues = [];
      const sourcesById = new Map();

      datasets.forEach((dataset) => {
        dataset.records.forEach((record) => {
          sourcesById.set(record.id, { record, datasetId: dataset.datasetId });
        });
      });

      sourcesById.forEach(({ record }, id) => {
        if (record.paperSourceId) {
          const paper = sourcesById.get(record.paperSourceId);
          if (!paper) {
            issues.push({ code: "dangling-reference", path: `${id}.paperSourceId`, message: `Paper source not found: ${record.paperSourceId}` });
          } else if (paper.record.sourceType !== "exam-paper") {
            issues.push({ code: "invalid-provenance", path: `${id}.paperSourceId`, message: "Paper source must be an exam-paper." });
          } else if (record.schemaVersion === 2 && paper.record.schemaVersion === 2 && !sameExamScope(record, paper.record)) {
            issues.push({ code: "scope-mismatch", path: `${id}.paperSourceId`, message: "Paper source must belong to the same exam family and group or set." });
          }
        }
        if (record.answerKeySourceId) {
          const key = sourcesById.get(record.answerKeySourceId);
          if (!key) {
            issues.push({ code: "dangling-reference", path: `${id}.answerKeySourceId`, message: `Answer key source not found: ${record.answerKeySourceId}` });
          } else if (key.record.sourceType !== "answer-key") {
            issues.push({ code: "invalid-provenance", path: `${id}.answerKeySourceId`, message: "Answer key source must be an answer-key." });
          }
        }
        record.correctionSourceIds.forEach((corrId) => {
          const correction = sourcesById.get(corrId);
          if (!correction) {
            issues.push({ code: "dangling-reference", path: `${id}.correctionSourceIds`, message: `Correction source not found: ${corrId}` });
          } else if (correction.record.sourceType !== "official-correction") {
            issues.push({ code: "invalid-provenance", path: `${id}.correctionSourceIds`, message: "Correction source must be an official-correction." });
          }
        });
        if (record.checksum !== null && record.localFilename === null) {
          issues.push({ code: "source-pair", path: id, message: "Checksum requires a local filename." });
        }
      });

      return issues;
    }

    getDatasets() {
      return Array.from(this.datasets.values()).sort((left, right) => (
        left.datasetId.localeCompare(right.datasetId)
      ));
    }

    getActiveRecords() {
      const byId = new Map();
      this.getDatasets().forEach((dataset) => {
        dataset.records.forEach((record) => {
          if (record.verificationStatus === "unavailable") {
            return;
          }
          const current = byId.get(record.id);
          if (!current || record.version > current.version) {
            byId.set(record.id, record);
          }
        });
      });
      return Array.from(byId.values()).sort((left, right) => left.id.localeCompare(right.id));
    }

    getSourcesByYear(year) {
      return this.getActiveRecords().filter((record) => record.year === year);
    }

    getSourcesByScope(scope) {
      const criteria = scope || {};
      return this.getActiveRecords().filter((record) => Object.keys(criteria).every((field) => record[field] === criteria[field]));
    }

    getSourceById(id) {
      return this.getActiveRecords().find((record) => record.id === id) || null;
    }

    getInventorySummary() {
      const years = [];
      for (let year = 1395; year <= 1404; year += 1) {
        const sources = this.getSourcesByYear(year);
        const paper = sources.find((s) => s.sourceType === "exam-paper") || null;
        const answerKey = sources.find((s) => s.sourceType === "answer-key") || null;
        const corrections = sources.filter((s) => s.sourceType === "official-correction");
        years.push({
          year,
          paperStatus: paper ? paper.verificationStatus : "pending-acquisition",
          keyStatus: answerKey ? answerKey.verificationStatus : "pending-acquisition",
          correctionCount: corrections.length,
          correctionStatus: corrections.length > 0
            ? corrections.map((c) => c.verificationStatus)
            : ["pending-acquisition"],
          localAvailable: Boolean(paper && paper.localFilename),
          questionCount: paper && paper.questionNumberCoverage.length > 0
            ? paper.questionNumberCoverage.length
            : null,
          notes: paper && paper.verificationNotes ? paper.verificationNotes : null
        });
      }
      return Object.freeze(years);
    }

    clear() {
      this.datasets.clear();
      this.registrationErrors.length = 0;
    }
  }

  const allowTestFixtures = document.documentElement.dataset.testEnvironment === "true";
  const instance = new SourceRegistry({ allowTestFixtures });

  app.register("content", "sourceRegistry", {
    register: instance.register.bind(instance),
    validateAll: instance.validateAll.bind(instance),
    getDatasets: instance.getDatasets.bind(instance),
    getActiveRecords: instance.getActiveRecords.bind(instance),
    getSourcesByYear: instance.getSourcesByYear.bind(instance),
    getSourceById: instance.getSourceById.bind(instance),
    getInventorySummary: instance.getInventorySummary.bind(instance),
    createRegistry(options) {
      return new SourceRegistry(options);
    }
  });
})(window);
