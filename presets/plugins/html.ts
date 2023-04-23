import type { Plugin } from 'vite'

export function GenerateTitle(): Plugin {
	let title: string
	const reg = /<title>(.*?)<\/title>/
	return {
		name: 'vite-plugin-env-to-generate-title',
		configResolved(config) {
			title = config.env.VITE_APP_TITLE
		},
		transformIndexHtml(html) {
			return html.replace(reg, `<title>${title}</title>`)
		},
	}
}
