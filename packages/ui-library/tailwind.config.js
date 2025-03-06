/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#6D83F2",
          DEFAULT: "#3B5BDB",
          dark: "#2C3E9F",
        },
        secondary: {
          light: "#F2A6A6",
          DEFAULT: "#DB3B3B",
          dark: "#9F2C2C",
        },
        // 추가적인 사용자 정의 색상
        accent: "#FF5733",
        neutral: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
