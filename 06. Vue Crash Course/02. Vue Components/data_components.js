Vue.component('posts', {
    props: ['data'],
    template: `
        <h1 @click="display">{{ data }}</h1>
    `,
    data() {
        return {
            msg: "Hello world"
        }
    },
    methods: {
        display () {
            console.log("Data is proccessed")
        }
    }
})

let vm = new Vue({
    el: "#app"
})