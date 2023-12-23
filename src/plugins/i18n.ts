import { defu } from 'defu'
import { createI18n } from 'vue-i18n'

const yamls = import.meta.glob('../../locales/*/**.y(a)?ml', {
	eager: true,
})

const languages = Object.entries(yamls).map(([key, value]) => {
	const yaml = key.endsWith('.yaml')
	key = key.slice(14, yaml ? -5 : -4)
	// 如果有子模块，则分割
	if (key.includes('/')) {
		key = key.split('/')[0]
	}
	// @ts-ignore
	return { [key]: value.default }
})

const messages = defu({}, ...languages)

// localStorage 中的 locale，第二个参数为默认值
// https://vueuse.org/core/useStorage/#usestorage
const storageLocale = useStorage('locale', '简体中文')

export const i18n = createI18n({
	messages,
	legacy: false,
	globalInjection: true,
	allowComposition: true,
})

// 同步本地 localStorage 和 i18n
// https://vueuse.org/shared/syncRef/#syncref
syncRef(storageLocale, i18n.global.locale)

export default i18n
