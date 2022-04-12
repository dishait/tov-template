import { router } from './router'
import NProgress from 'nprogress'

export default () => {
	router.beforeEach(() => {
		NProgress.start()
	})
	router.afterEach(() => {
		NProgress.done()
	})
}
