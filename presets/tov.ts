import { resolve } from 'path'
import { env } from './shared/env'
import Vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import Inspect from 'vite-plugin-inspect'
import Markdown from './plugins/markdown'
import Windicss from 'vite-plugin-windicss'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Rmovelog from 'vite-plugin-removelog'
import I18n from '@intlify/vite-plugin-vue-i18n'
import { viteMockServe } from 'vite-plugin-mock'
import VueRouter from 'unplugin-vue-router/vite'
import Layouts from 'vite-plugin-vue-meta-layouts'
import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import viteCompression from 'vite-plugin-compression'
import { markdownWrapperClasses } from './plugins/markdown'
import { VueRouterAutoImports } from 'unplugin-vue-router'

import {
	ArcoResolver,
	IduxResolver,
	VantResolver,
	DevUiResolver,
	QuasarResolver,
	ViewUiResolver,
	InklineResolver,
	TDesignResolver,
	NaiveUiResolver,
	Vuetify3Resolver,
	VarletUIResolver,
	LayuiVueResolver,
	PrimeVueResolver,
	HeadlessUiResolver,
	ElementPlusResolver,
	AntDesignVueResolver,
	VueUseComponentsResolver,
} from 'unplugin-vue-components/resolvers'
import Modules from 'vite-plugin-use-modules'
import { GenerateTitle } from './plugins/html'
import VueMarcos from 'unplugin-vue-macros/vite'
import { AutoImportResolvers, normalizeResolvers } from './shared/resolvers'

export default () => {
	return [
		// https://github.com/sxzz/unplugin-vue-macros/blob/main/README-zh-CN.md
		VueMarcos({
			hoistStatic: true,
			defineOptions: true,
		}),
		// https://github.com/posva/unplugin-vue-router
		VueRouter({
			routesFolder: 'src/pages',
			extensions: ['.md', '.vue', '.tsx'],
			dts: 'presets/types/type-router.d.ts',
		}),
		// 模块自动加载
		Modules({
			auto: true,
		}),
		// 生成 title
		GenerateTitle(),
		// vue 官方插件，用来解析 sfc
		Vue({
			include: [/\.vue$/, /\.md$/],
		}),
		// markdown 编译插件
		Markdown(),
		// 布局系统
		Layouts(),
		// 调试工具
		Inspect({
			enabled: env.VITE_APP_INSPECT,
		}),
		// windicss 插件
		Windicss({
			safelist: markdownWrapperClasses,
		}),
		// mock 服务
		viteMockServe({
			prodEnabled: env.VITE_APP_MOCK_IN_PRODUCTION,
		}),
		// https://icones.netlify.app/
		Icons({
			autoInstall: true,
		}),
		// 组件自动按需引入
		Components({
			extensions: ['md', 'vue', 'tsx'],
			dts: resolve(__dirname, './types/components.d.ts'),
			types: [
				{
					from: 'vue-router',
					names: ['RouterLink', 'RouterView'],
				},
			],
			resolvers: normalizeResolvers({
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
					[TDesignResolver(), 'tdesign-vue-next'],
					[InklineResolver(), '@inkline/inkline'],
					[ElementPlusResolver(), 'element-plus'],
					[HeadlessUiResolver(), '@headlessui/vue'],
					[ArcoResolver(), '@arco-design/web-vue'],
					[AntDesignVueResolver(), 'ant-design-vue'],
					[VueUseComponentsResolver(), '@vueuse/components'],
				],
				include: [IconsResolver()],
			}),
		}),
		// api 自动按需引入
		env.VITE_APP_API_AUTO_IMPORT &&
			AutoImport({
				dirs: [
					env.VITE_APP_API_AUTO_IMPORT && 'src/stores/**/*.ts',
					env.VITE_APP_API_AUTO_IMPORT && 'src/composables/**/*.ts',
				],
				dts: './presets/types/auto-imports.d.ts',
				imports: [
					'vue',
					'pinia',
					'vue-i18n',
					'@vueuse/core',
					VueRouterAutoImports,
				],
				resolvers: AutoImportResolvers,
				eslintrc: {
					enabled: true,
					globalsPropValue: true,
					filepath: 'presets/eslint/.eslintrc-auto-import.json',
				},
			}),
		// i18n 国际化支持
		I18n({
			runtimeOnly: false,
			compositionOnly: true,
			include: [resolve(__dirname, '../locales/**')],
		}),
		// tsx 支持
		vueJsx(),
		// 生产环境资源压缩
		viteCompression({
			// @ts-ignore
			algorithm: env.VITE_APP_COMPRESSINON_ALGORITHM,
		}),
		// 生产环境下移除 console.log, console.warn, console.error
		Rmovelog(),
	]
}
