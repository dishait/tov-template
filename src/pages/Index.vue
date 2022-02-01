<script setup lang="ts">
const { t, locale } = useI18n()

const { isDark, toggleDark } = useDarks()


const toggleLocale = () => {
    locale.value = locale.value === 'zh-CN' ? 'en' : 'zh-CN'
} 
</script>

<template>
    <div m="6">Hello，This is the tov template！！</div>
    <div m="6" cursor="pointer" @click="toggleDark()">light: {{ isDark }} click me!!</div>

    <div m="6" cursor="pointer" @click="toggleLocale()">language: {{ t('index') }} click me!!</div>
</template>