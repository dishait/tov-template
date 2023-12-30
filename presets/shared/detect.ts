/**
 * 侦察模块
 * @description 自动检测环境并智能生成
 */

import { r } from './path'
import browserslist from 'browserslist'

const { loadConfig: browserslistLoadConfig } = browserslist

/**
 * 默认打包目标 (浏览器兼容程度)
 */
export const defaultBuildTargets = browserslistLoadConfig({
	path: r('./'),
}) || ['last 2 versions and not dead, > 0.3%, Firefox ESR']
