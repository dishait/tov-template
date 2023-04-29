import {
	defineConfig,
	presetAttributify,
	presetTypography,
	presetUno,
} from 'unocss'

export default defineConfig({
	presets: [presetAttributify(), presetUno(), presetTypography()],
})
