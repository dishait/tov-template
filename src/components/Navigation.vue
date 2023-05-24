<script setup lang="ts">
import { getRoutes } from '~/plugins/router'
import { SwitchIcon } from 'vue-dark-switch'

const { t } = useI18n()

const routes = getRoutes()
	.filter((r) => !r.path.includes('notFound'))
	.map((r) => {
		let { path, name } = r
		if (path === '/') {
			return { path, name: 'home' }
		}

		if (!name) {
			name = path
		}

		return { path, name: name.toString().slice(1).replaceAll('/', ' · ') }
	})
</script>

<template>
	<nav
		aria-label="Site Nav"
		class="mx-auto h-80px max-w-3xl flex items-center justify-between p-4"
	>
		<span class="h-10 w-10 flex items-center justify-center">
			<SwitchIcon unmount-persets />
		</span>

		<ul class="flex items-center gap-2 text-sm font-medium">
			<li v-for="r of routes" :key="r.path" class="hidden !block">
				<RouterLink class="rounded-lg px-3 py-2" :to="r.path">
					{{ t(r.name) }}
				</RouterLink>
			</li>

			<li>
				<a
					class="inline-flex items-center gap-2 rounded-lg px-3 py-2"
					href="https://github.com/dishait/tov-template"
					target="_blank"
				>
					Github
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						class="h-4 w-4"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
						></path>
					</svg>
				</a>
			</li>

			<li class="hidden !block">
				<Dropdown />
			</li>
		</ul>
	</nav>
</template>
