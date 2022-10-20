import { createApp } from 'vue';
import App from './App.vue';
import { createMUI } from "shuimo-ui";
import 'shuimo-ui/dist/style.css';
import { createMUIPro } from "../lib";
import './style.scss'

const app = createApp(App);
const MUI = createMUI();
const MUIPro = createMUIPro();
app
  .use(MUI)
  .use(MUIPro)
  .mount('#app');

