<script lang="ts" setup>
defineOptions({
	name: 'counter',
})

const counter = createCounter()
</script>

<template>
	<div class="cursor-pointer mt-6 ml-6">
		<div @click="counter.inc()">counter: {{ counter.count }}</div>
	</div>
</template>
