import { createApp } from "vue";
//引入全局样式文件
import "./style/index.scss";
import App from "./App.vue";
import PrimeVue from "primevue/config";
//导入图标库样式
import "primeicons/primeicons.css";
//导入主题样式（其中之一）
import Aura from "@primevue/themes/aura";
import ToastService from "primevue/toastservice";
//引入路由文件
import router from "./router/index";
//引入pina
import pinia from "@/stores/index";
//引入pina持久化插件
import { createPersistedState } from "pinia-persistedstate-plugin";
//引入路由鉴权文件
import "./permission";
//引入自定义插件用来注册全局组件
import "virtual:svg-icons-register";
import globalComponent from "@/plugins";

const app = createApp(App);
const persist = createPersistedState();
//安装自定义插件
app.use(globalComponent);
//将各种实例挂载到全局
app.use(PrimeVue, {
  theme: {
    preset: Aura
  },
});
app.use(ToastService);
app.use(pinia);
pinia.use(persist);
app.use(router);
app.mount("#app");
