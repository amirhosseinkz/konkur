(function capturePreflightErrors(global) {
  "use strict";
  const errors = [];
  global.KonkurPreflightErrors = errors;
  global.addEventListener("error", (event) => {
    errors.push(event.error ? String(event.error.stack || event.error) : event.message);
  });
  global.addEventListener("unhandledrejection", (event) => {
    errors.push(String(event.reason && event.reason.stack ? event.reason.stack : event.reason));
  });
})(window);
