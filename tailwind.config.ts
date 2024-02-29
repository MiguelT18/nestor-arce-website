import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class",
	theme: {
		fontSize: {
			sm: "clamp(0.7rem, 5vw, 1.05rem)",
			md: "clamp(1.1rem, 5vw, 1.5rem)",
			lg: "clamp(1.5rem, 5vw, 1.9rem)",
		},
	},
	plugins: [nextui()],
};
export default config;
