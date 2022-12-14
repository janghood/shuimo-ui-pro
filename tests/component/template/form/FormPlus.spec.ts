/**
 * @description FormPlus组件测试
 * @author 阿怪
 * @date 2022/10/23 01:05
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */

import { describe, expect, test } from 'vitest';
import MFormPlus from '../../../../lib/components/template/form/MFormPlus';
import { mount } from "@vue/test-utils";
import { MForm, MFormItem, MInput } from "shuimo-ui";
import { h, ref } from "vue";
import {
  paramList,
  paramListWithProps,
  paramListWithType,
  paramListWithVisibleFalse
} from "../../../common/data/paramList";
import { MInputForm } from "../../../../lib";

const mountFormPlus = (config: any) => {
  return mount(MFormPlus, {
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
        <!---->
      </form>"
    `);
  });

  describe('插槽', () => {
    test('默认default插槽', () => {
      const modelValue = ref({ id: 1, name: '阿怪', age: 18, address: '浙江省杭州市' });
      const wrapper = mountFormPlus({
        props: {
          modelValue,
          items: paramList
        },
        slots: {
          default: (data: { data: typeof modelValue }) =>
            h(MFormItem, { label: 'address' }, data.data.value.address)
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
          <div class=\\"m-form-item\\"><label for=\\"\\" class=\\"m-form-item__label\\">address</label>
            <div class=\\"m-form-item__content\\">浙江省杭州市</div>
          </div>
        </form>"
      `);
    })
  })

  test('部分不渲染', () => {
    const modelValue = ref({ id: 1, name: '阿怪', age: 18 });
    const wrapper = mountFormPlus({
      props: {
        modelValue,
        items: paramListWithVisibleFalse
      }
    })
    expect(wrapper.findAll('.m-form-item').length).toBe(2);
  })


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
        <!---->
      </form>"
    `);
  })


  test('input props', () => {
    const modelValue = ref({ id: 1, name: '阿怪', age: 18, password: '123456' });
    const wrapper = mountFormPlus({
      props: {
        modelValue,
        items: paramListWithProps
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
        <div class=\\"m-form-item\\"><label for=\\"\\" class=\\"m-form-item__label\\">password</label>
          <div class=\\"m-form-item__content\\">
            <div class=\\"m-border m-input\\">
              <div class=\\"m-border-main\\"><input type=\\"password\\" class=\\"m-input-inner\\" placeholder=\\"\\"></div>
              <div class=\\"m-border-line m-border-top-line\\"></div>
              <div class=\\"m-border-line m-border-left-line\\"></div>
              <div class=\\"m-border-line m-border-right-line\\"></div>
              <div class=\\"m-border-line m-border-bottom-line\\"></div>
            </div>
          </div>
        </div>
        <!---->
      </form>"
    `);
  })
})
