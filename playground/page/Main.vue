<template>
  <span>{{ modelValue }}</span>
  <MInputForm v-model="modelValue" :items="paramList">
    <template #name="{data}">
      <span>{{ data }}</span>
    </template>
  </MInputForm>
  <MFormPlus v-model="modelValue" :items="paramList">
    <template #name="{data}">
      <span>{{ data }}</span>
    </template>
  </MFormPlus>

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
import { ref } from "vue";
import MFormPlus from "../../lib/components/template/form/MFormPlus";

const paramList = [
  { param: 'id', label: 'id' },
  { param: 'name', label: 'name', isSlot: true },
  { param: 'age', label: 'age' },
]

const modelValue = ref({ id: 1, name: '阿怪', age: 18 });
</script>

<style lang="scss" scoped>

</style>
