import { env } from './env'
import { dirResolver } from 'vite-auto-import-resolvers'
import type { Resolver } from 'unplugin-auto-import/types'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

type Arrayable<T> = T | Array<T>
type Resolvers = Arrayable<Arrayable<Resolver>>

export const AutoImportResolvers: Resolvers = [
	ElementPlusResolver()
]

if (env.VITE_APP_DIR_API_AUTO_IMPORT) {
	AutoImportResolvers.push(
		dirResolver({ prefix: 'use' }),
		dirResolver({
			target: 'stores',
			suffix: 'Store'
		})
	)
}
