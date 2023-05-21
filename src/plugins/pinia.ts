import persistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()

pinia.use(persistedstate)

export default pinia
