import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import CompositionApi from '@vue/composition-api';

createApp(App).use(router).mount("#app");
