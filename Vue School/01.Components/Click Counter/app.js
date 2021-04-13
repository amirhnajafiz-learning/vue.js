Vue.component('click-counter', {
    template: '<button @click="count++">You clicked me {{ count }} times</button>',
    data () {
        return {
            count: 0
        }
    }
})

new Vue({
    el: '#app',
})