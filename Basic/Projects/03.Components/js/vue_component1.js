// Having methods in components

Vue.component('testcomponent',{
    template : '<div v-on:mouseover="changename()" v-on:mouseout="originalname();">' +
        '<h1>Custom Component created by <span id = "name">{{name}} {{age}}</span></h1></div>',
    data: function() {
        return {
            name : "Ria",
            age : 0
        }
    },
    methods:{
        changename : function() {
            this.name = "Ben";
            this.age++;
        },
        originalname: function() {
            this.name = "Ria";
        }
    }
});

let vm = new Vue({
    el: '#component_test'
});

let vm1 = new Vue({
    el: '#component_test1'
});