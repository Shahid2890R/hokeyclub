tailwind.config = {
  theme: {
    extend: {
      daisyui: {
        themes: ["light", "dark", "cupcake"],
      },
      colors: {
        primary: "#131318",
        secondary: "#FF4240",
        textColor: "rgba(19, 19, 24, 0.6)",
        paraText: "rgba(255, 255, 255, 0.60)",
        navLink: "#424247",
        borderColor: "rgba(19, 19, 24, 0.2)",
      },
      fontFamily: {
        manrope: "'Manrope', sans-serif",
      },
      maxWidth: {
        container: "1170px",
      },
      backgroundImage: {
        bannerImg: "url('../Images/1.png')",
      },
    },
  },
};