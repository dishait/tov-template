import Prism from 'markdown-it-prism'
import UnoCss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import {
	AntDesignVueResolver,
	ArcoResolver,
	DevUiResolver,
	ElementPlusResolver,
	HeadlessUiResolver,
	IduxResolver,
	InklineResolver,
	LayuiVueResolver,
	NaiveUiResolver,
	PrimeVueResolver,
	QuasarResolver,
	TDesignResolver,
	VantResolver,
	VarletUIResolver,
	ViewUiResolver,
	VueUseComponentsResolver,
	Vuetify3Resolver,
} from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import Markdown from 'unplugin-vue-markdown/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import Router from 'unplugin-vue-router/vite'

import { AutoGenerateImports, vue3Presets } from 'vite-auto-import-resolvers'
import Compression from 'vite-plugin-compression'
import EnvTypes from 'vite-plugin-env-types'
import { viteMockServe as Mock } from 'vite-plugin-mock'
import Removelog from 'vite-plugin-removelog'
import Modules from 'vite-plugin-use-modules'
import VueDevTools from 'vite-plugin-vue-devtools'
import Layouts from 'vite-plugin-vue-meta-layouts'

import I18N from '@intlify/unplugin-vue-i18n/vite'
import Legacy from 'vite-plugin-legacy-swc'
import Vue from '@vitejs/plugin-vue'
import Jsx from '@vitejs/plugin-vue-jsx'

// 内置插件
import {
	Alias,
	Lightningcss,
	Restart,
	Warmup,
	Layers,
	Optimize,
} from './plugins'
import { defaultBuildTargets, detectResolvers, useEnv } from './shared/detect'
import { r } from './shared/path'
import type { PluginOption } from 'vite'

