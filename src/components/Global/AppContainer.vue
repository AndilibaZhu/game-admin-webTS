<!--
 * @Author: Andy
 * @Date: 2022-05-04 15:50:22
 * @LastEditTime: 2022-08-19 20:08:17
-->
<template>
  <div class="app-container">
    <div v-if="isHasKey('header', slots)" class="app-header" :class="[props.headerBorder ? 'app-header-border' : null]">
      <slot name="header"></slot>
    </div>
    <div :style="{ height: store.PageHeight * heightRatio + 'px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }">
      <n-spin :show="loading" style="height: 100% ;padding:10px;">
        <template #description>
          <span style="color: #18a058">{{ loadingText }}</span>
          <n-progress style="width: 300px" type="line" status="success" :percentage="pagePercentage" :indicator-placement="'inside'" />
        </template>
        <template #default>
          <slot name="default" style="height: 100%"></slot>
        </template>
      </n-spin>

      <div>
        <slot name="bottom"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSlots, withDefaults } from 'vue'
import { mainStore } from '@/store/index'
import { isHasKey } from '@/utils/is'

const store = mainStore()
const slots = useSlots()

interface Props {
  pagePercentage?: number
  headerBorder?: boolean
  loading?: boolean
  heightRatio?: number
  loadingText?: string
}
const props = withDefaults(defineProps<Props>(), {
  pagePercentage: 0,
  headerBorder: false,
  loading: false,
  heightRatio: 1,
  loadingText: '正在载入列表',
})
const watchHeight = () => {
  const height = document.body.clientHeight
  store.PageHeight = height * 0.81
}
window.addEventListener('resize', watchHeight)
setTimeout(() => {
  watchHeight()
}, 1)
</script>

<style lang="less" scoped>
:deep(.n-spin-content) {
  height: 100%;
}
</style>
