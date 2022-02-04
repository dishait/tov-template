import type { Resolver } from 'unplugin-auto-import/dist/types'

/**
 * store 自动引入解析器
 */
export const StoresResolver: Resolver = name => {
	const inStores = name.endsWith('Store')
	if (inStores) {
		return {
			path: `~/stores/${name}`
		}
	}
}
