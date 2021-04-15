// Connecting checkboxes to Vue app
Vue.createApp({
    data() {
        return {
            options: [
                {id: "12", value:10, content:"High"},
                {id: "13", value:15, content:"Middle"},
                {id: "14", value:19, content:"Low"},
                {id: "15", value:20, content:"None"},
            ],
            checkedOptions: []
        }
    }
}).mount("#app");
