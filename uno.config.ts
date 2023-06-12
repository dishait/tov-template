import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetTypography,
	presetUno,
} from 'unocss'

import presetAutoprefixer from 'unocss-preset-autoprefixer'
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
		presetAutoprefixer(['defaults', 'not IE 11']),
	],
})
