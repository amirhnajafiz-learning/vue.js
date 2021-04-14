// Using data to set properties for components
const app = Vue.createApp({
    data: function() {
        return {
            valueToReturn: 100
        }
    }
});

// Now we can mount the instance to an element
const appInstance = app.mount("#ID");

// Then we can access thoese values
console.log(appInstance.valueToReturn);