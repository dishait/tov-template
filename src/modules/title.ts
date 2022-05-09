import { router } from './router'

const title = useTitle(import.meta.env.VITE_APP_TITLE)

router.beforeEach((r) => {
	const originTitle = import.meta.env.VITE_APP_TITLE
	const name = r.name?.toString().toLowerCase()
	title.value = name === 'index' ? originTitle : `${originTitle} | ${name}`
})
