/**
 * 获取扩展名
 * @param {string} type 模块类型
 * @param {boolean} isMarkdown 是否是 markdown，默认为 false
 * @returns {string} 扩展名
 */
export const showExt = (type, isMarkdown = false) => {
	const isTs =
		type === 'api' || type === 'store' || type === 'module'
	const ext = isMarkdown ? 'md' : isTs ? 'ts' : 'vue'
	return ext
}

/**
 * 模块类型
 */
export const moduleTypes = [
	'api',
	'page',
	'store',
	'layout',
	'module',
	'component',
	'composable'
]

/**
 * 获取目录
 * @param {string} type 类型
 */
export const showDir = type => {
	if (type === 'api') {
		return 'api'
	}
	return `${type}s`
}
