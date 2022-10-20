/**
 * @description 通用form-plus hook
 * @author 阿怪
 * @date 2022/10/21 05:21
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import { Slots } from "vue";
import useInputFormPropsValidate from "./InputForm/componsitions/useInputFormPropsValidate";
import useIsSlotValidate from "../../../compositions/common/useIsSlotValidate";
import { MFormPlusCommonProps } from "./FormPlus";

export default function useFormPlusCommon(componentName: string, props: MFormPlusCommonProps, slots: Slots) {

  const validate = () => {
    const { validateProps } = useInputFormPropsValidate(props);

    if (!validateProps()) {
      return false;
    }

    const { isSlotValidate } = useIsSlotValidate('MInputForm', props.items, slots);
    if (!isSlotValidate()) {
      return false;
    }

    return true;
  }

  return {
    validate
  }
}
