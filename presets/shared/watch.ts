import fs from 'fs'
import { version } from 'os'
import { watch } from 'chokidar'

/**
 * 监听组件文件创建重启服务，仅在 windows11 下
 * 弥补 unplugin-vue-components 在 windows11 下的组件创建报错
 */
export const watchComponentCreatedWithRestart = () => {
	const isWindows11 = version() === 'Windows 10 Pro'

	// window 11下并且非热启动前注册监听，避免预设热重载反复监听
	if (isWindows11 && !global.$devServerInitStarted) {
		const touch = (path: string) => {
			const time = new Date()
			try {
				fs.utimesSync(path, time, time)
			} catch (err) {
				fs.closeSync(fs.openSync(path, 'w'))
			}
		}

		watch('./src/components', { ignoreInitial: true }).on(
			'add',
			() => {
				touch('vite.config.ts')
			}
		)
	}
}
