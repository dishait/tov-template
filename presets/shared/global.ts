declare global {
	/**
	 * dev Server 第一次启动标识
	 */
	var $devServerFirstStarted: boolean
}

setImmediate(() => {
	global.$devServerFirstStarted = true
})

/**
 * 仅第一次启动服务时允许
 */
export const runOnDevServerFirstStart = (
	callback: Function
) => {
	if (!global.$devServerFirstStarted) {
		callback()
	}
}
