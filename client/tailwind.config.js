/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        ":root": {
          "--color-primary": "#1967b2",
        },
      });
    },
  ],
};
