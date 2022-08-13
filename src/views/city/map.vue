<!--
 * @Author: Andy
 * @Date: 2022-08-12 14:46:41
 * @LastEditTime: 2022-08-12 16:27:18
-->
<template>
  <AppContainer :header-border="true" :loading="state.pageLoading" :page-percentage="state.pagePercentage">
    <template #header>
      <n-space style="padding: 3px">
        <span class="app-title">地图列表</span>
      </n-space>
    </template>
    <template #default></template>
    <template #bottom>
      <n-space justify="end" style="padding: 4px"></n-space>
    </template>
  </AppContainer>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'

interface State {
  tableHeight: number
  tableLoading: boolean
  pageLoading: boolean
  pagePercentage: number
  pageNow: number
}
const state = reactive<State>({
  tableHeight: 0,
  tableLoading: false,
  pageLoading: false,
  pagePercentage: 0,
  pageNow: 1,
})
</script>
<style lang="less" scoped></style>
