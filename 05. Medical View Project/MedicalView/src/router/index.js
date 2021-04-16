import Vue from 'vue'
import Router from 'vue-router'
import PersonalForm from '@/components/PersonalForm'
import MedicalForm from '@/components/MedicalForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PersonalForm',
      component: PersonalForm
    },
    {
      path: '/medical',
      name: 'MedicalForm',
      component: MedicalForm
    }
  ]
})
