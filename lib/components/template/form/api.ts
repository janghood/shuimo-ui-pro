/**
 * @description form api
 * @author 阿怪
 * @date 2022/10/21 05:01
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import { WCOPO, WPropType } from "shuimo-ui/lib/dependents/_types";
import { MFormPlusCommonProps } from "./FormPlus";
import { MParamLabel } from "../../../../types/common/MParamLabel";

export const props: WCOPO<MFormPlusCommonProps> = {
  modelValue: { type: undefined, required: true },
  items: { type: Array as WPropType<MParamLabel[]>, required: true }
}
