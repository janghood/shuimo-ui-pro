/**
 * @description FormPlus组件测试
 * @author 阿怪
 * @date 2022/10/23 01:05
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */

import { describe, expect, test } from 'vitest';
import MFomPlus from '../../../../lib/components/template/form/MFormPlus';
import { mount } from "@vue/test-utils";
import { MForm, MInput } from "shuimo-ui";
import { ref } from "vue";
import { paramList, paramListWithType } from "../../../common/data/paramList";
import { MInputForm } from "../../../../lib";

const mountFormPlus = (config: any) => {
  return mount(MFomPlus, {
    components: {
      MForm, MInput, MInputForm
    },
    ...config
  })
}

describe('FormPlus组件', () => {
  test('渲染', () => {
    const modelValue = ref({ id: 1, name: '阿怪', age: 18 });
    const wrapper = mountFormPlus({
      props: {
        modelValue,
        items: paramList
      }
    })
    expect(wrapper.html()).toMatchInlineSnapshot(`
      "<form class=\\"m-form\\">
        <div class=\\"m-form-item\\"><label for=\\"\\" class=\\"m-form-item__label\\">id</label>
          <div class=\\"m-form-item__content\\"><span>1</span></div>
        </div>
        <div class=\\"m-form-item\\"><label for=\\"\\" class=\\"m-form-item__label\\">name</label>
          <div class=\\"m-form-item__content\\"><span>阿怪</span></div>
        </div>
        <div class=\\"m-form-item\\"><label for=\\"\\" class=\\"m-form-item__label\\">age</label>
          <div class=\\"m-form-item__content\\"><span>18</span></div>
        </div>
      </form>"
    `);
  });

  test('input type', () => {
    const modelValue = ref({ id: 1, name: '阿怪', age: 18 });
    const wrapper = mountFormPlus({
      props: {
        modelValue,
        items: paramListWithType
      }
    })
    expect(wrapper.html()).toMatchInlineSnapshot(`
      "<form class=\\"m-form\\">
        <div class=\\"m-form-item\\"><label for=\\"\\" class=\\"m-form-item__label\\">id</label>
          <div class=\\"m-form-item__content\\"><span>1</span></div>
        </div>
        <div class=\\"m-form-item\\"><label for=\\"\\" class=\\"m-form-item__label\\">name</label>
          <div class=\\"m-form-item__content\\">
            <div class=\\"m-border m-input\\">
              <div class=\\"m-border-main\\"><input type=\\"text\\" class=\\"m-input-inner\\" placeholder=\\"\\"></div>
              <div class=\\"m-border-line m-border-top-line\\"></div>
              <div class=\\"m-border-line m-border-left-line\\"></div>
              <div class=\\"m-border-line m-border-right-line\\"></div>
              <div class=\\"m-border-line m-border-bottom-line\\"></div>
            </div>
          </div>
        </div>
        <div class=\\"m-form-item\\"><label for=\\"\\" class=\\"m-form-item__label\\">age</label>
          <div class=\\"m-form-item__content\\"><span>18</span></div>
        </div>
      </form>"
    `);
  })
})
