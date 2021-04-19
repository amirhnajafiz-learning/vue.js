// To do list Vue app codes
const app = Vue.createApp({
    data() {
        return {
            newTask: "",
            currentPriority: 0,
            tasks: [],
            nextTaskId: 0,
            emptySubmit: false
        }
    },
    methods: {
        addNewTask () { // Adds the current task to list , and resets the page
            if (this.newTask == "") {
                this.emptySubmit = true
                return
            }
            this.emptySubmit = false
            this.tasks.push({
                id: this.nextTaskId++,
                title: this.newTask,
                priority: this.currentPriority,
                createTime: new Date(),
            })
            this.newTask = ""
            this.currentPriority = 0
        },
        generateDate (config) { // To modify date from createTime
            return config.getDate() + "/" + config.getMonth() + "/" + config.getFullYear() + " " + config.getHours() + ":" + config.getMinutes() + ":" + config.getSeconds()
        },
        sortTasks (raise) { // Sort tasks by their time based on 'raise' 
            this.tasks.sort((a,b) => (a.createTime > b.createTime) ? raise : ((b.createTime > a.createTime) ? -1 * raise : 0))
        },
        sortByPrio (raise) { // Sort tasks by their priority based on 'raise'
            this.tasks.sort((a,b) => (a.priority > b.priority) ? raise : ((b.priority > a.priority) ? -1 * raise : 0))
        },
        getAllTasks () { // This method will give a JSON file of all current tasks
            var a = document.createElement('a')
            var file = new Blob([JSON.stringify(this.tasks, null, 2)], {type: 'text/plain'})
            a.href = URL.createObjectURL(file)
            a.download = "tasks.txt"
            a.click()
        }
    }
})
app.component("todo-item", { // Each task component is a table row
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
// Connecting the app
app.mount("#app")
