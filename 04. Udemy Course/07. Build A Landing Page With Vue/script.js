const app = Vue.createApp({
    data () {
        return {
            cards: [
                {
                    title: "Vue",
                    link: {
                        url: "https://vuejs.org",
                        src: "https://vuejs.org/images/logo.png"
                    },
                    text: "Complete component based user interface framework. Includes most core features. More common at startups."
                },
                {
                    title: "React",
                    link: {
                        url: "https://reactjs.org",
                        src: "https://vuejs.org/images/logo.png"
                    },
                    text: "Complete component based user interface framework. Includes most core features. More common at startups."
                },
                {
                    title: "Angular",
                    link: {
                        url: "https://angular.oi",
                        src: "https://vuejs.org/images/logo.png"
                    },
                    text: "Complete component based user interface framework. Includes most core features. More common at startups."
                }
            ]
        }
    }
})