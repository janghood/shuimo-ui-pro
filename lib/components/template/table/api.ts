/**
 * @Description
 * @Author youus
 * @Date 2022/10/21 23:05
 * @Version v1.0.0
 *
 * Hello, humor
 */
import { WCOPO, WPropType } from "shuimo-ui/lib/dependents/_types";
import { MTablePlusProps}  from './TablePlus';
import { MParamLabel } from "../../../../types/common/MParamLabel";
import { Pagination } from '../../../../types/components/MTablePlus';

export const props: WCOPO<MTablePlusProps> = {
  data: { type: Array as WPropType<any[]>, required: true },
  columns: { type: Array as WPropType<MParamLabel[]>, required: true },
  pagination: { type: Object as WPropType<Pagination>, required: false, default: undefined },
  height: { type: String, required: false, default: '' }
}
