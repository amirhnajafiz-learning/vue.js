const app = Vue.createApp({
    data() {
        return {
            message: "Sample with arguments"
        }
    }
})

app.directive("arguments", {
    mounted(el, binding, vnode) {
        el.innerHTML = "value: " + JSON.stringify(binding.value) + "<br />" + "argument: " + JSON.stringify(binding.arg)
        + "<br />" + "modifiers: " + JSON.stringify(binding.modifiers)
    }
})

app.mount("#app")