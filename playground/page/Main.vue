<template>
  <MFormPlus :items="columns" v-model="modelValue">
    <template #default="{data}">
      <m-form-item label="地址">{{ data.address }}</m-form-item>
    </template>
  </MFormPlus>
  <MInputForm :items="columns" v-model="modelValue">
    <template>
      <m-form-item label="地址">
        <m-input v-model="modelValue.address"/>
      </m-form-item>
      <m-form-item label="地址">{{ modelValue.address }}</m-form-item>
    </template>
  </MInputForm>

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
import MInputForm from "../../lib/components/template/form/InputForm/MInputForm";

const columns: MParamLabel[] = [
  { param: 'id', label: 'id' },
  { param: 'name', label: '名称' },
  { param: 'password', label: '密码', props: { type: 'password' } },
]

const modelValue = ref({ id: 1, name: '阿怪', age: 18, address: '浙江省杭州市', password: '' });
</script>

<style lang="scss" scoped>

</style>
