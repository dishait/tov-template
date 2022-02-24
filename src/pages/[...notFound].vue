<script setup lang="ts">
import { init } from 'ityped'

const content = ref<null | Element>(null)
onMounted(() => {
  init(content.value as Element, { showCursor: false, disableBackTyping: true, strings: [' is not found!'] });
})

const router = useRouter()

const back = () => router.push('/')
</script>

<template>
  <div class="flex flex-wrap h-screen text-center justify-around items-center">
    <div class="font-blod desc">
      <div class="text-7xl code">404</div>
      <div class="text-3xl content" ref="content">The Page</div>
      <button @click="back" active="scale-90 transform" class="rounded-lg transition btn">👉 Go Home</button>
    </div>

    <img src="/notFound/32.svg" class="cover" alt="page not found" />
  </div>
</template>


<style>
.code {
  margin-bottom: 20px;
}

.content {
  height: 40px;
}

.cover {
  height: auto;
  width: 700px;
  margin: 0 5px;
  max-width: 100%;
  max-height: 100%;
}

.desc {
  flex: 1;
  width: 300px;
}

.btn {
  font-size: 20px;
  margin-top: 30px;
  padding: 12px 20px;
  --tw-shadow-color: 8, 145, 178;
  --tw-shadow: 0 4px 6px -1px rgba(var(--tw-shadow-color), 0.1),
    0 2px 4px -1px rgba(var(--tw-shadow-color), 0.06);
  box-shadow: 0 0 #0000, 0 0 #0000, 0 0 #0000, var(--tw-shadow);
}
</style>

<route lang="yaml">
meta:
  layout: notFound
</route>