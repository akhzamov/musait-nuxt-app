export default defineNuxtConfig({
	devtools: {
		enabled: true,

		timeline: {
			enabled: true,
		},
	},
	app: {
		head: {
			link: [
				{ rel: 'icon', type: 'image/png', href: '/musait-logo-no-text.svg' },
			],
			bodyAttrs: {
				id: 'body',
			},
		},
	},
	css: ['~/assets/css/main.scss'],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	modules: [
		'@nuxt/image',
		'@nuxtjs/i18n',
		'@vueuse/nuxt',
		'@pinia/nuxt',
		[
			'@vee-validate/nuxt',
			{
				autoImports: true,
				componentNames: {
					Form: 'VeeForm',
					Field: 'VeeField',
					FieldArray: 'VeeFieldArray',
					ErrorMessage: 'VeeErrorMessage',
				},
			},
		],
		[
			'@nuxtjs/google-fonts',
			{
				families: {
					Inter: {
						wght: [400, 500, 600, 700, 900],
						ital: [300],
					},
					Lato: {
						wght: [400, 500, 600, 700, 900],
						ital: [300],
					},
				},
			},
		],
	],
	pinia: {
		storesDirs: ['./stores/**'],
	},
	i18n: {
		lazy: true,
		langDir: 'locales',
		locales: [
			{
				code: 'en',
				iso: 'en-US',
				name: 'English',
				file: 'en.json',
			},
			{
				code: 'ru',
				iso: 'ru',
				name: 'Русский',
				file: 'ru.json',
				isCatchallLocale: true,
			},
			// {
			// 	code: 'tr',
			// 	iso: 'tr',
			// 	name: 'Türkçe',
			// 	file: 'tr.json',
			// },
			{
				code: 'uz',
				iso: 'uz',
				name: "O'zbekcha",
				file: 'uz.json',
			},
		],
		defaultLocale: 'ru',
		vueI18n: './i18n.config.ts',
	},
	routeRules: {
		'/': { prerender: false, ssr: true },
		'/about': { redirect: '/technical' },
		'/cases': { redirect: '/technical' },
		'/contacts': { redirect: '/technical' },
		'/services': { redirect: '/technical' },
		'/vacancies': { redirect: '/technical' },
		'/en/about': { redirect: '/en/technical' },
		'/en/cases': { redirect: '/en/technical' },
		'/en/contacts': { redirect: '/en/technical' },
		'/en/services': { redirect: '/en/technical' },
		'/en/vacancies': { redirect: '/en/technical' },
	},
	nitro: {
		prerender: {
			routes: ['/index.html'],
		},
	},
	plugins: ['~/plugins/phone-mask.ts'],
})
