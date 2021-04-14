// Creating the vue instance
const app = Vue.createApp({});

// Setting components
app.component("UserInput", UserInputComponent);
// Setting directives
app.directive("blur", BlurDirective);
// Using plugins
app.use(LocalPlugin);