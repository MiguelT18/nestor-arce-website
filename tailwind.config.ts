import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		fontSize: {
			sm: "clamp(0.7rem, 5vw, 1.15rem)",
			md: "clamp(1.2rem, 5vw, 1.4rem)",
			lg: "clamp(1.4rem, 5vw, 1.6rem)",
		},
	},
	plugins: [nextui()],
};
export default config;
