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
				slideIn: {
					'0%': { opacity: 0, transform: 'translateY(20px)' },
					'100%': { opacity: 1, transform: 'translateY(0)' },
				  },
				showData: {
					'0%': { transform: 'translateY(50%)', opacity: 0 },
					'100%': { transform: 'translateY(-2rem)', opacity: 1 },
				},
				removeData: {
					"0%": { transform: "translateY(-1.75rem)" },
					"50%": { transform: "translateY(-2.5rem)" },
					"100%": { transform: "translateY(0.5rem)" },
				  },	
				  showOverflow: {
					'0%': { overflow: 'hidden', transform: 'translateY(100%)' },
					'50%': { overflow: 'hidden', transform: 'translateY(0)' },
					'100%': { overflow: 'visible', transform: 'translateY(0)' },
				  },
				  removeOverflow: {
					"0%": { overflow: "hidden" },
					"100%": { overflow: "initial" },
				  },	
			},
			backgroundImage: {
        noise: "url('https://www.transparenttextures.com/patterns/noise.png')",
      },
	  animation: {
		"loop-scroll": 'loop-scroll 15s linear infinite',
		"loop-reverse": 'loop-reverse 15s linear infinite',
		'gradient-flow': 'gradient-flow 6s ease-in-out infinite',
		'showData': "showData 1s forwards",
		   'removeData': "removeData 1s forwards",
		'showOverflow': "showOverflow 2s forwards",
		'removeOverflow': "removeOverflow 2s forwards",
		'slideIn': 'slideIn 0.7s ease-in-out forwards',

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