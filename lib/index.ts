/**
 * @description
 * @author 阿怪
 * @date 2022/10/21 01:54
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */

import { App, Component } from 'vue';
import MInputForm from "./components/template/form/InputForm/MInputForm";
import MFormPlus from "./components/template/form/MFormPlus";
import MTablePlus from './components/template/table/MTablePlus';

const components: Record<any, Component> = {
  MFormPlus, MInputForm, MTablePlus
}

export {
  MFormPlus, MInputForm, MTablePlus
}

export function createMUIPro() {
  return {
    install(app: App) {
      Object.keys(components).forEach(key => {
        app.component(key, components[key])
      })
      return app;
    }
  }
}
