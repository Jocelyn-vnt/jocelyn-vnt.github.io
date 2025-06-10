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
				// Nouveaux gradients pour glassmorphisme
				'glass-gradient-1': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
				'glass-gradient-2': 'linear-gradient(135deg, rgba(138, 43, 226, 0.1), rgba(138, 43, 226, 0.05))',
				'glass-radial': 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.15), transparent 50%)',
			},
			backdropBlur: {
				'xs': '2px',
				'3xl': '64px',
				'4xl': '128px',
			},
			boxShadow: {
				'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
				'glass-inset': 'inset 0 1px 0 rgba(255, 255, 255, 0.2)',
				'glass-card': '0 8px 32px rgba(0, 0, 0, 0.3), 0 1px 0 rgba(255, 255, 255, 0.1) inset',
				'glass-hover': '0 15px 35px rgba(0, 0, 0, 0.4), 0 5px 15px rgba(0, 0, 0, 0.3)',
			},
			borderColor: {
				'glass': 'rgba(255, 255, 255, 0.18)',
				'glass-purple': 'rgba(138, 43, 226, 0.3)',
			},
			keyframes: {
				"loop-scroll": {
					from: { transform: 'translateY(-50%)' },
					to: { transform: 'translateY(0%)' },
				},
				"loop-reverse": {
					from: { transform: 'translateY(0%)' },
					to: { transform: 'translateY(-50%)' },
				},
				'gradient-flow': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' },
				},
				'glass-shimmer': {
					'0%': { 
						backgroundPosition: '-200% 0',
						opacity: '0'
					},
					'50%': { 
						opacity: '1'
					},
					'100%': { 
						backgroundPosition: '200% 0',
						opacity: '0'
					},
				},
				'glass-float': {
					'0%, 100%': { 
						transform: 'translateY(0px) rotate(0deg)',
					},
					'50%': { 
						transform: 'translateY(-10px) rotate(1deg)',
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
			animation: {
				"loop-scroll": 'loop-scroll 15s linear infinite',
				"loop-reverse": 'loop-reverse 15s linear infinite',
				'gradient-flow': 'gradient-flow 6s ease-in-out infinite',
				'glass-shimmer': 'glass-shimmer 3s ease-in-out infinite',
				'glass-float': 'glass-float 6s ease-in-out infinite',
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
		'animate-glass-shimmer',
		'animate-glass-float',
		// Classes glassmorphisme
		'backdrop-blur-md',
		'backdrop-blur-lg',
		'backdrop-blur-xl',
		'border-glass',
		'border-glass-purple',
		'shadow-glass',
		'shadow-glass-card',
		'shadow-glass-hover',
	],
}