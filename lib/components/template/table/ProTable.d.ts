/**
 * @description pro table api type
 * @author youus
 * @date 2022/10/21 22:22
 * @version v1.0.0
 *
 * @name m-pro-table
 * @description Form Plus component with shuimo-ui style.
 *              水墨组件的高级表格组件
 * @docUrl https://shuimo.janghood.com/pro/table#pro-table
 * @sourceSymbol MProTable
 *
 * Hello, humor
 */

import { Pagination, Column } from '../../../../types/components/MProTable';

export declare type MProTableProps = {
  /**
   * @description 表格数据
   *
   * @type any
   * @default []
   */
  data: any[]
  /**
   * @description 表格列
   *
   * @type Column[]
   * @default []
   */
  columns: Column[]
  /**
   * @description 表格高度
   * @type string
   *
   * @default ''
   */
  height?: string
  /**
   * @description 分页相关内容
   * @type Pagination
   *
   * @default { current: undefined, total: 0, onChange: undefined, align: 'end' }
   */
  pagination?: Pagination
}
