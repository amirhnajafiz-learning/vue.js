// Creating compute properties
let vm = new Vue({
    el: "#app",
    data: {
        population: 0
    },
    computed: {
        addPop () {
            return ++this.population
        }
    }
})