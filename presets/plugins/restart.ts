import type { Plugin } from 'vite'
import { utimes } from 'fs/promises'
import { r } from '../shared/path'
import { debounce } from 'perfect-debounce'
import { resolve } from 'path'
import { slash } from 'vite-layers'

const defaultPaths = ['package.json', 'pnpm-lock.yaml']

/**
 * 强制重启
 * @description 如果监听更新的话，强制重启项目
 * @param  paths 监听重启路径，默认为 ['package.json', 'pnpm-lock.yaml']
 */
export function Restart(paths = defaultPaths): Plugin {
	paths = paths.map((path) => slash(resolve(path)))
	const restart = debounce(async function touch() {
		const time = new Date()
		await utimes(r('vite.config.ts'), time, time)
	}, 1000)
	return {
		name: 'vite-plugin-force-restart',
		apply: 'serve',
		async watchChange(id) {
			if (paths.includes(id)) {
				await restart()
			}
		},
	}
}
