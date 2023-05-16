<script lang="ts" setup>
defineOptions({
	name: 'Counter',
})
const counter = createCounter()
</script>

<template>
	<button
		class="inline-block cursor-pointer rounded from-pink-500 via-red-500 to-yellow-500 bg-gradient-to-r px-8 py-2 text-sm font-medium text-white transition !border-0 !outline-none"
		hover="scale-110 shadow-xl"
		@click="counter.inc()"
	>
		{{ counter.count }}
	</button>
</template>
