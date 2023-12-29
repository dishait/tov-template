import { resolve } from 'path'
import type { Plugin } from 'vite'

/**
 * 别名插件
 * @description 支持 `~` 和 `@` 别名到 `src`
 */
export function Alias(root = '.'): Plugin {
	const src = resolve(root, './src')
	return {
		name: 'vite-alias',
		enforce: 'pre',
		config(config) {
			config.resolve ??= {}
			config.resolve.alias = [
				{
					find: /^~/,
					replacement: src,
				},
				{
					find: /^@\//,
					replacement: src + '/',
				},
			]
		},
	}
}
