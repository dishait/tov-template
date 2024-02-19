const { createConsola } = require('consola')
const { execSync } = require('child_process')
const { repository } = require('../package.json')
const { gray } = require('kolorist')

const logger = createConsola().withTag('release')

/**
 * 自动发版
 * @param {import('plop').NodePlopAPI} plop
 */
async function release(plop) {
	// TODO 从 git 中获取仓库 url
	const release = await logger.prompt(`是否发布到 ${gray(repository.url)}`, {
		type: 'confirm',
	})
	if (release) {
		plop.setGenerator('controller', {
			description: '自动发版',
			prompts: [
				{
					name: 'type',
					type: 'list',
					default: 'patch',
					message: '你希望发布一个什么版本?',
					choices: [
						'patch',
						'minor',
						'major',
						'prepatch',
						'premajor',
						'preminor',
						'prerelease',
					],
				},
			],
			actions(answer) {
				const { type } = answer
				execSync(
					`npx changelogen --${type} --release && git push --follow-tags`,
					{
						stdio: 'inherit',
					},
				)
				return []
			},
		})
	}
}

module.exports = release
