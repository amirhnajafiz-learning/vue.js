// Another way to create and bind components in Vue ( using objects )
const tabs = [
    {
        name: "Homepage",
        component: {
            template: `<div>Home information</div>`
        }
    },
    {
        name: "Products",
        component: {
            template: `<div>Products information</div>`
        }
    },
    {
        name: "Contact",
        component: {
            template: `<div>Contact information</div>`
        }
    }
]


const app = Vue.createApp({
    data() {
        return {
            tabs,
            currentTab: tabs[0]
        }
    },
    computed: {
        getCurrentTab () {
            return "tab-" + this.currentTab.toLowerCase()
        }
    }
})

app.mount("#app")