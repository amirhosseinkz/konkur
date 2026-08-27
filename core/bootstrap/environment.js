(function registerEnvironment(global) {
  "use strict";

  const app = global.KonkurApp;
  const requiredApis = [
    ["document.querySelector", () => typeof document.querySelector === "function"],
    ["window.addEventListener", () => typeof global.addEventListener === "function"],
    ["window.requestAnimationFrame", () => typeof global.requestAnimationFrame === "function"],
    ["window.matchMedia", () => typeof global.matchMedia === "function"],
    ["document.createElement", () => typeof document.createElement === "function"],
    ["Element.closest", () => typeof global.Element === "function" && typeof global.Element.prototype.closest === "function"],
    ["Element.replaceChildren", () => typeof global.Element === "function" && typeof global.Element.prototype.replaceChildren === "function"],
    ["HTMLElement.inert", () => typeof global.HTMLElement === "function" && "inert" in global.HTMLElement.prototype],
    ["String.normalize", () => typeof String.prototype.normalize === "function"],
    ["FileReader", () => typeof global.FileReader === "function"],
    ["Blob", () => typeof global.Blob === "function"],
    ["JSON", () => typeof global.JSON === "object"],
    ["Object.freeze", () => typeof Object.freeze === "function"],
    ["Array.isArray", () => typeof Array.isArray === "function"]
  ];

  function inspect() {
    const missing = requiredApis
      .filter((entry) => !entry[1]())
      .map((entry) => entry[0]);

    return Object.freeze({
      supported: missing.length === 0,
      missing,
      protocol: global.location.protocol,
      directFile: global.location.protocol === "file:",
      fileReaderAvailable: typeof global.FileReader === "function",
      blobAvailable: typeof global.Blob === "function",
      urlApiAvailable: typeof global.URL === "function"
    });
  }

  app.register("bootstrap", "environment", { inspect });
})(window);
