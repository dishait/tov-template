const { resolve } = require('path')
const { gray, green } = require('kolorist')
const { createConsola } = require('consola')
const { existsSync, lstatSync } = require('fs')
const { removeSync, emptyDirSync } = require('fs-extra')

function slash(path) {
	return path.replace(/\\/g, '/')
}

function r(dir) {
	return slash(resolve(__dirname, '../', dir))
}

const entrys = [
	'src/components',
	'src/api',
	'mock',
	'layouts/default.vue',
	'src/pages/index.vue',
	'src/pages/about.md',
	'src/pages/echarts.vue',
	'src/stores',
	'locales/简体中文',
	'locales/English',
]

const resolvedEntrys = entrys.map((entry) => r(entry))

/**
 * 安全初始化
 * @param {import('plop').NodePlopAPI} plop
 */
function safeInit(plop) {
	const logger = createConsola().withTag('safe:init')

	logger.warn('实验性功能')

	plop.setGenerator('controller', {
		description: '安全初始化',
		prompts: [
			{
				name: 'yes',
				type: 'confirm',
				message: '是否安全的初始化?',
				default: false,
			},
			{
				name: 'cleanStyles',
				type: 'confirm',
				message: '是否清理 styles?',
				default: false,
			},
		],
		actions(answer) {
			if (!answer.yes) {
				return []
			}

			if (answer.cleanStyles) {
				resolvedEntrys.push(r('src/styles'))
			}

			console.log()

			// 这里不用异步是因为 plop action 只支持同步
			resolvedEntrys.forEach((e) => {
				if (!existsSync(e)) {
					return
				}
				const entry = lstatSync(e)
				if (entry.isFile()) {
					removeSync(e)
					logClean(e)
					return
				}

				if (entry.isDirectory()) {
					emptyDirSync(e)
					logClean(e)
				}
			})

			return [
				{
					type: 'add',
					force: true,
					path: '../src/pages/index.vue',
					templateFile: './template/page.hbs',
					data: {
						name: 'index',
						isMarkdown: false,
					},
				},
				{
					type: 'add',
					force: true,
					path: '../src/layouts/default.vue',
					templateFile: './template/layout.hbs',
					data: {
						name: 'default',
					},
				},
			]
		},
	})
}

function logClean(path) {
	console.log(`${green('√ clean')} ${gray(path)}`)
}

module.exports = safeInit
