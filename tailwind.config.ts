import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
      pattern: /(bg|from|to|text|outline)-(dayker|white|cocoa|lime|orange|chocolate|cloud|lavender|cyan|rose)/
    }
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
        },
        "dayker": {
          white: "#dcdcdc",
          light: "#424242",
          DEFAULT: "#2c2c2c",
          dark: "#1f1f1f"
        },
        "lime": {
          white: "#eef2e6",
          light: "#C6F27A",
          DEFAULT: "#b0d66b",
          dark: "#9CBF60"
        },
        "orange": {
          white: "#fffaf2",
          light: "#FFB940",
          DEFAULT: "#FFA040",
          dark: "#955E26"
        },
        "chocolate": {
          white: "#ccc7c2",
          light: "#CD955A",
          DEFAULT: "#B9752E",
          dark: "#955F26"
        },
        "cloud": {
          white: "#e4e9f0",
          light: "#69aaf0",
          DEFAULT: "#4F89C8",
          dark: "#2E5B89"
        },
        "lavender": {
          white: "#f6f2ff",
          light: "#AB8AFF",
          DEFAULT: "#7E6BC4",
          dark: "#7E6BC4"
        },
        "cyan": {
          white: "#f2f7ff",
          light: "#AFCDFF",
          DEFAULT: "#79A9FB",
          dark: "#617BCC"
        },
        "rose": {
          white: "#fff2f2",
          light: "#FF9F9F",
          DEFAULT: "#E97777",
          dark: "#e83a3a",
        },
      }
    }
  },
  plugins: [],
};
export default config;
