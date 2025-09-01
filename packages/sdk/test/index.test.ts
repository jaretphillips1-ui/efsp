import { describe, it, expect } from "vitest";
import { greet } from "../src/index";

describe("greet", () => {
  it("greets politely", () => {
    expect(greet("EFSP")).toBe("Hello, EFSP!");
  });
});
