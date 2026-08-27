(function registerSearchIndex(global) {
  "use strict";

  const app = global.KonkurApp;
  const normalizer = app.search.normalizer;
  const MAX_RESULTS = 100;

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  class SearchIndex {
    constructor() {
      this.records = [];
      this.version = 0;
    }

    rebuild(documents) {
      if (!Array.isArray(documents)) {
        throw new TypeError("Search documents must be an array.");
      }

      const nextRecords = documents.map((document) => {
        const title = normalizer.normalize(document.title);
        const body = normalizer.normalize(document.body || "");
        const aliases = (document.aliases || []).map(normalizer.normalize).filter(Boolean);
        return Object.freeze({
          ...clone(document),
          normalizedTitle: title,
          normalizedBody: body,
          normalizedAliases: aliases,
          normalizedEntityId: normalizer.normalize(document.entityId),
          titleTokens: normalizer.tokenize(title),
          bodyTokens: normalizer.tokenize(body)
        });
      }).sort((left, right) => left.entityId.localeCompare(right.entityId));

      this.records = Object.freeze(nextRecords);
      this.version += 1;
      return Object.freeze({ count: this.records.length, version: this.version });
    }

    search(query) {
      const normalizedQuery = normalizer.normalize(query);
      const queryTokens = normalizer.tokenize(normalizedQuery);
      if (!normalizedQuery) {
        return Object.freeze([]);
      }

      const results = this.records.map((record) => {
        let score = 0;
        let matchType = "none";
        if (record.normalizedEntityId === normalizedQuery) {
          score = 200;
          matchType = "exact-id";
        } else if (record.normalizedTitle === normalizedQuery) {
          score = 180;
          matchType = "exact-title";
        } else if (record.normalizedAliases.includes(normalizedQuery)) {
          score = 170;
          matchType = "exact-alias";
        } else if (normalizedQuery.length < 2) {
          return null;
        } else if (queryTokens.length > 1 && record.normalizedTitle.includes(normalizedQuery)) {
          score = 140;
          matchType = "title-phrase";
        } else {
          const exactTitleCount = queryTokens.filter((token) => record.titleTokens.includes(token)).length;
          const exactBodyCount = queryTokens.filter((token) => record.bodyTokens.includes(token)).length;
          const finalToken = queryTokens[queryTokens.length - 1];
          const prefixMatch = finalToken.length >= 2 && (
            record.titleTokens.some((candidate) => candidate.startsWith(finalToken))
              || record.bodyTokens.some((candidate) => candidate.startsWith(finalToken))
          );
          if (exactTitleCount > 0 || exactBodyCount > 0) {
            score = (120 * exactTitleCount + 40 * exactBodyCount) / queryTokens.length;
            if (exactTitleCount + exactBodyCount >= queryTokens.length) {
              score += 25;
            }
            matchType = exactTitleCount > 0 ? "exact-title-token" : "exact-body-token";
          } else if (prefixMatch) {
            score = 70 / queryTokens.length;
            matchType = "prefix-final-token";
          }
        }

        return score > 0 ? Object.freeze({
          entityId: record.entityId,
          entityType: record.entityType,
          title: record.title,
          route: record.route,
          snippet: record.body || "",
          score,
          matchType,
          verificationStatus: record.verificationStatus || "not-applicable"
        }) : null;
      }).filter(Boolean);

      results.sort((left, right) => (
        right.score - left.score
          || left.title.localeCompare(right.title, "fa")
          || left.entityId.localeCompare(right.entityId)
      ));
      return Object.freeze(results.slice(0, MAX_RESULTS));
    }

    getVersion() {
      return this.version;
    }
  }

  const index = new SearchIndex();
  app.register("search", "index", {
    rebuild: index.rebuild.bind(index),
    search: index.search.bind(index),
    getVersion: index.getVersion.bind(index),
    createIndex() {
      return new SearchIndex();
    }
  });
})(window);
