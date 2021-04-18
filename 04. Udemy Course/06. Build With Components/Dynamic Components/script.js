// Creating a tab component with v-bind:is and 
const app = Vue.createApp({
    data() {
        return {
            currentTab: "Homepage",
            tabs: ["Homepage", "Products", "Contact"]
        }
    },
    computed: {
        currentTabComponent () {
            return "tab-" + this.currentTab.toLowerCase()
        }
    }
})

app.component("tab-homepage", {
    template: `<div class="navoption"> Homepage information </div>`
})

app.component("tab-products", {
    template: `<div class="navoption"> Products information </div>`
})

app.component("tab-contact", {
    template: `<div class="navoption"> Contact information </div>`
})

app.mount("#app")