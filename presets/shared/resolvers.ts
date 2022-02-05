import { basename } from 'path'
import { watch } from 'chokidar'
import type { Resolver } from 'unplugin-auto-import/dist/types'

if (!global.$devServerInitStarted) {
	global.$storeModules = new Set<string>()
	const storesWatcher = watch('./src/stores')
	// 标准化store模块名称
	const normalizeStoreModuleName = (path: string) => {
		const name = basename(path, '.ts')
		const isStore = name.endsWith('Store')
		return isStore ? name : null
	}
	storesWatcher.on('add', path => {
		const moduleName = normalizeStoreModuleName(path)
		if (moduleName) {
			global.$storeModules.add(moduleName)
		}
	})

	storesWatcher.on('unlink', path => {
		const moduleName = normalizeStoreModuleName(path)
		if (moduleName) {
			global.$storeModules.has(moduleName)
		}
	})
}

/**
 * store 自动引入解析器
 */
export const StoresResolver: Resolver = name => {
	const inStores = global.$storeModules.has(name)
	if (inStores) {
		return `~/stores/${name}`
	}
}
