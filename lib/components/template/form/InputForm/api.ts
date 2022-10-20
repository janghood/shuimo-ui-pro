/**
 * @description input-form api type
 * @author 阿怪
 * @date 2022/10/21 02:20
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import type { WCOPO, WPropType } from "shuimo-ui/lib/dependents/_types";
import type { MInputFormProps } from "./InputForm";
import type { MParamLabel } from "../../../../../types/common/MParamLabel";

export const props: WCOPO<MInputFormProps> = {
  modelValue: { type: undefined, required: true },
  items: { type: Array as WPropType<MParamLabel[]>, required: true }
}
