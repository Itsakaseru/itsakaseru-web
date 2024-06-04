import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "cocoa" : {
          light: "#F4EAE9",
          DEFAULT: "#694B47",
          dark: "#452520",
        },
        "white": {
          light: "#FFFFFF",
          DEFAULT: "#F9F9F9",
          dark: "#F5F5F5",
        }
      }
    }
  },
  plugins: [],
};
export default config;
