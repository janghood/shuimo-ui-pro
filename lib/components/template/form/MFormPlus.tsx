/**
 * @description 增强表单组件
 * @author 阿怪
 * @date 2022/10/21 05:00
 * @version v1.0.1
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 * v1.0.1 阿怪 添加默认插槽支持
 */
import { defineComponent, ref } from "vue";
import { props } from "./api";
import useFormPlusCommon from "./useFormPlusCommon";
import { MForm, MFormItem, MInput } from "shuimo-ui";
import useModelValue from "../../../compositions/common/useModelValue";
import { MParamLabel } from "../../../../types/common/MParamLabel";
import defaultSlotsGetter from "../../../dependents/render/defaultSlotsGetter";


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
      switch (item.type) {
        case 'input':
          return <MInput v-model={data.value[item.param]}/>;
        default:
          return <span>{data.value[item.param]}</span>
      }
    }


    return () => {
      let defaultSlot = defaultSlotsGetter(slots, props.modelValue);

      const items = props.items.map(item => {
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
