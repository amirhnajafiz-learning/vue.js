// Emiting an event in Vue
const app = Vue.createApp({
    data() {
        return {
            headers: [
                { id:1, title:"My first heaedr", headerFontSize: 1},
                { id:2, title:"My second header", headerFontSize: 1},
                { id:3, title:"My third header", headerFontSize: 1}
            ]
        }
    }
})

app.component("header-cmponent", {
    props: ["title"],
    template: `
    <div class="header-cmponent">

        <h2>{{ title }}</h2>

        <button @click="$emit('increase-text-size')"> Increase Text Size </button>

    <div>
    `
})

app.mount("#emit-events-div")