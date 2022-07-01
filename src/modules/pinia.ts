import type { App } from 'vue'
import persistedstate from 'pinia-plugin-persistedstate'

export default (app: App) => {
	const pinia = createPinia()

	pinia.use(persistedstate)

	app.use(pinia)
}
