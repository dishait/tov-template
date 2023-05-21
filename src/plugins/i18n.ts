import { createI18n } from 'vue-i18n'

const messages = Object.fromEntries(
	Object.entries(
		import.meta.glob('../../locales/*.y(a)?ml', {
			eager: true,
		})
	).map(([key, value]) => {
		const yaml = key.endsWith('.yaml')
		// @ts-ignore
		return [key.slice(14, yaml ? -5 : -4), value.default]
	})
)

export const i18n = createI18n({
	legacy: false,
	locale: 'English', // 默认语言
	messages,
})

export default i18n
