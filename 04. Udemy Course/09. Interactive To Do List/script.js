// Vue script source codes
const app = Vue.createApp({
    data() {
        return {
            newTask: "",
            tasks: [],
            nextTaskId: 0
        }
    },
    methods: {
        addNewTask() {
            this.tasks.push({
                id: this.nextTaskId++,
                title: this.newTask
            })
            this.newTask = ""
        }
    }
})

app.component("todo-item", {
    template: `
        <li>
            {{ title }}
            <button @click="$emit('remove')"> Remove Task </button>
        </li>
    `,
    props: ["title"]
})

app.mount("#app")