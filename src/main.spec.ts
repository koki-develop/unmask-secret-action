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
    const expectedOutput = "t\0e\0s\0t\0-\0s\0e\0c\0r\0e\0t";

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
