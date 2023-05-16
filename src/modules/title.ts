import { router } from './router'

useTitle(
	() => {
		const { path } = router.currentRoute.value
		if (path === '/') {
			return '· home'
		}
		return path.replaceAll('/', ' · ')
	},
	{
		titleTemplate: `${import.meta.env.VITE_APP_TITLE} %s`,
	}
)
