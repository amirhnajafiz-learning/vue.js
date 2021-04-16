import Vue from 'vue'
import router from './router'
import PersonalForm from '@/components/PersonalForm'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(PersonalForm)
})
