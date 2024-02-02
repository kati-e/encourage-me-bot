import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'blue': '#2400FF',
      'dark': '#000000',
      'light': '#ffffff',
      'grey': '#BEBEBE',
      'red': '#ffb2b2',
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
  },
}
export default config;
