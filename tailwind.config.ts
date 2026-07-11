import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        background: "#f7f5e2",
        surface: "e9ddc2",
        primary: "#44537c",
        text: "1a140a",
      },
      fontFamily: {
        body: ["var(--font-body)"],
        heading: ["var(--font-heading)"],
      },
      borderRadius: {
        card: "8px",
      },
      boxShadow: {
        card: "0 2px 6px rgba(0,0,0,.12)",
      },
    },
  },
};

export default config;