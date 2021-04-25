<template>
  <div class="container">
    <table class="table table-dark mt-4">
      <thead>
        <tr>
          <th scope="col">User id</th>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">Body</th>
        </tr>
      </thead>
      <tbody>
        <tr scope="row" v-for="post in posts" :key="post.id">
          <td>{{ post.userId }}</td>
          <td>{{ post.id }}</td>
          <td>{{ post.title }}</td>
          <td>{{ post.body }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
import axios from 'axios' // Importing from node modules

export default {
  name: "PostExample",
  data() {
    return {
      // This way of creating object of data for a component
      posts: []
    };
  },
  created() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(posts=> {
      this.posts = posts.data
    })
  }
};
</script>


<style>
</style>