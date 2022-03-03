import { loadEnv } from 'vite'

const { NODE_ENV } = process.env

// 是否是开发环境
export const isDevelopment = NODE_ENV === 'development'

// 是否是生产环境
export const isProduction = NODE_ENV === 'production'

// 获取环境变量
const useEnv = () => {
	const env = isProduction
		? loadEnv('production', '.')
		: loadEnv('development', '.')
	const newEnv = {
		VITE_APP_TITLE: env.VITE_APP_TITLE,
		VITE_APP_INSPECT: Boolean(
			env.VITE_APP_Inspect === 'true' || false
		)
	}
	return newEnv
}

export const env = useEnv()
