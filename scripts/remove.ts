import {
    useInquirerList,
    useInquirerConfirm,
    useInquirerQuestion
} from "@markthree/ilazy"

import {
    remove,
    createPath,
    terminalColor,
    pathExistsSync,
} from "@markthree/node-shared"

import {
    noticeFail,
    noticeSuccess
} from "./shared/log"


const runAutoRemove = async () => {
    const type = await useInquirerList(
        '您希望删除以下哪种类型的模块呢？',
        {
            default: 'component',
            choices: ['page', 'component']
        }
    )

    const t = typeToZh(type)

    const name = await useInquirerQuestion(`请输入该${t}名称`)

    const isComponent = type === 'component'
    if (isComponent) {
        return await removeComponent(name)
    }

    const isPage = type === 'page'
    if (isPage) {
        return await removePage(name)
    }
}
runAutoRemove()

// 路径辅助工具
const p = createPath(__dirname)

// 输出路径
const srcBasePaths = {
    page: p('../src/pages'),
    component: p('../src/components')
}

// 类型转中文
const typeToZh = t => {
    const types = {
        page: '页面',
        component: '组件'
    }
    return types[t] || '文件'
}

// 删除组件
const removeComponent = async name => {
    const sP = createPath(srcBasePaths.component)
    const src = sP(`./${name}`)
    const shouldRemove = await isWillRemove(src, '组件')
    if (shouldRemove) {
        await removeAll(src)
        return noticeSuccess('删除')
    }
    noticeFail('删除')
}

// 删除页面
const removePage = async (name) => {
    const sP = createPath(srcBasePaths.page)
    const src = sP(`./${name}`)
    const shouldRemove = await isWillRemove(src, '页面')
    if (shouldRemove) {
        await removeAll(src)
        return noticeSuccess('删除')
    }
    noticeFail('删除')
}

// 是否将删除
const isWillRemove = async (src, type) => {
    const existPaths = getExistPaths(src)
    const fileExist = Object.values(existPaths).some(v => v)
    if (fileExist) {
        return await useInquirerConfirm(
            '再次确认是否删除?',
            false
        )
    }
    console.log(terminalColor.red(`项目中不存在该${type}`))
    return false
}

const getExistPaths = (src) => {
    const md = src + '.md'
    const vue = src + '.vue'
    const mdExist = pathExistsSync(md)
    const vueExist = pathExistsSync(vue)
    return { [md]: mdExist, [vue]: vueExist }
}

const removeAll = async (src) => {
    const existPaths = getExistPaths(src)
    for (const file in existPaths) {
        const exist = existPaths[file]
        if (exist) {
            await remove(file)
        }
    }
}