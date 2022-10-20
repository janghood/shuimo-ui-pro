/**
 * @description
 * @author 阿怪
 * @date 2022/10/21 02:29
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */

export declare type MParamLabel = {
  /**
   * @description 参数key
   * @type string
   * @default ''
   */
  param: string;
  /**
   * @description 参数label显示
   * @type string
   * @default ''
   */
  label: string;
  /**
   * @description 是否是插槽
   * @type boolean
   * @default false
   */
  isSlot?: boolean;
}
