// Creating an app and have interaction with v-on
const myapp = {
    data: function() {
        return {
            text: "racecars"
        }
    },
    methods: {
        changeString() {
            this.text = this.text.split("").reverse().join("");
        }
    }
}

Vue.createApp(myapp).mount("#app");