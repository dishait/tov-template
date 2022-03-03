import { normalizePath } from 'vite'
import type { Plugin, ModuleNode } from 'vite'

interface Options {
	layoutsDirs?: string | string[]
}

// 对 vite-plugin-vue-layouts 的 hmr 问题的临时处理
// 如果 https://github.com/JohnCampionJr/vite-plugin-vue-layouts/pull/58 被接受的话，未来可能会移除
export const FixLayoutsHmr = (
	options?: Options
): Plugin => {
	const { layoutsDirs = 'src/layouts' } = options || {}

	const MODULE_ID_VIRTUAL =
		'/@vite-plugin-vue-layouts/generated-layouts'

	return {
		name: 'vite-plugin-fix-layouts-hmr',
		configureServer({ watcher, moduleGraph, ws }) {
			watcher.add(layoutsDirs)

			const reloadModule = (
				module: ModuleNode | undefined,
				path = '*'
			) => {
				if (module) {
					moduleGraph.invalidateModule(module)
					if (ws) {
						ws.send({
							path,
							type: 'full-reload'
						})
					}
				}
			}

			const updateVirtualModule = () => {
				const module = moduleGraph.getModuleById(
					MODULE_ID_VIRTUAL
				)

				reloadModule(module)
			}

			watcher.on('add', () => {
				updateVirtualModule()
			})

			watcher.on('unlink', () => {
				updateVirtualModule()
			})

			watcher.on('change', async path => {
				path = `/${normalizePath(path)}`
				const module = await moduleGraph.getModuleByUrl(
					path
				)
				reloadModule(module, path)
			})
		}
	}
}
