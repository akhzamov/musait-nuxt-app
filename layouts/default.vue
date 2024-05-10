<script setup>
import { useModalWindowStore } from '~/stores/modalWindow'

const modalWindowStore = useModalWindowStore()
</script>

<template>
	<header class="header">
		<Navbar />
	</header>
	<ModalWindowApplication
		v-if="modalWindowStore.modalOpen && modalWindowStore.applicationModalActive"
	/>
	<ModalWindowSuccess
		v-if="modalWindowStore.modalOpen && modalWindowStore.successModalActive"
	/>
	<ModalWindowError
		v-if="modalWindowStore.modalOpen && modalWindowStore.errorModalActive"
	/>
	<ModalWindowLead
		v-if="modalWindowStore.modalOpen && modalWindowStore.leadModalActive"
	/>
	<slot />
	<Footer />
</template>

<style scoped></style>
