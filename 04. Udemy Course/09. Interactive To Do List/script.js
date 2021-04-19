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
                createTime: new Date(),
            })
            this.newTask = ""
            this.currentPriority = 0
        },
        generateDate(config) {
            return config.getDate() + "/" + config.getMonth() + "/" + config.getFullYear() + " " + config.getHours() + ":" + config.getMinutes()
        },
        sortTasks(raise) {
            this.tasks.sort((a,b) => (a.createTime > b.createTime) ? raise : ((b.createTime > a.createTime) ? -1 * raise : 0))
        },
        sortByPrio(raise) {
            this.tasks.sort((a,b) => (a.priority > b.priority) ? raise : ((b.priority > a.priority) ? -1 * raise : 0))
        },
        getAllTasks() {
            var a = document.createElement('a')
            var file = new Blob([JSON.stringify(this.tasks, null, 2)], {type: 'text/plain'})
            a.href = URL.createObjectURL(file)
            a.download = "tasks.txt"
            a.click()
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