import { router } from './router'
import { App } from 'vue'
import NProgress from 'nprogress'

export default (app: App) => {
	router.beforeEach(() => {
		NProgress.start()
	})
	router.afterEach(() => {
		NProgress.done()
	})
}
