import { createConsola } from 'consola'
import { gray } from 'kolorist'
import type { Plugin } from 'vite'

const logger = createConsola().withTag('optimize')
export function Optimize(): Plugin {
	return {
		name: 'vite-optimize',
		config(config) {
			config.css ??= {}
			config.optimizeDeps ??= {}
			config.css.preprocessorMaxWorkers = true
			config.optimizeDeps.holdUntilCrawlEnd = false
			logger.success(
				`optimize ${gray('(preprocessorMaxWorkers + closeHoldUntilCrawlEnd)')}`,
			)
		},
	}
}
