import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
// 你自定义的 css
import './styles/main.css'

import 'virtual:windi-utilities.css'
import 'virtual:windi-devtools'

import App from './App.vue'
import { useModules } from 'virtual:modules'

const app = createApp(App)

// 插件自动加载
useModules(app)

app.mount('#app')
