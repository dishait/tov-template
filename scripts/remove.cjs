const { unlinkSync } = require("fs");
const { readdir } = require("fs/promises");
const { basename } = require("path");
const { showDir, moduleTypes } = require("./shared/base.cjs");

/**
 * 自动删除
 * @param {import('plop').NodePlopAPI} plop
 */
function remove(plop) {
  plop.setActionType("remove", (answers) => {
    const { name, type, shouldRemove } = answers;
    const dir = showDir(type);
    const target = `./src/${dir}/${name}`;
    if (shouldRemove) {
      return unlinkSync(target);
    }
    throw new Error(`删除 ${target} 失败`);
  });

  plop.setGenerator("controller", {
    description: "自动删除",
    prompts: [
      {
        name: "type",
        type: "list",
        message: "请选择您要删除的类型",
        async choices() {
          const entrys = await readdir("./src", {
            recursive: false,
            withFileTypes: true,
          });
          const dirs = entrys.filter((e) => e.isDirectory());
          const types = moduleTypes.filter((type) => {
            const dir = showDir(type);
            return dirs.includes(`./src/${dir}`);
          });
          return types;
        },
      },
      {
        name: "name",
        type: "list",
        message({ type }) {
          return `请选择您要删除的 ${type} 模块`;
        },
        async choices({ type }) {
          const dir = showDir(type);
          const entrys = await readdir(`src/${dir}`, {
            recursive: false,
            withFileTypes: true,
          });
          let modules = entrys.filter((e) => e.isFile());
          modules = modules.map((module) => {
            return basename(module);
          });
          return modules;
        },
      },
      {
        name: "shouldRemove",
        type: "confirm",
        default: false,
        message: "再次确认是否删除",
      },
    ],
    actions: [
      {
        type: "remove",
      },
    ],
  });
}

module.exports = remove;
