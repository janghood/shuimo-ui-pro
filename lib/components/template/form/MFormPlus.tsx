/**
 * @description 增强表单组件
 * @author 阿怪
 * @date 2022/10/21 05:00
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import { defineComponent, h, ref } from "vue";
import { props } from "./api";
import useFormPlusCommon from "./useFormPlusCommon";
import { MCheckbox, MForm, MFormItem, MInput, MInputNumber } from 'shuimo-ui';
import useModelValue from "../../../compositions/common/useModelValue";
import { MParamLabel } from "../../../../types/common/MParamLabel";
import defaultSlotsGetter from "../../../dependents/render/defaultSlotsGetter";
import useParamLabel from "../../../compositions/common/useParamLabel";


export default defineComponent({
  name: 'MFormPlus',
  props,
  setup(props, { slots }) {

    const emptyDom = (<></>);
    const { validate } = useFormPlusCommon('MFormPlus', props, slots);
    if (!validate()) {return emptyDom;}

    const data = ref(props.modelValue);
    useModelValue(data, props);

    const getFormItem = (item: MParamLabel) => {
      const props = {
        modelValue: data.value[item.param],
        ...item.props,
        'onUpdate:modelValue': (value: any) => {data.value[item.param] = value}
      }

        switch (item.type) {
        case 'input':
          return h(MInput, props);
        case 'number':
          return h(MInputNumber,props);
        case 'boolean':
          return h(MCheckbox,props);
        default:
          return <span>{data.value[item.param]}</span>
      }
    }
    const { paramLabels } = useParamLabel(props.items);

    return () => {
      let defaultSlot = defaultSlotsGetter(slots, props.modelValue);
      const items = paramLabels.map(item => {
        return (
          <MFormItem label={item.label}>
            {item.isSlot ? slots[item.param]!({ data: data.value[item.param] }) : getFormItem(item)}
          </MFormItem>
        )
      })
      return (<MForm>
        {items}
        {defaultSlot}
      </MForm>)
    }
  }
})
