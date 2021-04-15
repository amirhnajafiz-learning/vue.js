// Creating components in Vue

// 1. The global method ( is top of local )
Vue.component('testcomponent',{
    template : '<div><h1>This is coming from component</h1></div>'
});

let vm = new Vue({
    el: '#component_test'
});

let vm1 = new Vue({
    el: '#component_test1'
});


// 2. The local method
let vm2 = new Vue({
    el: '#component_test2',
    components:{
        'testcomponent': {
            template : '<div><h4>This is coming from component</h4></div>'
        }
    }
});