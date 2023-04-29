import {
	defineConfig,
	presetAttributify,
	presetTypography,
	presetUno,
} from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
	transformers: [transformerDirectives()],
	presets: [presetAttributify(), presetUno(), presetTypography()],
})
