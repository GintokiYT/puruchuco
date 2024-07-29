import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        "p-gray-300": "#E6E6E6",
        "p-color-2": "#6CADDF",
        "p-color-3": "#001838",
        "p-color-4": "#FF9700"
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
  darkMode: 'media'
};
export default config;
