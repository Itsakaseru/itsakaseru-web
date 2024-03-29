const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [ 
		"./app/**/*.{js,ts,jsx,tsx}",
    	"./pages/**/*.{js,ts,jsx,tsx}",
    	"./components/**/*.{js,ts,jsx,tsx}",
	],
	safelist: [
		{
			pattern: /(from|to|text)-(lime|orange|chocolate|dayker|cloud|lavender|cyan)/
		}
	],
	theme: {
		extend: {
			fontFamily: {
				"primary": [ "var(--font-poppins)", fontFamily.sans ],
				"secondary": [ "var(--font-inter)", fontFamily.sans ]
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
				},
				cyan: {
					light: '#AFCDFF',
					DEFAULT: '#79A9FB',
					dark: '#617BCC'
				}
			},
			boxShadow: {
				'normal': '0 0 50px rgba(82, 76, 70, 0.05)',
			},
			maxWidth: {
				'small': '8rem',
				'icon': '10rem',
			},
			maxHeight: {
				'small': '8rem',
				'icon': '10rem',
			},
			width: {
				'landscape': '45rem',
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
	],
}
