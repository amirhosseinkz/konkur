(function registerAppState(global) {
  "use strict";

  const app = global.KonkurApp;
  const subscribers = new Set();
  const initialState = Object.freeze({
    activeRoute: "/dashboard",
    routeStatus: "idle",
    sidebarOpen: false,
    storageStatus: "uninitialized",
    userSettings: null
  });
  let state = initialState;

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function snapshot() {
    return Object.freeze(clone(state));
  }

  function notify() {
    const current = snapshot();
    subscribers.forEach((subscriber) => {
      try {
        subscriber(current);
      } catch (error) {
        global.setTimeout(() => { throw error; }, 0);
      }
    });
  }

  function setState(patch) {
    const nextPatch = typeof patch === "function" ? patch(snapshot()) : patch;
    if (!nextPatch || typeof nextPatch !== "object") {
      throw new TypeError("State patch must be an object.");
    }
    state = Object.freeze({ ...state, ...clone(nextPatch) });
    notify();
    return snapshot();
  }

  function initialize(storageSnapshot) {
    const userSettings = storageSnapshot && storageSnapshot.state
      ? storageSnapshot.state.settings
      : null;
    state = Object.freeze({
      ...initialState,
      storageStatus: storageSnapshot ? storageSnapshot.status : "unavailable",
      userSettings: userSettings ? clone(userSettings) : null
    });
    notify();
    return snapshot();
  }

  function subscribe(subscriber) {
    if (typeof subscriber !== "function") {
      throw new TypeError("Subscriber must be a function.");
    }
    subscribers.add(subscriber);
    return () => subscribers.delete(subscriber);
  }

  function updateSettings(patch) {
    const current = app.storage.adapter.getState();
    const settings = {
      ...current.settings,
      ...clone(patch),
      updatedAt: new Date().toISOString()
    };
    const result = app.storage.adapter.updateSection("settings", settings);
    if (result.ok) {
      setState({ userSettings: settings, storageStatus: result.status });
    } else {
      setState({ storageStatus: result.status });
    }
    return result;
  }

  function reset() {
    state = initialState;
    notify();
    return snapshot();
  }

  app.register("state", "store", {
    initialize,
    getState: snapshot,
    setState,
    subscribe,
    updateSettings,
    reset
  });
})(window);
