import Vue from 'vue'
import PersonalForm from '@/components/PersonalForm'
import MedicalForm from '@/components/MedicalForm'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(PersonalForm)
})

new Vue({
  el: '#mdf',
  render: h => h(MedicalForm)
})
