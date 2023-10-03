import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify'
import http from '../http-common'
import VueSession from 'vue-session'

Vue.use(VueSession, { persist: true })

Vue.config.productionTip = false

new Vue({
  store,
  router,
  vuetify,
  beforeCreate () {
    if (this.$session.exists()) {
      http.defaults.headers.common.Authorization = `bearer ${this.$session.get('accessToken')}`
    }
  },
  render: h => h(App)
}).$mount('#app')
