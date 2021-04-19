const app = Vue.createApp({
    el: "#database-website",
    data() {
        return {
            searchInput: "",
            dataColumns: ["title", "topic", "views"],
            dataSet: [
                {
                    title: "test1",
                    topic: "game",
                    views: 2
                },
                {
                    title: "test2",
                    topic: "game4",
                    views: 5
                },
                {
                    title: "test3",
                    topic: "game5",
                    views: 1
                },
                {
                    title: "test4",
                    topic: "game6",
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

app.mount("#database-website")