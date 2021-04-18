// Creating a component
const app = Vue.createApp({})

app.component("mycomponent", {
    data() {
        return {
            property: "843"
        }
    },
    template: `
        <button v-on:click=" property+='3' "> 
            Clicked {{ property }} times
        </button>
    `
})

app.mount("#ID")