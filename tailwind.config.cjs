module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#7c3aed",
        primary: "#0ea5e9",
        glass: "rgba(255,255,255,0.06)"
      },
      boxShadow: {
        'soft': '0 6px 20px rgba(12,12,30,0.08)'
      }
    }
  },
  plugins: []
};
