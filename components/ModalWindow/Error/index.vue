<script lang="ts" setup>
defineProps({
	text: {
		type: String,
		default: 'Successfully best job koroche pohuy',
	},
})

const modalWindowStore = useModalWindowStore()

let successModalActive = computed(() => modalWindowStore.successModalActive)

useHead({
	bodyAttrs: {
		class: computed(() => {
			if (successModalActive) return 'modal-window-open'
			return ''
		}),
	},
})

const accessBtnClick = () => {
	modalWindowStore.modalOpen = false
	modalWindowStore.successModalActive = false
	modalWindowStore.errorModalText = ''
	location.reload()
}
</script>

<template>
	<div>
		<div class="modal-window" @click="accessBtnClick()">
			<div class="modal-success" @click.stop>
				<div class="modal-success__icon">
					<ICO_close fill="#fc5c65" />
				</div>
				<h3 class="modal-success__title">
					{{ $t('modals.error-title') }}
				</h3>
				<p class="modal-success__text">
					{{ modalWindowStore.errorModalText }}
				</p>
				<button class="button send" @click="accessBtnClick()">
					{{ $t('modals.modal-button') }}
				</button>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
