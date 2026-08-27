(function defineSearchTests(global) {
  "use strict";

  const app = global.KonkurApp;
  const harness = app.tests.harness;
  const normalizer = app.search.normalizer;

  harness.test("search normalization unifies Arabic and Persian Yeh and Kaf", () => {
    harness.equal(normalizer.normalize("ي ك"), "ی ک");
  });

  harness.test("search normalization removes Arabic diacritics", () => {
    harness.equal(normalizer.normalize("عَرَبِيّ"), "عربی");
  });

  harness.test("search normalization unifies Persian and Arabic digits", () => {
    harness.equal(normalizer.normalize("۱۲۳ ١٢٣"), "123 123");
  });

  harness.test("search normalization lowercases English", () => {
    harness.equal(normalizer.normalize("TCP Test"), "tcp test");
  });

  harness.test("tokenization returns deterministic unique tokens", () => {
    harness.deepEqual(normalizer.tokenize("test test یک"), ["test", "یک"]);
  });

  harness.test("ordinary punctuation separates words while technical tokens survive", () => {
    harness.equal(normalizer.normalize("alpha.beta tcp/ip c++ b+ 1.2"), "alpha beta tcp/ip c++ b+ 1.2");
  });

  harness.test("fixture search index supports exact alias and prefix matching", () => {
    const index = app.search.index.createIndex();
    index.rebuild(app.content.registry.getSearchDocuments());
    harness.equal(index.search("يك ١٢٣")[0].entityId, "test:record:persian-normalization");
    harness.equal(index.search("tes")[0].matchType, "prefix-final-token");
  });
})(window);
