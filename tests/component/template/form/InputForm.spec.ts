/**
 * @description
 * @author 阿怪
 * @date 2022/10/21 02:23
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import { mount } from "@vue/test-utils";
import { MForm, MInput } from "shuimo-ui";
import { describe, test, expect, vi } from 'vitest';
import MInputForm from "../../../../lib/components/template/form/InputForm/MInputForm";
import { paramList, paramListWithSlot } from "../../../common/data/paramList";
import { h, ref } from 'vue';

const mountInputForm = (config: any) => {
  return mount(MInputForm, {
    components: {
      MForm,
      MInput
    },
    ...config
  })
}

describe('inputForm组件', () => {

  describe.skip('无参数异常', () => {

    test('未传items', () => {
      const modelValue = ref({ id: 1, name: '阿怪', age: 18 });
      const infoSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
      const wrapper = mountInputForm({ props: { modelValue, items: undefined } });
      expect(infoSpy).toHaveBeenCalled()
    });

    test('未传modelValue', () => {
      const infoSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
      const wrapper = mountInputForm({ props: { modelValue: undefined, items: paramList } });
      expect(infoSpy).toHaveBeenCalled()
    });

  })

  test('渲染', () => {
    const modelValue = ref({ id: 1, name: '阿怪', age: 18 });
    const wrapper = mountInputForm({
      props: {
        modelValue,
        items: paramList
      }
    })
    expect(wrapper.html()).toMatchInlineSnapshot(`
      "<form class=\\"m-form\\">
        <div class=\\"m-form-item\\"><label for=\\"\\" class=\\"m-form-item__label\\">id</label>
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
      </form>"
    `);
  })

  test('插槽', () => {
    const modelValue = ref({ id: 1, name: '阿怪', age: 18 });
    const wrapper = mountInputForm({
      props: {
        modelValue,
        items: paramListWithSlot
      },
      slots: {
        name: (info) => h('div', {}, info.data)
      }
    })
    expect(wrapper.html()).toMatchInlineSnapshot(`
      "<form class=\\"m-form\\">
        <div class=\\"m-form-item\\"><label for=\\"\\" class=\\"m-form-item__label\\">id</label>
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
        <div class=\\"m-form-item\\"><label for=\\"\\" class=\\"m-form-item__label\\">name</label>
          <div class=\\"m-form-item__content\\">
            <div>阿怪</div>
          </div>
        </div>
        <div class=\\"m-form-item\\"><label for=\\"\\" class=\\"m-form-item__label\\">age</label>
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
      </form>"
    `);
  })


})
