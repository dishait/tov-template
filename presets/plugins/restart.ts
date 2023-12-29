import type { Plugin } from 'vite'
import { utimes } from 'fs/promises'
import { debounce } from 'perfect-debounce'

const defaultPaths = ['package.json', 'pnpm-lock.yaml']

/**
 * 强制重启
 * @description 如果监听更新的话，强制重启项目
 * @param  paths 监听重启路径，默认为 ['package.json', 'pnpm-lock.yaml']
 */
export function Restart(paths = defaultPaths): Plugin {
	const restart = debounce(async function touch() {
		const time = new Date()
		await utimes('vite.config.ts', time, time)
	}, 1000)
	return {
		name: 'vite-plugin-force-restart',
		apply: 'serve',
		configureServer({ watcher }) {
			watcher.add(paths).on('all', async (_, path) => {
				if (paths.includes(path)) {
					await restart()
				}
			})
		},
	}
}
