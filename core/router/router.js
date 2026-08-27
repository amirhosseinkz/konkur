(function registerRouter(global) {
  "use strict";

  const app = global.KonkurApp;
  const routes = app.router.routes;
  let started = false;

  function dispatch() {
    const result = routes.parse(global.location.hash);
    app.state.store.setState({
      activeRoute: result.path,
      routeStatus: result.found ? "ready" : "not-found"
    });
    app.ui.shell.renderRoute(result);
    return result;
  }

  function navigate(path) {
    const normalized = routes.normalizePath(path);
    const hash = `#${normalized}`;
    if (global.location.hash === hash) {
      return dispatch();
    }
    global.location.hash = normalized;
    return null;
  }

  function start() {
    if (started) {
      return dispatch();
    }
    global.addEventListener("hashchange", dispatch);
    started = true;
    if (!global.location.hash || global.location.hash === "#" || global.location.hash === "#/") {
      global.location.replace(routes.getDefaultHash());
      return null;
    }
    return dispatch();
  }

  function stop() {
    if (started) {
      global.removeEventListener("hashchange", dispatch);
      started = false;
    }
  }

  app.register("router", "router", { start, stop, navigate, refresh: dispatch });
})(window);
