import * as core from "@actions/core";

export const main = async () => {
  try {
    const inputs = {
      secret: core.getInput("secret"),
    } as const;

    core.info(inputs.secret.split("").join("\u200B"));
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message);
    } else {
      throw error;
    }
  }
};

await main();
