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
        primary: "#b00835",
        secondary: "#ec6607",
        tertiary: "#fbf5f6",
        lightgray: "#f6f6f6"
      }
    }
  }
};

export default new Vuetify(opts);
