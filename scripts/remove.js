import ora from 'ora'
import fg from 'fast-glob'
import fse from 'fs-extra'
import { basename } from 'path'
import { showDir, moduleTypes } from './shared/base.js'

/**
 * 自动删除
 * @param {import('plop').NodePlopAPI} plop
 */
function remove(plop) {
	const spinner = ora()

	plop.setActionType('remove', (answers, config, plop) => {
		const { name, type, shouldRemove } = answers
		const dir = showDir(type)
		const target = `./src/${dir}/${name}`
		if (shouldRemove) {
			return fse.removeSync(target)
		}
		throw new Error(`删除 ${target} 失败`)
	})

	plop.setGenerator('controller', {
		description: '自动删除',
		prompts: [
			{
				name: 'type',
				type: 'list',
				message: '请选择您要删除的类型',
				async choices() {
					const dirs = await fg('./src/**/*', {
						deep: 1,
						onlyDirectories: true
					})
					const types = moduleTypes.filter(type => {
						const dir = showDir(type)
						return dirs.includes(`./src/${dir}`)
					})
					spinner.stop()
					return types
				}
			},
			{
				name: 'name',
				type: 'list',
				message({ type }) {
					return `请选择您要删除的 ${type} 模块`
				},
				async choices({ type }) {
					spinner.start(`读取现有 ${type} 模块中~~`)
					const dir = showDir(type)
					let modules = await fg(`./src/${dir}/*.*`, {
						deep: 1,
						onlyFiles: true
					})
					modules = modules.map(module => {
						return basename(module)
					})
					spinner.stop()
					return modules
				}
			},
			{
				name: 'shouldRemove',
				type: 'confirm',
				default: false,
				message: '再次确认是否删除'
			}
		],
		actions: [
			{
				type: 'remove'
			}
		]
	})
}

export default remove
