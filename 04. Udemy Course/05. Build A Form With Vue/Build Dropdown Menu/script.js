// Connect the dropdown list to vue app
Vue.createApp({
    data() {
        return {
            selected: "none",
            items: [
                {
                    value: "D1", content: "Division 1"
                },
                {
                    value: "D2", content: "Second League"
                },
                {
                    value: "D3", content: "Primer League"
                }
            ]
        }
    }
}).mount("#app");