// Using v-bind to add attributes
const vm = new Vue({
    el: '#vue_det',
    data: {
        firstname : "Ria",
        lastname  : "Singh",
        html_content : "<div><h1>Vue Js Template</h1></div>",
        img_src : "https://tpc.googlesyndication.com/simgad/4812514158207413468/downsize_200k_v1?sqp=4sqPyQSWAUKTAQgAEhQNzczMPhUAAABAHQAAAAAlAAAAABgAIgoNAACAPxUAAIA_Kk8IWhABHQAAtEIgASgBMAY4A0CAwtcvSABQAFgAYFpwAngAgAEAiAEAkAEAnQEAAIA_oAEAqAEAsAGAreIEuAH___________8BxQEtsp0-MhoI9QIQwwEYASABLQAAAD8wqgI4nAFFAACgPw&rs=AOga4qn8jgd9JfNuB8LpC6L2b9sw67wxTg",
        alternative: "pic",
        height: 400
    },
    props: {
        width: {
            type: Number,
            default: 500,
            validator: function (value)
            {
                return value >= 500;
            }
        },
        height: Number,
    }
})