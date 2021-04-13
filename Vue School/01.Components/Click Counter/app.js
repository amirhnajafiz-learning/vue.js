Vue.component('click-counter', {
    template: '#click-counter-template',
    data () {
        return {
            count: 0
        }
    }
})

new Vue({
    el: '#app',
})


new Vue({
    el: '#counters',
    components: {
        'click-counter' : {
            template : "<button @click=\"count++\">{{count}}</button>",
            data: function ()
            {
                return {
                    count : 0
                }
            }
        }
    }
})