(function registerRouteDefinitions(global) {
  "use strict";

  const app = global.KonkurApp;
  const STATIC_ROUTES = Object.freeze([
    { path: "/dashboard", feature: "dashboard", label: "داشبورد", title: "داشبورد" },
    { path: "/subjects", feature: "subjects", label: "درس‌ها", title: "درس‌ها" },
    { path: "/subjects/english", feature: "englishSubject", label: "زبان", title: "زبان انگلیسی" },
    { path: "/subjects/english/review", feature: "englishReview", label: "مرور زبان", title: "مرور زبان" },
    { path: "/subjects/english/golden-rules", feature: "englishGoldenRules", label: "قانون‌های زبان", title: "قانون‌های طلایی زبان" },
    { path: "/subjects/english/flashcards", feature: "englishFlashcards", label: "فلش‌کارت زبان", title: "فلش‌کارت‌های زبان" },
    { path: "/subjects/english/traps", feature: "englishTraps", label: "دام‌های زبان", title: "دام‌های زبان" },
    { path: "/subjects/network", feature: "networkSubject", label: "شبکه", title: "شبکه‌های کامپیوتری" },
    { path: "/subjects/network/review", feature: "networkReview", label: "مرور شبکه", title: "مرور شبکه" },
    { path: "/subjects/network/golden-rules", feature: "networkGoldenRules", label: "قوانین شبکه", title: "قوانین طلایی شبکه" },
    { path: "/subjects/network/flashcards", feature: "networkFlashcards", label: "فلش‌کارت شبکه", title: "فلش‌کارت‌های شبکه" },
    { path: "/subjects/network/traps", feature: "networkTraps", label: "دام‌های شبکه", title: "دام‌های شبکه" },
    { path: "/subjects/database", feature: "databaseSubject", label: "پایگاه داده", title: "پایگاه داده" },
    { path: "/subjects/database/review", feature: "databaseReview", label: "مرور پایگاه داده", title: "مرور پایگاه داده" },
    { path: "/subjects/database/golden-rules", feature: "databaseGoldenRules", label: "قوانین پایگاه داده", title: "قوانین طلایی پایگاه داده" },
    { path: "/subjects/database/flashcards", feature: "databaseFlashcards", label: "فلش‌کارت پایگاه داده", title: "فلش‌کارت‌های پایگاه داده" },
    { path: "/subjects/database/traps", feature: "databaseTraps", label: "دام‌های پایگاه داده", title: "دام‌های پایگاه داده" },
    { path: "/subjects/operating-system", feature: "operatingSystemSubject", label: "سیستم‌عامل", title: "سیستم‌عامل" },
    { path: "/subjects/operating-system/review", feature: "operatingSystemReview", label: "مرور سیستم‌عامل", title: "مرور سیستم‌عامل" },
    { path: "/subjects/operating-system/golden-rules", feature: "operatingSystemGoldenRules", label: "قوانین سیستم‌عامل", title: "قوانین طلایی سیستم‌عامل" },
    { path: "/subjects/operating-system/flashcards", feature: "operatingSystemFlashcards", label: "فلش‌کارت سیستم‌عامل", title: "فلش‌کارت‌های سیستم‌عامل" },
    { path: "/subjects/operating-system/traps", feature: "operatingSystemTraps", label: "دام‌های سیستم‌عامل", title: "دام‌های سیستم‌عامل" },
    { path: "/subjects/data-structures", feature: "dataStructuresSubject", label: "ساختمان داده", title: "ساختمان داده و الگوریتم" },
    { path: "/subjects/data-structures/review", feature: "dataStructuresReview", label: "مرور ساختمان داده", title: "مرور ساختمان داده" },
    { path: "/subjects/data-structures/golden-rules", feature: "dataStructuresGoldenRules", label: "قوانین ساختمان داده", title: "قوانین طلایی ساختمان داده" },
    { path: "/subjects/data-structures/flashcards", feature: "dataStructuresFlashcards", label: "فلش‌کارت ساختمان داده", title: "فلش‌کارت‌های ساختمان داده" },
    { path: "/subjects/data-structures/traps", feature: "dataStructuresTraps", label: "دام‌های ساختمان داده", title: "دام‌های ساختمان داده" },
    { path: "/last-night", feature: "lastNight", label: "شب آخر", title: "مرور شب آخر" },
    { path: "/exams", feature: "exams", label: "آزمون‌ها", title: "آزمون‌ها" },
    { path: "/search", feature: "searchPage", label: "جست‌وجو", title: "جست‌وجو" },
    { path: "/flashcards", feature: "flashcards", label: "فلش‌کارت‌ها", title: "فلش‌کارت‌ها" },
    { path: "/bookmarks", feature: "bookmarks", label: "نشان‌شده‌ها", title: "نشان‌شده‌ها" },
    { path: "/review", feature: "review", label: "مرور", title: "مرور" },
    { path: "/statistics", feature: "statistics", label: "آمار", title: "آمار" },
    { path: "/settings", feature: "settings", label: "تنظیمات", title: "تنظیمات" },
    { path: "/settings/sources", feature: "sourceStatus", label: "وضعیت منابع", title: "وضعیت منابع رسمی" }
  ]);

  const PATTERN_ROUTES = Object.freeze([
    { pattern: /^\/exams\/(\d+)$/, feature: "exams", title: "آزمون" },
    { pattern: /^\/exams\/(\d+)\/practice\/([^/]+)$/, feature: "practiceMode", title: "تمرین" },
    { pattern: /^\/exams\/(\d+)\/exam\/([^/]+)$/, feature: "examMode", title: "آزمون" },
    { pattern: /^\/exams\/(\d+)\/review\/(.+)$/, feature: "examResults", title: "مرور آزمون" },
    { pattern: /^\/exams\/(\d+)\/practice$/, feature: "practiceMode", title: "تمرین" },
    { pattern: /^\/exams\/(\d+)\/exam$/, feature: "examMode", title: "آزمون" },
    { pattern: /^\/exams\/(\d+)\/practice\/results$/, feature: "examResults", title: "نتایج تمرین" },
    { pattern: /^\/exams\/(\d+)\/exam\/results$/, feature: "examResults", title: "نتایج آزمون" },
    { pattern: /^\/exams\/(\d+)\/practice\/results\/(.+)$/, feature: "examResults", title: "نتایج تمرین" },
    { pattern: /^\/exams\/(\d+)\/exam\/results\/(.+)$/, feature: "examResults", title: "نتایج آزمون" }
  ]);

  function normalizePath(value) {
    const raw = typeof value === "string" ? value.trim() : "";
    const withoutHash = raw.replace(/^#/, "");
    const withoutQuery = withoutHash.split("?")[0].split("&")[0];
    const withSlash = withoutQuery.startsWith("/") ? withoutQuery : `/${withoutQuery}`;
    const compact = withSlash.replace(/\/{2,}/g, "/").replace(/\/$/, "");
    return compact === "" ? "/" : compact.toLowerCase();
  }

  function parse(hash) {
    const path = normalizePath(hash);
    const staticRoute = STATIC_ROUTES.find((candidate) => candidate.path === path) || null;
    if (staticRoute) {
      return Object.freeze({ path, route: staticRoute, found: true, params: {} });
    }
    for (const candidate of PATTERN_ROUTES) {
      const match = path.match(candidate.pattern);
      if (match) {
        const params = {};
        if (match[1]) params.year = parseInt(match[1], 10);
        if (match[2] && path.includes("/review/")) params.attemptId = decodeURIComponent(match[2]);
        else if (match[2]) params.sectionId = decodeURIComponent(match[2]);
        if (path.includes("/practice/results")) {
          params.mode = "practice";
        } else if (path.includes("/exam/results")) {
          params.mode = "exam";
        } else if (path.includes("/practice")) {
          params.mode = "practice";
        } else if (path.includes("/exam")) {
          params.mode = "exam";
        }
        return Object.freeze({ path, route: candidate, found: true, params });
      }
    }
    return Object.freeze({ path, route: null, found: false, params: {} });
  }

  function getDefaultHash() {
    return "#/dashboard";
  }

  function getAllRoutePaths() {
    return STATIC_ROUTES.map((r) => r.path);
  }

  app.register("router", "routes", { STATIC_ROUTES, PATTERN_ROUTES, normalizePath, parse, getDefaultHash, getAllRoutePaths });
})(window);
