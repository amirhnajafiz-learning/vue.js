// Creating a menu with Vue.js and v-for
Vue.createApp({
    data() {
        return {
            menu: [
                { 
                    name: "Sea Food",
                    foods: [
                        {name: "Salmon", price: "100$"},
                        {name: "Shrimp", price: "60$", number_in_plate: 10}
                    ]
                },
                {
                    name: "Fast Food",
                    foods: [
                        {name: "Italian Pizza", price: "50$"},
                        {name: "American Pizza", price: "45$"},
                        {name: "Hotdog", price: "12$"}
                    ]
                }
            ]
        }
    }
}).mount("#app");
