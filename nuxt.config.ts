export default defineNuxtConfig({
	devtools: { enabled: true },
	app: {
		head: {
			link: [{ rel: 'icon', type: 'image/png', href: '/musait-logo-no-text.svg' }],
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
		['@nuxtjs/google-fonts',
			{
				families: {
					Inter: {
						wght: [400, 500, 600, 700, 900],
						ital: [300]
					},
					Lato: {
						wght: [400, 500, 600, 700, 900],
						ital: [300]
					},
				},
			}]
	],
	i18n: {
		lazy: true,
		langDir: 'locales',
		strategy: 'prefix',
		locales: [{
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
		{
			code: 'tr',
			iso: 'tr',
			name: 'Türkçe',
			file: 'tr.json',
		},
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
		'/': { prerender: false },
	}
})
