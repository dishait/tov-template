
let __unconfig_data;
let __unconfig_stub = function (data) { __unconfig_data = data };
__unconfig_stub.default = (data) => { __unconfig_data = data };
import { resolve } from 'path'
import Tov from './presets/tov'
import { defineConfig } from 'vite'

const __unconfig_default =  defineConfig({
	resolve: {
		alias: {
			'~/': `${resolve(__dirname, 'src')}/`
		}
	},
	plugins: [Tov()]
})

if (typeof __unconfig_default === "function") __unconfig_default();export default __unconfig_data;