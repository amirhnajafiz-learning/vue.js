<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld />
    <!-- Two way of registering -->
    <PostExample />
    <post-example />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import PostExample from './components/Posts'

export default {
  name: 'App',
  components: {
    HelloWorld,
    PostExample // You also need to register in here and then use it up in template
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
