(function registerSourceValidation(global) {
  "use strict";

  const app = global.KonkurApp;
  const base = app.validation.validators;
  const SOURCE_TYPES = Object.freeze(["exam-paper", "answer-key", "official-correction", "catalog-booklet", "verified-reference"]);
  const EXAM_FAMILIES = Object.freeze(["national-entrance", "masters-entrance"]);
  const NATIONAL_GROUPS = Object.freeze([
    "mathematics-physics", "experimental-sciences", "humanities", "arts", "foreign-languages"
  ]);
  const VERIFICATION_STATUSES = Object.freeze([
    "pending-acquisition", "acquired-unverified", "legacy-unverified", "partially-verified",
    "verified", "disputed", "unavailable"
  ]);
  const REQUIRED_FIELDS = Object.freeze([
    "id", "recordKey", "schemaVersion", "version", "year", "sourceType",
    "title", "paperSourceId", "answerKeySourceId", "correctionSourceIds",
    "publisher", "retrievalDate", "localFilename", "originalUrl", "checksum",
    "verificationStatus", "verificationNotes", "licenseOrRedistributionNote",
    "questionNumberCoverage", "knownInconsistencies", "createdAt", "updatedAt"
  ]);
  const SCOPED_FIELDS = Object.freeze(["examFamilyId", "examGroupId", "examSetCode", "paperCode"]);
  const OPTIONAL_FIELDS = Object.freeze(["publicationDate", "edition", "language", ...SCOPED_FIELDS]);
  const ALL_FIELDS = Object.freeze([...REQUIRED_FIELDS, ...OPTIONAL_FIELDS]);
  const INCONSISTENCY_FIELDS = Object.freeze([
    "questionNumber", "field", "description", "status", "relatedSourceIds", "resolution"
  ]);
  const INCONSISTENCY_REQUIRED = Object.freeze([
    "questionNumber", "field", "description", "status", "relatedSourceIds"
  ]);
  const INCONSISTENCY_STATUSES = Object.freeze(["open", "resolved", "unresolved"]);

  function isNullOrDefault(value) {
    return value === null || value === undefined;
  }

  function isNonEmptyString(value) {
    return typeof value === "string" && value.trim().length > 0;
  }

  function isHttpsUrl(value) {
    return typeof value === "string" && /^https:\/\/[^\s]+$/.test(value);
  }

  function isChecksum(value) {
    return typeof value === "string" && /^sha256:[a-f0-9]{64}$/.test(value);
  }

  function isIsoDate(value) {
    return typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(value));
  }

  function isScopeCode(value) {
    return typeof value === "string" && /^[a-z0-9][a-z0-9-]*$/.test(value);
  }

  function validateExamScope(record, path) {
    const issues = [];
    if (record.schemaVersion !== 2) {
      return issues;
    }

    SCOPED_FIELDS.forEach((field) => {
      if (!Object.prototype.hasOwnProperty.call(record, field)) {
        issues.push(base.issue("required", `${path}.${field}`, "Scoped source records require explicit exam scope."));
      }
    });

    if (record.sourceType === "verified-reference") {
      if (SCOPED_FIELDS.some((field) => record[field] !== null)) {
        issues.push(base.issue("invalid-scope", path, "Verified references must not declare an exam scope."));
      }
      return issues;
    }

    if (!EXAM_FAMILIES.includes(record.examFamilyId)) {
      issues.push(base.issue("invalid-scope", `${path}.examFamilyId`, "Source must declare a supported exam family."));
      return issues;
    }

    if (record.examFamilyId === "national-entrance") {
      if (record.examSetCode !== null) {
        issues.push(base.issue("invalid-scope", `${path}.examSetCode`, "National Entrance sources cannot declare a master's exam set."));
      }
      if (record.sourceType !== "catalog-booklet" && !NATIONAL_GROUPS.includes(record.examGroupId)) {
        issues.push(base.issue("invalid-scope", `${path}.examGroupId`, "National Entrance sources require a supported exam group."));
      }
      if (record.sourceType === "catalog-booklet" && record.examGroupId !== null && !NATIONAL_GROUPS.includes(record.examGroupId)) {
        issues.push(base.issue("invalid-scope", `${path}.examGroupId`, "Catalog booklets may target one supported National Entrance group or all groups."));
      }
    }

    if (record.examFamilyId === "masters-entrance") {
      if (record.examGroupId !== null) {
        issues.push(base.issue("invalid-scope", `${path}.examGroupId`, "Master's Entrance sources cannot declare a National Entrance group."));
      }
      if (record.sourceType !== "catalog-booklet" && !isScopeCode(record.examSetCode)) {
        issues.push(base.issue("invalid-scope", `${path}.examSetCode`, "Master's Entrance sources require an annual exam-set code."));
      }
      if (record.sourceType === "catalog-booklet" && record.examSetCode !== null && !isScopeCode(record.examSetCode)) {
        issues.push(base.issue("invalid-scope", `${path}.examSetCode`, "Catalog booklets may target one master's exam set or all sets."));
      }
    }

    if (record.paperCode !== null && !isScopeCode(record.paperCode)) {
      issues.push(base.issue("invalid-scope", `${path}.paperCode`, "Paper code must be a lowercase ASCII scope code or null."));
    }
    return issues;
  }

  function validateInconsistency(record, path) {
    const issues = [];
    if (!base.isPlainObject(record)) {
      return [base.issue("invalid-type", path, "Inconsistency record must be an object.")];
    }
    const unknown = Object.keys(record).filter((key) => !INCONSISTENCY_FIELDS.includes(key));
    unknown.forEach((key) => issues.push(base.issue("unknown-field", `${path}.${key}`, "Unknown field in inconsistency record.")));
    INCONSISTENCY_REQUIRED.forEach((field) => {
      if (!Object.prototype.hasOwnProperty.call(record, field)) {
        issues.push(base.issue("required", `${path}.${field}`, "Required field is missing."));
      }
    });
    if (typeof record.questionNumber !== "number" || record.questionNumber < 0) {
      issues.push(base.issue("invalid-type", `${path}.questionNumber`, "Question number must be a non-negative number."));
    }
    if (!isNonEmptyString(record.field) || !isNonEmptyString(record.description)) {
      issues.push(base.issue("required", `${path}.field`, "Inconsistency field and description must be non-empty strings."));
    }
    if (!INCONSISTENCY_STATUSES.includes(record.status)) {
      issues.push(base.issue("invalid-enum", `${path}.status`, "Invalid inconsistency status."));
    }
    if (!Array.isArray(record.relatedSourceIds) || !record.relatedSourceIds.every(base.isStableId)) {
      issues.push(base.issue("invalid-type", `${path}.relatedSourceIds`, "Related source IDs must be an array of stable IDs."));
    }
    if (record.resolution !== undefined && record.resolution !== null && typeof record.resolution !== "string") {
      issues.push(base.issue("invalid-type", `${path}.resolution`, "Resolution must be a string or null."));
    }
    return issues;
  }

  function validateSourceRecord(record, path) {
    const issues = [];
    if (!base.isPlainObject(record)) {
      return [base.issue("invalid-type", path, "Record must be an object.")];
    }

    const unknown = Object.keys(record).filter((key) => !ALL_FIELDS.includes(key));
    unknown.forEach((key) => issues.push(base.issue("unknown-field", `${path}.${key}`, "Unknown field.")));

    REQUIRED_FIELDS.forEach((field) => {
      if (!Object.prototype.hasOwnProperty.call(record, field)) {
        issues.push(base.issue("required", `${path}.${field}`, "Required field is missing."));
      }
    });

    if (!base.isStableId(record.id)) {
      issues.push(base.issue("invalid-id", `${path}.id`, "Invalid stable ID."));
    }
    if (record.recordKey !== `${record.id}@${record.version}`) {
      issues.push(base.issue("invalid-record-key", `${path}.recordKey`, "Record key must match ID and version."));
    }
    if (![1, 2].includes(record.schemaVersion) || !base.isPositiveInteger(record.version)) {
      issues.push(base.issue("invalid-version", path, "Source schema must be version one or two and record version must be positive."));
    }
    if (!base.isIsoTimestamp(record.createdAt) || !base.isIsoTimestamp(record.updatedAt)) {
      issues.push(base.issue("invalid-timestamp", path, "Record timestamps must be ISO UTC values."));
    }
    if (base.isIsoTimestamp(record.createdAt) && base.isIsoTimestamp(record.updatedAt)
      && Date.parse(record.updatedAt) < Date.parse(record.createdAt)) {
      issues.push(base.issue("invalid-timestamp", path, "UpdatedAt must not precede createdAt."));
    }
    if (!SOURCE_TYPES.includes(record.sourceType)) {
      issues.push(base.issue("invalid-enum", `${path}.sourceType`, "Invalid source type."));
    }
    if (!VERIFICATION_STATUSES.includes(record.verificationStatus)) {
      issues.push(base.issue("invalid-enum", `${path}.verificationStatus`, "Invalid verification status."));
    }
    if (!isNonEmptyString(record.title)) {
      issues.push(base.issue("required", `${path}.title`, "Title must be a non-empty string."));
    }
    if (!isNonEmptyString(record.publisher)) {
      issues.push(base.issue("required", `${path}.publisher`, "Publisher must be a non-empty string."));
    }
    if (!isNonEmptyString(record.licenseOrRedistributionNote)) {
      issues.push(base.issue("required", `${path}.licenseOrRedistributionNote`, "License or redistribution note is required."));
    }

    if (record.sourceType === "verified-reference") {
      if (record.year !== null) {
        issues.push(base.issue("invalid-year", `${path}.year`, "Non-exam references require a null year."));
      }
    } else {
      if (!Number.isInteger(record.year) || record.year < 1300 || record.year > 1600) {
        issues.push(base.issue("invalid-year", `${path}.year`, "Exam source year must be a supported Solar Hijri integer."));
      }
    }

    issues.push(...validateExamScope(record, path));

    if ((record.sourceType === "answer-key" || record.sourceType === "official-correction")
      && !base.isStableId(record.paperSourceId)) {
      issues.push(base.issue("provenance", `${path}.paperSourceId`, "Keys and corrections require a paper source ID."));
    }
    if (record.sourceType === "official-correction" && record.answerKeySourceId !== null
      && !base.isStableId(record.answerKeySourceId)) {
      issues.push(base.issue("provenance", `${path}.answerKeySourceId`, "Answer key source ID must be a stable ID or null."));
    }

    if (!Array.isArray(record.correctionSourceIds) || !record.correctionSourceIds.every(base.isStableId)) {
      issues.push(base.issue("invalid-type", `${path}.correctionSourceIds`, "Correction source IDs must be an array of stable IDs."));
    }
    if (!Array.isArray(record.questionNumberCoverage)
      || !record.questionNumberCoverage.every((n) => Number.isInteger(n) && n > 0)) {
      issues.push(base.issue("invalid-type", `${path}.questionNumberCoverage`, "Question number coverage must be an array of positive integers."));
    }
    if (!Array.isArray(record.knownInconsistencies)) {
      issues.push(base.issue("invalid-type", `${path}.knownInconsistencies`, "Known inconsistencies must be an array."));
    } else {
      record.knownInconsistencies.forEach((inconsistency, index) => {
        issues.push(...validateInconsistency(inconsistency, `${path}.knownInconsistencies[${index}]`));
      });
    }

    if ((record.localFilename === null) !== (record.checksum === null)) {
      issues.push(base.issue("source-pair", path, "Local filename and checksum must both be present or both be null."));
    }
    if (record.checksum !== null && !isChecksum(record.checksum)) {
      issues.push(base.issue("invalid-checksum", `${path}.checksum`, "Checksum must be sha256: followed by 64 lowercase hex characters."));
    }
    if (record.localFilename !== null && typeof record.localFilename !== "string") {
      issues.push(base.issue("invalid-type", `${path}.localFilename`, "Local filename must be a string or null."));
    }
    if (record.originalUrl !== null && !isHttpsUrl(record.originalUrl)) {
      issues.push(base.issue("invalid-url", `${path}.originalUrl`, "Original URL must use HTTPS."));
    }
    if (record.retrievalDate !== null && !isIsoDate(record.retrievalDate)) {
      issues.push(base.issue("invalid-date", `${path}.retrievalDate`, "Retrieval date must be an ISO date or null."));
    }
    if (record.verificationNotes === null
      && ["partially-verified", "disputed", "unavailable"].includes(record.verificationStatus)) {
      issues.push(base.issue("required", `${path}.verificationNotes`, "Verification notes are required for partial, disputed, or unavailable status."));
    }
    if (record.publicationDate !== undefined && record.publicationDate !== null && !isIsoDate(record.publicationDate)) {
      issues.push(base.issue("invalid-date", `${path}.publicationDate`, "Publication date must be an ISO date or null."));
    }
    if (record.edition !== undefined && record.edition !== null && typeof record.edition !== "string") {
      issues.push(base.issue("invalid-type", `${path}.edition`, "Edition must be a string or null."));
    }
    if (record.language !== undefined && record.language !== null && typeof record.language !== "string") {
      issues.push(base.issue("invalid-type", `${path}.language`, "Language must be a BCP 47 tag string or null."));
    }

    return issues;
  }

  function validateTransition(fromStatus, toStatus) {
    const validTransitions = {
      "pending-acquisition": ["acquired-unverified", "unavailable"],
      "acquired-unverified": ["legacy-unverified", "partially-verified", "verified", "disputed", "unavailable"],
      "legacy-unverified": ["partially-verified", "verified", "disputed", "unavailable"],
      "partially-verified": ["verified", "disputed", "unavailable"],
      "verified": ["disputed"],
      "disputed": ["verified", "unavailable"],
      "unavailable": ["pending-acquisition"]
    };
    if (fromStatus === toStatus) {
      return { valid: true };
    }
    const allowed = validTransitions[fromStatus] || [];
    if (!allowed.includes(toStatus)) {
      return { valid: false, message: `Invalid status transition: ${fromStatus} -> ${toStatus}` };
    }
    return { valid: true };
  }

  function validateSourceDataset(dataset, options) {
    const settings = options || {};
    const issues = [];

    if (!base.isPlainObject(dataset)) {
      return Object.freeze({ valid: false, issues: [base.issue("invalid-type", "dataset", "Dataset must be an object.")] });
    }

    issues.push(...base.unknownFields(dataset, ["datasetId", "datasetType", "schemaVersion", "version", "testOnly", "records"], "dataset"));

    if (!base.isStableId(dataset.datasetId)) {
      issues.push(base.issue("invalid-id", "dataset.datasetId", "Invalid dataset ID."));
    }
    if (dataset.datasetType !== "source-records") {
      issues.push(base.issue("unknown-dataset-type", "dataset.datasetType", "Source dataset type must be source-records."));
    }
    if (![1, 2].includes(dataset.schemaVersion) || !base.isPositiveInteger(dataset.version)) {
      issues.push(base.issue("invalid-version", "dataset", "Dataset schema must be version one or two and version must be positive."));
    }
    if (dataset.testOnly === true && !settings.allowTestFixtures) {
      issues.push(base.issue("test-boundary", "dataset.testOnly", "Test-only datasets are not allowed here."));
    }
    if (!Array.isArray(dataset.records)) {
      issues.push(base.issue("invalid-type", "dataset.records", "Records must be an array."));
    } else {
      const recordKeys = new Set();
      const ids = new Set();
      dataset.records.forEach((record, index) => {
        const path = `dataset.records[${index}]`;
        issues.push(...validateSourceRecord(record, path));
        if (record && record.schemaVersion !== dataset.schemaVersion) {
          issues.push(base.issue("schema-version-mismatch", `${path}.schemaVersion`, "Record and dataset schema versions must match."));
        }
        if (record && record.recordKey && recordKeys.has(record.recordKey)) {
          issues.push(base.issue("duplicate-record-key", `${path}.recordKey`, "Duplicate record key."));
        }
        if (record && record.recordKey) {
          recordKeys.add(record.recordKey);
        }
        if (record && record.id && ids.has(record.id)) {
          issues.push(base.issue("duplicate-id", `${path}.id`, "Duplicate source ID."));
        }
        if (record && record.id) {
          ids.add(record.id);
        }
      });
    }

    return Object.freeze({ valid: issues.length === 0, issues: Object.freeze(issues) });
  }

  app.register("validation", "sourceValidation", {
    SOURCE_TYPES,
    EXAM_FAMILIES,
    NATIONAL_GROUPS,
    VERIFICATION_STATUSES,
    REQUIRED_FIELDS,
    OPTIONAL_FIELDS,
    validateSourceRecord,
    validateSourceDataset,
    validateTransition,
    isChecksum,
    isHttpsUrl,
    isIsoDate
  });
})(window);
