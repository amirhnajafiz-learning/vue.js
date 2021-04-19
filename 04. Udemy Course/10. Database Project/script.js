// Database app Vue script
const app = Vue.createApp({
    el: "#database-website",
    data() {
        return {
            searchInput: "",
            dataColumns: ["title", "topic", "views"],
            dataSet: [
                {
                    title: "Learning vue js with Udemy course.",
                    topic: "Vue.js",
                    views: 2
                },
                {
                    title: "Tutorials point is also a good source.",
                    topic: "Vue.js",
                    views: 5
                },
                {
                    title: "React js is good, but Vue js is better.",
                    topic: "React js",
                    views: 1
                },
                {
                    title: "Learning react js is usefull in a front-end developer career.",
                    topic: "React js",
                    views: 1
                },
                {
                    title: "By joinning Vue school you can access their full course in learning Vue,and you can be a pro front-end developer in few month.",
                    topic: "Vue",
                    views: 10
                },
                {
                    title: "The markup language, that forms the skeleton of our website.",
                    topic: "HTML5",
                    views: 12
                },
                {
                    title: "If your interested in putting HTML code in javascipt functions, use React js.",
                    topic: "React",
                    views: 1
                }
            ]
        }
    }
})
app.component("database-website-component", {
    template: "#grid-template",
    props: ["entries", "columns", "filterKey"],
    data: function () {
        return {
            sortKey: ""
        }
    },
    computed: {
        filteredTitles: function () {
            const sortKey = this.sortKey
            const filterKey = this.filterKey && this.filterKey.toLowerCase()
            const order = this.sortColumns[sortKey] || 1
            let entries = this.entries
            if (filterKey) {
                entries = entries.filter( function(row) {
                    return Object.keys(row).some( function (key) 
                    {
                        return (
                            String(row[key])
                            .toLowerCase()
                            .indexOf(filterKey) > -1
                        )
                    })
                })
            }
            if (sortKey) {
                entries = entries.slice().sort( function (x,y) {
                    x = x[sortKey]
                    y = y[sortKey]
                    return (x === y ? 0 : x > y ? 1 : -1) * order
                })
            }
            return entries
        },
        sortColumns() {
            const sortedColumns = {}
            this.columns.forEach( function (key) {
                sortedColumns[key] = 1
            })
            return sortedColumns
        }
    },
    methods: {
        capitalize(inputString) {
            return inputString.charAt(0).toUpperCase() + inputString.slice(1)
        },
        sortBy(key) {
            this.sortKey = key 
            this.sortColumns[key] = this.sortColumns[key] * -1
        }
    }
})
// Connecting app to DOM
app.mount("#database-website")
