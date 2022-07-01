import { defineStore } from 'pinia'

export default defineStore('counter', {
	state() {
		return {
			count: 0,
		}
	},
	actions: {
		inc() {
			this.count++
		},
	},
	persist: true,
})
