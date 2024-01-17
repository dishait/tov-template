import { existsSync } from 'fs'
import { gray } from 'kolorist'
import type { Plugin } from 'vite'
import { createConsola } from 'consola'
import { isPackageExists } from 'local-pkg'
import { browserslistToTargets } from 'lightningcss'
import { defaultBuildTargets } from '../shared/detect'

const name = 'vite-plugin-fire-lightningcss'

const logger = createConsola().withTag('css')

/**
 * 智能开启 lightningcss (如果不使用预处理器，或者 postcss)
 */
export function Lightningcss(): Plugin {
	const packages = ['less', 'sass', 'stylus']
	return {
		name,
		config(config) {
			config.css ??= {}
			config.build ??= {}
			const hasPreprocessor = packages.some((p) => isPackageExists(p))

			const { postcss, modules, transformer } = config.css
			const conflictConfiguration = [postcss, modules, transformer].some(
				(c) => !isUndefined(c),
			)

			const hasPostcssConfigFile = [
				'postcss.config.js',
				'postcss.config.cts',
				'postcss.config.ts',
			].some((c) => existsSync(c))

			// 如果有预处理器，冲突配置或者 postcss 配置文件则禁用
			const disabled =
				hasPreprocessor || conflictConfiguration || hasPostcssConfigFile
			if (!disabled) {
				const transformer = 'lightningcss'
				config.css.transformer = transformer
				let tip = `${transformer} ${gray(transformer)}`

				if (isUndefined(config.build.cssMinify)) {
					config.build.cssMinify = 'lightningcss'
					tip = `${transformer} ${gray('(transformer + cssMinify)')}`
				}

				if (isUndefined(config.css.lightningcss?.targets)) {
					config.css.lightningcss ??= {}
					config.css.lightningcss.targets =
						browserslistToTargets(defaultBuildTargets)
				}
				logger.success(tip)
			}
		},
	}

	function isUndefined(v: unknown): v is undefined {
		return typeof v === 'undefined'
	}
}
