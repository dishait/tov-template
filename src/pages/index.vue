<script setup lang="ts">
const { isDark, toggleDark } = useDarks()

const { t, toggleLocale, language } = useLanguage()

const theme = computed(() => (isDark.value ? 'dark' : 'light'))
</script>

<template>
	<div class="m-6">Hello，This is the tov template！！</div>
	<div class="m-6 cursor-pointer" @click="toggleDark()">theme: {{ theme }}</div>

	<div class="ml-6 mt-6 cursor-pointer" @click="toggleLocale()">
		<div>language: {{ language }}</div>
		<div>base: {{ t('about') }}</div>
		<div>nesting: {{ t('nesting.sir') }} {{ t('nesting.lady') }}</div>
	</div>

	<Counter />
</template>
