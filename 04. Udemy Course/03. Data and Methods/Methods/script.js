// Using methods property for vue apps
const myapp = Vue.createApp({
    data() {
        return {
            myapp_string: ""
        }
    },
    methods: {
        expand_content(i) {
            this.myapp_string += "E" + i
        }
    }
});

for(var i = 0; i < 10; i++)
    myapp.expand_content(i);