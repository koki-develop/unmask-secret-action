import * as core from "@actions/core";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { main } from "./main";

vi.mock("@actions/core");

describe("main function", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should process secret input correctly", async () => {
    const secret = "test-secret";
    const expectedOutput =
      "t\u200Be\u200Bs\u200Bt\u200B-\u200Bs\u200Be\u200Bc\u200Br\u200Be\u200Bt";

    vi.spyOn(core, "getInput").mockReturnValue(secret);

    await main();

    expect(core.getInput).toHaveBeenCalledWith("secret");
    expect(core.info).toHaveBeenCalledWith(expectedOutput);
  });

  it("should call core.setFailed when an error occurs", async () => {
    const errorMessage = "Failed to get input";

    vi.spyOn(core, "getInput").mockImplementation(() => {
      throw new Error(errorMessage);
    });

    await main();

    expect(core.setFailed).toHaveBeenCalledWith(errorMessage);
  });

  it("should throw error when error is not instance of Error", async () => {
    vi.spyOn(core, "getInput").mockImplementation(() => {
      throw "unexpected error";
    });

    await expect(main()).rejects.toBe("unexpected error");
  });
});
