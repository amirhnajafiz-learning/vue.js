// Interpolate HTML with v-html
const InterpolateText = {
    data() {
        return {
            content: "<span style='color:red'>Red Text</span>"
        }
    }
}

Vue.createApp(InterpolateText).mount("#app");
