import { createApp } from "vue";
import { createPinia } from "pinia";

import BalmUI from "balm-ui";
import BalmUIPlus from "balm-ui-plus";

import App from "./App.vue";
import router from "./router";

import "./styles/_grid.css";
import "./styles/index.scss";
import { store } from "@/store";
import {CHECK_AUTH} from "@/store/actions_type";


router.beforeEach((to, from, next) => {
    store.dispatch(CHECK_AUTH).then(() => {
            if (to.matched.some(record => record.meta.requiresAuth) && store.getters.isAuthenticated === false) {
                next({path: "/"});
            } else {
                next();
            }
        })
    }
);

const app = createApp(App);

app.use(createPinia());
app.use(store)
app.use(router);
app.use(BalmUI);
app.use(BalmUIPlus);

app.mount("#app");
