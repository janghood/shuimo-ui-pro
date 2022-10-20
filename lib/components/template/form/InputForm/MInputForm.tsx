/**
 * @description 输入框表单组件
 * @author 阿怪
 * @date 2022/10/21 01:53
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import { defineComponent, ref } from "vue";
import { props } from "./api";
import { MForm, MFormItem, MInput } from "shuimo-ui";
import useModelValue from "../../../../compositions/common/useModelValue";
import useInputFormPropsValidate from "./componsitions/useInputFormPropsValidate";
import useIsSlotValidate from "../../../../compositions/common/useIsSlotValidate";

export default defineComponent({
  name: 'MInputForm',
  props,
  setup(props, { slots }) {
    const emptyDom = (<></>);
    const { validateProps } = useInputFormPropsValidate(props);

    if (!validateProps()) {
      return emptyDom;
    }

    const { isSlotValidate } = useIsSlotValidate('MInputForm', props.items, slots);
    if (!isSlotValidate()) {
      return emptyDom;
    }

    const data = ref(props.modelValue);
    useModelValue(data, props);

    return () => {
      const items = props.items.map(item => {
        return (
          <MFormItem label={item.label}>
            {item.isSlot ?
              slots[item.param]({ data: data.value[item.param] }) :
              <MInput v-model={data.value[item.param]}/>}
          </MFormItem>
        )
      })

      return (<MForm>{items}</MForm>)
    }
  }
})
