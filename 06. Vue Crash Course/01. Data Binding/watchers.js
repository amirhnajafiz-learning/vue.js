// With watch we can execute an always method on a variable
const app = new Vue({
    el: "#app",
    data: {
        isActive: 'not active'
    },
    watch: {
        isActive: function (newValue) {
            console.log("Email sent " + newValue)
        }
    }
})