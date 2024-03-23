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
			const src = './src/**/*'
			config.server ??= {}
			config.server.warmup ??= {}
			config.server.warmup.clientFiles ??= []
			if (!config.server.warmup.clientFiles.includes(src)) {
				config.server.warmup.clientFiles.push(src)
			}
		},
	}
}
