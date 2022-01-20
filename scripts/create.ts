import {
	useInquirerList,
	useInquirerConfirm,
	useInquirerQuestion
} from '@markthree/ilazy'
import {
	copy,
	createPath,
	terminalColor,
	pathExistsSync
} from '@markthree/node-shared'

const p = createPath(__dirname)
const templates = {
	component: p('./template/component.vue')
}
const pagesPath = p('../src/pages')
const layoutPath = p('../src/layouts')
const componentsPath = p('../src/components')

const noticeSuccess = (msg = '创建成功') => {
	console.log('😋', terminalColor.green(msg))
}

const noticeFail = (msg = '创建失败') => {
	console.log('😥', terminalColor.red(msg))
}

const run = async () => {
	const type = await useInquirerList(
		'您要创建以下哪种类型的文件',
		{
			default: 'component',
			choices: ['component', 'page', 'layout']
		}
	)

	const isComponent = type === 'component'

	if (isComponent) {
		const name = await useInquirerQuestion(
			'输入你要创建的名称'
		)
		const dest = createPath(componentsPath)(`${name}.vue`)
		if (pathExistsSync(dest)) {
			const shouldCover = await useInquirerConfirm(
				'文件已存在，是否覆盖?',
				false
			)

			if (shouldCover) {
				await copy(templates.component, dest)
				return noticeSuccess()
			}
			return noticeFail()
		}
		await copy(templates.component, dest)
		noticeSuccess()
	}
}

run()
