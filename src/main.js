// import "./app.postcss";
import "./assets/scss/style.scss";
// import '@fortawesome/fontawesome-free/css/svg-with-js.css'
// import '@fortawesome/fontawesome-free/css/brands.css'
import "@fortawesome/fontawesome-free/css/all.min.css";

import App from "./App.svelte";

const app = new App({
  target: document.getElementById("app"),
});

export default app;
