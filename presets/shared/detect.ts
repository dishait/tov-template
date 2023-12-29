/**
 * 侦察模块
 * @description 自动检测环境并智能生成
 */

import { cwd } from 'process'
import browserslist from 'browserslist'

const { loadConfig: browserslistLoadConfig } = browserslist

/**
 * 默认打包目标 (浏览器兼容程度)
 */
export const defaultBuildTargets = browserslistLoadConfig({ path: cwd() }) || [
	'last 2 versions and not dead, > 0.3%, Firefox ESR',
]
