import { watch } from 'chokidar'
import { runOnDevServerFirstStart } from './global'
import { utimesSync, openSync, closeSync } from 'fs'

runOnDevServerFirstStart(() => {
	const restart = () => {
		const time = new Date()
		const path = 'vite.config.ts'
		try {
			utimesSync(path, time, time)
		} catch (error) {
			closeSync(openSync(path, 'w'))
		}
	}

	const layoutsWatcher = watch('./src/layouts', {
		ignoreInitial: true
	})

	layoutsWatcher.on('add', restart)
})
