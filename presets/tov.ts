import { resolve } from 'path'
import Pages from 'vite-plugin-pages'
import Icons from 'unplugin-icons/vite'
import Inspect from 'vite-plugin-inspect'
import Windicss from 'vite-plugin-windicss'
import Layouts from 'vite-plugin-vue-layouts'
import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import {
	NaiveUiResolver,
	ElementPlusResolver,
	VueUseComponentsResolver
} from 'unplugin-vue-components/resolvers'
import { viteMockServe } from 'vite-plugin-mock'
import Markdown from 'vite-plugin-md'
import Vue from '@vitejs/plugin-vue'
import Prism from 'markdown-it-prism'
import I18n from '@intlify/vite-plugin-vue-i18n'
import ViteRestart from 'vite-plugin-restart'
import vueJsx from '@vitejs/plugin-vue-jsx'
import viteCompression from 'vite-plugin-compression'
import {
	StoresResolver,
	ComposablesResolver
} from './shared/resolvers'

const markdownWrapperClasses =
	'prose md:prose-lg lg:prose-lg dark:prose-invert text-left p-10 prose-slate prose-img:rounded-xl prose-headings:underline prose-a:text-blue-600'

export default () => {
	return [
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
				IconsResolver({
					prefix: ''
				}),
				NaiveUiResolver(),
				ElementPlusResolver(),
				VueUseComponentsResolver()
			]
		}),
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
				StoresResolver,
				ComposablesResolver,
				ElementPlusResolver()
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
		viteCompression()
	]
}
