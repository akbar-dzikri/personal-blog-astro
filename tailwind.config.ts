import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        myLight: {
          "base-content": "#11030d",
          "base-100": "#fdf2f9",
          neutral: "#fdf2f9",
          primary: "#ffd1f1",
          secondary: "#ec838e",
          accent: "#e76565",
        },
      },
      {
        myDark: {
          "base-content": "#fceef8",
          "base-100": "#0d0209",
          neutral: "#0d0209",
          primary: "#2e0020",
          secondary: "#7c131e",
          accent: "#9a1818",
        },
      },
    ],
    // base: false,
    darkTheme: "myDark",
  },
} satisfies Config;
