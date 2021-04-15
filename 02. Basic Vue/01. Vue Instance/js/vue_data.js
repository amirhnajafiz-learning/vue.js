// An example of creating vue object with data
const _obj = {f_name: "Raj", l_name: "Singh", age: 32};

// direct instance creation
const vm = new Vue({
    data: _obj
});

console.log(vm.f_name);
console.log(vm.$data);
console.log(vm.$data.f_name);


/*
    If there is a component, the data object has to
    be referred from a function as shown in the following code.
 */
// must use function when in Vue.extend()
const Component = Vue.extend({
    data: function () {
        return _obj
    }
});
// Creating an instance of component
const myComponentInstance = new Component();
console.log(myComponentInstance.l_name);
console.log(myComponentInstance.$data);