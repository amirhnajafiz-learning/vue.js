// Using components to create root elements
const RootComponent = {};

// Creating an app with that root
const app = Vue.createApp(RootComponent);

// Mount it to an elements we want in the html page
const rootComponentInstance = app.mount("#ID");