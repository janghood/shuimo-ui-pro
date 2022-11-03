/**
 * @Description table pro
 * @Author youus
 * @Date 2022/10/19 23:10
 * @Version v1.0.1
 *
 * Hello, humor
 * v1.0.1 阿怪 添加默认插槽
 */
import { defineComponent, ref } from 'vue';
import { MPagination, MTable, MTableColumn } from 'shuimo-ui';
import { props } from './api';
import { MParamLabel } from "../../../../types/common/MParamLabel";
import useParamLabel from "../../../compositions/common/useParamLabel";
import defaultSlotsGetter from "../../../dependents/render/defaultSlotsGetter";

export default defineComponent({
  name: 'MTablePlus',
  props,
  setup(props, { slots }) {
    const { pagination } = props;
    const innerCurrentPage = ref(pagination?.current);
    const { paramLabels } = useParamLabel(props.columns);

    const currentChangeHandler = (pn: number) => {
      innerCurrentPage.value = pn
      pagination?.onChange!(pn)
    }

    return () => {
      const { data, height } = props


      let defaultSlot = defaultSlotsGetter(slots, props.data);
      const tableColumns = paramLabels.map((col: MParamLabel) => {
        const { isSlot, customRender, ...colParams } = col;
        return (
          <MTableColumn param={colParams.param} label={colParams.label} width={colParams.props?.width}>
            {({ data, index }: any) => {
              if (isSlot) {
                const key = colParams.param;
                const slot = slots[key];
                if (slot) {
                  return slot({ data, index })
                } else {
                  console.error(`【列表】请先设置字段 ${key} 的插槽！`);
                  return null;
                }
              } else {
                return (customRender && customRender(data[colParams.param], data)) || data[colParams.param]
              }
            }}
          </MTableColumn>
        )
      });

      return tableColumns && (
        <>
          <MTable data={data} height={height}>
            {tableColumns}
            {defaultSlot}
          </MTable>
          {props?.pagination ? <MPagination
            style={{
              display: 'flex',
              justifyContent: pagination?.align || 'end'
            }}
            current={innerCurrentPage.value}
            total={pagination?.total}
            onChange={currentChangeHandler}
          /> : null}
        </>
      )
    }
  }
})
