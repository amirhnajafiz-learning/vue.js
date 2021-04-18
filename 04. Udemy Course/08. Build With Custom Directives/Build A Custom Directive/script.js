// By creating a directive, we set the input focus on, as soon as it mounted
const app = Vue.createApp({})

app.directive("focus", {
    mounted (el) {
        el.focus()
    }
})

app.mount("#app")