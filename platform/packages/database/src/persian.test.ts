import { describe, expect, it } from "vitest";

import {
  normalizePersianSearchText,
  searchPersianDocuments,
} from "./persian.js";

describe("normalizePersianSearchText", () => {
  it("normalizes Arabic code points and Persian spacing", () => {
    expect(normalizePersianSearchText("  شبكه‌ های  كامپيوتري  ")).toBe(
      "شبکه های کامپیوتری",
    );
  });

  it("removes elongation and combining marks", () => {
    expect(normalizePersianSearchText("طَــراحیِ الگوریتم")).toBe(
      "طراحی الگوریتم",
    );
  });

  it("normalizes mixed Arabic, Persian, and Latin digits", () => {
    expect(normalizePersianSearchText("Graph ۱۲۳ و ٤٥٦")).toBe(
      "graph 123 و 456",
    );
  });

  it("does not query PostgreSQL for an empty normalized query", async () => {
    const executor = {
      query: async (): Promise<{ rows: readonly never[] }> => ({ rows: [] }),
    };

    await expect(
      searchPersianDocuments(executor, { kind: "public" }, " ‌ "),
    ).resolves.toEqual([]);
  });

  it("bounds result counts before querying", async () => {
    const executor = {
      query: async (): Promise<{ rows: readonly never[] }> => ({ rows: [] }),
    };

    await expect(
      searchPersianDocuments(executor, { kind: "public" }, "شبکه", 51),
    ).rejects.toThrow(RangeError);
  });
});
