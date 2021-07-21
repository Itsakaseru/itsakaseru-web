module.exports = {
	purge: [ './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}' ],
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
					dark: '#3A3531',
				}
			},
			boxShadow: {
				'normal': '0 0 50px rgba(82, 76, 70, 0.05)',
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
