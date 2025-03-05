/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primaryTextColor: "#6B6B6B",
				secondaryTextColor: "#999999",
				brightOrange: "#FE4400",
				secondayBgColor: "#F7F7F7",
			},
			fontFamily: {
				jetBrains: ["jetBrains mono", "sans-serif"],
				openSans: ["Open sans", "sans-serif"],
			},
			keyframes: {
				bgMove: {
					"0%": { backgroundPosition: "100% 0%" },
					"100%": { backgroundPosition: "0% 0%" },
				},
			},
			animation: {
				"bg-move": "bgMove 2s ease-in-out forwards",
			},
			backgroundImage: {
				"gradient-to-right": "linear-gradient(to right, gray, yellow)",
			},
		},
	},
	variants: {
		extend: {
			animation: ["hover"],
		},
	},
	plugins: [],
};
