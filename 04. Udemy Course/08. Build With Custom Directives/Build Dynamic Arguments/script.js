const app = Vue.createApp({
    data() {
        return {
            location: "top"
        }
    }
})

app.directive("stick-element", {
    mounted(el, binding) {
        el.style.position = "fixed"
        let locationArgument = binding.arg || "bottom"
        el.style[locationArgument] = binding.value + "px"
    }
})

app.mount("#app")