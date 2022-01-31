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
import svgLoader from 'vite-svg-loader'
import vueJsx from '@vitejs/plugin-vue-jsx'

const markdownWrapperClasses =
	'prose md:prose-lg lg:prose-lg dark:prose-invert text-left p-10 prose-slate prose-img:rounded-xl prose-headings:underline prose-a:text-blue-600'

export default () => {
	return [
		Vue({
			include: [/\.vue$/, /\.md$/]
		}),
		Markdown({
			wrapperClasses: markdownWrapperClasses,
			markdownItSetup(md) {
				md.use(Prism)
			}
		}),
		Pages({
			extensions: ['vue', 'md', 'tsx']
		}),
		Layouts(),
		Inspect(),
		Windicss({
			safelist: markdownWrapperClasses
		}),
		viteMockServe(),
		// https://icones.netlify.app/
		Icons({
			autoInstall: true
		}),
		Components({
			dts: resolve(__dirname, './types/components.d.ts'),
			extensions: ['vue', 'md', 'svg', 'tsx'],
			include: [/\.md$/, /\.vue$/, /\.svg$/, /\.tsx$/],
			resolvers: [
				ElementPlusResolver(),
				IconsResolver({
					prefix: ''
				}),
				NaiveUiResolver(),
				VueUseComponentsResolver()
			]
		}),
		AutoImport({
			dts: './presets/types/auto-imports.d.ts',
			imports: [
				'vue',
				'pinia',
				'vue-i18n',
				'vue-router',
				'@vueuse/core'
			],
			resolvers: [ElementPlusResolver()]
		}),
		I18n({
			runtimeOnly: true,
			compositionOnly: true,
			include: [resolve(__dirname, '../locales/**')]
		}),
		ViteRestart({
			restart: ['presets/tov.[jt]s']
		}),
		svgLoader(),
		vueJsx()
	]
}
