<div align="center">
    <img width="200px" height="200px" src="https://gitee.com/dishait/tov-template/raw/main/public/logo.png" />
    <h1>
		<a href="https://tov-template.netlify.app/" target="_blank">tov-template</a>
	</h1>
    <p>vite + vue3 + ts 开箱即用现代开发模板</p>
</div>

<br />
<br />

## Features 🐳

1.  Vite's
2.  Vue3
3.  file routing
4.  layout system
5.  Mock support
6.  Api automatically introduced
7.  Components are imported automatically
8.  Icons are imported automatically
9.  VueUse support
10. TypeScript 的
11. UnoCss
12. Dark mode support
13. SWR Request Support
14. pinia state management
15. pnpm package manager
16. Jump progress bar support
17. Development Panel Support
18. Plugin autoload support
19. Vitest unit testing support
20. Support for Markdown rendering
21. path alias`~`support
22. Command line automatic creation and deletion
23. i18n internationalization support
24. Nice 404 page support
25. tsx support
26. gzip resource compression support
27. Environment variable configuration support
28. Unified code specification and style support
29. The production environment automatically removes the development log
30. defineOptions support
31. echarts support
32. Global generic toast notification
33. Global generic axios request encapsulation
34. Automatically generate environment variable type declarations
35. `renovate`Automatically update dependencies
36. Automatic version update and build`CHANGELOG`

<br />
<br />

## Clone Template 🦕

1.  Github

```shell
git clone git@github.com:dishait/tov-template.git
```

2.  Gitee

```shell
git clone git@gitee.com:dishait/tov-template.git
```

3.  lives

```shell
npx degit https://github.com/dishait/tov-template#main
```

