<template>
	<div>
		<a href="https://github.com/dishait/tov-template" target="_blank">
			<img src="/logo.png" class="logo" alt="Vite logo" />
		</a>
		<a href="https://vitejs.dev" target="_blank">
			<img src="/vite.svg" class="logo" alt="Vite logo" />
		</a>
		<a href="https://vuejs.org/" target="_blank">
			<img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
		</a>
	</div>
	<HelloWorld msg="Tov + Vite + Vue" />
</template>

<style>
:root {
	font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
}

a {
	font-weight: 500;
	color: #646cff;
	text-decoration: inherit;
}
a:hover {
	color: #535bf2;
}

body {
	margin: 0;
	display: flex;
	place-items: center;
}

h1 {
	font-size: 3.2em;
	line-height: 1.1;
}

.card {
	padding: 2em;
}

#app {
	max-width: 1280px;
	margin: 0 auto;
	padding: 2rem;
	text-align: center;
}

.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
