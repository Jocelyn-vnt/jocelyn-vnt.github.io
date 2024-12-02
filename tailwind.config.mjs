/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'anuphan': "Anuphan, sans-serif",
				'alex': "'Alex Brush', cursive",
			},
			backgroundImage: {
				'KusmiTea': "url('/Kusmi-Tea.jpg')",
				'Teaser': "url('/Teaser.png')",
				'LogoSAE401': "url('/Logo-SAE401.png')",
				'CEBX': "url('/CEBX.png')",
				'footer-texture': "url('/img/footer-texture.png')",
				'noise': "url('https://www.transparenttextures.com/patterns/noise.png')",

			
			},
			animation: {
				"loop-scroll": 'loop-scroll 15s linear infinite',
				"loop-reverse": 'loop-reverse 15s linear infinite',
				'gradient-flow': 'gradient-flow 6s ease-in-out infinite',

			},
			keyframes: {
				"loop-scroll": {
					from: {
						transform: 'translateY(-50%)'
					},
					to: {
						transform: 'translateY(0%)'
					},
				},
				"loop-reverse": {
					from: {
						transform: 'translateY(0%)'
					},
					to: {
						transform: 'translateY(-50%)'
					},
				},
				'gradient-flow': {
					'0%': {
						backgroundPosition: '0% 50%'
					},
					'50%': {
						backgroundPosition: '100% 50%'
					},
					'100%': {
						backgroundPosition: '0% 50%'
					},
				},
			},
			backgroundImage: {
        noise: "url('https://www.transparenttextures.com/patterns/noise.png')",
      },


		},
	},
	plugins: [],
	safelist: [
		'bg-KusmiTea',
		'bg-Teaser',
		'bg-LogoSAE401',
		'bg-CEBX',
		'animate-loop-scroll',
		'animate-loop-reverse',
	],
}