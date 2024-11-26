/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'anuphan': "Anuphan, sans-serif",
				'alex' : "'Alex Brush', cursive",
			  },
			  backgroundImage: {
				'KusmiTea': "url('/Kusmi-Tea.jpg')",
				'Teaser': "url('/Teaser.png')",
				'footer-texture': "url('/img/footer-texture.png')"
			  },
			  animation: {
				"loop-scroll": 'loop-scroll 10s linear infinite',
			  },
			  keyframes: {
				"loop-scroll": {
				  from: { transform: 'translateY(0%)' },
				  to:{ transform: 'translateY(-50%)' },
				},
			},	
		
		},
	},
	plugins: [],
	safelist: [
		'bg-KusmiTea',
		'bg-Teaser'
	  ],
}
