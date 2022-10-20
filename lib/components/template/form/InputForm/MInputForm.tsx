/**
 * @description 输入框表单组件
 * @author 阿怪
 * @date 2022/10/21 01:53
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import { defineComponent, h } from "vue";
import { props } from "../api";
import { isEmpty } from "../../../../dependents/utils/tools";
import MFormPlus from "../MFormPlus";
import { MParamLabel } from "../../../../../types/common/MParamLabel";

export default defineComponent({
  name: 'MInputForm',
  props,
  setup: function (props, { slots }) {

    return () => {
      // 默认类型为input
      const items = props.items?.map(item => {
        if (isEmpty(item.type) && item.isSlot !== true) {
          return { ...item, type: 'input' } as MParamLabel;
        }
        return item;
      })

      return h(MFormPlus, {
        ...props,
        items
      }, slots);
    }
  }
})
