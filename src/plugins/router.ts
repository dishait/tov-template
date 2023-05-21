import { setupLayouts, createGetRoutes } from 'virtual:meta-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import { routes as fileRoutes } from 'vue-router/auto/routes'

export const router = createRouter({
	history: createWebHistory(),
	routes: setupLayouts(fileRoutes),
})

export const getRoutes = createGetRoutes(router)

export default router
