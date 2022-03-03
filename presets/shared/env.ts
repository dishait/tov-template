import { loadEnv } from 'vite'

const { NODE_ENV } = process.env

export const isDevelopment = NODE_ENV === 'development'
export const isProduction = NODE_ENV === 'production'

const generateEnv = () => {
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

export const env = generateEnv()
