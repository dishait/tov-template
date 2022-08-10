import { init } from 'ityped'

export default (strings: string[]) => {
	const typedRef = ref<Element>()

	onMounted(() => {
		init(typedRef.value!, {
			strings,
			showCursor: false,
			disableBackTyping: true,
		})
	})
	return typedRef
}
