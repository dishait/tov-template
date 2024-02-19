const { createConsola } = require('consola')
const { execSync } = require('child_process')
const { repository } = require('../package.json')
const { gray } = require('kolorist')
const { simpleGit } = require('simple-git')
const logger = createConsola().withTag('release')

/**
 * 自动发版
 * @param {import('plop').NodePlopAPI} plop
 */
async function release(plop) {
	const git = simpleGit()

	const remotes = await git.getRemotes(true)

	const urls = remotes.map((r) => {
		return r.refs.push
			.replace('git@github.com:', 'https://github.com/')
			.replace('.git', '')
	})
	let allowRelease = false
	if (!urls.includes(repository.url)) {
		allowRelease = await logger.prompt(`是否发布到 ${gray(repository.url)}`, {
			type: 'confirm',
		})
	} else {
		allowRelease = true
	}

	if (allowRelease) {
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
