let vm = new Vue({
    el: '#computed_props',
    data: {
        firstname :"",
        lastname :"",
        birthyear : ""
    },
    computed :{
        getfullname : function(){
            return this.firstname +" "+ this.lastname;
        }
    }
})