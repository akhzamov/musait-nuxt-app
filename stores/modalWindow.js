import { defineStore } from 'pinia'

export const useModalWindowStore = defineStore('modalWindow', {
	state: () => ({
		modalOpen: false,
		applicationModalActive: false,
		leadModalActive: false,
		successModalActive: false,
		successModalText: '',
		errorModalActive: false,
		errorModalText: '',
	}),
	actions: {},
})
