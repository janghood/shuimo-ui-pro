/**
 * @Description
 * @Author youus
 * @Date 2022/10/21 23:05
 * @Version v1.0.0
 *
 * Hello, humor
 */
import { WCOPO, WPropType } from "shuimo-ui/lib/dependents/_types";
import { MProTableProps}  from './ProTable';
import { Column, Pagination } from '../../../../types/components/MProTable';

export const props: WCOPO<MProTableProps> = {
  data: { type: Array as WPropType<any[]>, required: true },
  columns: { type: Array as WPropType<Column[]>, required: true },
  pagination: { type: Object as WPropType<Pagination>, required: false, default: undefined },
  height: { type: String, required: false, default: '' }
}
