// By using props we can get data from the parent element
// and then use it in child component
const app = Vue.createApp({})

app.component("header-component", {
    props: ["title"],
    template: `<h2>{{ title }}</h2>`
})

app.mount("#Id")