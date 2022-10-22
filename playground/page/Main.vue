<template>
  <MTablePlus :data="data" :columns="columns">
    <template #name="{data, index}">
      {{data.name}}{{index}}
    </template>
  </MTablePlus>

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

const columns: MParamLabel[] = [
  { param: 'id', label: 'id' },
  { param: 'name', label: '名称', isSlot: true }
]

const data = [
  { id: 1, name: '壹' },
  { id: 2, name: '贰' }
]
</script>

<style lang="scss" scoped>

</style>