export default function () {
	const env = useEnv()
	const safelist =
		'prose px-2 sm:px-0 md:prose-lg lg:prose-lg dark:prose-invert text-left w-screen prose-slate prose-img:rounded-xl prose-headings:underline prose-a:text-blue-600'

	const plugins: PluginOption[] = [
		/**
		 * vite 配置层
		 * 通过 mode 区分 vite 配置文件 (experimental)
		 */
		Layers(),
		/**
		 * 兼容不支持 esmModule 的浏览器
		 * https://www.npmjs.com/package/@vitejs/plugin-legacy
		 */
		Legacy({
			targets: defaultBuildTargets,
		}),
		/**
		 * 智能启动 lightningcss
		 */
		Lightningcss(),
		/**
		 * 启动优化
		 */
		Optimize(),
		/**
		 * 环境变量类型提示
		 * https://github.com/dishait/vite-plugin-env-types
		 */
		EnvTypes({
			dts: r('presets/types/env.d.ts'),
		}),
		/**
		 * 内置的预热，可以加快冷启动
		 */
		Warmup(),
		/**
		 * 文件路由
		 * https://github.com/posva/unplugin-vue-router
		 */
		Router({
			routesFolder: r('src/pages'),
			dts: r('presets/types/type-router.d.ts'),
			extensions: ['.md', '.vue', '.tsx', '.jsx'],
		}),
		/**
		 * 自动安装 vue 插件
		 * https://github.com/dishait/vite-plugin-use-modules
		 */
		Modules({
			auto: true,
			// 内部使用虚拟模块，运行在前端，所以不需要 r 重写路径
			target: 'src/plugins',
		}),
		/**
		 * vue 官方插件，用来解析 sfc 单文件组件
		 * https://www.npmjs.com/package/@vitejs/plugin-vue
		 */
		Vue({
			include: [/\.vue$/, /\.md$/],
		}),
		/**
		 * 布局系统
		 * https://github.com/dishait/vite-plugin-vue-meta-layouts
		 */
		Layouts({
			skipTopLevelRouteLayout: true,
		}),
		/**
		 * mock 服务
		 * https://github.com/vbenjs/vite-plugin-mock
		 */
		Mock({
			prodEnabled: env.VITE_APP_MOCK_IN_PRODUCTION,
		}),
		/**
		 * 组件自动按需引入
		 * https://github.com/antfu/unplugin-vue-components
		 */
		Components({
			directoryAsNamespace: true,
			include: [/\.vue$/, /\.vue\?vue/, /\.[tj]sx$/, /\.md$/],
			extensions: ['md', 'vue', 'tsx', 'jsx'],
			dts: r('presets/types/components.d.ts'),
			types: [
				{
					from: 'vue-router',
					names: ['RouterLink', 'RouterView'],
				},
			],
			resolvers: detectResolvers({
				onlyExist: [
					[VantResolver(), 'vant'],
					[QuasarResolver(), 'quasar'],
					[DevUiResolver(), 'vue-devui'],
					[NaiveUiResolver(), 'naive-ui'],
					[Vuetify3Resolver(), 'vuetify'],
					[PrimeVueResolver(), 'primevue'],
					[ViewUiResolver(), 'view-design'],
					[LayuiVueResolver(), 'layui-vue'],
					[VarletUIResolver(), '@varlet/ui'],
					[IduxResolver(), '@idux/components'],
					[InklineResolver(), '@inkline/inkline'],
					[ElementPlusResolver(), 'element-plus'],
					[HeadlessUiResolver(), '@headlessui/vue'],
					[ArcoResolver(), '@arco-design/web-vue'],
					[AntDesignVueResolver({ importStyle: false }), 'ant-design-vue'],
					[VueUseComponentsResolver(), '@vueuse/components'],
					[TDesignResolver({ library: 'vue-next' }), 'tdesign-vue-next'],
				],
			}),
		}),
		/**
		 * i18n 国际化支持
		 * https://www.npmjs.com/package/@intlify/unplugin-vue-i18n
		 */
		I18N({
			runtimeOnly: false,
			compositionOnly: true,
			include: ['locales/**'],
		}),
		/**
		 * jsx 和 tsx 支持
		 * https://www.npmjs.com/package/@vitejs/plugin-vue-jsx
		 */
		Jsx(),
		/**
		 * 生产环境资源压缩
		 * https://github.com/vbenjs/vite-plugin-compression
		 */
		Compression({
			// @ts-ignore
			algorithm: env.VITE_APP_COMPRESSINON_ALGORITHM,
		}),
		/**
		 * 别名插件 (内置)
		 * 支持 `~` 和 `@` 别名到 `src`
		 */
		Alias(),
		/**
		 * 强制重启 (内置)
		 * 如果 package.json 或 pnpm-lock.yaml 更新的话，强制重启
		 */
		Restart(),
		/**
		 * css 原子引擎
		 * https://github.com/unocss/unocss
		 */
		UnoCss({
			safelist: env.VITE_APP_MARKDOWN ? safelist.split(' ') : undefined,
		}),
	]
	/**
	 * 开发面板
	 * https://github.com/webfansplz/vite-plugin-vue-devtools
	 */
	if (env.VITE_APP_DEV_TOOLS) {
		plugins.push(VueDevTools())
	}

	/**
	 * 生产环境下移除 console.log, console.warn, console.error
	 * https://github.com/dishait/vite-plugin-removelog
	 */
	if (process.env.NODE_ENV !== 'debug') {
		plugins.push(Removelog())
	}

	/**
	 * markdown 渲染插件
	 * https://github.com/mdit-vue/unplugin-vue-markdown
	 */
	if (env.VITE_APP_MARKDOWN) {
		plugins.push(
			Markdown({
				wrapperClasses: safelist,
				markdownItSetup(md) {
					md.use(Prism)
				},
			}),
		)
	}

	/**
	 * api 自动按需引入
	 * https://github.com/antfu/unplugin-auto-import
	 */
	if (env.VITE_APP_API_AUTO_IMPORT) {
		const dirs = env.VITE_APP_DIR_API_AUTO_IMPORT
			? ['src/stores/**', 'src/composables/**', 'src/api/**']
			: []
		plugins.push(
			AutoImport({
				dirs,
				vueTemplate: true,
				dts: r('presets/types/auto-imports.d.ts'),
				imports: [
					...AutoGenerateImports({
						include: [...vue3Presets],
						exclude: ['vue-router'],
					}),
					VueRouterAutoImports,
				],
				resolvers: detectResolvers({
					onlyExist: [
						[ElementPlusResolver(), 'element-plus'],
						[TDesignResolver({ library: 'vue-next' }), 'tdesign-vue-next'],
					],
				}),
				eslintrc: {
					enabled: true,
					globalsPropValue: true,
					filepath: r('presets/eslint/.eslintrc-auto-import.json'),
				},
			}),
		)
	}

	return plugins
}
