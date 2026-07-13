import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],

  theme: {
    extend: {
      colors: {
        background: "#f7f5e2",
        surface: "#e9ddc2",
        primary: "#44537c",
        text: "#1a140a",
        "text-light": "#f7f5e2",
        "black":"#1a140a",
        "green": "#21855f",
        "red": "#aa3c2b"
      },

      fontFamily: {
        body: ["var(--font-body)"],
        heading: ["var(--font-heading)"],
      },

      borderRadius: {
        "1": "4px",
      },

      letterSpacing: {
        heading: "0.06em",
      },

      lineHeight: {
        heading: "1.1",
      },
    },
  },

  plugins: [],
};

export default config;