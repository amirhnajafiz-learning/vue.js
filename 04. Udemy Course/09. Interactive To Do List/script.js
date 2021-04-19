// Vue script source codes
const app = Vue.createApp({
    data() {
        return {
            newTask: "",
            currentPriority: 0,
            tasks: [],
            nextTaskId: 0
        }
    },
    methods: {
        addNewTask() {
            this.tasks.push({
                id: this.nextTaskId++,
                title: this.newTask,
                priority: this.currentPriority,
                createTime: new Date()
            })
            this.newTask = ""
            this.currentPriority = 0
        },
        sortTasks(raise) {
            this.tasks.sort((a,b) => (a.createTime > b.createTime) ? raise : ((b.createTime > a.createTime) ? -1 * raise : 0))
        },
        sortByPrio(raise) {
            this.tasks.sort((a,b) => (a.priority > b.priority) ? raise : ((b.priority > a.priority) ? -1 * raise : 0))
        }
    }
})

app.component("todo-item", {
    template: `
        <tr>
            <td>{{ title }}</td>
            <td>{{ time }}</td>
            <td>{{ priority }}</td>
            <td><button @click="$emit('remove')"> Remove Task </button></td>
        </tr>
    `,
    props: ["title", "time", "priority"]
})

app.mount("#app")