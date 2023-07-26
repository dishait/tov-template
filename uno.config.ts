import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetTypography,
	presetUno,
} from 'unocss'

import presetAutoprefixer from './presets/autoprefixer'
import transformerDirectives from '@unocss/transformer-directives'
import transformerVariantGroup from '@unocss/transformer-variant-group'

export default defineConfig({
	transformers: [transformerDirectives(), transformerVariantGroup()],
	presets: [
		presetAttributify(),
		presetIcons({
			autoInstall: true,
		}),
		presetUno(),
		presetTypography(),
		presetAutoprefixer(),
	],
})
