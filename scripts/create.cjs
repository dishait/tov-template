const { existsSync } = require('fs')

const { showDir, showExt, moduleTypes } = require('./shared/base.cjs')

/**
 * 自动创建
 * @param {import('plop').NodePlopAPI} plop
 */
function create(plop) {
	let exist = null
	let modulePath = null

	plop.setGenerator('controller', {
		description: '自动创建',
		prompts: [
			{
				name: 'type',
				type: 'list',
				default: 'component',
				message: '您希望生成哪种类型的模块?',
				choices: moduleTypes,
			},
			{
				name: 'isMarkdown',
				type: 'confirm',
				message: '是否 markdown 类型?',
				default: false,
				// 如果是 page 类型需要询问是否为 markdown 类型
				when({ type }) {
					return type === 'page'
				},
			},
			{
				name: 'name',
				type: 'input',
				message({ type }) {
					return `请输入 ${type} 的命名`
				},
			},
			{
				name: 'shouldReset',
				type: 'confirm',
				default: false,
				message({ type }) {
					return `目标 ${type} 已存在，是否重置?`
				},
				// 确认模块是否已存在，是则询问是否重置
				when({ type, name, isMarkdown }) {
					const dir = showDir(type)
					const ext = showExt(type, isMarkdown)
					modulePath = `src/${dir}/${name}.${ext}`
					exist = existsSync(modulePath)
					if (exist) {
						return true
					}
				},
			},
		],
		actions(answer) {
			const { type, shouldReset } = answer
			if (exist && !shouldReset) {
				throw new Error(`${type} 创建失败`)
			}
			return [
				{
					type: 'add',
					force: true,
					path: `../${modulePath}`,
					templateFile: `./template/${type}.hbs`,
				},
			]
		},
	})
}

module.exports = create
