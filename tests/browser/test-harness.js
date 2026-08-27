(function registerTestHarness(global) {
  "use strict";

  const app = global.KonkurApp;
  const tests = [];
  const infrastructureErrors = global.KonkurPreflightErrors || [];

  global.addEventListener("error", (event) => {
    infrastructureErrors.push(event.error ? String(event.error.stack || event.error) : event.message);
  });
  global.addEventListener("unhandledrejection", (event) => {
    infrastructureErrors.push(String(event.reason && event.reason.stack ? event.reason.stack : event.reason));
  });

  function test(name, callback) {
    tests.push({ name, callback });
  }

  function assert(condition, message) {
    if (!condition) {
      throw new Error(message || "Assertion failed.");
    }
  }

  function equal(actual, expected, message) {
    if (!Object.is(actual, expected)) {
      throw new Error(message || `Expected ${String(expected)}, received ${String(actual)}.`);
    }
  }

  function deepEqual(actual, expected, message) {
    const actualValue = JSON.stringify(actual);
    const expectedValue = JSON.stringify(expected);
    if (actualValue !== expectedValue) {
      throw new Error(message || `Expected ${expectedValue}, received ${actualValue}.`);
    }
  }

  async function run(expectedCount) {
    const results = [];
    if (tests.length !== expectedCount) {
      results.push({ name: "test manifest count", status: "failed", error: `Expected ${expectedCount} tests, registered ${tests.length}.` });
    }
    for (const entry of tests) {
      document.title = `RUN | ${entry.name}`;
      try {
        await entry.callback();
        results.push({ name: entry.name, status: "passed", error: null });
      } catch (error) {
        results.push({
          name: entry.name,
          status: "failed",
          error: error && error.message && error.stack ? `${error.message}\n${error.stack}` : error && error.stack ? error.stack : String(error)
        });
      }
    }
    infrastructureErrors.forEach((error, index) => {
      results.push({ name: `browser infrastructure error ${index + 1}`, status: "failed", error });
    });

    return Object.freeze({
      total: tests.length,
      passed: results.filter((result) => result.status === "passed").length,
      failed: results.filter((result) => result.status === "failed").length,
      results: Object.freeze(results)
    });
  }

  app.register("tests", "harness", { test, assert, equal, deepEqual, run });
})(window);
