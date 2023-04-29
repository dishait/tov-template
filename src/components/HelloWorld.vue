<script setup lang="ts">
defineProps<{ msg: string }>()
</script>

<template>
	<h1>{{ msg }}</h1>

	<div class="card">
		<Counter />
		<p>
			Edit
			<code>components/HelloWorld.vue</code> to test HMR
		</p>
	</div>

	<p>
		Check out
		<a href="https://github.com/dishait/tov-template" target="_blank"
			>tov-template</a
		>, the official Tov + Vue + Vite template
	</p>
	<p>
		Install
		<a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
		in your IDE for a better DX
	</p>
	<p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
	color: #888;
}
</style>
