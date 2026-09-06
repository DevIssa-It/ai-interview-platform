import { describe, it, expect } from "vitest";
import {
  parseLevel,
  LEVEL_LABELS,
  LEVEL_DESCRIPTIONS,
  LEVEL_BADGE_CLASSES,
  FIT_GAP_RESULT_LABELS,
  FIT_GAP_RESULT_CLASSES,
} from "./constants";

describe("constants and level utilities", () => {
  it("parses numeric and string levels correctly", () => {
    expect(parseLevel(1)).toBe(1);
    expect(parseLevel(2)).toBe(2);
    expect(parseLevel(3)).toBe(3);
    expect(parseLevel(4)).toBe(4);
    expect(parseLevel("1")).toBe(1);
    expect(parseLevel("4")).toBe(4);
  });

  it("parses string representations like L1 and L3", () => {
    expect(parseLevel("L1")).toBe(1);
    expect(parseLevel("L3")).toBe(3);
    expect(parseLevel("L4")).toBe(4);
  });

  it("falls back to 1 when given a non-numeric string", () => {
    expect(parseLevel("unknown")).toBe(1);
    expect(parseLevel("")).toBe(1);
  });

  it("maps levels 1 through 5 to labels and descriptions", () => {
    expect(LEVEL_LABELS[1]).toBe("L1");
    expect(LEVEL_LABELS[3]).toBe("L3");
    expect(LEVEL_DESCRIPTIONS[1]).toBe("Foundational");
    expect(LEVEL_DESCRIPTIONS[3]).toBe("Proficient");
    expect(LEVEL_DESCRIPTIONS[5]).toBe("Expert");
  });

  it("defines styling and classes for fit gap results", () => {
    expect(FIT_GAP_RESULT_LABELS["match"]).toBe("Match");
    expect(FIT_GAP_RESULT_LABELS["gap"]).toBe("Gap");
    expect(FIT_GAP_RESULT_LABELS["exceed"]).toBe("Exceeds");
    expect(FIT_GAP_RESULT_CLASSES["match"]).toContain("text-green-700");
    expect(FIT_GAP_RESULT_CLASSES["gap"]).toContain("text-amber-700");
  });
});
