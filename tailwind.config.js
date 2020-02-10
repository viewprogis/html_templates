module.exports = {
  prefix: "tw-",
  theme: {
    screens: {
      //Matching breakpoints with Vuetify.
      sm: "600px",
      // => @media (min-width: 600px) { ... }

      md: "960px",
      // => @media (min-width: 960px) { ... }

      lg: "1264px",
      // => @media (min-width: 1264px) { ... }

      xl: "1904px"
      // => @media (min-width: 1904px) { ... }
    },
    extend: {
      colors: {
        primary: "#9DC653",
        secondary: "#FECC4E",
        tertiary: "#519CBA",
        lightgray: "#F0F2F4",
        redcustom: "#D62828",
        bluecustom: "#5190F6",
        greencustom: "#4BE600",
        graycustom: "#cccccc",
        lightbluealpha: "rgba(81, 156, 186, 0.2)",
        lightyellowalpha: "rgba(254, 204, 78, 0.2)",
        lightredalpha: "rgba(214, 40, 40, 0.2)",
        lightgreenalpha: "rgba(157, 198, 83, 0.2)",
        darkbluealpha: "rgba(81, 144, 246, 0.2)",
        bp: "#0070FF"
      },
      letterSpacing: {
        wider: "3px",
        widest: "6px"
      },
      fontFamily: {
        "open-sans": "'Open Sans', sans-serif"
      },
      fontSize: {
        "2xs": "0.65rem",
        "3xs": "0.55rem",
        "4xs": "0.45rem",
        "5-5xl": "3.5rem"
      },
      borderRadius: {
        "br-15": "15px",
        sm: "4px"
      },
      zIndex: {
        "-10": -10,
        "-20": -20,
        "-30": -30,
        "-40": -40,
        "-50": -50
      },
      padding: {
        "05": "0.05rem"
      },
      width: {
        "72": "18rem",
        "80": "20rem",
        "88": "22rem",
        "96": "24rem",
        "104": "26rem",
        "112": "28rem",
        "120": "30rem",
        "full-05": "105%",
        "full-10": "110%",
        "full-15": "115%",
        "full-20": "120%",
        "full-25": "125%",
        "full-30": "130%",
        "full-35": "135%",
        "full-40": "140%",
        "full-45": "145%",
        "full-50": "150%"
      },
      maxWidth: {
        "0": "none",
        "2xs": "18rem",
        "3xs": "16rem",
        "4xs": "14rem",
        "5xs": "12rem",
        "6xs": "10rem",
        "50": "50%"
      },
      height: {
        "72": "18rem",
        "80": "20rem",
        "88": "22rem",
        "96": "24rem",
        "104": "26rem",
        "112": "28rem",
        "120": "30rem",
        "128": "32rem",
        "136": "34rem",
        "144": "36rem",
        "152": "38rem",
        "180": "40rem"
      },
      minHeight: {
        "64": "16rem",
        "72": "18rem",
        "80": "20rem",
        "88": "22rem",
        "96": "24rem",
        "104": "26rem",
        "112": "28rem",
        "120": "30rem",
        "128": "32rem",
        "136": "34rem",
        "144": "36rem",
        "152": "38rem",
        "180": "40rem"
      },
      backgroundColor: {
        inherit: "inherit"
      },
      backgroundPosition: {
        "right-center": "right center"
      },
      boxShadow: {
        one: "-20px 30px 80px rgba(0,0,0,0.18)",
        two: "-25px 30px 80px rgba(40,44,65,0.26)"
      }
    }
  },
  variants: ["responsive", "hover", "focus", "group-hover"],
  plugins: []
};
