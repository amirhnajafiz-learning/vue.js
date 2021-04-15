// Working with data properties
const vueApp = Vue.createApp({
    data() {
        return {
            value = 0
        }
    }
});

vueApp.mount("#ID");

console.log(vueApp.value);

vueApp.$data.value = 100;

console.log(vueApp.$data.value + 10);