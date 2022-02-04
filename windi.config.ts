import Typography from 'windicss/plugin/typography'
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
	darkMode: 'class',
	attributify: false, // 属性化css，默认关闭
	plugins: [Typography]
})
