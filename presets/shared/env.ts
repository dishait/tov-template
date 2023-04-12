import { argv } from 'process'
import { loadEnv } from 'vite'

const { NODE_ENV } = process.env

export function detectMode() {
	const hasModeIndex = argv.findIndex((a) => a === '--mode' || a === '-m')
	if (hasModeIndex !== -1) {
		return argv[hasModeIndex + 1]
	}
	return NODE_ENV || 'development'
}

const stringToBoolean = (v: string) => {
	return Boolean(v === 'true' || false)
}

// 获取环境变量
const useEnv = () => {
	const env = loadEnv(detectMode(), '.')

	const {
		VITE_APP_TITLE,
		VITE_APP_INSPECT,
		VITE_APP_MARKDOWN,
		VITE_APP_API_AUTO_IMPORT,
		VITE_APP_MOCK_IN_PRODUCTION,
		VITE_APP_DIR_API_AUTO_IMPORT,
		VITE_APP_COMPRESSINON_ALGORITHM,
	} = env

	const newEnv = {
		VITE_APP_TITLE,
		VITE_APP_COMPRESSINON_ALGORITHM,
		VITE_APP_INSPECT: stringToBoolean(VITE_APP_INSPECT),
		VITE_APP_MARKDOWN: stringToBoolean(VITE_APP_MARKDOWN),
		VITE_APP_API_AUTO_IMPORT: stringToBoolean(VITE_APP_API_AUTO_IMPORT),
		VITE_APP_MOCK_IN_PRODUCTION: stringToBoolean(VITE_APP_MOCK_IN_PRODUCTION),
		VITE_APP_DIR_API_AUTO_IMPORT: stringToBoolean(VITE_APP_DIR_API_AUTO_IMPORT),
	}
	return newEnv
}

export const env = useEnv()
