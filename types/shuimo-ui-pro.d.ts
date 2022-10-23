import { App } from "vue";

export * from './components/components';


declare module "shuimo-ui-pro" {

}

export interface ShuimoUIPro {
  install: (app: App) => App;
}

export function createMUIPro(): ShuimoUIPro;
