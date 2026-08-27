(async function runBrowserTests(global) {
  "use strict";

  const app = global.KonkurApp;
  const report = await app.tests.harness.run(210);
  const searchDurations = Array.from({ length: 200 }, (_, index) => {
    const startedAt = global.performance.now();
    app.search.index.search(index % 2 === 0 ? "يك ١٢٣" : "tes");
    return global.performance.now() - startedAt;
  }).sort((left, right) => left - right);
  const searchP95 = searchDurations[Math.floor(searchDurations.length * 0.95)];
  const bootstrapResult = app.bootstrap.application.getResult();
  const list = document.getElementById("test-results");
  const summary = document.getElementById("test-summary");

  report.results.forEach((result) => {
    const item = document.createElement("li");
    item.className = "test-result";
    item.dataset.status = result.status;
    const title = document.createElement("strong");
    title.textContent = `${result.status === "passed" ? "قبول" : "رد"}: ${result.name}`;
    item.append(title);
    if (result.error) {
      const details = document.createElement("pre");
      details.textContent = result.error;
      item.append(details);
    }
    list.append(item);
  });

  summary.textContent = `${report.passed} قبول، ${report.failed} رد، ${report.total} مجموع`;
  summary.dataset.failed = String(report.failed);
  document.title = report.failed === 0
    ? `PASS ${report.passed}/${report.total} W${global.innerWidth} B${bootstrapResult.durationMilliseconds.toFixed(1)} S${searchP95.toFixed(2)} | آزمون‌های بنیاد`
    : `FAIL W${global.innerWidth} ${report.results.filter((result) => result.status === "failed").map((result) => `${result.name}: ${String(result.error).split("\n")[0]}`).join(" | ")}`;
  global.KonkurTestReport = report;
  global.KonkurPerformanceReport = Object.freeze({
    bootstrapMilliseconds: bootstrapResult.durationMilliseconds,
    searchP95Milliseconds: searchP95,
    searchSamples: searchDurations.length
  });
})(window);
