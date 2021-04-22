// Using methods in app.
// In this app I create a color changer button with undo feature
let vm = new Vue({
    el: "#app",
    data: {
        backgroundColor: "",
        color: "",
        oldBackGround: []
    },
    methods: {
        changeColor () {
            this.oldBackGround.push(this.backgroundColor)
            var r = Math.floor(Math.random() * (255 - 0) ) + 0
            var g = Math.floor(Math.random() * (255 - 0) ) + 0
            var b = Math.floor(Math.random() * (255 - 0) ) + 0
            this.backgroundColor = "rgb(" + r + "," + g + "," + b + ")"
        },
        reverseColor () {
            if (this.oldBackGround.length == 0)
                return
            this.backgroundColor = this.oldBackGround.pop()
        }
    }
})