4.  new`Github`Warehouse 👉[Use this template](https://github.com/dishait/tov-template/generate)

<br />
<br />
<br />

## `node`Version recommendation 🐎

Since this template is fully modern, I recommend it`node`Current long-term maintenance release`v18`

<br />
<br />
<br />

## use 🐂

This template only supports`pnpm`Package Manager 👉[Installation Tutorial](https://pnpm.io/zh/installation)

1.  install dependencies

```shell
pnpm install
```

2.  to develop

```shell
pnpm dev

# 开启 host
pnpm dev:host

# 自动打开浏览器
pnpm dev:open
```

3.  preview

```shell
pnpm preview

# 开启 host
pnpm preview:host

# 自动打开浏览器
pnpm preview:open
```

4.  Pack

```shell
pnpm build

pnpm build:debug
```

5.  unit test

```shell
pnpm test
```

6.  Unit test report generation

```shell
pnpm coverage
```

7.  type checking

```shell
pnpm typecheck
```

8.  automatically created

```shell
pnpm auto:create
```

9.  automatically remove

```shell
pnpm auto:remove
```

10. Dependency update

```shell
# 安全版本更新
pnpm deps:fresh

# 主版本更新，可能是破坏性更新，谨慎使用，做好测试
pnpm deps:fresh:major

# 次版本更新，可能是破坏性更新，谨慎使用，做好测试
pnpm deps:fresh:minor

# 补丁版本更新
pnpm deps:fresh:patch
```

```shell
# 以上命令仅对包信息 package.json 进行写入，需要重新执行包安装命令
pnpm i
```

11. code specification verification

```shell
pnpm lint

# 校验时修复
pnpm lint:fix
```

<br />
<br />

## motivation 🐗

why do this**template**Woolen cloth?

1.  Save time wasted on configuration for next development
2.  Integrate modern development architecture with mainstream plug-ins to improve development efficiency

<br />
<br />

## Use scene 🐻

When should you use it?

1.  Don't want to waste time on project configuration
2.  Want to try developing in a more modern way`web`application, improve development efficiency

<br />
<br />

## inspired 🐃

This template is subject to**[vitesse](https://github.com/antfu/vitesse)**inspired if you have`SSG`scene, it is recommended that you use**[vitesse](https://github.com/antfu/vitesse)**。

<br />
<br />

## organization 🦔

Welcome to follow**Disa programming**

-   [official website](http://dishaxy.dishait.cn/)
-   [Gitee](https://gitee.com/dishait)
-   [Github](https://github.com/dishait)
-   [NetEase Cloud Classroom](https://study.163.com/provider/480000001892585/index.htm?share=2&shareId=480000001892585)

<br />
<br />

## Details 🐳

### [1. Vite's](https://cn.vitejs.dev/)

This template uses**[fast](https://cn.vitejs.dev/)**As a build tool, you can have the`vite.config.ts`Configure the build of the project.

The introduction and complicated configuration of many mainstream plug-ins have been integrated into the presets in the root directory`presets`In most cases, you don't need to reconfigure them.

<br />

### [2. Vue3](https://v3.cn.vuejs.org/)

<br />

### [3. File Routing](https://github.com/posva/unplugin-vue-router)

The directory structure is the route.

eg:

-   `src/pages/index.vue`=>`/`
-   `src/pages/about.vue`=>`/about`
-   `src/pages/users/index.vue`=>`/users`
-   `src/pages/users/profile.vue`=>`/users/profile`
-   `src/pages/users/[id].vue`=>`/users/:id`
-   `src/pages/[user]/settings.vue`=>`/:user/settings`
-   `src/pages/[...notFound].vue`=> 404 route

Details can be seen 👉[unplugin-vue-router](https://github.com/posva/unplugin-vue-router)

<br />

### [4. Layout system](https://github.com/dishait/vite-plugin-vue-meta-layouts)

#### default layout

`src/layouts/default.vue`will be used as the default layout.

```html
<!-- src/layouts/default.vue -->
<template>
	我是默认布局
	<router-view />
	<!-- 页面视图出口 -->
</template>
```

at this time`src/pages/index.vue`

```html
<!-- src/pages/index.vue -->
<template>
	<div>我是首页</div>
</template>
```

route to`/`, the page will render

```html
我是默认布局 我是首页
```

at this time`src/pages/about.vue`

```html
<!-- src/pages/about.vue -->
<template>
	<div>我是关于页</div>
</template>
```

route to`/about`, the page will render

```html
我是默认布局 我是关于页
```

<br />

#### non-default layout

create any`src/layouts/custom.vue`

```html
<!-- src/layouts/custom.vue -->
<template>
	我是非默认布局custom
	<router-view />
	<!-- 页面视图出口 -->
</template>
```

at this time`src/pages/index.vue`Inside

```html
<!-- src/pages/index.vue -->
<template>
	<div>我是首页</div>
</template>

<!-- 添加自定义块 👇 -->
<route lang="json">
{
	"meta": {
		"layout": "custom"
	}
}
</route>
```

At this point route to`/`, the page will render

```html
我是非默认布局custom 我是首页
```

Details can be seen 👉[vite-plugin-vue-meta-layouts](https://github.com/dishait/vite-plugin-vue-meta-layouts)

<br />

### [5. Mock support](https://github.com/vbenjs/vite-plugin-mock)

in the root directory of`mock`directory, you can export the default`api`resource.

For example`mock/test.ts`internal export

```ts
import { MockMethod } from "vite-plugin-mock";
export default [
  {
    url: "/api/mock/get",
    method: "get",
    response: () => {
      return {
        code: 0,
        data: {
          name: "vben",
        },
      };
    },
  },
] as MockMethod[];
```

exist`src`The simulated request can be made in .

```html
<script setup lang="ts">
	import { useRequest } from 'vue-request'
	// 请求接口 /api/get
	const { data, loading, error } = useRequest('/api/mock/get')
</script>

<template>
	<div>data: {{data}}</div>
	<div>loading: {{loading}}</div>
	<div>error: {{error}}</div>
</template>
```

used here[vue-request](https://cn.attojs.org/)to make the request, but because the`mock`What is intercepted is an entire interface, so replace it with`axios`Waiting for the request library is also possible.

More`mock`Settings visible 👉[vite-plugin-mock](https://github.com/vbenjs/vite-plugin-mock)

<br />

### [6. Api automatically imported](https://github.com/antfu/unplugin-auto-import)

original`vue`of`api`Need to do it yourself`import`。

```ts
import { computed, ref } from "vue";
const count = ref(0);
const doubled = computed(() => count.value * 2);
```

It can now be used directly.

```ts
const count = ref(0);
const doubled = computed(() => count.value * 2);
```

and the top`api`It is imported automatically on demand.

Currently templates support automatic import`api`List of libraries for 👉[vite-auto-import-resolvers](https://github.com/dishait/vite-auto-import-resolvers#%E9%BB%98%E8%AE%A4%E6%94%AF%E6%8C%81%E5%88%97%E8%A1%A8), just make sure the dependencies are installed.

Of course, there is also automatic import in the project, as long as the following specifications are met.

1.  `src/composables`The exports of will be imported automatically on demand.

For example there is`src/composables/foo.ts`

```ts
// default 导出
export default 1000;
```

no longer needed`import`up

```html
<script setup lang="ts">
	console.log(foo) // 输出 1000
</script>

<template>
	<div @click="store.inc()">{{store.counter}}</div>
</template>
```

2.  `src/stores`The exports of will be imported automatically on demand.

For example there is`src/stores/counterStore.ts`

```ts
// default 导出
export default defineStore("counter", {
  state() {
    return {
      counter: 1,
    };
  },
  actions: {
    inc() {
      this.counter++;
    },
  },
});
```

no longer needed`import`up

```html
<script setup lang="ts">
	const store = counterStore()
</script>

<template>
	<div @click="store.inc()">{{store.counter}}</div>
</template>
```

3.  `src/api`It is also imported automatically on demand, similar to the above

Details can be seen 👉[unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)。

<br />

### [7. Components are automatically imported](https://github.com/antfu/unplugin-vue-components)

originally needed`import`

```html
<!-- src/pages/index.vue -->
<script setup lang="ts">
	import Hello from '../components/Hello.vue'
</script>

<template>
	<Hello />
</template>
```

now just in`src/components`The components defined below will be imported on demand, namely`import`is unnecessary.

```html
<!-- src/pages/index.vue -->
<template>
	<Hello />
</template>
```

Of course nested components are also supported, for example`src/components/foo/bar.vue`👇

```html
<!-- src/pages/index.vue -->
<template>
	<FooBar />
</template>
```

At the same time, automatic introduction of popular component libraries is also supported, for example`Naive ui`。

Just install dependencies.

```shell
pnpm add naive-ui
```

ready to use in the template.

```html
<!-- src/pages/index.vue -->
<template>
	<n-button type="success">Success</n-button>
</template>
```

Currently supported component libraries are:

-   [vant](https://github.com/youzan/vant)
-   [led](https://github.com/IDuxFE/idux)
-   [Dev position](https://github.com/DevCloudFE/vue-devui)
-   [quasar](https://github.com/quasarframework/quasar)
-   [varlet](https://github.com/varletjs/varlet)
-   [inkline](https://github.com/inkline/inkline)
-   [vuetify](https://github.com/vuetifyjs/vuetify)
-   [naive-ui](https://github.com/TuSimple/naive-ui)
-   [prime picture](https://github.com/primefaces/primevue)
-   [A Yu Eve picture](https://gitee.com/layui/layui-vue)
-   [view-design](https://iviewui.com/)
-   [arco-design](https://github.com/arco-design/arco-design)
-   [element-plus](https://github.com/element-plus/element-plus)
-   [ant-design-vue](https://github.com/vueComponent/ant-design-vue)
-   [@headlessui/vue](https://github.com/tailwindlabs/headlessui)
-   [tdesign-vue-next](https://github.com/Tencent/tdesign-vue-next)
-   [@vueuse/components](https://github.com/vueuse/vueuse/tree/main/packages/components)

Details can be seen 👉[unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)

<br />

### [8. Icons are automatically introduced](https://unocss.dev/presets/icons)

Can go to 👉[icones](https://icones.netlify.app/), choose and click to enter one of the icon libraries at will

![icons-first-step](public/docs/icons-first-step.png)

Then click to select one of the favorite icons

![icons-second-step](public/docs/icons-second-step.png)

copy its name

![icons-second-step](public/docs/icons-third-step.png)

In the template you can pass`class`The way to use it directly, pay attention to add the prefix`i-`。

```html
<template>
	<div class="i-mdi:account-box-multiple"></div>
</template>
```

After saving and waiting for the icon library to be automatically downloaded, you can see the corresponding icon on the page.

It is also recommended that you use`vscode`plug-in[Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify)。

The plugin displays a preview of the icon in the template.

Of course, dynamic loading of icons is also supported 👇

```html
<script>
	const icon = ref("i-ep:arrow-left")

	// 两秒后换成另一个图标
	setTimeout(() => {
		icon.value = 'i-icon-park-outline:arrow-circle-down'
	}, 2000)
</script>

<template>
	<div :class="icon"></div>
</template>
```

Pay attention to dynamic icons, please make sure to test all icons in the development environment.

Details can be seen 👉[unocss/presets/icons](https://unocss.dev/presets/icons)

<br />

### [9. VueUse support](https://vueuse.org/)

`VueUse`is a super strong`hooks`Library, for example, if you want to get the mouse position, you only need this 👇

```html
<script setup lang="ts">
	// useMouse 被自动按需引入了，不需要import
	const { x, y } = useMouse()
</script>

<template>
	<div>x坐标 {{x}}</div>
	<div>y坐标 {{y}}</div>
</template>
```

Details can be seen 👉[ViewUse](https://vueuse.org/)

<br />

### [10. TypeScript 的](https://www.tslang.cn/)

No need to reconfigure, just use`ts`Just write.

<br />

### [11. unocss](https://unocss.dev/)

`unocss`is a faster`原子css`library.

Just use it directly in the template, no configuration is required.

```html
<template>
	<div class="bg-red-500 text-white">我是红色背景的白色文本</div>
	<template></template
></template>
```

The above template will render white words on a red background.

support at the same time[Attributed schema](https://cn.windicss.org/features/attributify.html#attributify-mode), which can be abbreviated.

```html
<template>
	<div text="white" bg="red-500">我是红色背景的白色文本</div>
	<template></template
></template>
```

This can reduce the amount of code in adjusting margin size and so on.

Details can be seen 👉[unocss](https://unocss.dev/)

<br />

### [12. Dark mode support](https://cn.windicss.org/features/dark-mode.html#dark-mode)

Dark Mode by the[vue-dark-switch](https://github.com/dishait/vue-dark-switch)and`VueUse`accomplish.

`src/composables`directory to store`composition-api`module.

Preset in this directory`useDarks`module, which exports`isDark`and`toggleDark`Used to display and toggle dark mode.

```ts
// src/composables/useDarks.ts

// vueuse的 api 会自动按需引入，无需import
export const isDark = useDark();
export const toggleDark = useToggle(isDark);

export const useDarks = () => ({ isDark, toggleDark });
```

directly in the template

```html
<script setup lang="ts">
	import { useDarks } from '../composables/useDarks'

	const { isDark, toggleDark } = useDarks()
</script>

<template>
	<div m="6">Hello，This is the tov template！！</div>
	<div m="6" cursor="pointer" @click="toggleDark()">
		light: {{ isDark }} click me!!
	</div>
</template>
```

Details can be seen 👉[vue-dark-switch](https://github.com/dishait/vue-dark-switch)and[vueuse/usedark](https://vueuse.org/core/usedark/#usedark)

<br />

### [13. SWR Request Support](https://cn.attojs.org/)

SWR is a more modern request method, see the article for details 👉[SWR](https://zhuanlan.zhihu.com/p/89570321)。

and[vue-request](https://cn.attojs.org/)Is a`SWR`of`Vue`Version request library.

You can use, for example, request`/api/test`

```html
<script setup lang="ts">
	import { useRequest } from 'vue-request'
	const { data, loading, error } = useRequest('/api/test')
</script>

<template>
	<div>data: {{data}}</div>
	<div>error: {{error}}</div>
	<div>loading: {{loading}}</div>
</template>
```

All the basic data, state and caching are done for you, no need to repackage.

Details can be seen 👉[vue-request](https://cn.attojs.org/)

<br />

### [14. pinia state management](https://pinia.vuejs.org/)

`pinia`Is the next generation of state management library, than`vuex`simpler,`ts`Support is better.

you can at`src/stores`Define the state in .

For example create`src/stores/counter.ts`👇

```ts
// src/stores/counter.ts
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => {
    return { count: 0 };
  },
  actions: {
    inc() {
      this.count++;
    },
  },
});
```

After defining`setup`can be used directly in

```html
<!-- src/pages/index.vue -->
<script setup lang="ts">
    import { useCounterStore } from "../stores/counter"
    const Counter = useCounterStore()
<script>

<template>
    <div @click="Counter.inc">{{Counter.count}}</div>
</template>
```

More specific usage can be seen 👉[beans](https://pinia.vuejs.org/)

<br />

### [15. pnpm package manager](https://pnpm.io/zh/)

`pnpm`It is a very good package manager, faster, more space-saving and more reasonable.

Details can be seen 👉[pnpm](https://pnpm.io/zh/)

<br />

### [16. Jump progress bar support](https://github.com/rstacruz/nprogress)

Jump progress bar by`nprogress`realized, available at`src/styles/main.css`Adjust color matching.

```css
/** src/styles/main.css **/

/** 省略其他样式 **/
#nprogress .bar {
	@apply bg-blue-700 bg-opacity-75; /** 配色 **/

	position: fixed;
	z-index: 1031;
	top: 0;
	left: 0;

	width: 100%;
	height: 2px;
}
```

about`@apply`Depend on[@unocss/transformer-directives](https://www.npmjs.com/package/@unocss/transformer-directives)accomplish.

Details can be seen 👉[nprogress](https://github.com/rstacruz/nprogress)

<br />

### [17. Development panel support](https://github.com/webfansplz/vite-plugin-vue-devtools)

This panel allows you to understand all aspects of the project during the development process, currently only valid in the development environment

Details can be seen 👉[vite-plugin-vue-devtools](https://github.com/webfansplz/vite-plugin-vue-devtools)

<br />

### [18. Plugin autoloading support](https://github.com/dishait/vite-plugin-use-modules)

only need to be in`src/plugins`Just export the default function in the module in .

For example`pinia`, just do this.

```ts
// src/plugins/pinia.ts
// 导出 default 接口
export default createPinia(); // pinia 将被自动安装
```

or`vue-router`

```ts
// src/plugins/router.ts
// 省略各种配置

// 导出 default 接口
export default router; // 路由将被自动安装
```

certainly`pinia`and`vue-router`They are already preset and you don't need to re-follow them.

Details can be seen 👉[vite-plugin-use-modules](https://github.com/dishait/vite-plugin-use-modules)

<br />

### [19. Vitest unit testing support](https://vitest.dev/guide/#configuring-vitest)

exist`src/test`Unit tests can be written in the directory.

```ts
import { assert, describe, expect, it } from "vitest";

describe("suite name", () => {
  it("foo", () => {
    expect(1 + 1).toEqual(2);
    expect(true).to.be.true;
  });

  it("bar", () => {
    assert.equal(Math.sqrt(4), 2);
  });

  it("snapshot", () => {
    expect({ foo: "bar" }).toMatchSnapshot();
  });
});
```

Then enter the command in the terminal to test

```shell
pnpm test
```

or generate a report

```shell
pnpm coverage
```

Details can be seen 👉[gear](https://vitest.dev/guide/#configuring-vitest)

<br />

### [20. Support Markdown rendering](https://github.com/antfu/vite-plugin-vue-markdown)

`markdown`Rendering can be used to write some simple instructions.

Just put`src/pages`The page suffix under the directory is given by`.vue`changed to`.md`, and then change to`markdown`Grammar is fine.

For example`src/pages/about.md`

```md
## About Page

> The page is markdown file
```

when you route to`/about`Then you can see the corresponding`markdown`rendering.

Of course also supported in`markdown`embedded in`vue`components

Details can be seen 👉[vite-plugin-vue-markdown](https://github.com/antfu/vite-plugin-vue-markdown)

<br />
<br />

### 21. Path Aliases`~`support

`~`The path will be directed to the project's`src`directories, with better type hints

```html
<!-- src/pages/index.vue -->
<script lang="ts" setup>
	import { useDarks } from '~/composables/dark'

	// 等价于
	// import { useDarks } from "../composables/dark"
</script>
```

<br />
<br />

### 22. Command line automatic creation and deletion

Just enter 👇 to create a standard page or component

```shell
pnpm auto:create
```

Of course you can also delete it 👇

```shell
pnpm auto:remove
```

<br />
<br />

### [23. i18n internationalization support](https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n)

In daily business, there may be some scenarios that require internationalization. Then only need in the root directory`locales`Different languages ​​are defined in`yml`Out-of-the-box internationalization support can be achieved in the project.

for example`locales/en.yml`is used to define English content that requires internationalization support.

```yml
# locales/en.yml
# English

index: index
about: about
not-found: Notfound
```

another example`locales/zh-CN.yml`is used to define Chinese content that needs internationalization support.

```yml
# locales/简体中文.yml
# 中文

index: 主页
about: 关于
not-found: 未找到页面
```

At this point, it can be used in the component 👇

```html
<script setup>
	// 该api是全局按需引入的，所以可以直接用
	// t 用来绑定特定的语块
	const { t, locale } = useI18n()

	const toggleLocale = () => {
		// locale.value 用来表示当前所属语言，可修改进行语言切换
		locale.value = locale.value === 'zh-CN' ? 'en' : '简体中文'
	}
</script>

<template>
	<div m="6" cursor="pointer" @click="toggleLocale()">
		language: {{ t('index') }} click me!!
	</div>
</template>
```

A more detailed description can be found in the`vite 插件`👉[@intlify/vite-plugin-vue-i18n](https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n)and`vue插件`[view-i18n](https://github.com/intlify/vue-i18n-next)。

in addition`yml`It is a popular configuration file format in the front-end at present, the grammar can be seen from Mr. Ruan Yifeng 👉[YAML language tutorial](http://www.ruanyifeng.com/blog/2016/07/yaml.html)。

`vscode`Plugin recommendation:

-   All in one`i18n`support[i18n Ally](https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally)

<br />
<br />

### 24. pretty`404`page support

In daily business, when a user visits a page that does not exist, we should give our user a non-existent information prompt, and the page of this prompt is`404`Page.

You can visit a non-existent page at will, for example`/bucunzai`

![notFound](public/docs/notFound.png)

Of course there is also a dark mode adaptation.

![notFound-dark](public/docs/notFound-dark.png)

Simple responsive adaptation is also supported. For example, it will display correctly on mobile browsers.

Of course if this`404`cover is not to your liking, you can find it in the`pages/[...notFound].vue`modified in`img`labeled`src`. default is`32.svg`,support`1 ~ 33`of`svg`。

For example, default 👇

```html
<!-- 省略各种代码 -->
<template>
	<img src="/notFound/32.svg" class="cover" alt="page not found" />
</template>
```

Revise`/notFound/32.svg`for`/notFound/33.svg`

```html
<!-- 省略各种代码 -->
<template>
	<img src="/notFound/33.svg" class="cover" alt="page not found" />
</template>
```

You can switch the cover to 👇

![notFound-other](public/docs/notFound-other.png)

<br />
<br />

### 25.[`tsx`support](https://github.com/vitejs/vite/tree/main/packages/plugin-vue-jsx)

only need to`tsx`file in`src/components`Next, you can use it directly in the template.

For example you have a`src/components/foo.tsx`file, then it can be used directly in the template.

```tsx
// src/components/foo.tsx
export default defineComponent({
  render() {
    return <div>Test</div>;
  },
});
```

```html
<template>
	<foo />
</template>
```

Details can be seen 👉[@vitejs/plugin-vue-jsx](https://github.com/vitejs/vite/tree/main/packages/plugin-vue-jsx)

<br />
<br />

### 26.[`gzip`Resource compression support](https://github.com/vbenjs/vite-plugin-compression)

out-of-the-box in production`gzip`Resource compression, no configuration required.

Details can be seen 👉[vite-plugin-compression](https://github.com/vbenjs/vite-plugin-compression)

<br />
<br />

### 27.[Environment variable configuration support](https://cn.vitejs.dev/guide/env-and-mode.html)

in the root directory`.env`Used to configure environment variables for the project.

<br />
<br />

### 28. Unified code specification and style support

Depend on[eslint](https://github.com/eslint/eslint)Provided code specification verification, use[prettier](https://github.com/prettier/prettier)Unified code style.

Depend on[husky](https://github.com/typicode/husky)+[lint-staged](https://github.com/okonet/lint-staged)which provided`commit`time check.

<br />
<br />

### 29.[The production environment automatically removes the development log](https://github.com/dishait/vite-plugin-removelog)

production environment`console.log`，`console.warn`and`console.error`and other logs will be automatically removed to avoid log leaks during development.

Details can be seen 👉[vite-plugin-removelog](https://github.com/dishait/vite-plugin-removelog)

<br />
<br />

### 30.[defineOptions support](https://vuejs.org/api/sfc-script-setup.html#defineoptions)

```html
<script setup lang="ts">
	// 定义额外的 options
	defineOptions({
		name: 'Foo',
	})
</script>
```

<br />
<br />

### 31.[echarts support](https://github.com/ecomfe/vue-echarts)

easy to integrate[view-echarts](https://github.com/ecomfe/vue-echarts), can be seen in detail[echarts](https://github.com/apache/echarts)and[view-echarts](https://github.com/ecomfe/vue-echarts)document

<br />
<br />

### 32.[Global generic toast notification](https://github.com/euvl/vue-notification)

Integrated[vue-toastification](https://github.com/euvl/vue-notification), you can use the`src`Use it in all files in the directory 👇

```ts
// src 下任何文件都是可用的
toast.info("信息");
toast.error("失败");
toast.warning("警告");
toast.success("成功");
```

Details can be seen 👉[Global generic toast notification](https://github.com/euvl/vue-notification)

<br />
<br />

### 33.[Global generic axios request encapsulation](https://www.axios-http.cn/)

encapsulated[axios](https://www.axios-http.cn/), you can use the`src`Use it in all files in the directory 👇

```ts
// src 下任何文件都是可用的
http.get("...");
http.post("...", { name: "张三", age: 20 });
// ... 以此类推
```

the above`http`yes`axios`Individually created instances with simple error notifications and response data transformations. Specific visible`src/composables/http.ts`。

If you like responsive style and`swr`, you can follow[vue-request](https://github.com/attojs/vue-request)use together

```ts
import { useRequest } from "vue-request";

const { data, error, loading } = useRequest(() => http.get("..."));

loading.value; // 是否加载中

error.value; // 错误内容

data.value; // 响应数据
```

Should`http`example of`baseURL`Taken from environment variable file`.env`of`VITE_API_BASE_URL`,The default is`/api`, you can change it according to your needs.

Details can be seen 👉[axios](https://www.axios-http.cn/)

<br />
<br />

### 34.[Automatically generate environment variable type declarations](https://github.com/dishait/vite-plugin-env-types)

exist`vite`In the project, although we can`.env`Set environment variables in the front-end source code and pass`import.meta.env`to use them, but type hints are terrible. This feature can automatically generate type declarations to achieve real-time type hints, so that you don't need to care about and manage them manually.

Details can be seen 👉[vite-plugin-env-types](https://github.com/dishait/vite-plugin-env-types)

<br />
<br />

35. [`renovate`Automatically update dependencies](https://github.com/renovatebot/renovate)

`github`of[renovate](https://github.com/marketplace/renovate)The robot periodically checks the`github`Check the dependencies and submit to the warehouse`pr`, update strategy 👉[unjs/renovate-config](https://github.com/unjs/renovate-config)

Details can be seen 👉[renovate](https://github.com/renovatebot/renovate)

<br />
<br />

36. [Automatic version update and build`CHANGELOG`](https://github.com/unjs/changelogen)

when we execute`pnpm run release`, it will automatically update the version and update the[CHANGELOG.md](./CHANGELOG.md)。

Details can be seen 👉[unjs/changelogen](https://github.com/unjs/changelogen)

<br />
<br />
<br />

## License

Made with[markthree](./LICENSE)

Published under[MY License](./LICENSE).

<br />
