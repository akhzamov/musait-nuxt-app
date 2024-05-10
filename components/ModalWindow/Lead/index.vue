<script lang="ts" setup>
import * as yup from 'yup'
import { baseURL } from '~/api'
import axios from 'axios'

const { t } = useI18n()
const modalWindowStore = useModalWindowStore()

const schema = yup.object({
	name: yup.string().required(t('errors.name')).min(3, t('errors.name-min')),
	phone: yup.string().required(t('errors.phone')),
})

interface IQuestionUser {
	name: string
	phone: string
}

const { values, handleSubmit, meta, handleReset, defineField, errors } =
	useForm<IQuestionUser>({
		validationSchema: schema,
	})

const [name, nameAttrs] = defineField('name')
const [phone, phoneAttrs] = defineField('phone')
const phoneNumberMask = reactive({})

const onSubmit = handleSubmit(async values => {
	const request = await axios({
		method: 'POST',
		url: `${baseURL}/leads`,
		headers: {
			'Content-Type': 'application/json',
		},
		data: {
			name: values.name,
			phone: values.phone,
		},
	})
		.then(res => {
			modalWindowStore.leadModalActive = false
			modalWindowStore.successModalActive = true
			modalWindowStore.successModalText = t('lead.success-send')
		})
		.catch(err => {
			modalWindowStore.leadModalActive = false
			modalWindowStore.errorModalActive = true
			modalWindowStore.errorModalText = t('modals.error-text')
		})
})

const closeLeadModal = () => {
	modalWindowStore.modalOpen = false
	modalWindowStore.leadModalActive = false
}
</script>

<template>
	<div class="modal-window" @click="closeLeadModal()">
		<form class="modal-lead" @click.stop @submit.prevent="onSubmit">
			<h3 class="modal-lead__title">
				<span>{{ $t('lead.title-one') }}</span> {{ $t('lead.title-two') }}
			</h3>
			<div class="modal-lead__form">
				<div class="modal-lead__form-top">
					<div class="modal-lead__form-group">
						<div class="input-group">
							<label class="input-group__label">{{ $t('lead.name') }}</label>
							<input
								v-model="name"
								v-bind="nameAttrs"
								class="input-group__input"
								type="text"
								:placeholder="$t('lead.name-placeholder')"
							/>
							<span class="input-group__span" :class="{ active: errors.name }">
								{{ errors.name }}
							</span>
						</div>
						<div class="input-group">
							<label class="input-group__label">{{ $t('lead.phone') }}</label>
							<input
								v-model="phone"
								v-bind="phoneAttrs"
								class="input-group__input"
								type="text"
								v-maska="phoneNumberMask"
								data-maska="+998 ## ### ## ##"
								placeholder="+998 ## ### ## ##"
							/>
							<span class="input-group__span" :class="{ active: errors.phone }">
								{{ errors.phone }}
							</span>
						</div>
					</div>
				</div>
				<button class="button send" style="margin-top: 20px" type="submit">
					{{ $t('lead.button-send') }}
				</button>
			</div>
		</form>
	</div>
</template>

<style scoped></style>
