import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
// 你自定义的 css
import './styles/main.css'

import 'virtual:windi-utilities.css'
import 'virtual:windi-devtools'

import App from './App.vue'

const app = createApp(App)

// 插件自动加载
const modules = import.meta.globEager('./modules/*.ts')
Object.values(modules).forEach(v => {
	if (typeof v.default === 'function') {
		v.default(app)
	}
})

app.mount('#app')
