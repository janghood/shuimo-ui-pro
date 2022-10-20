/**
 * @description 插槽校验
 * @author 阿怪
 * @date 2022/10/21 03:22
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import { MParamLabel } from "../../../types/common/MParamLabel";
import { MPrinter } from "shuimo-ui";
import { Slots } from "vue";

export default function useIsSlotValidate(componentName: string, items: MParamLabel[], slots: Slots) {

  const error = MPrinter(componentName ?? '组件').error;

  const isSlotValidate = () => {
    const missSlotNames: string[] = [];
    items.forEach(item => {
      if (item.isSlot && slots[item.param] === undefined) {
        missSlotNames.push(item.param);
      }
    })
    if (missSlotNames.length > 0) {

      error(`【${componentName}】缺少${missSlotNames.join('、')}的插槽！`);

      return false;
    }
    return true;
  }

  return {
    isSlotValidate
  }

}
