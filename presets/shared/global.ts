declare global {
	/**
	 * dev server 第一次启动完成标识，即非热启动完成标识
	 */
	var $devServerInitStarted: boolean

	/**
	 * store 模块集合
	 */
	var $storeModules: Set<string>
}

/**
 * check 阶段设置 dev server 非热启动完成标识，即刚 io 完后设置
 */
setImmediate(() => {
	global.$devServerInitStarted = true
})

export {}
