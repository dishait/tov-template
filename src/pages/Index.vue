<script setup lang="ts">
const { t, locale } = useI18n()
const { isDark, toggleDark } = useDarks()

const toggleLocale = () => {
    locale.value = locale.value === 'zh-CN' ? 'en' : 'zh-CN'
}

const language = computed(() => locale.value === 'zh-CN' ? '中文' : 'English')

const theme = computed(() => isDark.value ? 'dark' : 'light')
</script>

<template>
    <div class="m-6">Hello，This is the tov template！！</div>
    <div class="cursor-pointer m-6" @click="toggleDark()">theme: {{ theme }}</div>

    <div class="cursor-pointer mt-6 ml-6" @click="toggleLocale()">
        <div>language: {{ language }}</div>
        <div>base: {{ t('about') }}</div>
        <div>nesting: {{ t('nesting.sir') }} {{ t('nesting.lady') }}</div>
    </div>
</template>
