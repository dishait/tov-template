const { execSync } = require("child_process");

/**
 * 自动发版
 * @param {import('plop').NodePlopAPI} plop
 */
function release(plop) {
  plop.setGenerator("controller", {
    description: "自动发版",
    prompts: [
      {
        name: "type",
        type: "list",
        default: "patch",
        message: "你希望发布一个什么版本?",
        choices: [
          "patch",
          "minor",
          "major",
          "prepatch",
          "premajor",
          "preminor",
          "prerelease",
        ],
      },
    ],
    actions(answer) {
      const { type } = answer;
      execSync(
        `npx changelogen --${type} --release && git push --follow-tags`,
        {
          stdio: "inherit",
        },
      );
      return [];
    },
  });
}

module.exports = release;
