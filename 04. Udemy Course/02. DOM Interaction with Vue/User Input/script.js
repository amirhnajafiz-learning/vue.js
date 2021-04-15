// Using v-model to get user input into variables.
const userInput = {
    data() {
        return {
            textInput: ""
        }
    }
};

Vue.createApp(userInput).mount("#app");