import flowbitePlugin from "flowbite/plugin";

import type { Config } from "tailwindcss";

import defaultTheme from "tailwindcss/defaultTheme";

export default {
	content: ["./src/**/*.{html,js,svelte,ts}", "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}"],
	darkMode: "selector",
	theme: {
		extend: {
			fontFamily: { sans: ["Outfit", ...defaultTheme.fontFamily.sans] },
			colors: {
				// flowbite-svelte
				primary: {
					"50": "#faf5ff",
					"100": "#eff6ff",
					"200": "#dbeafe",
					"300": "#bfdbfe",
					"400": "#93c5fd",
					"500": "#60a5fa",
					"600": "#3b82f6",
					"700": "#2563eb",
					"800": "#1d4ed8",
					"900": "#1e40af",
				},
			},
		},
	},

	plugins: [flowbitePlugin],
} as Config;
