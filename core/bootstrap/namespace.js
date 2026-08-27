(function initializeNamespace(global) {
  "use strict";

  if (global.KonkurApp) {
    return;
  }

  const branches = [
    "bootstrap",
    "validation",
    "content",
    "storage",
    "state",
    "search",
    "router",
    "ui",
    "features",
    "tests"
  ];

  const namespace = {
    version: "0.1.0",
    readiness: "loading",
    startedAt: global.performance && typeof global.performance.now === "function"
      ? global.performance.now()
      : Date.now(),
    register(branch, name, api) {
      if (!branches.includes(branch) || !name || !api) {
        throw new Error("Invalid namespace registration.");
      }

      if (Object.prototype.hasOwnProperty.call(namespace[branch], name)) {
        throw new Error(`Module already registered: ${branch}.${name}`);
      }

      Object.defineProperty(namespace[branch], name, {
        value: Object.freeze(api),
        enumerable: true,
        configurable: false,
        writable: false
      });

      return namespace[branch][name];
    }
  };

  branches.forEach((branch) => {
    namespace[branch] = Object.create(null);
  });

  Object.defineProperty(global, "KonkurApp", {
    value: namespace,
    enumerable: true,
    configurable: false,
    writable: false
  });
})(window);
