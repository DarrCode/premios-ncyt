import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify'
import VueSession from 'vue-session'
import moment from 'moment'

Vue.prototype.moment = moment
Vue.use(VueSession, { persist: true })

Vue.config.productionTip = false

new Vue({
  store,
  router,
  vuetify,
  beforeCreate () {
    console.log('token', sessionStorage.token);
    if (!sessionStorage.token) {
        this.$router.push('/login')
    }
  },
  render: h => h(App)
}).$mount('#app')
