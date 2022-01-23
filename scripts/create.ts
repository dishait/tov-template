import { noticeSuccess, noticeFail } from './shared/log'
import {
	useInquirerList,
	useInquirerConfirm,
	useInquirerQuestion
} from '@markthree/ilazy'
import {
	createPath,
	createFile,
	readFileSync,
	pathExistsSync,
	templateCompile
} from '@markthree/node-shared'

const p = createPath(__dirname)

const useDestDirPath = (type: string) =>
	p(`../src/${type}s`)

const showGenZh = (t: string) => {
	const types = {
		page: '页面',
		component: '组件'
	}
	return types[t] || ''
}

const run = async () => {
	const genType = await useInquirerList(
		'😋 您要创建以下哪种类型的文件?',
		{
			default: 'component',
			choices: ['page', 'component']
		}
	)
	const type = await useInquirerList(
		'🧐 请选择您要创建的类型',
		{
			default: 'vue',
			choices: ['md', 'vue']
		}
	)

	const name = await useInquirerQuestion(
		'🤔 请输入您要创建的名字'
	)

	const bp = createPath(useDestDirPath(genType))
	const dest = bp(`${name}.${type}`)
	const mdDest = bp(`${name}.md`)
	const vueDest = bp(`${name}.vue`)

	const genZh = showGenZh(type)
	const cTip = `😥 存在相同命名的${type}${genZh}文件，是否覆盖?`
	const shouldGens = await Promise.all([
		isWillCreate(mdDest, cTip),
		isWillCreate(vueDest, cTip)
	])
	const shouldGen = shouldGens.every(v => v)
	if (shouldGen) {
		await gen(p(`./template/shared.${type}`), dest, {
			name,
			genType
		})
		return noticeSuccess()
	}
	noticeFail()
}
run()

// 是否将覆盖
const isWillCreate = async (
	dest: string,
	msg: string = '文件已存在，是否覆盖?'
) => {
	if (pathExistsSync(dest)) {
		return await useInquirerConfirm(msg, false)
	}
	return true
}

// 生成文件
const gen = async (
	src: string,
	dest: string,
	payload: any = {}
) => {
	let template = readFileSync(src).toString()
	template = templateCompile(template)(payload)
	await createFile(dest, template)
}
