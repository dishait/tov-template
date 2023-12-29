import type { Preset } from 'unocss'
import browserslist from 'browserslist'
import { defaultBuildTargets } from './shared/detect'
import { browserslistToTargets, transformStyleAttribute } from 'lightningcss'

export default function autoprefixerPreset(
	targets: string[] = defaultBuildTargets,
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
