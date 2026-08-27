(function defineRC1CInformationArchitectureTests(global) {
  "use strict";
  const app = global.KonkurApp;
  const harness = app.tests.harness;
  const dom = app.ui.dom;

  function nextFrame() { return new Promise((resolve) => global.setTimeout(resolve, 60)); }

  harness.test("desktop navigation has 9 items in approved order", () => {
    const navLinks = document.querySelectorAll("nav.primary-nav a[data-route]");
    harness.equal(navLinks.length, 9, "expected 9 nav items");
    harness.equal(navLinks[0].textContent, "داشبورد");
    harness.equal(navLinks[1].textContent, "آزمون‌ها");
    harness.equal(navLinks[2].textContent, "مطالعه");
    harness.equal(navLinks[3].textContent, "مرور");
    harness.equal(navLinks[4].textContent, "جست‌وجو");
    harness.equal(navLinks[5].textContent, "نشان‌شده‌ها");
    harness.equal(navLinks[6].textContent, "شب آخر");
    harness.equal(navLinks[7].textContent, "آمار");
    harness.equal(navLinks[8].textContent, "تنظیمات");
  });

  harness.test("subjects are not first-level navigation items", () => {
    const navLinks = Array.from(document.querySelectorAll("nav.primary-nav a[data-route]"));
    harness.assert(!navLinks.some((a) => a.dataset.route.startsWith("/subjects/")), "subjects should not be top-level");
  });

  harness.test("global flashcards is absent from primary navigation", () => {
    const navLinks = Array.from(document.querySelectorAll("nav.primary-nav a[data-route]"));
    harness.assert(!navLinks.some((a) => a.dataset.route === "/flashcards"), "flashcards should not be in primary nav");
  });

  harness.test("mobile navigation contains Dashboard, Exams, Study, Review, Search", () => {
    const mobileLinks = Array.from(document.querySelectorAll("nav.mobile-nav a[data-route]"));
    const routes = mobileLinks.map((a) => a.dataset.route);
    harness.assert(routes.includes("/dashboard"), "missing dashboard in mobile");
    harness.assert(routes.includes("/exams"), "missing exams in mobile");
    harness.assert(routes.includes("/subjects"), "missing subjects in mobile");
    harness.assert(routes.includes("/review"), "missing review in mobile");
    harness.assert(routes.includes("/search"), "missing search in mobile");
  });

  harness.test("dashboard has one dominant primary action", () => {
    const page = app.features.dashboard.render();
    const primaryButtons = page.querySelectorAll(".button-primary");
    harness.equal(primaryButtons.length, 1, "expected exactly 1 primary action on dashboard");
  });

  harness.test("study page lists all five subjects", () => {
    const page = app.features.subjects.render();
    harness.assert(page.textContent.includes("زبان انگلیسی"), "missing English subject");
    harness.assert(page.textContent.includes("شبکه‌های کامپیوتری"), "missing Network subject");
    harness.assert(page.textContent.includes("پایگاه داده"), "missing Database subject");
    harness.assert(page.textContent.includes("سیستم‌عامل"), "missing OS subject");
    harness.assert(page.textContent.includes("ساختمان داده"), "missing Data Structures subject");
  });

  harness.test("English previous exams are collapsed by default", () => {
    const page = app.features.englishSubject.render();
    const details = Array.from(page.querySelectorAll("details"));
    const examDetails = details.find((d) => d.querySelector("summary")?.textContent?.includes("آزمون‌های سال‌های قبل"));
    harness.assert(examDetails, "missing previous exams details section");
    harness.assert(!examDetails.hasAttribute("open"), "previous exams should be collapsed by default");
  });

  harness.test("subject lessons are collapsed by default", () => {
    const page = app.features.databaseSubject.render();
    const details = Array.from(page.querySelectorAll("details"));
    const lessonDetails = details.find((d) => d.querySelector("summary")?.textContent?.includes("درس‌ها"));
    harness.assert(lessonDetails, "missing lessons details section");
    harness.assert(!lessonDetails.hasAttribute("open"), "lessons should be collapsed by default");
  });

  harness.test("exams page displays year selector not ten expanded cards", () => {
    const page = app.features.exams.render({});
    harness.assert(page.querySelector(".exam-year-selector"), "missing year selector");
    const yearLinks = page.querySelectorAll(".exam-year-selector a");
    harness.equal(yearLinks.length, 10, "expected 10 year links in selector");
  });

  harness.test("year selection updates displayed detail", () => {
    const page = app.features.exams.render({ year: 1404 });
    harness.assert(page.textContent.includes("1404"), "selected year detail not shown");
    const page2 = app.features.exams.render({ year: 1395 });
    harness.assert(page2.textContent.includes("1395"), "year 1395 detail not shown");
  });

  harness.test("last night subject packs are collapsed by default", () => {
    const page = app.features.lastNight.render();
    const details = Array.from(page.querySelectorAll("details"));
    const subjectDetails = details.filter((d) => d.querySelector("summary"));
    harness.assert(subjectDetails.length > 0, "missing subject details in last night");
    const openByDefault = subjectDetails.filter((d) => d.hasAttribute("open"));
    harness.equal(openByDefault.length, 0, "subject packs should be collapsed by default");
  });
})(window);