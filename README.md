# Vue Base

A repository for learning and practicing Vue.js

### Installing Vue
You can download the Vue library from <a href="https://vuejs.org/v2/guide/installation.html">here</a>.<br />
Or you can use online DNS servers by this script :
```javascript
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.js"></script>
```
If you are using native ES Modules, there is also an ES Modules compatible build:
```javascript
<script type="module">
  import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js'
</script>
```
Vue does not support IE8 and below, because it uses ECMAScript 5 features that are un-shimmable in IE8. However it supports all ECMAScript 5 compliant browsers.<br />
NPM is the recommended installation method when building large scale applications with Vue. It pairs nicely with module bundlers such as Webpack or Browserify.
```
$ npm install vue
```
A better way is to use Vue-CLI : 
```
$ npm install --global vue-cli
$ vue init webpack 'myproject'
$ cd 'myproject'
$ npm run dev
```
Once you run this, it will create the server on <i>Localhost:8080/</i>
<br />
Note: It's also good to install vue.js devtools, for inspecting and debugging. ( <a href="https://github.com/vuejs/vue-devtools#vue-devtools"> Here </a> )

### Source
  * [Plural Sight Course](https://www.pluralsight.com/pricing/skills)
  * [Vue Js Components Fundemental](https://vueschool.io/courses/vuejs-components-fundamentals)
  * [Tutorials Point](https://www.tutorialspoint.com/vuejs/index.htm)
  * [Full Course For Beginners](https://www.youtube.com/watch?v=4deVCNJq3qc)
  * [Learn Vue](https://learnvue.co/)
  * [Front end Masters](https://frontendmasters.com/)
