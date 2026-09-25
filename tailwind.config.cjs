module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx}",
    ],
    // Dark mode follows the `dark` class on <html>, set by the theme toggle
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          primary: '#FDB813',
        },
      },
    },
    plugins: [],
  }
