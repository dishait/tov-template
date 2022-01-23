import { terminalColor } from '@markthree/node-shared'

export const noticeSuccess = (type = '创建') => {
	console.log(terminalColor.green(type + '成功'))
}

export const noticeFail = (type = '创建') => {
	console.log(terminalColor.red(type + '失败'))
}
