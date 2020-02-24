import Vue from "vue";
import Vuetify, {
  VApp,
  VSwitch,
  VSlider,
  VRadio,
  VRadioGroup,
  VBtn,
  VDialog,
  VDialogTransition
} from "vuetify/lib";
import { Ripple } from "vuetify/lib/directives";
//import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify, {
  components: {
    VApp,
    VSwitch,
    VSlider,
    VRadio,
    VRadioGroup,
    VBtn,
    VDialog,
    VDialogTransition
  },
  directives: {
    Ripple
  }
});

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
        lightgray: "#F0F2F4",
        red: "#D62828",
        blue: "#5190F6",
        green: "#4BE600",
        bluepurple: "#6641FF",
        anchor: "inherit"
      }
    }
  }
};

export default new Vuetify(opts);
