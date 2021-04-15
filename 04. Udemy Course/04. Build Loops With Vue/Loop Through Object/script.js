// Using v-for to loop in objects
Vue.createApp({
    data() {
        return {
            item: {
                name: "Box",
                size: "50cm",
                barcode: "1280A32"
            }
        }
    }
}).mount("#app");


Vue.createApp({
    data() {
        return {
            item: {
                name: "Box",
                size: "50cm",
                barcode: "1280A32"
            }
        }
    }
}).mount("#app-with-key");

Vue.createApp({
    data() {
        return {
            item: {
                name: "Box",
                size: "50cm",
                barcode: "1280A32"
            }
        }
    }
}).mount("#app-with-key-index");
