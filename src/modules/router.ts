import { App } from 'vue'
import fileRoutes from '~pages'
import { setupLayouts } from 'virtual:meta-layouts'
import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
	routes: setupLayouts(fileRoutes),
	history: createWebHistory()
})

export default (app: App) => app.use(router)
