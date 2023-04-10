/* eslint-disable semi */
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "style",
        "refactor",
        "test",
        "revert",
        "add",
        "chore",
        "build",
      ],
    ],
  },
};
