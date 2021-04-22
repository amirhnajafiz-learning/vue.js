// An app with conditional statement to show diffrent elements
const app = new Vue({
    el: "#app",
    data: {
        lightOn: true
    },
    methods: {
        switchIt () {
            this.lightOn = !this.lightOn;
        }
    }
})


const game = new Vue({
    el: "#game",
    data: {
        state: 0
    },
    methods: {
        nextNode () {
            this.state++;
        },
        prevNode () {
            this.state--;
        }
    }
})