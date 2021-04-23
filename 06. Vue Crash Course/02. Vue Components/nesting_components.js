// Creating nesting components

Vue.component('posts', {
    template: `
        <div>
            <ul>
                <post v-for="post in posts" :key="post.id">{{ post.title }}</post>
            </ul>
        </div>
    `,
    data() {
        return {
            posts: [
                { id:1, title:"post1"},
                { id:2, title:"post2"},
                { id:3, title:"post3"},
                { id:4, title:"post4"},
                { id:5, title:"post5"}
            ]
        }
    }
})


Vue.component('post', {
    template: `<li><slot></slot></li>`
})


let vm = new Vue({
    el: "#app"
})