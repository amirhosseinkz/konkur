(function registerFoundationFixture(global) {
  "use strict";

  const app = global.KonkurApp;
  const fixture = Object.freeze({
    datasetId: "fixture:foundation-search",
    datasetType: "test-fixture",
    schemaVersion: 1,
    version: 1,
    testOnly: true,
    records: Object.freeze([
      Object.freeze({
        id: "test:record:persian-normalization",
        recordKey: "test:record:persian-normalization@1",
        schemaVersion: 1,
        version: 1,
        testOnly: true,
        searchDocument: Object.freeze({
          entityId: "test:record:persian-normalization",
          entityType: "test-fixture",
          title: "ی ک ۱۲۳",
          body: "TEST fixture only",
          route: "#/search",
          aliases: Object.freeze(["يك ١٢٣"])
        })
      })
    ])
  });

  const registration = app.content.registry.register(fixture);
  app.register("tests", "foundationFixture", { fixture, registration });
})(window);
