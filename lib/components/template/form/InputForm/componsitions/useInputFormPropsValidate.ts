/**
 * @description
 * @author 阿怪
 * @date 2022/10/21 03:09
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import { MInputFormProps } from "../InputForm";
import { isEmpty } from "../../../../../dependents/utils/tools";
import { MPrinter } from "shuimo-ui";


export default function useInputFormPropsValidate(props: MInputFormProps) {
  const error = MPrinter('MInputForm').error;

  const validateProps = () => {

    if (isEmpty(props.modelValue)) {
      error('参数modelValue不可为空');
      return false;
    }

    if (isEmpty(props.items)) {
      error('参数items不可为空');
      return false;
    }

    return true;
  }

  return {
    validateProps
  }
}
