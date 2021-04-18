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
                        url: "https://angular.io",
                        src: "https://vuejs.org/images/logo.png"
                    },
                    text: "Complete component based user interface framework. Includes most core features. More common at startups."
                }
            ]
        }
    }
})

app.component("cards-component", {
    props: ["title", "link", "text"],
    template: `
        <div class="card">

            <h2>{{ title }}</h2>

            <img v-bind:src="link.src" v-bind:alt="title" />

            <p>{{ text }}</p>

            <a :href="link.url" target="blank">
                <button>
                    {{ title }} website
                </button>
            </a>
        </div>
    `
})

app.mount("#app")