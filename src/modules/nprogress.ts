import { router } from './router'
import { useNProgress } from '@vueuse/integrations/useNProgress'

// https://vueuse.org/integrations/useNProgress/
export default () => {
	const { isLoading } = useNProgress()

	router.beforeEach(() => {
		isLoading.value = true
	})
	router.afterEach(() => {
		isLoading.value = false
	})
}
