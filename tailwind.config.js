module.exports = {
	purge: {
		content: [ './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}' ],
		safelist: [
			/^from-lime/, /^to-lime/, /^text-lime/,
			/^from-orange/, /^to-orange/, /^text-orange/,
			/^from-chocolate/, /^to-chocolate/, /^text-chocolate/,
			/^from-dayker/, /^to-dayker/, /^text-dayker/,
			/^from-cloud/, /^to-cloud/, /^text-cloud/,
			/^from-lavender/, /^to-lavender/, /^text-lavender/
		]
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				"primary": [ "Poppins", "sans-serif" ],
				"secondary": [ "Inter", "sans-serif" ]
			},
			colors: {
				primary: {
					light: '#787068',
					DEFAULT: '#524C46',
					dark: '#3A3531'
				},
				lime: {
					light: '#C6F27A',
					DEFAULT: '#b0d66b',
					dark: '#9CBF60'
				},
				orange: {
					light: '#FFB940',
					DEFAULT: '#FFA040',
					dark: '#955E26'
				},
				chocolate: {
					light: '#CD955A',
					DEFAULT: '#B9752E',
					dark: '#955F26'
				},
				dayker: {
					light: '#424242',
					DEFAULT: '#2c2c2c',
					dark: '#1f1f1f'
				},
				cloud: {
					light: '#69aaf0',
					DEFAULT: '#4F89C8',
					dark: '#2E5B89'
				},
				lavender: {
					light: '#AB8AFF',
					DEFAULT: '#7E6BC4',
					dark: '#7E6BC4'
				}
			},
			boxShadow: {
				'normal': '0 0 50px rgba(82, 76, 70, 0.05)',
			},
			maxWidth: {
				'icon': '10rem',
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
