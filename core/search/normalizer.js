(function registerSearchNormalizer(global) {
  "use strict";

  const app = global.KonkurApp;
  const PERSIAN_DIGITS = "۰۱۲۳۴۵۶۷۸۹";
  const ARABIC_DIGITS = "٠١٢٣٤٥٦٧٨٩";
  const ARABIC_MARKS = /[\u0610-\u061a\u064b-\u065f\u0670\u06d6-\u06ed]/g;

  function normalizeDigits(value) {
    return value.replace(/[۰-۹٠-٩]/g, (digit) => {
      const persianIndex = PERSIAN_DIGITS.indexOf(digit);
      return String(persianIndex >= 0 ? persianIndex : ARABIC_DIGITS.indexOf(digit));
    });
  }

  function normalize(value) {
    if (value === null || value === undefined) {
      return "";
    }

    const technicalTokens = [];
    const protectedValue = normalizeDigits(String(value).normalize("NFKC"))
      .replace(/[يى]/g, "ی")
      .replace(/ك/g, "ک")
      .replace(/ـ/g, "")
      .replace(ARABIC_MARKS, "")
      .toLocaleLowerCase("en-US")
      .replace(/(?:[a-z]\+\+|[a-z]\+|[\p{L}\p{N}]+\/[\p{L}\p{N}]+|\d+(?:\.\d+)+|[\p{L}\p{N}]+[-_][\p{L}\p{N}]+)/gu, (token) => {
        const marker = `zztechnical${technicalTokens.length}zz`;
        technicalTokens.push(token);
        return marker;
      });

    return protectedValue
      .replace(/[^\p{L}\p{N}]+/gu, " ")
      .replace(/\s+/g, " ")
      .trim()
      .replace(/zztechnical(\d+)zz/g, (marker, index) => technicalTokens[Number(index)]);
  }

  function tokenize(value) {
    const normalized = normalize(value);
    return normalized ? Array.from(new Set(normalized.split(" ").filter(Boolean))) : [];
  }

  app.register("search", "normalizer", { normalize, normalizeDigits, tokenize });
})(window);
