import type { Preset } from 'unocss'
import browserslist from 'browserslist'
import { browserslistToTargets, transformStyleAttribute } from 'lightningcss'

const { loadConfig: browserslistLoadConfig } = browserslist

const defaultTargets = browserslistLoadConfig({ path: process.cwd() }) || [
	'last 2 versions and not dead, > 0.3%, Firefox ESR',
]

export default function autoprefixerPreset(
	targets?: string[] = defaultTargets,
): Preset {
	return {
		name: 'unocss-preset-autoprefixer',
		postprocess: (util) => {
			const entries = util.entries
			const { code } = transformStyleAttribute({
				code: Buffer.from(
					entries
						.filter((item) => !item[0].startsWith('--un'))
						.map((x) => x.join(':'))
						.join(';'),
				),
				targets: browserslistToTargets(browserslist(targets)),
				minify: true,
			})

			util.entries = [
				...entries.filter((item) => item[0].startsWith('--un')),
				...(code
					.toString()
					.split(';')
					.map((i) => i.split(':')) as [string, string | number][]),
			]
		},
	}
}
