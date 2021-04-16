import Vue from 'vue'
import Router from 'vue-router'
import PersonalForm from '@/components/PersonalForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PersonalForm',
      component: PersonalForm
    }
  ]
})
