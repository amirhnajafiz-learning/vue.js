// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Posts from './components/Posts.vue' // Importing Router
import Contact from './components/Contact'

// Using router in Vue
Vue.use(VueRouter);

// Creating our routers
const routes = [
  {
    path: '/', component: Posts
  },
  {
    path: '/contact', component: Contact
  }
]

const router = new VueRouter({routes: routes}) // Defining router to register

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // Registering the router
  components: { App },
  template: '<App/>'
})
