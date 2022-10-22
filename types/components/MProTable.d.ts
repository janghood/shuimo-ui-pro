/**
 * @Description
 * @Author youus
 * @Date 2022/10/21 22:25
 * @Version v1.0.0
 *
 * Hello, humor
 */
export declare type Column = {
  /**
   * @description 列宽
   * @type string
   * @default ''
   */
  width?: string
  /**
   * @description 列param
   * @type string
   * @default ''
   */
  param: string
  /**
   * @description 列label
   * @type string
   * @default ''
   */
  label: string
  /**
   * @description 自定义内容渲染,支持VNode
   * @type function
   * @default (value: any, row: any) => void
   */
  customRender?: (value: any, row: any) => void
  /**
   * @description 是否开启列插槽功能
   * @type boolean
   * @default false
   */
  isSlot?: boolean
}

export declare type Pagination = {
  /**
   * @description 当前页
   * @type number
   * @default undefined
   */
  current?: number
  /**
   * @description 页大小，组件暂不支持
   * @type number
   * @default 10
   */
  pageSize?: number
  /**
   * @description 总共条数
   * @type number
   * @default 0
   */
  total: number
  /**
   * @description 分页位置 'center' | 'left' | 'end'
   * @type string
   * @default 'end'
   */
  align?: string
  /**
   * @description 分页切换回调
   * @type function
   * @default (pn: number) => void
   */
  onChange?: (pn: number) => void
}
