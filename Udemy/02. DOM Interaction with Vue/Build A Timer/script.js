// Creating a timer with interval method in javascript
const Timer = {
    data: function() {
        return {
            timer: 0
        }
    },
    mounted() {
        // A lifecycle method
        setInterval( () => {
            this.timer++;
        }, 1000)
    }
}

Vue.createApp(Timer).mount("#Timer");