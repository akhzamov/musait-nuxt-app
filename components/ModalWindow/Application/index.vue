<script lang="ts" setup>
import { applicationTags } from './application.data'
import * as yup from 'yup'
import { baseURL } from '~/api'
import axios from 'axios'

const { t } = useI18n()
const modalWindowStore = useModalWindowStore()
const phoneNumberMask = reactive({})

const schema = yup.object({
	name: yup.string().required(t('errors.name')).min(3, t('errors.name-min')),
	email: yup.string().email(t('errors.email')),
	phone: yup.string().required(t('errors.phone')),
	company: yup.string(),
	description: yup.string(),
	tagList: yup.array(),
})

const { values, handleSubmit, meta, handleReset, defineField, errors } =
	useForm<IQuestionUser>({
		validationSchema: schema,
	})

const [name, nameAttrs] = defineField('name')
const [email, emailAttrs] = defineField('email')
const [phone, phoneAttrs] = defineField('phone')
const [company, companyAttrs] = defineField('company')
const [description, descriptionAttrs] = defineField('description')
const [tagList, tagListAttrs] = defineField('tagList')

interface IQuestionUser {
	name: string
	email: string
	phone: string
	company: string
	description: string
	tagList: string[]
}

let selectedTag = ref('')

let applicationModalActive = computed(
	() => modalWindowStore.applicationModalActive
)

useHead({
	bodyAttrs: {
		class: computed(() => {
			if (applicationModalActive) return 'modal-window-open'
			return ''
		}),
	},
})

const onSubmit = handleSubmit(async values => {
	const request = await axios({
		method: 'POST',
		url: `${baseURL}/applications`,
		headers: {
			'Content-Type': 'application/json',
		},
		data: {
			name: values.name,
			email: values.email,
			phone: values.phone,
			company: values.company,
			description: values.description,
			tagList: values.tagList,
		},
	})
		.then(res => {
			modalWindowStore.applicationModalActive = false
			modalWindowStore.successModalActive = true
			modalWindowStore.successModalText = t('questionnaire.success-send')
		})
		.catch(err => {
			modalWindowStore.applicationModalActive = false
			modalWindowStore.errorModalActive = true
			modalWindowStore.errorModalText = t('modals.error-text')
		})
})

const closeApplicationModal = () => {
	modalWindowStore.modalOpen = false
	modalWindowStore.applicationModalActive = false
}
</script>

<template>
	<div class="modal-window" @click="closeApplicationModal()">
		<form class="modal-application" @click.stop @submit.prevent="onSubmit">
			<h3 class="modal-application__title">
				<span>{{ $t('contact_manager.title-one') }}</span>
				{{ $t('contact_manager.title-two') }}
			</h3>
			<div class="modal-application__form">
				<div class="modal-application__form-top">
					<div class="modal-application__form-group">
						<div class="input-group">
							<label class="input-group__label">{{
								$t('contact_manager.name')
							}}</label>
							<input
								v-model="name"
								v-bind="nameAttrs"
								class="input-group__input"
								type="text"
								:placeholder="$t('contact_manager.name-placeholder')"
							/>
							<span class="input-group__span" :class="{ active: errors.name }">
								{{ errors.name }}
							</span>
						</div>
						<div class="input-group">
							<label class="input-group__label">{{
								$t('contact_manager.phone')
							}}</label>
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
					<div class="modal-application__form-group">
						<div class="input-group">
							<label class="input-group__label">{{
								$t('contact_manager.e-mail')
							}}</label>
							<input
								v-model="email"
								v-bind="emailAttrs"
								class="input-group__input"
								type="text"
								placeholder="example@gmail.com"
							/>
							<span class="input-group__span">
								<!-- {{ $t('contact_manager.errors.e-mail') }} -->
							</span>
						</div>
						<div class="input-group">
							<label class="input-group__label">{{
								$t('contact_manager.company')
							}}</label>
							<input
								v-model="company"
								v-bind="companyAttrs"
								class="input-group__input"
								type="text"
								:placeholder="$t('contact_manager.company-placeholder')"
							/>
							<span class="input-group__span">
								{{ $t('contact_manager.errors.company') }}
							</span>
						</div>
					</div>
				</div>
				<div class="modal-application__form-bottom">
					<div class="textarea-group">
						<label class="textarea-group__label">
							{{ $t('contact_manager.description') }}
						</label>
						<textarea
							v-model="description"
							v-bind="descriptionAttrs"
							class="textarea-group__textarea"
							:placeholder="$t('contact_manager.description-placeholder')"
						/>
						<span class="textarea-group__span">
							{{ $t('contact_manager.errors.company') }}
						</span>
					</div>
				</div>
			</div>
			<div class="modal-application__buttons">
				<button class="button close" @click="closeApplicationModal()">
					{{ $t('contact_manager.button-cancel') }}
				</button>
				<button class="button send" type="submit">
					{{ $t('contact_manager.button-send') }}
				</button>
			</div>
			<div class="modal-application__contact">
				{{ $t('contact_manager.contact-us') }}
				<p>
					{{ $t('contact_manager.contact-us-at') }}
					<a href="https://t.me/musait_manager" target="_blank">
						<ICO_telegram size="26px" color="#1E1E1E" /> Telegram
					</a>
				</p>
			</div>
		</form>
	</div>
</template>

<style>
.modal-window-open {
	overflow: hidden;
}
</style>
