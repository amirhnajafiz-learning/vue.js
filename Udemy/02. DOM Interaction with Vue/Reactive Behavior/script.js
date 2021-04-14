// Creating the app and using v-bind to interact with DOM
const ReactiveBehavior = {
    data: function() {
        return {
            onHoverText: "Reactive \n Message."
        }
    }
}

Vue.createApp(ReactiveBehavior).mount("#app")