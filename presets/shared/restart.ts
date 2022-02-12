import { utimesSync, openSync, closeSync } from 'fs'

export const restart = () => {
	const time = new Date()
	const path = 'vite.config.ts'
	try {
		utimesSync(path, time, time)
	} catch (error) {
		closeSync(openSync(path, 'w'))
	}
}
