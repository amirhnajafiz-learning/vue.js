// When creating an instance, you can execute code in lifecycles
const app = Vue.createApp({
    data: function() {
        return {
            someValue: "Created"
        }
    },
    created() {
        // This method is an lifecycle and executes whenever an object is created
        console.log(this.someValue);
    }
})