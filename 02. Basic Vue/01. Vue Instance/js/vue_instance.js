let  vm = new Vue({
    el: '#vue_det',
    data: {
        firstname : "Ria",
        lastname  : "Singh",
        address    : "Mumbai"
    },
    methods: {
        my_details : function() {
            return "I am " + this.firstname + " " + this.lastname + " from " + this.address;
        }
    }
})