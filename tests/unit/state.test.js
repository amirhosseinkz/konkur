(function defineStateTests(global) {
  "use strict";

  const app = global.KonkurApp;
  const harness = app.tests.harness;

  harness.test("state subscriptions receive immutable-style updates", () => {
    const defaults = app.storage.schema.createDefaults(() => new Date("2026-07-14T12:00:00.000Z"));
    app.state.store.initialize({ status: "ready", state: defaults });
    let observed = null;
    const unsubscribe = app.state.store.subscribe((state) => {
      observed = state.activeRoute;
    });
    app.state.store.setState({ activeRoute: "/subjects" });
    unsubscribe();
    harness.equal(observed, "/subjects");
    harness.equal(app.state.store.getState().activeRoute, "/subjects");
  });

  harness.test("unsubscribed state listeners no longer run", () => {
    let calls = 0;
    const unsubscribe = app.state.store.subscribe(() => {
      calls += 1;
    });
    unsubscribe();
    app.state.store.setState({ routeStatus: "ready" });
    harness.equal(calls, 0);
  });
})(window);
