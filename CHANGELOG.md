# Changelog

## v1.19.0

[compare changes](https://github.com/dishait/tov-template/compare/v1.18.1...v1.19.0)

### 🚀 Enhancements

- 多文件加载多语言配置 ([#135](https://github.com/dishait/tov-template/pull/135))

### 🔥 Performance

- 简化 i18n 模块逻辑，使用 defu 替换 lodash/merge ([71e792c](https://github.com/dishait/tov-template/commit/71e792c))
- ⚠️  自动检测是否使用 Lightning CSS 来加快 css 处理 ([e311f7a](https://github.com/dishait/tov-template/commit/e311f7a))

### 🩹 Fixes

- **pages/echarts:** 简单的修复类型 ([e95ae61](https://github.com/dishait/tov-template/commit/e95ae61))
- **pages/echarts:** 修复样式 ([2ef3b3b](https://github.com/dishait/tov-template/commit/2ef3b3b))
- 全局注入 i18n，close #134 ([#134](https://github.com/dishait/tov-template/issues/134))
- **vite-plugin-warmup:** 仅服务时开启 ([48afba2](https://github.com/dishait/tov-template/commit/48afba2))
- **presets:** 同步打包目标 ([3e72542](https://github.com/dishait/tov-template/commit/3e72542))
- ⚠️  统一预设中的所有路径为绝对路径, close #142 ([#142](https://github.com/dishait/tov-template/issues/142))
- **presets:** 更精准的 vite 重启 ([6cb1999](https://github.com/dishait/tov-template/commit/6cb1999))

### 💅 Refactors

- **presets:** 纯 esm _dirname ([bb80120](https://github.com/dishait/tov-template/commit/bb80120))
- **presets:** 抽离内置插件 ([2d51141](https://github.com/dishait/tov-template/commit/2d51141))
- **preset:** 美化插件逻辑 ([576acae](https://github.com/dishait/tov-template/commit/576acae))

### 📖 Documentation

- **README:** 规范化 feature 标题 ([97b3903](https://github.com/dishait/tov-template/commit/97b3903))
- **README:** 添加 lightningcss 支持 ([b23d1b9](https://github.com/dishait/tov-template/commit/b23d1b9))
- **README:** 添加 vite 配置层支持 (实验性) ([8f86abb](https://github.com/dishait/tov-template/commit/8f86abb))

### 📦 Build

- 使用内置 Warmup 预热 ([75ae48e](https://github.com/dishait/tov-template/commit/75ae48e))

### 🏡 Chore

- 添加 scripts 到 lint 规则中 ([70b6ab4](https://github.com/dishait/tov-template/commit/70b6ab4))
- 更新最小版本引擎 ([b350698](https://github.com/dishait/tov-template/commit/b350698))
- 更新依赖 ([f2792ee](https://github.com/dishait/tov-template/commit/f2792ee))
- **.vscode/settings.json:** 移除能自动检测的配置 ([61c7af9](https://github.com/dishait/tov-template/commit/61c7af9))
- 更新依赖 ([0f732b5](https://github.com/dishait/tov-template/commit/0f732b5))
- 更新依赖 ([94b7412](https://github.com/dishait/tov-template/commit/94b7412))
- ⚠️  更新依赖 ([3355d19](https://github.com/dishait/tov-template/commit/3355d19))
- 更新依赖 ([5de32a6](https://github.com/dishait/tov-template/commit/5de32a6))
- ⚠️  更新 node 推荐版本为 v20 ([61569c3](https://github.com/dishait/tov-template/commit/61569c3))

#### ⚠️ Breaking Changes

- ⚠️  自动检测是否使用 Lightning CSS 来加快 css 处理 ([e311f7a](https://github.com/dishait/tov-template/commit/e311f7a))
- ⚠️  统一预设中的所有路径为绝对路径, close #142 ([#142](https://github.com/dishait/tov-template/issues/142))
- ⚠️  更新依赖 ([3355d19](https://github.com/dishait/tov-template/commit/3355d19))
- ⚠️  更新 node 推荐版本为 v20 ([61569c3](https://github.com/dishait/tov-template/commit/61569c3))

### ❤️ Contributors

- Markthree ([@markthree](http://github.com/markthree))
- Luoqiz ([@luoqiz](http://github.com/luoqiz))

## v1.18.1

[compare changes](https://github.com/dishait/tov-template/compare/v1.18.0...v1.18.1)

### 🩹 Fixes

- 使用同构的 _dirname ([f367d1a](https://github.com/dishait/tov-template/commit/f367d1a))
- **i18n:** I18n 持久化 ([444d887](https://github.com/dishait/tov-template/commit/444d887))
- **components/Navigation:** 不存在 i18n key 时回滚 ([5879e94](https://github.com/dishait/tov-template/commit/5879e94))
- 修复 vite-plugin-use-modules ([284a11f](https://github.com/dishait/tov-template/commit/284a11f))
- **antd:** 使用 css in js, close #124 ([#124](https://github.com/dishait/tov-template/issues/124))
- 修复 vite-plugin-vue-meta-layouts 依赖 ([f837c71](https://github.com/dishait/tov-template/commit/f837c71))
- Base 安全的路径解析，close #128 ([#128](https://github.com/dishait/tov-template/issues/128))
- 拉平重定向 BASE_URL 路由 ([339be8c](https://github.com/dishait/tov-template/commit/339be8c))

### 📖 Documentation

- 添加赞助商链接 ([454f746](https://github.com/dishait/tov-template/commit/454f746))
- **README:** 添加 base 安全的路径解析 ([7c08be3](https://github.com/dishait/tov-template/commit/7c08be3))

### 📦 Build

- **package.json:** 规范 overrides ([2e71012](https://github.com/dishait/tov-template/commit/2e71012))

### 🏡 Chore

- 更新依赖 ([bc78c67](https://github.com/dishait/tov-template/commit/bc78c67))
- 更新依赖 ([00440c9](https://github.com/dishait/tov-template/commit/00440c9))
- 更新依赖 ([956546b](https://github.com/dishait/tov-template/commit/956546b))
- 更新依赖 ([25e26ca](https://github.com/dishait/tov-template/commit/25e26ca))
- **presets:** 规范函数定义 ([4e20163](https://github.com/dishait/tov-template/commit/4e20163))
- 更新依赖 ([45a263b](https://github.com/dishait/tov-template/commit/45a263b))
- 更新依赖 ([17b2dd6](https://github.com/dishait/tov-template/commit/17b2dd6))
- 添加赞助商链接 ([2f8e740](https://github.com/dishait/tov-template/commit/2f8e740))
- Remove '@unocss/transformer-directives' and '@unocss/transformer-variant-group' ([#125](https://github.com/dishait/tov-template/pull/125))

### ❤️ Contributors

- Markthree <1801982702@qq.com>
- API MAN <w2606662632@gmail.com>

## v1.18.0

[compare changes](https://github.com/dishait/tov-template/compare/v1.17.2...v1.18.0)

### 🚀 Enhancements

- 支持页面级 meta 标题 ([8bb19fc](https://github.com/dishait/tov-template/commit/8bb19fc))
- 支持 @ 路径别名 ([b7618c4](https://github.com/dishait/tov-template/commit/b7618c4))
- **env:** 暴露开发环境和生产环境 ([c696642](https://github.com/dishait/tov-template/commit/c696642))

### 🩹 Fixes

- 修复 @ 路径别名失效 ([8f1d3da](https://github.com/dishait/tov-template/commit/8f1d3da))
- 支持在开发时安装组件库，close #93 ([#93](https://github.com/dishait/tov-template/issues/93))

### 🏡 Chore

- 更新依赖 ([9afcdb5](https://github.com/dishait/tov-template/commit/9afcdb5))
- 更新依赖 ([58ff80f](https://github.com/dishait/tov-template/commit/58ff80f))
- 代码格式化 ([86d3b2d](https://github.com/dishait/tov-template/commit/86d3b2d))
- 更好的 jsx 提示 ([9e3c3df](https://github.com/dishait/tov-template/commit/9e3c3df))
- 更新依赖 ([b7560e3](https://github.com/dishait/tov-template/commit/b7560e3))
- 更新依赖 ([8742f5c](https://github.com/dishait/tov-template/commit/8742f5c))
- ⚠️  更新 markdown 插件依赖 ([50ecf40](https://github.com/dishait/tov-template/commit/50ecf40))
- 更新依赖 ([ec61807](https://github.com/dishait/tov-template/commit/ec61807))
- **presets:** 添加插件注释 ([dd17fab](https://github.com/dishait/tov-template/commit/dd17fab))
- 更新依赖 ([5dc97ca](https://github.com/dishait/tov-template/commit/5dc97ca))
- 更新依赖 ([2f7bcbf](https://github.com/dishait/tov-template/commit/2f7bcbf))
- 更新依赖 ([6af2e41](https://github.com/dishait/tov-template/commit/6af2e41))
- ⚠️  在 package.json 中统一管理 browserslist ([9d2131d](https://github.com/dishait/tov-template/commit/9d2131d))
- 忽略项目中可能出现的 nuxt 输出 ([5e8ab5f](https://github.com/dishait/tov-template/commit/5e8ab5f))

#### ⚠️ Breaking Changes

- ⚠️  更新 markdown 插件依赖 ([50ecf40](https://github.com/dishait/tov-template/commit/50ecf40))
- ⚠️  在 package.json 中统一管理 browserslist ([9d2131d](https://github.com/dishait/tov-template/commit/9d2131d))

### ❤️ Contributors

- Markthree ([@markthree](http://github.com/markthree))

## v1.17.2

[compare changes](https://github.com/dishait/tov-template/compare/v1.17.1...v1.17.2)

### 🚀 Enhancements

- 添加 vscode debug 配置，close #47
  ([#47](https://github.com/dishait/tov-template/issues/47))
- Devcontainer 容器开发支持
  ([5a94e4f](https://github.com/dishait/tov-template/commit/5a94e4f))

### 🩹 Fixes

- 修复 lint:fix 命令
  ([2354815](https://github.com/dishait/tov-template/commit/2354815))
- 更好的 css 兼容
  ([910d648](https://github.com/dishait/tov-template/commit/910d648))

### 📦 Build

- 限制包管理器为 pnpm
  ([10c03f8](https://github.com/dishait/tov-template/commit/10c03f8))

### 🏡 Chore

- Update deps
  ([49bf8c2](https://github.com/dishait/tov-template/commit/49bf8c2))
- 更新依赖 ([7c1dd04](https://github.com/dishait/tov-template/commit/7c1dd04))
- 兼容更多不支持 esmModule 的浏览器
  ([8ab5f9f](https://github.com/dishait/tov-template/commit/8ab5f9f))

### ❤️ Contributors

- Markthree ([@markthree](http://github.com/markthree))

## v1.17.1

[compare changes](https://github.com/dishait/tov-template/compare/v1.17.0...v1.17.1)

### 🚀 Enhancements

- **unocss:** 前缀组支持
  ([0390f99](https://github.com/dishait/tov-template/commit/0390f99))
- 最小最快的 dockerfile 静态服务
  ([c7fb036](https://github.com/dishait/tov-template/commit/c7fb036))

### 🩹 Fixes

- 更好的 css 兼容
  ([71f6f68](https://github.com/dishait/tov-template/commit/71f6f68))

### 📖 Documentation

- 移除错误模板
  ([bb51a1a](https://github.com/dishait/tov-template/commit/bb51a1a))
- 修复 README 描述
  ([b242e25](https://github.com/dishait/tov-template/commit/b242e25))
- **README:** 添加最快最小的 dockerfile 静态 go 服务说明
  ([06dd689](https://github.com/dishait/tov-template/commit/06dd689))

### 📦 Build

- ⚠️ 移除非必要低兼容性的 css 预设
  ([0452560](https://github.com/dishait/tov-template/commit/0452560))

### 🏡 Chore

- 暗黑模式全由 vue-dark-switch 实现
  ([370488a](https://github.com/dishait/tov-template/commit/370488a))
- Update deps
  ([6caffee](https://github.com/dishait/tov-template/commit/6caffee))
- 更新依赖 ([b2281eb](https://github.com/dishait/tov-template/commit/b2281eb))
- 美化 github 图标
  ([fa60044](https://github.com/dishait/tov-template/commit/fa60044))

#### ⚠️ Breaking Changes

- ⚠️ 移除非必要低兼容性的 css 预设
  ([0452560](https://github.com/dishait/tov-template/commit/0452560))

### ❤️ Contributors

- Markthree ([@markthree](http://github.com/markthree))

## v1.17.0

[compare changes](https://github.com/dishait/tov-template/compare/v1.16.1...v1.17.0)

### 🔥 Performance

- 合并重复依赖
  ([6799ff8](https://github.com/dishait/tov-template/commit/6799ff8))
- 清理非必要依赖
  ([aa76ee3](https://github.com/dishait/tov-template/commit/aa76ee3))

### 🩹 Fixes

- Tdesign 组件库与包自动引入冲突，close #71
  ([#71](https://github.com/dishait/tov-template/issues/71))

### 📖 Documentation

- 更新库 api 引入列表
  ([0c9ae91](https://github.com/dishait/tov-template/commit/0c9ae91))

### 🏡 Chore

- Git 忽略生成的类型
  ([8423012](https://github.com/dishait/tov-template/commit/8423012))
- Git 忽略自动引入的 eslint 变量
  ([856ee27](https://github.com/dishait/tov-template/commit/856ee27))
- 更新依赖 ([bf3f3b2](https://github.com/dishait/tov-template/commit/bf3f3b2))
- 保存自动格式化
  ([35df5cd](https://github.com/dishait/tov-template/commit/35df5cd))

### ❤️ Contributors

- Markthree ([@markthree](http://github.com/markthree))

## v1.16.1

[compare changes](https://github.com/dishait/tov-template/compare/v1.16.0...v1.16.1)

### 📖 Documentation

- 更新自动依赖更新说明
  ([85fe5ef](https://github.com/dishait/tov-template/commit/85fe5ef))

### 🏡 Chore

- ⚠️ 更精简的自动依赖更新
  ([255488a](https://github.com/dishait/tov-template/commit/255488a))

#### ⚠️ Breaking Changes

- ⚠️ 更精简的自动依赖更新
  ([255488a](https://github.com/dishait/tov-template/commit/255488a))

### ❤️ Contributors

- Markthree ([@markthree](http://github.com/markthree))

## v1.16.0

[compare changes](https://github.com/dishait/tov-template/compare/v1.15.11...v1.16.0)

### 🔥 Performance

- 移除暗黑 switch 的 polyfill
  ([eb9dc17](https://github.com/dishait/tov-template/commit/eb9dc17))

### 🩹 Fixes

- 修复暗黑模式样式
  ([266a011](https://github.com/dishait/tov-template/commit/266a011))
- 更精确的 release
  ([d5b0663](https://github.com/dishait/tov-template/commit/d5b0663))

### 🏡 Chore

- Vscode 配置文件合并
  ([9c9252d](https://github.com/dishait/tov-template/commit/9c9252d))

### ❤️ Contributors

- Markthree <1801982702@qq.com>

## v1.15.11

[compare changes](https://github.com/dishait/tov-template/compare/v1.15.10...v1.15.11)

### 📖 Documentation

- 更新 features
  ([bee7ca4](https://github.com/dishait/tov-template/commit/bee7ca4))

### 🏡 Chore

- Vscode 配置文件合并
  ([4fb57ac](https://github.com/dishait/tov-template/commit/4fb57ac))

### ❤️ Contributors

- Markthree ([@markthree](http://github.com/markthree))

## v1.15.10

[compare changes](https://github.com/dishait/tov-template/compare/v1.15.9...v1.15.10)

### 🤖 CI

- 移除发布 action
  ([a3929f2](https://github.com/dishait/tov-template/commit/a3929f2))

### ❤️ Contributors

- Markthree ([@markthree](http://github.com/markthree))

## v1.15.9

[compare changes](https://github.com/dishait/tov-template/compare/v1.15.8...v1.15.9)

### 🩹 Fixes

- 修复自动发布
  ([da44e4e](https://github.com/dishait/tov-template/commit/da44e4e))

### ❤️ Contributors

- Markthree ([@markthree](http://github.com/markthree))

## v1.15.5...v1.15.7

[compare changes](https://github.com/dishait/tov-template/compare/v1.15.5...v1.15.7)

### 🚀 Enhancements

- 自动更新依赖
  ([91731dd](https://github.com/dishait/tov-template/commit/91731dd))

### 🩹 Fixes

- 修复生产环境下组件自动引入丢失
  ([a3d422d](https://github.com/dishait/tov-template/commit/a3d422d))

### 🏡 Chore

- 更新依赖 ([76b7171](https://github.com/dishait/tov-template/commit/76b7171))
- 继承 unjs 依赖更新策略
  ([cf5c09d](https://github.com/dishait/tov-template/commit/cf5c09d))
- Release v1.15.6
  ([792ae43](https://github.com/dishait/tov-template/commit/792ae43))
- Release v1.15.7
  ([d58979e](https://github.com/dishait/tov-template/commit/d58979e))

### ❤️ Contributors

- Markthree ([@markthree](http://github.com/markthree))

## v1.15.0...v1.15.5

[compare changes](https://github.com/dishait/tov-template/compare/v1.15.0...v1.15.5)

### 🚀 Enhancements

- 支持更多插件默认导出类型
  ([a228ec1](https://github.com/dishait/tov-template/commit/a228ec1))

### 🩹 Fixes

- 修复依赖错误
  ([42d1dc3](https://github.com/dishait/tov-template/commit/42d1dc3))
- 修复依赖错误
  ([e1b028c](https://github.com/dishait/tov-template/commit/e1b028c))
- 未 default 导出的插件不安装
  ([9566ecd](https://github.com/dishait/tov-template/commit/9566ecd))

### 📖 Documentation

- 更新文档 ([8b43036](https://github.com/dishait/tov-template/commit/8b43036))

### 🏡 Chore

- Release v1.15.1
  ([34fe91d](https://github.com/dishait/tov-template/commit/34fe91d))
- Release v1.15.2
  ([f79ea5d](https://github.com/dishait/tov-template/commit/f79ea5d))
- Release v1.15.3
  ([7627c68](https://github.com/dishait/tov-template/commit/7627c68))
- Release v1.15.4
  ([940d30c](https://github.com/dishait/tov-template/commit/940d30c))
- Release v1.15.5
  ([abc7e3e](https://github.com/dishait/tov-template/commit/abc7e3e))

### ❤️ Contributors

- Markthree ([@markthree](http://github.com/markthree))

## v1.14.1...v1.15.0

[compare changes](https://github.com/dishait/tov-template/compare/v1.14.1...v1.15.0)

### 🚀 Enhancements

- ⚠️ Markdown 支持嵌入 vue 组件
  ([56f79c3](https://github.com/dishait/tov-template/commit/56f79c3))

### 📖 Documentation

- 更新文档 ([297f411](https://github.com/dishait/tov-template/commit/297f411))
- 添加自动生成环境变量类型声明介绍
  ([a2d3cc1](https://github.com/dishait/tov-template/commit/a2d3cc1))

### 🏡 Chore

- Release v1.15.0
  ([bf99986](https://github.com/dishait/tov-template/commit/bf99986))

#### ⚠️ Breaking Changes

- ⚠️ Markdown 支持嵌入 vue 组件
  ([56f79c3](https://github.com/dishait/tov-template/commit/56f79c3))

### ❤️ Contributors

- Markthree ([@markthree](http://github.com/markthree))

## v1.14.0...v1.14.1

[compare changes](https://github.com/dishait/tov-template/compare/v1.14.0...v1.14.1)

### 🩹 Fixes

- 支持多 mode 环境变量类型生成
  ([02291f8](https://github.com/dishait/tov-template/commit/02291f8))

### 🏡 Chore

- 更新依赖 ([df0184f](https://github.com/dishait/tov-template/commit/df0184f))
- Release v1.14.1
  ([18779c9](https://github.com/dishait/tov-template/commit/18779c9))

### ❤️ Contributors

- Markthree ([@markthree](http://github.com/markthree))

## v1.13.0...v1.14.0

[compare changes](https://github.com/dishait/tov-template/compare/v1.13.0...v1.14.0)

### 🚀 Enhancements

- 自动生成环境变量类型声明文件
  ([f5144a9](https://github.com/dishait/tov-template/commit/f5144a9))
- Axios 封装以及通用通知支持
  ([79d4636](https://github.com/dishait/tov-template/commit/79d4636))
- ⚠️ Unocss 图标支持 close #57 #44
  ([#57](https://github.com/dishait/tov-template/issues/57),
  [#44](https://github.com/dishait/tov-template/issues/44))

### 🩹 Fixes

- 修复 visits 远程 baseURL
  ([f18adad](https://github.com/dishait/tov-template/commit/f18adad))

### 📖 Documentation

- 更新图标自动引入说明
  ([f382704](https://github.com/dishait/tov-template/commit/f382704))
- 添加全局通用 toast 通知说明
  ([2f8587a](https://github.com/dishait/tov-template/commit/2f8587a))
- 添加全局通用 axios 请求封装说明
  ([dd978f3](https://github.com/dishait/tov-template/commit/dd978f3))

### 📦 Build

- 移除冗余依赖
  ([a88eb05](https://github.com/dishait/tov-template/commit/a88eb05))

### 🏡 Chore

- 为打包后的文件提供传统浏览器兼容性支持
  ([4258219](https://github.com/dishait/tov-template/commit/4258219))
- Release v1.14.0
  ([41fd4fd](https://github.com/dishait/tov-template/commit/41fd4fd))

#### ⚠️ Breaking Changes

- ⚠️ Unocss 图标支持 close #57 #44
  ([#57](https://github.com/dishait/tov-template/issues/57),
  [#44](https://github.com/dishait/tov-template/issues/44))

### ❤️ Contributors

- Markthree ([@markthree](http://github.com/markthree))

## v1.12.1...v1.13.0

[compare changes](https://github.com/dishait/tov-template/compare/v1.12.1...v1.13.0)

### 🚀 Enhancements

- ⚠️ 替换 inspect 为 devtools
  ([b41269f](https://github.com/dishait/tov-template/commit/b41269f))

### 📖 Documentation

- 更新功能描述
  ([30fbd32](https://github.com/dishait/tov-template/commit/30fbd32))

### 🏡 Chore

- 更新依赖 ([4eba8a5](https://github.com/dishait/tov-template/commit/4eba8a5))
- Release v1.13.0
  ([00476a6](https://github.com/dishait/tov-template/commit/00476a6))

#### ⚠️ Breaking Changes

- ⚠️ 替换 inspect 为 devtools
  ([b41269f](https://github.com/dishait/tov-template/commit/b41269f))

### ❤️ Contributors

- Markthree ([@markthree](http://github.com/markthree))

## v1.12.0...v1.12.1

[compare changes](https://github.com/dishait/tov-template/compare/v1.12.0...v1.12.1)

### 🏡 Chore

- 更统一的样式
  ([150bafe](https://github.com/dishait/tov-template/commit/150bafe))
- 更简单的环境变量配置文件
  ([e54a606](https://github.com/dishait/tov-template/commit/e54a606))
- 规范化目录名
  ([910580e](https://github.com/dishait/tov-template/commit/910580e))
- Release v1.12.1
  ([1fbeeb0](https://github.com/dishait/tov-template/commit/1fbeeb0))

### ❤️ Contributors

- Markthree ([@markthree](http://github.com/markthree))

## v1.11.7...v1.12.0

[compare changes](https://github.com/dishait/tov-template/compare/v1.11.7...v1.12.0)

### 🚀 Enhancements

- 添加 vue-echarts
  ([bf18ad5](https://github.com/dishait/tov-template/commit/bf18ad5))

### 🩹 Fixes

- 修复并隐藏路径别名细节
  ([6934818](https://github.com/dishait/tov-template/commit/6934818))

### 📖 Documentation

- Update ([7611d6c](https://github.com/dishait/tov-template/commit/7611d6c))

### 🏡 Chore

- 移除废弃的标题生成
  ([c477091](https://github.com/dishait/tov-template/commit/c477091))
- Release v1.12.0
  ([6d968f9](https://github.com/dishait/tov-template/commit/6d968f9))

### ❤️ Contributors

- Markthree ([@markthree](http://github.com/markthree))

## v1.11.6...v1.11.7

[compare changes](https://github.com/dishait/tov-template/compare/v1.11.6...v1.11.7)

### 🩹 Fixes

- 修复项目级自动引入 hmr 失效
  ([20d7874](https://github.com/dishait/tov-template/commit/20d7874))

### 💅 Refactors

- 更精准的 title
  ([6343f30](https://github.com/dishait/tov-template/commit/6343f30))
- 更声明式的进度条
  ([3c1e7d7](https://github.com/dishait/tov-template/commit/3c1e7d7))

### 🏡 Chore

- Release v1.11.7
  ([2597925](https://github.com/dishait/tov-template/commit/2597925))

### ❤️ Contributors

- Markthree ([@markthree](http://github.com/markthree))

## v1.11.5...v1.11.6

[compare changes](https://github.com/dishait/tov-template/compare/v1.11.5...v1.11.6)

### 🚀 Enhancements

- 嵌套组件支持
  ([ddb00f7](https://github.com/dishait/tov-template/commit/ddb00f7))

### 🩹 Fixes

- 兼容 options api 以支持 ui 组件库
  ([f7e284a](https://github.com/dishait/tov-template/commit/f7e284a))
- 支持 js 和 jsx
  ([1ee4711](https://github.com/dishait/tov-template/commit/1ee4711))

### 📖 Documentation

- 移除所有 npm 和 yarn 的提示
  ([5b43ccc](https://github.com/dishait/tov-template/commit/5b43ccc))

### 📦 Build

- 添加 registry 淘宝源限制
  ([97fd8e1](https://github.com/dishait/tov-template/commit/97fd8e1))

### 🏡 Chore

- 移除测试组件
  ([d599a30](https://github.com/dishait/tov-template/commit/d599a30))
- Release v1.11.6
  ([d7fc993](https://github.com/dishait/tov-template/commit/d7fc993))

### 🤖 CI

- 更新 issue 模板
  ([baeb66f](https://github.com/dishait/tov-template/commit/baeb66f))

### ❤️ Contributors

- Markthree ([@markthree](http://github.com/markthree))

## v1.11.4...v1.11.5

[compare changes](https://github.com/dishait/tov-template/compare/v1.11.4...v1.11.5)

### 📖 Documentation

- 调整特性说明
  ([47194de](https://github.com/dishait/tov-template/commit/47194de))

### 📦 Build

- 移除外置的宏
  ([57d2921](https://github.com/dishait/tov-template/commit/57d2921))

### 🏡 Chore

- 更新依赖 ([9b58b1b](https://github.com/dishait/tov-template/commit/9b58b1b))
- Release v1.11.5
  ([f28b402](https://github.com/dishait/tov-template/commit/f28b402))

### ❤️ Contributors

- Markthree ([@markthree](http://github.com/markthree))

## v1.11.3...v1.11.4

[compare changes](https://github.com/dishait/tov-template/compare/v1.11.3...v1.11.4)

### 🚀 Enhancements

- 添加 debug 打包
  ([36aafc2](https://github.com/dishait/tov-template/commit/36aafc2))

### 🩹 Fixes

- 更兼容的 reset css
  ([ba7ae36](https://github.com/dishait/tov-template/commit/ba7ae36))

### 🏡 Chore

- 更漂亮的样式
  ([fbb9abe](https://github.com/dishait/tov-template/commit/fbb9abe))
- 更新依赖 ([9343538](https://github.com/dishait/tov-template/commit/9343538))
- Release v1.11.4
  ([e35a52e](https://github.com/dishait/tov-template/commit/e35a52e))

### ❤️ Contributors

- Markthree ([@markthree](http://github.com/markthree))

## v1.11.2...v1.11.3

[compare changes](https://github.com/dishait/tov-template/compare/v1.11.2...v1.11.3)

### 🚀 Enhancements

- 首页添加 i18n 国际化
  ([359c4c0](https://github.com/dishait/tov-template/commit/359c4c0))

### 🩹 Fixes

- 修复小屏下样式
  ([3a5da73](https://github.com/dishait/tov-template/commit/3a5da73))

### 💅 Refactors

- 更漂亮的动画
  ([ccecfbc](https://github.com/dishait/tov-template/commit/ccecfbc))

### 🏡 Chore

- Release v1.11.3
  ([e36c3af](https://github.com/dishait/tov-template/commit/e36c3af))

### ❤️ Contributors

- Markthree ([@markthree](http://github.com/markthree))

## v1.11.1...v1.11.2

[compare changes](https://github.com/dishait/tov-template/compare/v1.11.1...v1.11.2)

### 🩹 Fixes

- 更友好的总浏览数请求
  ([2ea0ba1](https://github.com/dishait/tov-template/commit/2ea0ba1))
- 添加 netlify 文件以支持生产环境下的 history 模式
  ([606270d](https://github.com/dishait/tov-template/commit/606270d))

### 🏡 Chore

- 总浏览数占位
  ([003d9c6](https://github.com/dishait/tov-template/commit/003d9c6))
- Release v1.11.2
  ([df66827](https://github.com/dishait/tov-template/commit/df66827))

### ❤️ Contributors

- Markthree ([@markthree](http://github.com/markthree))

## v1.11.0...v1.11.1

[compare changes](https://github.com/dishait/tov-template/compare/v1.11.0...v1.11.1)

### 🚀 Enhancements

- Add useVisits
  ([6d73470](https://github.com/dishait/tov-template/commit/6d73470))

### 🔥 Performance

- 压缩所有示例图片
  ([28817e2](https://github.com/dishait/tov-template/commit/28817e2))

### 🩹 Fixes

- 修改 lock ([589644e](https://github.com/dishait/tov-template/commit/589644e))
- **build:** 支持 apply 等 transformer
  ([91dfdfd](https://github.com/dishait/tov-template/commit/91dfdfd))
- 修复浏览数请求
  ([c2eaeac](https://github.com/dishait/tov-template/commit/c2eaeac))

### 📖 Documentation

- 添加线上预览链接
  ([c7064df](https://github.com/dishait/tov-template/commit/c7064df))

### 📦 Build

- 限制包管理器
  ([7c233a6](https://github.com/dishait/tov-template/commit/7c233a6))

### 🏡 Chore

- Release v1.11.1
  ([88f8713](https://github.com/dishait/tov-template/commit/88f8713))

### ❤️ Contributors

- Markthree ([@markthree](http://github.com/markthree))

## v1.10.7...v1.11.0

[compare changes](https://github.com/dishait/tov-template/compare/v1.10.7...v1.11.0)

### 🔥 Performance

- 用 unocss 替代 windicss，hmr 更快
  ([e5f5b83](https://github.com/dishait/tov-template/commit/e5f5b83))

### 💅 Refactors

- 更漂亮的首页
  ([3f48651](https://github.com/dishait/tov-template/commit/3f48651))
- 同构 __dirname, 在 esm 中有更好的兼容性
  ([74813fa](https://github.com/dishait/tov-template/commit/74813fa))
- 添加顶部导航
  ([c52b6f7](https://github.com/dishait/tov-template/commit/c52b6f7))

### 📖 Documentation

- Update ([ec57166](https://github.com/dishait/tov-template/commit/ec57166))

### 🏡 Chore

- 更新依赖 ([8d83fe6](https://github.com/dishait/tov-template/commit/8d83fe6))
- Release v1.11.0
  ([d2cc6a9](https://github.com/dishait/tov-template/commit/d2cc6a9))

### ❤️ Contributors

- Markthree ([@markthree](http://github.com/markthree))

## v1.10.5...v1.10.7

[compare changes](https://github.com/dishait/tov-template/compare/v1.10.5...v1.10.7)

### 🚀 Enhancements

- 自动按需生成 api 预设
  ([5095cb1](https://github.com/dishait/tov-template/commit/5095cb1))

### 🔥 Performance

- 更快的启动速度
  ([77c1b13](https://github.com/dishait/tov-template/commit/77c1b13))

### 💅 Refactors

- 格式化预设 ([8500940](https://github.com/dishait/tov-template/commit/8500940))

### 🏡 Chore

- Update deps
  ([029ac5c](https://github.com/dishait/tov-template/commit/029ac5c))
- 更新依赖 ([41835d1](https://github.com/dishait/tov-template/commit/41835d1))
- 更新依赖 ([f56b8ce](https://github.com/dishait/tov-template/commit/f56b8ce))
- Release v1.10.6
  ([55196b8](https://github.com/dishait/tov-template/commit/55196b8))
- Release v1.10.7
  ([9585373](https://github.com/dishait/tov-template/commit/9585373))

### ❤️ Contributors

- Markthree ([@markthree](http://github.com/markthree))

## v1.10.4...v1.10.5

[compare changes](https://github.com/dishait/tov-template/compare/v1.10.4...v1.10.5)

### 🩹 Fixes

- Fix volar type
  ([2fc877c](https://github.com/dishait/tov-template/commit/2fc877c))

### 🏡 Chore

- Release v1.10.5
  ([a432a2c](https://github.com/dishait/tov-template/commit/a432a2c))

### ❤️ Contributors

- Markthree ([@markthree](http://github.com/markthree))

## v1.10.3...v1.10.4

[compare changes](https://github.com/dishait/tov-template/compare/v1.10.3...v1.10.4)

### 🔥 Performance

- 首屏渲染速度优化
  ([c024e03](https://github.com/dishait/tov-template/commit/c024e03))

### 🏡 Chore

- Release v1.10.4
  ([6a29a4b](https://github.com/dishait/tov-template/commit/6a29a4b))

### ❤️ Contributors

- Markthree ([@markthree](http://github.com/markthree))

## v1.10.2...v1.10.3

[compare changes](https://github.com/dishait/tov-template/compare/v1.10.2...v1.10.3)

### 🏡 Chore

- 提取 i18n ([fae2d27](https://github.com/dishait/tov-template/commit/fae2d27))
- Update deps
  ([6d8528f](https://github.com/dishait/tov-template/commit/6d8528f))
- Release v1.10.3
  ([19acff6](https://github.com/dishait/tov-template/commit/19acff6))

### ❤️ Contributors

- Markthree ([@markthree](http://github.com/markthree))

## v1.10.1...v1.10.2

[compare changes](https://github.com/dishait/tov-template/compare/v1.10.1...v1.10.2)

### 🩹 Fixes

- 修复嵌套路由下的布局系统失效
  ([c03c101](https://github.com/dishait/tov-template/commit/c03c101))

### 🏡 Chore

- Release v1.10.2
  ([7b1585e](https://github.com/dishait/tov-template/commit/7b1585e))

### ❤️ Contributors

- Markthree ([@markthree](http://github.com/markthree))

## v1.10.0...v1.10.1

[compare changes](https://github.com/dishait/tov-template/compare/v1.10.0...v1.10.1)

### 🩹 Fixes

- 修复 i18n 编译错误
  ([13747cf](https://github.com/dishait/tov-template/commit/13747cf))
- 更好的组件类型提示
  ([47b19bd](https://github.com/dishait/tov-template/commit/47b19bd))

### 📦 Build

- Add release
  ([110d3b8](https://github.com/dishait/tov-template/commit/110d3b8))

### 🏡 Chore

- 更新依赖 ([638903c](https://github.com/dishait/tov-template/commit/638903c))
- 更新依赖 ([7401f15](https://github.com/dishait/tov-template/commit/7401f15))
- Update deps
  ([66b7ca7](https://github.com/dishait/tov-template/commit/66b7ca7))
- Release v1.10.1
  ([189abfb](https://github.com/dishait/tov-template/commit/189abfb))

### 🤖 CI

- Add release
  ([8e4b601](https://github.com/dishait/tov-template/commit/8e4b601))

### ❤️ Contributors

- Markthree ([@markthree](http://github.com/markthree))

## v1.9.0...v1.10.0

[compare changes](https://github.com/dishait/tov-template/compare/v1.9.0...v1.10.0)

### 🚀 Enhancements

- **build:** 减少打包时移除日志的时间
  ([26865fe](https://github.com/dishait/tov-template/commit/26865fe))

### 🏡 Chore

- 更新版本号 ([b83419b](https://github.com/dishait/tov-template/commit/b83419b))
- 更新为 vite4
  ([3db3628](https://github.com/dishait/tov-template/commit/3db3628))
- 更新依赖 ([dd9f8c0](https://github.com/dishait/tov-template/commit/dd9f8c0))
- 更新依赖并切换 cjs 为 mjs
  ([69c9116](https://github.com/dishait/tov-template/commit/69c9116))
- 更新依赖 ([4eaf20c](https://github.com/dishait/tov-template/commit/4eaf20c))
- 更新版本号 ([e991b0a](https://github.com/dishait/tov-template/commit/e991b0a))

### ❤️ Contributors

- Markthree ([@markthree](http://github.com/markthree))

## v1.8.0...v1.9.0

[compare changes](https://github.com/dishait/tov-template/compare/v1.8.0...v1.9.0)

### 🚀 Enhancements

- 添加 pinia 的持久化
  ([096ace7](https://github.com/dishait/tov-template/commit/096ace7))
- 类型化文件路由
  ([ef4a881](https://github.com/dishait/tov-template/commit/ef4a881))
- DefineOptions 支持
  ([82aaaf8](https://github.com/dishait/tov-template/commit/82aaaf8))

### 🩹 Fixes

- 修复 stores 的自动引入
  ([2b08b20](https://github.com/dishait/tov-template/commit/2b08b20))
- 修复生产环境下组件库自动引入
  ([7e0ee65](https://github.com/dishait/tov-template/commit/7e0ee65))
- 修复 tsx 组件不识别
  ([f5c4bc5](https://github.com/dishait/tov-template/commit/f5c4bc5))

### 📖 Documentation

- 更新自动引入说明
  ([40dda73](https://github.com/dishait/tov-template/commit/40dda73))
- 更新文件路由说明
  ([f6f1ede](https://github.com/dishait/tov-template/commit/f6f1ede))
- 更新文件路由依赖链接
  ([fc09640](https://github.com/dishait/tov-template/commit/fc09640))

### 🏡 Chore

- 更新依赖 ([0247f2f](https://github.com/dishait/tov-template/commit/0247f2f))
- 更新依赖 ([90fb0e0](https://github.com/dishait/tov-template/commit/90fb0e0))
- 更新依赖 ([94d6399](https://github.com/dishait/tov-template/commit/94d6399))
- 去除css @ 警告
  ([6dbbdc3](https://github.com/dishait/tov-template/commit/6dbbdc3))
- 去除 vscode 已经内置的插件推荐
  ([03958b0](https://github.com/dishait/tov-template/commit/03958b0))
- 更新依赖 ([fb0ab95](https://github.com/dishait/tov-template/commit/fb0ab95))
- 更新依赖 ([1dc6232](https://github.com/dishait/tov-template/commit/1dc6232))
- 更新依赖 ([2126f3b](https://github.com/dishait/tov-template/commit/2126f3b))
- 更好的 vite3 兼容
  ([bb43a5b](https://github.com/dishait/tov-template/commit/bb43a5b))
- 更新依赖 ([e7d8e05](https://github.com/dishait/tov-template/commit/e7d8e05))
- 更新依赖 ([99fc270](https://github.com/dishait/tov-template/commit/99fc270))
- 更新依赖 ([3df7cb0](https://github.com/dishait/tov-template/commit/3df7cb0))
- 更新依赖 ([ce63f56](https://github.com/dishait/tov-template/commit/ce63f56))
- 更新标签标题
  ([82ad9d1](https://github.com/dishait/tov-template/commit/82ad9d1))
- 更新依赖 ([e32dcf4](https://github.com/dishait/tov-template/commit/e32dcf4))
- 更新依赖 ([6e0b73b](https://github.com/dishait/tov-template/commit/6e0b73b))
- 变更进度条颜色
  ([fcc523f](https://github.com/dishait/tov-template/commit/fcc523f))
- 更新依赖 ([0b4bf69](https://github.com/dishait/tov-template/commit/0b4bf69))
- 更新依赖并关闭 options-api
  ([be983cf](https://github.com/dishait/tov-template/commit/be983cf))
- 更新依赖 ([dd2d141](https://github.com/dishait/tov-template/commit/dd2d141))

### ❤️ Contributors

- Markthree ([@markthree](http://github.com/markthree))

## v1.7.0...v1.8.0

[compare changes](https://github.com/dishait/tov-template/compare/v1.7.0...v1.8.0)

### 🚀 Enhancements

- 动态标题支持
  ([52a8b7a](https://github.com/dishait/tov-template/commit/52a8b7a))
- 更多的 ui 自动引入(仅安装才会生效)
  ([b452eb2](https://github.com/dishait/tov-template/commit/b452eb2))

### 🩹 Fixes

- 修复打包时 removelog 报错
  ([80357bd](https://github.com/dishait/tov-template/commit/80357bd))
- 修复打包时 removelog 依赖扫描报错
  ([6906afc](https://github.com/dishait/tov-template/commit/6906afc))
- 规范 typescript 的默认格式化工具
  ([bdb6a53](https://github.com/dishait/tov-template/commit/bdb6a53))

### 🏡 Chore

- 更新依赖 ([efed550](https://github.com/dishait/tov-template/commit/efed550))
- 自动引入类型重定向推荐
  ([7de3319](https://github.com/dishait/tov-template/commit/7de3319))
- 更新依赖 ([cb2b829](https://github.com/dishait/tov-template/commit/cb2b829))
- 更健壮的类型导入
  ([75b46ad](https://github.com/dishait/tov-template/commit/75b46ad))
- 更新版本 ([9ed395c](https://github.com/dishait/tov-template/commit/9ed395c))

### ❤️ Contributors

- Markthree ([@markthree](http://github.com/markthree))

## v1.6.0...v1.7.0

[compare changes](https://github.com/dishait/tov-template/compare/v1.6.0...v1.7.0)

### 🚀 Enhancements

- Vscode 配置文件嵌套
  ([1932ccc](https://github.com/dishait/tov-template/commit/1932ccc))
- 生产环境下自动移除开发日志
  ([70a362e](https://github.com/dishait/tov-template/commit/70a362e))

### 🩹 Fixes

- 修复并移除冗余 vscode 配置
  ([10add89](https://github.com/dishait/tov-template/commit/10add89))

### 📖 Documentation

- 添加预设插件注释
  ([8f178cd](https://github.com/dishait/tov-template/commit/8f178cd))

### 🏡 Chore

- 更新依赖 ([6b6a27d](https://github.com/dishait/tov-template/commit/6b6a27d))
- 更新依赖 ([b32d96f](https://github.com/dishait/tov-template/commit/b32d96f))
- 更新依赖 ([6ca30f5](https://github.com/dishait/tov-template/commit/6ca30f5))
- 更新依赖(添加自动按需引入 kebab 支持)
  ([4b45268](https://github.com/dishait/tov-template/commit/4b45268))
- 开启模块自动加载
  ([e170351](https://github.com/dishait/tov-template/commit/e170351))
- 更新依赖 ([682d028](https://github.com/dishait/tov-template/commit/682d028))
- 更新依赖 ([a870ece](https://github.com/dishait/tov-template/commit/a870ece))
- 更新依赖 ([98afe0d](https://github.com/dishait/tov-template/commit/98afe0d))
- 更新依赖 ([6ea336f](https://github.com/dishait/tov-template/commit/6ea336f))
- 变更扩展 Volar 推荐
  ([7193c3a](https://github.com/dishait/tov-template/commit/7193c3a))
- 更新依赖 ([8888dff](https://github.com/dishait/tov-template/commit/8888dff))
- 更新依赖 ([d3aedb1](https://github.com/dishait/tov-template/commit/d3aedb1))
- 精简依赖 ([92d1e64](https://github.com/dishait/tov-template/commit/92d1e64))
- 更新依赖 ([9db6c6f](https://github.com/dishait/tov-template/commit/9db6c6f))

### ❤️ Contributors

- Markthree ([@markthree](http://github.com/markthree))

## v1.5.0...v1.6.0

[compare changes](https://github.com/dishait/tov-template/compare/v1.5.0...v1.6.0)

### 🚀 Enhancements

- 支持代码规范
  ([8ee5ebe](https://github.com/dishait/tov-template/commit/8ee5ebe))

### 🩹 Fixes

- 规范化导出 ([b0ac89c](https://github.com/dishait/tov-template/commit/b0ac89c))
- 规范化自动生成模板导出
  ([ce98f96](https://github.com/dishait/tov-template/commit/ce98f96))

### 📖 Documentation

- 更新协议链接
  ([9bb03e0](https://github.com/dishait/tov-template/commit/9bb03e0))
- 添加 logo ([ccac31c](https://github.com/dishait/tov-template/commit/ccac31c))
- 代理 logo 到 gitee
  ([c092985](https://github.com/dishait/tov-template/commit/c092985))
- 更改插件自动加载支持说明
  ([e1ca8b4](https://github.com/dishait/tov-template/commit/e1ca8b4))
- 补充代码规范说明
  ([d103b4e](https://github.com/dishait/tov-template/commit/d103b4e))

### 🏡 Chore

- **type:** Module -> default
  ([41d7e86](https://github.com/dishait/tov-template/commit/41d7e86))
- 更新依赖 ([a1acfad](https://github.com/dishait/tov-template/commit/a1acfad))
- Add bug issue template
  ([22ebe9f](https://github.com/dishait/tov-template/commit/22ebe9f))
- Add issue bug template for gitee
  ([65445d3](https://github.com/dishait/tov-template/commit/65445d3))
- Fix gitee issue bug template
  ([5c43c71](https://github.com/dishait/tov-template/commit/5c43c71))
- 更新依赖 ([cc23160](https://github.com/dishait/tov-template/commit/cc23160))
- 更新依赖 ([fa2a262](https://github.com/dishait/tov-template/commit/fa2a262))
- 更改布局系统依赖
  ([4d1c7a0](https://github.com/dishait/tov-template/commit/4d1c7a0))
- 更新依赖 ([53f5c7d](https://github.com/dishait/tov-template/commit/53f5c7d))
- 更新依赖 ([b9fe38a](https://github.com/dishait/tov-template/commit/b9fe38a))
- 更新版本 ([cbc619b](https://github.com/dishait/tov-template/commit/cbc619b))

### 🎨 Styles

- Fix ([5724208](https://github.com/dishait/tov-template/commit/5724208))

### ❤️ Contributors

- Markthree ([@markthree](http://github.com/markthree))

## v1.4.0...v1.5.0

[compare changes](https://github.com/dishait/tov-template/compare/v1.4.0...v1.5.0)

### 🚀 Enhancements

- 更方便的依赖更新命令
  ([a759769](https://github.com/dishait/tov-template/commit/a759769))
- 支持环境变量开关Inspect调试
  ([7fcbb9d](https://github.com/dishait/tov-template/commit/7fcbb9d))
- 支持环境变量开关mock生产支持
  ([f41d4db](https://github.com/dishait/tov-template/commit/f41d4db))
- 支持环境变量开关项目级 api 自动按需导入
  ([37fefd7](https://github.com/dishait/tov-template/commit/37fefd7))
- 支持环境变量开关 api 自动按需导入
  ([7a7c199](https://github.com/dishait/tov-template/commit/7a7c199))
- 支持环境变量调整打包时压缩算法
  ([33cde40](https://github.com/dishait/tov-template/commit/33cde40))
- 支持环境变量开关 markdown 渲染
  ([0a4401b](https://github.com/dishait/tov-template/commit/0a4401b))
- 添加 vscode 推荐列表
  ([a72f6ae](https://github.com/dishait/tov-template/commit/a72f6ae))

### 🩹 Fixes

- **layouts:** 运行时更新
  ([e479c9d](https://github.com/dishait/tov-template/commit/e479c9d))
- **layouts:** 更细粒度的运行时更新
  ([7d7fbb3](https://github.com/dishait/tov-template/commit/7d7fbb3))
- **env:** 修复调试开关
  ([f9aa49b](https://github.com/dishait/tov-template/commit/f9aa49b))
- 修复生产环境 mock 的 fetch api
  ([75158c9](https://github.com/dishait/tov-template/commit/75158c9))
- 修复开关生产环境 mock
  ([f4c3dff](https://github.com/dishait/tov-template/commit/f4c3dff))
- 修复类型判断
  ([14a2ebe](https://github.com/dishait/tov-template/commit/14a2ebe))

### 📖 Documentation

- 补充预设环境变量注释
  ([43fbe84](https://github.com/dishait/tov-template/commit/43fbe84))
- 添加环境变量配置支持说明
  ([041a8f8](https://github.com/dishait/tov-template/commit/041a8f8))

### 🏡 Chore

- 更新依赖 ([b30f1ca](https://github.com/dishait/tov-template/commit/b30f1ca))
- 更新依赖 ([e8e8e82](https://github.com/dishait/tov-template/commit/e8e8e82))
- 依赖更新 ([e68a51a](https://github.com/dishait/tov-template/commit/e68a51a))
- 精简依赖 ([4bd39d1](https://github.com/dishait/tov-template/commit/4bd39d1))
- 依赖更新 ([b46068e](https://github.com/dishait/tov-template/commit/b46068e))
- 更新依赖 ([3136be4](https://github.com/dishait/tov-template/commit/3136be4))
- **i18n:** 补充i18n嵌套例子
  ([e863861](https://github.com/dishait/tov-template/commit/e863861))
- 补充 fix 说明
  ([ece265f](https://github.com/dishait/tov-template/commit/ece265f))
- 更新依赖 ([b11b43d](https://github.com/dishait/tov-template/commit/b11b43d))
- 支持环境变量修改title
  ([b78d159](https://github.com/dishait/tov-template/commit/b78d159))
- 更新架构 ([210bc91](https://github.com/dishait/tov-template/commit/210bc91))
- 调整默认标题
  ([711b216](https://github.com/dishait/tov-template/commit/711b216))
- 调整自动导入环境变量
  ([f0fc35c](https://github.com/dishait/tov-template/commit/f0fc35c))
- **presets:** 调整预设架构
  ([4519616](https://github.com/dishait/tov-template/commit/4519616))
- 更新依赖 ([0cdfc20](https://github.com/dishait/tov-template/commit/0cdfc20))
- 更简单的插件自动加载
  ([21dd176](https://github.com/dishait/tov-template/commit/21dd176))
- Update deps
  ([6be57e9](https://github.com/dishait/tov-template/commit/6be57e9))
- Update description
  ([e229aee](https://github.com/dishait/tov-template/commit/e229aee))
- 更健全的自动创建
  ([5639146](https://github.com/dishait/tov-template/commit/5639146))
- 更健全的自动删除
  ([b446e9f](https://github.com/dishait/tov-template/commit/b446e9f))
- Update version
  ([7e27906](https://github.com/dishait/tov-template/commit/7e27906))

### ❤️ Contributors

- Markthree ([@markthree](http://github.com/markthree))

## v1.3.0...v1.4.0

[compare changes](https://github.com/dishait/tov-template/compare/v1.3.0...v1.4.0)

### 📖 Documentation

- 更新引用 ([ecd724c](https://github.com/dishait/tov-template/commit/ecd724c))

### 🏡 Chore

- 更新依赖 ([e518d36](https://github.com/dishait/tov-template/commit/e518d36))
- 更新依赖 ([5fc2c57](https://github.com/dishait/tov-template/commit/5fc2c57))
- 更小的依赖 ([1ee20eb](https://github.com/dishait/tov-template/commit/1ee20eb))
- 更新依赖 ([edcfac9](https://github.com/dishait/tov-template/commit/edcfac9))
- 依赖与构建性能优化
  ([a92b82d](https://github.com/dishait/tov-template/commit/a92b82d))
- 更新依赖 ([6cd3418](https://github.com/dishait/tov-template/commit/6cd3418))

### ❤️ Contributors

- Markthree ([@markthree](http://github.com/markthree))

## v1.2.1...v1.3.0

[compare changes](https://github.com/dishait/tov-template/compare/v1.2.1...v1.3.0)

### 🚀 Enhancements

- Antd的自动引入支持
  ([9e25dba](https://github.com/dishait/tov-template/commit/9e25dba))
- Acro.design 组件库支持
  ([86dc5fe](https://github.com/dishait/tov-template/commit/86dc5fe))

### 🩹 Fixes

- 处理windows11下开发时创建组件错误
  ([5ba4deb](https://github.com/dishait/tov-template/commit/5ba4deb))
- 修复windows下serve 时新增组件问题
  ([4723e9f](https://github.com/dishait/tov-template/commit/4723e9f))
- 运行时新layout
  ([8e4e215](https://github.com/dishait/tov-template/commit/8e4e215))
- 项目resolver自动引入问题
  ([e20652f](https://github.com/dishait/tov-template/commit/e20652f))
- I18n 版本回滚
  ([2c21d34](https://github.com/dishait/tov-template/commit/2c21d34))
- 处理打包进程悬挂
  ([c70138d](https://github.com/dishait/tov-template/commit/c70138d))
- 修复peer依赖警告
  ([6130b95](https://github.com/dishait/tov-template/commit/6130b95))

### 🏡 Chore

- 更友好的项目store按需自动引入
  ([c00feca](https://github.com/dishait/tov-template/commit/c00feca))
- 更新依赖 ([242d19c](https://github.com/dishait/tov-template/commit/242d19c))
- 更安全的store按需导入
  ([c7d07a6](https://github.com/dishait/tov-template/commit/c7d07a6))
- 更新依赖 ([96f9236](https://github.com/dishait/tov-template/commit/96f9236))
- 更合理的resolver
  ([b2bef3f](https://github.com/dishait/tov-template/commit/b2bef3f))
- Lint ([bbb8777](https://github.com/dishait/tov-template/commit/bbb8777))
- 更合理的ts检查范围
  ([539c307](https://github.com/dishait/tov-template/commit/539c307))
- 更新依赖 ([8d4a736](https://github.com/dishait/tov-template/commit/8d4a736))
- 调整架构 ([65cf63d](https://github.com/dishait/tov-template/commit/65cf63d))

### ❤️ Contributors

- Markthree ([@markthree](http://github.com/markthree))

## v1.2.0...v1.2.1

[compare changes](https://github.com/dishait/tov-template/compare/v1.2.0...v1.2.1)

### 🚀 Enhancements

- 更友好的命令行
  ([5662656](https://github.com/dishait/tov-template/commit/5662656))

### 📖 Documentation

- **README:** 文档调整
  ([ae4a4e0](https://github.com/dishait/tov-template/commit/ae4a4e0))

### 🏡 Chore

- 更安全的类型
  ([72688dc](https://github.com/dishait/tov-template/commit/72688dc))
- 更友好的预设提示
  ([659083e](https://github.com/dishait/tov-template/commit/659083e))
- **global:** 更符合用户习惯的配置
  ([76f59f8](https://github.com/dishait/tov-template/commit/76f59f8))

### ❤️ Contributors

- Markthree ([@markthree](http://github.com/markthree))

## v1.1.0...v1.2.0

[compare changes](https://github.com/dishait/tov-template/compare/v1.1.0...v1.2.0)

### 🚀 Enhancements

- 404页内置支持
  ([5492a06](https://github.com/dishait/tov-template/commit/5492a06))
- Svg组件支持
  ([651c946](https://github.com/dishait/tov-template/commit/651c946))
- Tsx支持 ([b0b126c](https://github.com/dishait/tov-template/commit/b0b126c))
- Gzip资源压缩支持, 移除svg组件支持
  ([b4ad898](https://github.com/dishait/tov-template/commit/b4ad898))
- 项目级自动引入
  ([e5c239d](https://github.com/dishait/tov-template/commit/e5c239d))

### 📖 Documentation

- **README:** 补充404页说明
  ([665e95c](https://github.com/dishait/tov-template/commit/665e95c))
- **README:** Review
  ([b2d4a8b](https://github.com/dishait/tov-template/commit/b2d4a8b))
- **README:** Svg 组件支持补充
  ([6c9a61a](https://github.com/dishait/tov-template/commit/6c9a61a))
- **README:** 补充tsx支持
  ([1d9cc42](https://github.com/dishait/tov-template/commit/1d9cc42))
- **README:** 补充克隆模板
  ([89289e9](https://github.com/dishait/tov-template/commit/89289e9))
- **README:** Fix
  ([1a791e8](https://github.com/dishait/tov-template/commit/1a791e8))
- **README:** 添加node版本推荐以及补充包管理命令
  ([6927880](https://github.com/dishait/tov-template/commit/6927880))

### 🏡 Chore

- 预设热重载 ([b40b2ef](https://github.com/dishait/tov-template/commit/b40b2ef))
- Favicon support
  ([902fc5d](https://github.com/dishait/tov-template/commit/902fc5d))

### ❤️ Contributors

- Markthree ([@markthree](http://github.com/markthree))

## v1.0.1...v1.1.0

[compare changes](https://github.com/dishait/tov-template/compare/v1.0.1...v1.1.0)

### 🚀 Enhancements

- I18n support
  ([d5c91f0](https://github.com/dishait/tov-template/commit/d5c91f0))

### 📖 Documentation

- **README:** 补充i18n支持介绍
  ([237444f](https://github.com/dishait/tov-template/commit/237444f))

### 🏡 Chore

- 更新依赖 ([c00164b](https://github.com/dishait/tov-template/commit/c00164b))

### ❤️ Contributors

- Markthree ([@markthree](http://github.com/markthree))

## v1.0.0...v1.0.1

[compare changes](https://github.com/dishait/tov-template/compare/v1.0.0...v1.0.1)

### 🩹 Fixes

- 修复element-plus自动导入问题
  ([899ad6e](https://github.com/dishait/tov-template/commit/899ad6e))
- 修复element-plus自动导入问题
  ([ac87db1](https://github.com/dishait/tov-template/commit/ac87db1))

### ❤️ Contributors

- Markthree ([@markthree](http://github.com/markthree))

## 04726c46...v1.0.0

[compare changes](https://github.com/dishait/tov-template/compare/04726c46...v1.0.0)

### 🚀 Enhancements

- **path:** 添加路径别名~
  ([ef81653](https://github.com/dishait/tov-template/commit/ef81653))
- 添加组件自动创建
  ([e9c390a](https://github.com/dishait/tov-template/commit/e9c390a))
- 添加页面自动创建
  ([5fc9830](https://github.com/dishait/tov-template/commit/5fc9830))
- 自动删除 ([63fcaf0](https://github.com/dishait/tov-template/commit/63fcaf0))

### 🩹 Fixes

- **README:** 修复语法
  ([005521e](https://github.com/dishait/tov-template/commit/005521e))
- 修复暗黑模式
  ([f6e11c4](https://github.com/dishait/tov-template/commit/f6e11c4))
- 修复覆盖问题
  ([29d8ab4](https://github.com/dishait/tov-template/commit/29d8ab4))

### 💅 Refactors

- 重构组件自动创建
  ([ad41e6c](https://github.com/dishait/tov-template/commit/ad41e6c))

### 📖 Documentation

- **HOME-README:** 添加TODO
  ([fabc329](https://github.com/dishait/tov-template/commit/fabc329))
- **HOME-README:** 补充说明
  ([3f97bc5](https://github.com/dishait/tov-template/commit/3f97bc5))
- **HOME-README:** 添加路径别名补充
  ([362f0d6](https://github.com/dishait/tov-template/commit/362f0d6))
- 补充README ([24695fc](https://github.com/dishait/tov-template/commit/24695fc))
- **README:** 补充协议说明
  ([58b890a](https://github.com/dishait/tov-template/commit/58b890a))

### 🏡 Chore

- 分离类型检查与打包
  ([39dc595](https://github.com/dishait/tov-template/commit/39dc595))
- 更新依赖 ([712781e](https://github.com/dishait/tov-template/commit/712781e))
- 依赖更新 ([2fee215](https://github.com/dishait/tov-template/commit/2fee215))

### ❤️ Contributors

- Markthree ([@markthree](http://github.com/markthree))
