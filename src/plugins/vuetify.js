import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

const opts = {
  icons: {
    iconfont: "md"
  },
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: "#9DC653",
        secondary: "#FECC4E",
        tertiary: "#519CBA",
        lightgray: "#F0F2F4"
      }
    }
  }
};

export default new Vuetify(opts);
