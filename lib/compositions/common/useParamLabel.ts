/**
 * @description 通用paramLabel hook
 * @author 阿怪
 * @date 2022/10/23 23:57
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import { MParamLabel } from "../../../types/common/MParamLabel";


export default function useParamLabel(paramLabelArr: MParamLabel[]) {


  const paramLabels = paramLabelArr.filter(item => item.visible !== false);

  return {
    paramLabels
  }


}
