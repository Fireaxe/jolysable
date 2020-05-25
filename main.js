import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueI18n from 'vue-i18n'
import VueTimeago from 'vue-timeago'
import App from "./App"
import router from "./router"
import messages from '../lang/index'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueI18n)

Vue.use(VueTimeago, {
  locale: 'fr'
})

const i18n = new VueI18n({
  fallbackLocale: 'fr',
  locale: 'fr',
  messages
})

new Vue({
  router,
  i18n,
  render: (h) => h(App),
}).$mount("#app")
