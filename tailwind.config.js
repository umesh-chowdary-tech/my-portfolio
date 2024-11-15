module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        backgroundImage:{
          'grey-wallpaper':"url('/public/images/backgroundImage.jpg')"
        },
        colors: {
          primary: '#FDB813',
        },
      },
    },
    plugins: [],
  }