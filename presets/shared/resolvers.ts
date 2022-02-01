import { Resolver } from 'unplugin-auto-import/dist/types'

/**
 * 组合式 api 自动引入解析器
 */
export const ComposablesResolver: Resolver = name => {
	const inComposables =
		name.startsWith('use') && !name.endsWith('Store')
	if (inComposables) {
		return {
			path: `~/composables/${name}`
		}
	}
}

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
