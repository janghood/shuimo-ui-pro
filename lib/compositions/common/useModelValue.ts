/**
 * @description 监听更新数据hook
 * @author 菩萨蛮
 * @date 2022/8/17 09:08
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import { onMounted, Ref, watch } from "vue";


export default function useModelValue<T>(
  data: Ref<Partial<T>>,
  props: {
    modelValue: T
  },
  handler?: {
    init?: () => void,
  }
) {

  const init = () => {
    data.value = props.modelValue;
    if (handler && handler.init) {
      handler.init();
    }
  }

  onMounted(() => {init();});
  watch(() => props.modelValue, () => {init();});


  return {
    init
  }


}
