import { env } from './env'
import { isPackageExists } from 'local-pkg'
import { dirResolver } from 'vite-auto-import-resolvers'
import type { Resolver } from 'unplugin-auto-import/types'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import type { ComponentResolver } from 'unplugin-vue-components/types'

type Arrayable<T> = T | Array<T>
type Resolvers = Arrayable<Arrayable<Resolver>>

export const AutoImportResolvers: Resolvers = [ElementPlusResolver()]

if (env.VITE_APP_DIR_API_AUTO_IMPORT) {
	AutoImportResolvers.push(
		dirResolver({ prefix: 'use' }),
		dirResolver({
			target: 'src/stores',
			suffix: 'Store',
		})
	)
}

interface Options {
	onlyExist?: [Arrayable<ComponentResolver>, string][]
	include?: ComponentResolver[]
}
export const normalizeResolvers = (options: Options = {}) => {
	const { onlyExist = [], include = [] } = options

	const existedResolvers = []
	for (let i = 0; i < onlyExist.length; i++) {
		const [resolver, packageName] = onlyExist[i]
		if (isPackageExists(packageName)) {
			existedResolvers.push(resolver)
		}
	}

	existedResolvers.push(...include)

	return existedResolvers
}
