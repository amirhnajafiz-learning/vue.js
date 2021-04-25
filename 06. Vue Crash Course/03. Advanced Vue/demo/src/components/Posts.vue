<template>
  <div class="container">
    <table class="table table-dark mt-4">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">Body</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in posts" :key="post.id">
          <td>{{ post.id }}</td>
          <td>{{ post.title }}</td>
          <td>{{ post.body }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
export default {
  name: "PostExample",
  data() {
    return {
      // This way of creating object of data for a component
      posts: [
        { id: 1, title: "post1", body: "aigohgagihaoga" },
        { id: 2, title: "post2", body: "ahgiahghsihdd" },
        { id: 3, title: "post3", body: "ahsihgishg" },
        { id: 4, title: "post4", body: "ahhdoowtyow" },
      ],
    };
  },
};
</script>


<style>
</style>