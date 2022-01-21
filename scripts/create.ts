import {
	useInquirerList,
	useInquirerConfirm,
	useInquirerQuestion
} from '@markthree/ilazy'
import {
	copy,
	createPath,
	createFile,
	readFileSync,
	terminalColor,
	pathExistsSync,
	templateCompile
} from '@markthree/node-shared'

const p = createPath(__dirname)

const useDestDirPath = (type: string) =>
	p(`../src/${type}s`)

const noticeSuccess = (msg = '创建成功') => {
	console.log(terminalColor.green(msg))
}

const noticeFail = (msg = '创建失败') => {
	console.log(terminalColor.red(msg))
}

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
	const shouldGen =
		isWillCover(mdDest, cTip) || isWillCover(vueDest, cTip)
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
const isWillCover = async (
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
