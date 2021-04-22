// Use vue to class bind the elements and their layout.
// Class binding is actually a js object that sets insted of style 
// and will change the style attributes of the element.
const vm = new Vue({
    el: '#app',
    data() {
        return {
            backgroundColor: 'gray',
            color: 'white'
        }
    }
})
