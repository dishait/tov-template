const { execSync } = require("child_process");

/**
 * 自动更新依赖
 * @param {import('plop').NodePlopAPI} plop
 */
function depsFresh(plop) {
  plop.setGenerator("controller", {
    description: "自动更新依赖",
    prompts: [
      {
        name: "type",
        type: "list",
        default: "patch",
        message: "你希望发布一个什么版本?",
        choices: ["patch", "minor", "major"],
      },
      {
        name: "shouldWrite",
        type: "confirm",
        default: false,
        message: "是否直接更新?",
      },
    ],
    actions(answer) {
      const { type, shouldWrite } = answer;

      execSync(`npx taze ${type} ${shouldWrite ? "-w" : ""}`, {
        stdio: "inherit",
      });
      return [];
    },
  });
}

module.exports = depsFresh;
