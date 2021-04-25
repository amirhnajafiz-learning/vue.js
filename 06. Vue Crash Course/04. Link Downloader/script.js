const app = Vue.createApp({
    data() {
        return {
            link: "",
            links: []
        }
    },
    methods : {
        send() {        
            this.links.push(this.link)
            console.log(this.links)
            this.link = ""
        },
        remove() {
            this.link = this.links.pop()
        }
    }
})

app.mount("#app")