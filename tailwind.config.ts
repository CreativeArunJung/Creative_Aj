import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#ff7418",
          teal: "#164866",
          ink: "#06131c",
          cream: "#fffaf4"
        }
      },
      boxShadow: {
        premium: "0 28px 80px rgba(6, 19, 28, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
