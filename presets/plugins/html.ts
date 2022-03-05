import { Plugin } from 'vite'

export const GenerateTitle = (): Plugin => {
	let title: string
	return {
		name: 'vite-plugin-env-to-generate-title',
		configResolved(config) {
			title = config.env.VITE_APP_TITLE
		},
		transformIndexHtml(html) {
			return html.replace(
				/<title>(.*?)<\/title>/,
				`<title>${title}</title>`
			)
		}
	}
}
