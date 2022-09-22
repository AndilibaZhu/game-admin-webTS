<!--
 * @Author: Andy
 * @Date: 2022-08-13 11:52:19
 * @LastEditTime: 2022-09-20 22:36:28
-->
<template>
  <div style="height: 90%;">
    <n-grid :cols="2" style="height:100% ;">
      <n-gi>
        <n-grid :y-gap="8" :cols="3">
          <n-gi v-for="m in state.allMonsterList" :key="m._id">
            <n-checkbox
              :default-checked="state.cityInfo.monsters.findIndex((item) => item.id ==m._id) !== -1"
              :label="m.monsterName + '-lv.' + m.level"
              :on-update:checked="(v: boolean | null) =>monsterCheckChange(v as boolean, m._id as string)"
            />
          </n-gi>
        </n-grid>
      </n-gi>
      <n-gi>
        <div v-for="m,index in state.cityInfo.monsters" :key="m.id" style="border: 1px solid black; padding: 3px">
          <n-grid :cols="3">
            <n-gi :span="2">{{ state.allMonsterList.find(e => e._id === m.id)?.monsterName + '-lv.' + state.allMonsterList.find(e => e._id === m.id)?.level }}</n-gi>
            <n-gi>
              <n-input-number :value="m.count" size="small" :min="1" :max="100" @update:value="(v: number | null) => monsterCountChange(index,v as number)" />
            </n-gi>
          </n-grid>
        </div>
      </n-gi>
    </n-grid>
  </div>
  <n-button @click="updateMonster">更新</n-button>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import cityApi from '@/api/city'
import monsterApi from '@/api/monster'

import { City } from '@/types/city.interface'
import { Monster } from '@/types/monster.interface'

const props = defineProps({
  cityChosen: {
    type: String,
    default: '',
  },
})
interface State {
  cityInfo: City
  allMonsterList: Monster[]
}
const state = reactive<State>({
  cityInfo: new City(),
  allMonsterList: [],
})

const monsterCountChange = (index: number, value:number) => {
  state.cityInfo.monsters[index].count = value
}

const monsterCheckChange = (v:boolean, id: string) => {
  if (v) {
    state.cityInfo.monsters.push({ id, count: 1 })
  } else {
    state.cityInfo.monsters = state.cityInfo.monsters.filter((e) => e.id !== id)
  }
  console.log(state.cityInfo.monsters)
}
const init = async () => {
  state.cityInfo = await cityApi.getOneCity({ id: props.cityChosen })
  state.allMonsterList = (await monsterApi.getAllMonsters({ pageInfo: { pageNo: 1, pageLimit: 99999999999 } })).records
}
const updateMonster = async () => {
  await cityApi.updateCities(state.cityInfo)
}
init()
</script>
<style lang="less" scoped></style>
