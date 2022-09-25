import { createApp } from "vue";
import { createPinia } from "pinia";

import BalmUI from "balm-ui";
import BalmUIPlus from "balm-ui-plus";

import App from "./App.vue";
import router from "./router";

import "./styles/_grid.css";
import "./styles/index.scss";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(BalmUI);
app.use(BalmUIPlus);

app.mount("#app");
