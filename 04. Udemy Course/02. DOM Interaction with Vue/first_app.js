// You can create the app contents first
const YourFirstApp = {
    data: function() {
        return {
            text: "This is my first app."
        }
    }
}

// Then create an app and mount it to DOM
// in the element with ID you can access text by {{ text }}
Vue.createApp(YourFirstApp).mount("#ID");