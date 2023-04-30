<script setup lang="ts">
defineProps<{ msg: string }>()

const visits = useVisits()
</script>

<template>
	<div class="mt-10 flex flex-col items-center space-y-8">
		<h1 class="text-4xl">{{ msg }}</h1>

		<Counter />
		<p>
			Edit
			<code>components/HelloWorld.vue</code> to test HMR
		</p>

		<p>
			Check out
			<a href="https://github.com/dishait/tov-template" target="_blank">
				tov-template </a
			>, the official Tov + Vue + Vite template
		</p>
		<p class="read-the-docs">
			The total number of views is
			<span class="text-gray-800" dark="text-gray-300">{{ visits ?? 0 }}</span>
		</p>
	</div>
</template>

<style scoped>
.read-the-docs {
	color: #888;
	font-size: 1.2rem;
	animation: slide-up 0.5s ease-out;
}

@keyframes slide-up {
	from {
		transform: translateY(20px);
		opacity: 0;
	}
	to {
		transform: translateY(0);
		opacity: 1;
	}
}
</style>
