/*
    Type for props is an array of string or object.
    It takes an array-based or object-based syntax.
    They are said to be attributes used to accept data from the parent component.
 */
Vue.component('props-demo-simple', {
    props: ['size', 'myMessage']
})

Vue.component('props-demo-advanced', {
    props: {
        // just type check
        height: Number,

        // type check plus other validations
        age: {
            type: Number,
            default: 0,
            required: true,
            validator: function (value) {
                return value >= 0
            }
        }
    }
})


// Props data
const Comp = Vue.extend({
    props: ['msg'],
    template: '<div>{{ msg }}</div>'
});

const vm = new Comp({
    propsData: {
        msg: 'hello'
    }
});