// Using v-for to create a list with Vue
const database = {
    data() {
        return {
            subject: "List of users",
            users: [
                { name: "Ali", id: 9831 },
                { name: "Amir", id: 9832 },
                { name: "Ali", id: 9833 },
                { name: "Hossein", id: 9834 },
                { name: "Mohammad", id: 9835 },
                { name: "Bijan", id: 9861 },
                { name: "Reza", id: 9861 },
                { name: "Homayon", id: 9836 },
                { name: "Reza", id: 9863 }
            ]
        }
    }
}

Vue.createApp(database).mount("#app");