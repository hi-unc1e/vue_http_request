import { createApp } from "vue";
import App from "./App.vue";
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
// import { DatePicker } from "ant-design-vue";

const app = createApp(App).use(Antd);
// app.use(DatePicker);
app.mount("#app");
