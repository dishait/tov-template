import { router } from './router'

const title = useTitle(import.meta.env.VITE_APP_TITLE)

router.beforeEach((r) => {
	const originTitle = import.meta.env.VITE_APP_TITLE

	if (r.path === '/') {
		title.value = `${originTitle} · home`
	} else {
		title.value = originTitle + r.path.replaceAll('/', ' · ')
	}
})
