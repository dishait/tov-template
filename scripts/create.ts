import {
	copy,
	prompt,
	createPath,
	pathExistsSync,
	createTerminalLoading
} from '@markthree/node-shared'

const usePath = createPath(__dirname)

const types = [
	{
		type: 'list',
		name: 'type',
		message: '你希望自动创建以下哪种类型',
		choices: ['page', 'component']
	}
]

const names = [
	{
		type: 'input',
		name: 'name',
		message: '请输入名称'
	}
]

const loading = createTerminalLoading()

const fail = (msg: string) => loading.fail(msg)
const succeed = (msg: string) => loading.succeed(msg)

const reConfirm = async () => {
	const { confirm } = await prompt([
		{
			type: 'confirm',
			name: 'confirm',
			message: '该文件已存在，是否覆盖'
		}
	])
	return confirm
}

const runAutoCreate = async () => {
	const { type } = await prompt(types)
	const isComponent = type === 'component'
	if (isComponent) {
		return createComponentWithTemplate()
	}
}

runAutoCreate()

const createComponentWithTemplate = async () => {
	const src = usePath('./template/component.vue')

	const { name } = await prompt(names)
	const dest = usePath(`../src/components/${name}.vue`)
	const componentExists = pathExistsSync(dest)
	if (componentExists) {
		const confirm = await reConfirm()
		if (confirm) {
			await copy(src, dest)
			return succeed('该文件已被覆盖初始化')
		}
		return fail('创建失败')
	}
	await copy(src, dest)
	succeed('创建成功')
}
