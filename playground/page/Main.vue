<template>


  <m-table-plus :data="modelValue" :columns="columns">
    <m-table-column param="operator" label="操作">
      <template #default="{data}">
        <span>{{ data.age }}-{{ data.address }}</span>
      </template>
    </m-table-column>
  </m-table-plus>

</template>

<script lang="ts" setup>
/**
 * @description playground
 * @author 阿怪
 * @date 2021/6/8 11:42 下午
 * @version v1.0.0
 *
 * 公司的业务千篇一律，复杂的代码好几百行。
 */
import { MParamLabel } from "../../types/common/MParamLabel";
import { ref } from "vue";

const columns: MParamLabel[] = [
  { param: 'id', label: 'id' },
  { param: 'name', label: '名称' }
]

const modelValue = ref([{ id: 1, name: '阿怪', age: 18, address: '浙江省杭州市' }]);
</script>

<style lang="scss" scoped>

</style>
