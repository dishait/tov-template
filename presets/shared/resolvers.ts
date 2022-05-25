import { isPackageExists } from 'local-pkg'
import type { Resolver } from 'unplugin-auto-import/types'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import type { ComponentResolver } from 'unplugin-vue-components/types'

type Arrayable<T> = T | Array<T>
type Resolvers = Arrayable<Arrayable<Resolver>>

export const AutoImportResolvers: Resolvers = [ElementPlusResolver()]

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
