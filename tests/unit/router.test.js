(function defineRouterTests(global) {
  "use strict";

  const routes = global.KonkurApp.router.routes;
  const harness = global.KonkurApp.tests.harness;

  harness.test("route parser recognizes a known hash", () => {
    const result = routes.parse("#/subjects");
    harness.equal(result.found, true);
    harness.equal(result.path, "/subjects");
  });

  harness.test("route normalization removes duplicate and trailing slashes", () => {
    harness.equal(routes.normalizePath("#//SEARCH//"), "/search");
  });

  harness.test("unknown routes remain recoverable parse results", () => {
    const result = routes.parse("#/not-available");
    harness.equal(result.found, false);
    harness.equal(result.path, "/not-available");
  });
})(window);
