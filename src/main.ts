// https://github.com/Andy-set-studio/modern-css-reset 现代 reset css
import 'modern-css-reset'

// https://unocss.dev/ 原子 css 库
import 'virtual:uno.css'
import 'virtual:unocss-devtools'

// 你自定义的 css
import './styles/main.css'

import App from './App.vue'

const app = createApp(App)

app.mount('#app')
