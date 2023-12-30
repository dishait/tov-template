import type { Plugin } from 'vite'
import { r } from '../shared/path'

/**
 * 别名插件
 * @description 支持 `~` 和 `@` 别名到 `src`
 */
export function Alias(): Plugin {
	const src = r('./src')
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
