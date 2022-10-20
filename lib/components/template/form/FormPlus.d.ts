/**
 * @description form-plus api type
 * @author 阿怪
 * @date 2022/10/21 05:01
 * @version v1.0.0
 *
 * @name m-form-plus
 * @description Form Plus component with shuimo-ui style.
 *             水墨组件的高级表单组件。
 * @docUrl https://shuimo.janghood.com/pro/form#form-plus
 * @sourceSymbol MFormPlus
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import { MParamLabel } from "../../../../types/common/MParamLabel";

export declare type MFormPlusCommonProps = {
  /**
   * @description data value
   *              表单参数
   * @type any
   */
  modelValue: any,
  /**
   * @description items
   *              表单列表
   * @type MParamLabel[]
   * @default []
   *
   */
  items: MParamLabel[]
}
