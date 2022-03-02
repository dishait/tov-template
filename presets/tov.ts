import { resolve } from 'path'
import Vue from '@vitejs/plugin-vue'
import Prism from 'markdown-it-prism'
import Markdown from 'vite-plugin-md'
import Pages from 'vite-plugin-pages'
import Icons from 'unplugin-icons/vite'
import Inspect from 'vite-plugin-inspect'
import Windicss from 'vite-plugin-windicss'
import vueJsx from '@vitejs/plugin-vue-jsx'
import ViteRestart from 'vite-plugin-restart'
import Layouts from 'vite-plugin-vue-layouts'
import I18n from '@intlify/vite-plugin-vue-i18n'
import { viteMockServe } from 'vite-plugin-mock'
import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import viteCompression from 'vite-plugin-compression'

import {
	dirResolver,
	DirResolverHelper
} from 'vite-auto-import-resolvers'
import {
	ArcoResolver,
	NaiveUiResolver,
	AntDesignVueResolver,
	ElementPlusResolver,
	VueUseComponentsResolver
} from 'unplugin-vue-components/resolvers'
import OptimizationPersist from 'vite-plugin-optimize-persist'
import PkgConfig from 'vite-plugin-package-config'
import { FixLayoutsModuleHmr } from './shared/module'

const markdownWrapperClasses =
	'prose md:prose-lg lg:prose-lg dark:prose-invert text-left p-10 prose-slate prose-img:rounded-xl prose-headings:underline prose-a:text-blue-600'

export default () => {
	return [
		// 将包信息文件作为 vite 的配置文件之一，为 vite-plugin-optimize-persist 所用
		PkgConfig(),
		// 依赖预构建分析，提高大型项目性能
		OptimizationPersist(),
		// vue 官方插件，用来解析 sfc
		Vue({
			include: [/\.vue$/, /\.md$/]
		}),
		// markdown 编译插件
		Markdown({
			wrapperClasses: markdownWrapperClasses,
			markdownItSetup(md) {
				md.use(Prism)
			}
		}),
		// 文件路由
		Pages({
			extensions: ['vue', 'md', 'tsx']
		}),
		// 布局系统
		Layouts(),
		// 调试工具
		Inspect(),
		// windicss 插件
		Windicss({
			safelist: markdownWrapperClasses
		}),
		// mock 服务
		viteMockServe(),
		// https://icones.netlify.app/
		Icons({
			autoInstall: true
		}),
		// 组件自动按需引入
		Components({
			extensions: ['vue', 'md', 'tsx'],
			include: [/\.md$/, /\.vue$/, /\.tsx$/],
			dts: resolve(__dirname, './types/components.d.ts'),
			resolvers: [
				ArcoResolver(),
				IconsResolver(),
				NaiveUiResolver(),
				ElementPlusResolver(),
				AntDesignVueResolver(),
				VueUseComponentsResolver()
			]
		}),
		// 目录下 api 按需自动引入辅助插件
		DirResolverHelper(),
		// api 自动按需引入
		AutoImport({
			dts: './presets/types/auto-imports.d.ts',
			imports: [
				'vue',
				'pinia',
				'vue-i18n',
				'vue-router',
				'@vueuse/core'
			],
			resolvers: [
				ElementPlusResolver(),
				dirResolver({ prefix: 'use' }),
				dirResolver({
					target: 'stores',
					suffix: 'Store'
				})
			]
		}),
		// i18n 国际化支持
		I18n({
			runtimeOnly: true,
			compositionOnly: true,
			include: [resolve(__dirname, '../locales/**')]
		}),
		// 预设热重启服务
		ViteRestart({
			restart: ['presets/tov.[jt]s', 'presets/shared/**/*']
		}),
		// tsx 支持
		vueJsx(),
		// 生产环境资源压缩
		viteCompression(),
		// 对 vite-plugin-vue-layouts 的 hmr 问题的临时处理
		// 如果  被接受的话，未来可能会移除
		FixLayoutsModuleHmr()
	]
}
