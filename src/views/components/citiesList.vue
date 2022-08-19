<!--
 * @Author: Andy
 * @Date: 2022-08-13 11:34:35
 * @LastEditTime: 2022-08-13 15:25:36
-->
<template>
  <div style="height: 100%">
    <n-transfer
      ref="transfer"
      :render-source-label="renderLabel"
      :render-target-label="renderLabel"
      size="large"
      :value="state.oneCityInfo?.portal"
      :options="state.transferOption"
      style="height: 90%"
      @update:value="cityChoose"
    />
    <n-button @click="updateCities">更新</n-button>
  </div>
</template>
<script lang="ts" setup>
import { h, reactive } from 'vue'
import { NIcon, TransferOption, TransferRenderSourceLabel } from 'naive-ui'
import cityAPI from '@/api/city'
import { City } from '@/types/city.interface'
import { SVGICONS } from '@/utils/icons'

const { fuben, outside, town, mainCity } = SVGICONS
interface State {
  citiesSimple?: City[]
  citiesSimpleMap: Map<string, City>
  transferOption: TransferOption[]
  oneCityInfo?: City
}
const state = reactive<State>({
  citiesSimple: [new City()],
  transferOption: [],
  citiesSimpleMap: new Map(),
})

const props = defineProps({
  cityChosen: {
    type: String,
    default: '',
  },
})
const creatOpions = async () => {
  state.citiesSimple = await cityAPI.getAllCitiesSimple()
  state.citiesSimpleMap = new Map(state.citiesSimple.map(city => [city._id as string, city]))
  state.oneCityInfo = await cityAPI.getOneCity({ id: props.cityChosen })
  for (let i = 0; i < state.citiesSimple.length; i++) {
    state.transferOption.push({
      value: state.citiesSimple[i]._id as string,
      label: state.citiesSimple[i].cityName,
      disabled: props.cityChosen === state.citiesSimple[i]._id,
    })
  }
}
const cityChoose = value => {
  if (state.oneCityInfo) {
    state.oneCityInfo.portal = value
  }
}
const renderLabel: TransferRenderSourceLabel = ({ option }) => h(
  'div',
  {
    style: {
      display: 'flex',
      margin: '6px 0',
    },
  },
  {
    default: () => [
      state.citiesSimpleMap.get(option.value as string)?.isCapital ? h(NIcon, { component: mainCity }) : null,
      state.citiesSimpleMap.get(option.value as string)?.isCity ? h(NIcon, { component: town }) : null,
      state.citiesSimpleMap.get(option.value as string)?.isRaid ? h(NIcon, { component: fuben }) : null,
      !state.citiesSimpleMap.get(option.value as string)?.isCapital && !state.citiesSimpleMap.get(option.value as string)?.isCity && !state.citiesSimpleMap.get(option.value as string)?.isRaid
        ? h(NIcon, { component: outside })
        : null,

      h(
        'div',
        {
          style: {
            display: 'flex',
            marginLeft: '6px',
            alignSelf: 'center',
          },
        },
        { default: () => option.label },
      ),
    ],
  },
)
const updateCities = async () => {
  if (state.oneCityInfo) {
    await cityAPI.updateCities(state.oneCityInfo)
  }
}
creatOpions()
</script>
<style lang="less" scoped></style>
