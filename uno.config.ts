import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetTypography,
	presetUno,
} from 'unocss'

import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
	transformers: [transformerDirectives()],
	presets: [
		presetAttributify(),
		presetIcons({
			autoInstall: true,
		}),
		presetUno(),
		presetTypography(),
	],
})
