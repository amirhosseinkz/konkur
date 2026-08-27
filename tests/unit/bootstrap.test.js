(function defineBootstrapTests(global) {
  "use strict";

  const app = global.KonkurApp;
  const harness = app.tests.harness;

  harness.test("environment inspection reports required browser APIs", () => {
    const result = app.bootstrap.environment.inspect();
    harness.equal(result.supported, true);
    harness.equal(result.missing.length, 0);
  });

  harness.test("foundation modules register under one namespace", () => {
    harness.assert(app.validation.validators);
    harness.assert(app.storage.adapter);
    harness.assert(app.state.store);
    harness.assert(app.search.index);
    harness.assert(app.router.routes);
  });
})(window);
