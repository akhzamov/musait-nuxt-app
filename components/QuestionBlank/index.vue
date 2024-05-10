<script lang="ts" setup>
import { questionAnswersBusinessData } from './questionBlank.data'
import * as yup from 'yup'
import { baseURL } from '~/api'
import axios from 'axios'

const { t } = useI18n()
const modalWindowStore = useModalWindowStore()

const answersBusinessData = ref(questionAnswersBusinessData)

const schema = yup.object({
	username: yup
		.string()
		.required(t('errors.name'))
		.min(3, t('errors.name-min')),
	phone: yup.string().required(t('errors.phone')),
	age: yup.string(),
	company: yup.string(),
})

interface IQuestionUser {
	username: string
	phone: string
	age: string
	company: string
}

const questionBlank = reactive({
	name: '',
	age: '',
	phone: '',
	company: '',
})

const phoneNumberMask = reactive({})
const questionStep = ref(1)
const stepTwo = ref(false)
const answer = ref('')
const answerError = ref(false)
const answers = reactive<string[]>([])

const { values, handleSubmit, meta, handleReset, defineField, errors } =
	useForm<IQuestionUser>({
		validationSchema: schema,
	})

const [username, usernameAttrs] = defineField('username')
const [phone, phoneAttrs] = defineField('phone')
const [age, ageAttrs] = defineField('age')
const [company, companyAttrs] = defineField('company')

const onSubmit = handleSubmit(values => {
	scrollTo({
		top: 0,
		behavior: 'smooth',
	})
	stepTwo.value = true
	questionBlank.name = values.username
	questionBlank.phone = values.phone
	questionBlank.age = values.age
	questionBlank.company = values.company
	console.log(questionBlank)
})

const progressBarWidth = computed(() => {
	const totalQuestions = questionAnswersBusinessData.length
	const progressPercent = (questionStep.value / totalQuestions) * 100
	return `${progressPercent}%`
})

const nextQuestionStep = () => {
	if (answer.value != '') {
		if (questionStep.value != questionAnswersBusinessData.length) {
			answers.push(`{- ${answer.value} -}`)
			questionStep.value++
			answer.value = ''
		} else {
			questionStep.value = 1
		}
	} else {
		answerError.value = true
	}
}

watch(answer, (newAnswer, oldAnswer) => {
	if (newAnswer.length >= 1) {
		answerError.value = false
	}
})

const sendQuestion = async () => {
	const request = await axios({
		method: 'POST',
		url: `${baseURL}/answers`,
		headers: {
			'Content-Type': 'application/json',
		},
		data: {
			...questionBlank,
			answers: answers,
		},
	})
		.then(res => {
			modalWindowStore.modalOpen = true
			modalWindowStore.successModalActive = true
			modalWindowStore.successModalText = t('questionnaire.success-send')
		})
		.catch(err => {
			modalWindowStore.modalOpen = true
			modalWindowStore.errorModalActive = true
			modalWindowStore.errorModalText = t('modals.error-text')
		})
}
</script>

