// To create an slot means to get some of the data from the parent element, not deleting all of
// the parent contents. ( extra html information )
const app = Vue.createApp({})

app.component("slot-component", {
    template: `
        <div>
            <p> The inner component </p>
            <slot></slot>
        </div>
    `
})

app.mount("#app")