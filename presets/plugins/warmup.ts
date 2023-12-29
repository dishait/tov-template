import type { Plugin } from 'vite'

/**
 * 预热
 * @description 内置的预热，可以加快冷启动
 */
export function Warmup(): Plugin {
	return {
		name: 'vite-plugin-warmup',
		apply: 'serve',
		config(config) {
			config?.server?.warmup?.clientFiles?.push('./src/**/*')
		},
	}
}
