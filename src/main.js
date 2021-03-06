import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VuePersianDatetimePicker from "vue-persian-datetime-picker";

Vue.config.productionTip = false;
Vue.component("date-picker", VuePersianDatetimePicker);
Vue.use(require("vue-jalali-moment"));
new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