<template>
	<section class="question">
		<div class="container">
			<div class="question-blank" v-if="!stepTwo">
				<h3 class="question-blank__title">{{ $t('questionnaire.title') }}</h3>
				<p class="question-blank__subtitle">
					{{ $t('questionnaire.subtitle') }}
				</p>
				<form class="question-blank__form" @submit.prevent="onSubmit">
					<div class="question-blank__form-top">
						<div class="question-blank__form-group">
							<div class="input-group">
								<label class="input-group__label">
									{{ $t('questionnaire.name') }}
								</label>
								<input
									name="username"
									v-model="username"
									v-bind="usernameAttrs"
									class="input-group__input"
									type="text"
									:placeholder="$t('questionnaire.name-placeholder')"
								/>
								<span
									class="input-group__span"
									:class="{ active: errors.username }"
								>
									{{ errors.username }}
								</span>
							</div>
							<div class="input-group">
								<label class="input-group__label">
									{{ $t('questionnaire.phone') }}
								</label>
								<input
									name="phone"
									v-model="phone"
									v-bind="phoneAttrs"
									v-maska="phoneNumberMask"
									data-maska="+998 ## ### ## ##"
									placeholder="+998 ## ### ## ##"
									class="input-group__input"
									type="text"
								/>
								<span
									class="input-group__span"
									:class="{ active: errors.phone }"
								>
									{{ errors.phone }}
								</span>
							</div>
						</div>
						<div class="question-blank__form-group">
							<div class="input-group">
								<label class="input-group__label">
									{{ $t('questionnaire.age') }}
								</label>
								<input
									name="age"
									v-model="age"
									v-bind="ageAttrs"
									class="input-group__input"
									type="text"
									:placeholder="$t('questionnaire.age-placeholder')"
								/>
								<span class="input-group__span" :class="{ active: errors.age }">
									{{ errors.age }}
								</span>
							</div>
							<div class="input-group">
								<label class="input-group__label">
									{{ $t('questionnaire.company') }}
								</label>
								<input
									name="company"
									v-model="company"
									v-bind="companyAttrs"
									class="input-group__input"
									type="text"
									:placeholder="$t('questionnaire.company-placeholder')"
								/>
								<span
									class="input-group__span"
									:class="{ active: errors.company }"
								>
									{{ errors.company }}
								</span>
							</div>
						</div>
					</div>
					<button class="button send" style="margin-top: 20px">
						{{ $t('questionnaire.button-start') }}
					</button>
				</form>
			</div>
			<div class="question-blank" v-if="stepTwo">
				<template v-for="question in answersBusinessData" :key="question.id">
					<div
						class="question-blank__answer"
						v-if="questionStep == question.id"
					>
						<h4 class="question-blank__answer-title">
							{{ $t(`${question.title}`) }}
						</h4>
						<div
							class="question-blank__answer-selects"
							v-if="question.questionTypeSelect"
						>
							<div
								class="question-blank__answer-select"
								v-for="answers in question.selectAnswers"
								:key="answers.id"
							>
								<div class="question-blank__answer-select-icon">
									<ICO_baseline-check size="17px" fill="#fff" />
								</div>
								<p class="question-blank__answer-select-text">
									{{ $t(`${answers.title}`) }}
								</p>
							</div>
						</div>
						<div
							class="question-blank__answer-type"
							v-if="!question.questionTypeSelect"
						>
							<div class="textarea-group">
								<textarea
									v-model="answer"
									class="textarea-group__textarea"
									:placeholder="$t('questionnaire.answer-placeholder')"
								/>
								<span
									class="textarea-group__span"
									:class="{ active: answerError }"
									v-if="answerError"
								>
									{{ $t('questionnaire.errors.answer') }}
								</span>
							</div>
						</div>
					</div>
				</template>
				<div class="question-blank__bottom">
					<div class="question-blank__bottom-progress">
						<p class="question-blank__bottom-progress-text">
							{{ questionStep }}/{{ questionAnswersBusinessData.length }}
						</p>
						<div
							class="flex h-3 bg-gray-200 rounded-md overflow-hidden dark:bg-neutral-300 question-blank__bottom-progress-line"
							role="progressbar"
							aria-valuenow="25"
							aria-valuemin="0"
							aria-valuemax="100"
						>
							<div
								:style="{ width: progressBarWidth, backgroundColor: '#006569' }"
								class="flex flex-col justify-center rounded-md overflow-hidden text-xs text-white text-center whitespace-nowrap transition duration-500"
							></div>
						</div>
					</div>
					<button
						class="button send"
						v-if="questionStep != questionAnswersBusinessData.length"
						@click="nextQuestionStep"
					>
						{{ $t('questionnaire.button-continue') }}
					</button>
					<button class="button send" v-else @click="sendQuestion">
						{{ $t('questionnaire.button-send') }}
					</button>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped></style>
