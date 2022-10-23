/**
 * @description 获取默认插槽 hook
 * @author 阿怪
 * @date 2022/10/23 22:55
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import { Slots } from "vue";


export default function defaultSlotsGetter(slots: Slots | undefined, data: any) {

  let defaultSlot;
  if (slots?.default === undefined) {
    return ;
  }

  const _defaultSlotList = slots.default({ data });
  if (_defaultSlotList.length === 1 && _defaultSlotList[0].type === 'template') {
    // 如果长度等于1且类型是template，则默认拆开
    defaultSlot = _defaultSlotList[0].children;
  } else {
    defaultSlot = _defaultSlotList;
  }

  return defaultSlot

}
