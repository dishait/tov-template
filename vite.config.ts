import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'

import Tov from './presets'

export const _dirname =
	typeof __dirname !== 'undefined'
		? __dirname
		: dirname(fileURLToPath(import.meta.url))

export default defineConfig({
	resolve: {
		alias: {
			'~/': resolve(_dirname, 'src'),
		},
	},
	plugins: [Tov()],
})
