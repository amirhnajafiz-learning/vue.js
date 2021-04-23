// Create a simple component
Vue.component('posts', {
    template: `<h1> This is my template </h1>`,
    data() {
        return {
            msg: "The inline component"
        }
    },
    methods: {
        display () {
            console.log("Display clicked")
        }
    }
})


let vm = new Vue({
    el: "#app",
    data: {

    }
})