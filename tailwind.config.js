/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./app.vue',
		'./error.vue',
	],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
			'2xl': '1536px',
		},
		extend: {
			colors: {
				primary: {
					500: '#006569',
					600: 'rgba(0, 102, 105, 0.1)',
				},
			},
		},
	},
	plugins: [],
}
