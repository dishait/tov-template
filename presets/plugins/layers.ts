import { existsSync } from 'fs'
import { gray } from 'kolorist'
import { basename } from 'path'
import { r } from '../shared/path'
import { Restart } from './restart'
import { createConsola } from 'consola'
import type { Plugin, UserConfig } from 'vite'
import { Layers as loadLayer, detectMode } from 'vite-layers'

const logger = createConsola().withTag('layers')

/**
 * vite 配置层
 * @description 通过 mode 区分 vite 配置文件 (experimental)
 */
export function Layers(): Plugin {
	const mode = detectMode()
	const modeFiles = [mode.slice(0, 3), mode].map((mode) =>
		r(`vite.config.${mode}.ts`),
	)
	return {
		...Restart(modeFiles.map((modeFile) => basename(modeFile))),
		name: 'vite-plugin-layers',
		enforce: 'post',
		async config(config) {
			const modeFile = modeFiles.find((modeFile) => existsSync(modeFile))
			if (modeFile) {
				logger
					.withTag(mode)
					.success(
						`vite.config.ts → ${basename(modeFile)} ${gray(`(experimental)`)}`,
					)
				return loadLayer({
					logger: false,
					extends: [config, modeFile],
				}) as UserConfig
			}
			return config
		},
	}
}
