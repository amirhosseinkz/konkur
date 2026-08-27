(function registerSourceInventory(global) {
  "use strict";

  const app = global.KonkurApp;
  const timestamp = "2026-07-14T12:00:00.000Z";

  function createPlaceholderSource(year, sourceType) {
    const typeSlug = sourceType === "exam-paper" ? "paper"
      : sourceType === "answer-key" ? "key"
      : sourceType === "official-correction" ? "correction"
      : "reference";
    const id = `source:${year}:${typeSlug}:placeholder`;

    return {
      id,
      recordKey: `${id}@1`,
      schemaVersion: 1,
      version: 1,
      year: sourceType === "verified-reference" ? null : year,
      sourceType,
      title: `Computer Engineering MSc ${year} ${sourceType} (pending acquisition)`,
      paperSourceId: sourceType === "exam-paper" ? null
        : `source:${year}:paper:placeholder`,
      answerKeySourceId: sourceType === "official-correction"
        ? `source:${year}:key:placeholder`
        : null,
      correctionSourceIds: [],
      publisher: "Unknown (pending acquisition)",
      retrievalDate: null,
      localFilename: null,
      originalUrl: null,
      checksum: null,
      verificationStatus: "pending-acquisition",
      verificationNotes: null,
      licenseOrRedistributionNote: "Unknown (pending acquisition)",
      questionNumberCoverage: [],
      knownInconsistencies: [],
      createdAt: timestamp,
      updatedAt: timestamp
    };
  }

  function buildInventory() {
    const records = [];
    for (let year = 1395; year <= 1404; year += 1) {
      records.push(createPlaceholderSource(year, "exam-paper"));
      records.push(createPlaceholderSource(year, "answer-key"));
    }
    return Object.freeze(records);
  }

  const inventory = Object.freeze({
    datasetId: "inventory:ce-msc-sources-1395-1404",
    datasetType: "source-records",
    schemaVersion: 1,
    version: 1,
    testOnly: false,
    records: buildInventory()
  });

  let registration;
  try {
    registration = app.content.sourceRegistry.register(inventory);
  } catch (error) {
    registration = Object.freeze({ ok: false, code: "registration-error", error: String(error) });
  }
  app.register("content", "sourceInventory", {
    inventory,
    registration,
    createPlaceholderSource
  });
})(window);