<!--
 * @Author: Andy
 * @Date: 2022-08-12 14:46:47
 * @LastEditTime: 2022-08-19 14:23:54
-->
<template>
  <n-modal v-model:show="state.modalShowAdd">
    <n-card :style="{ width: '70%', height: store.PageHeight * 0.9 + 'px' }" title="添加城市" :bordered="true" size="huge">
      <n-form ref="formRef" label-placement="left" label-align="left" :model="state.createCity">
        <n-grid :cols="24" :x-gap="24">
          <n-form-item-gi :span="8" label="名称">
            <n-input v-model:value="state.createCity.cityName" placeholder="输入城市名称" />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="是否首都">
            <n-switch v-model:value="state.createCity.isCapital" placeholder="是否首都" />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="是否城市">
            <n-switch v-model:value="state.createCity.isCity" placeholder="是否城市" />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="是否副本">
            <n-switch v-model:value="state.createCity.isRaid" placeholder="是否副本" />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="等级">
            <n-input-number v-model:value="state.createCity.level" placeholder="等级" />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="描述">
            <n-input v-model:value="state.createCity.dec" placeholder="描述" />
          </n-form-item-gi>
          <n-form-item-gi label="怪物列表" :span="8">
            <n-dynamic-tags v-model:value="state.createCity.monsters" />
          </n-form-item-gi>
          <n-form-item-gi label="NPC列表" :span="8">
            <n-dynamic-tags v-model:value="state.createCity.NPCS" />
          </n-form-item-gi>
          <n-form-item-gi label="Buff列表" :span="8">
            <n-dynamic-tags v-model:value="state.createCity.Buff" />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="声望">
            <n-input v-model:value="state.createCity.prestigeName" placeholder="声望名称" />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="声望要求">
            <n-input-number v-model:value="state.createCity.prestigeRequire" placeholder="声望要求" />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="可复活">
            <n-switch v-model:value="state.createCity.resurrection" placeholder="可复活" />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="tiledMap">
            <n-input v-model:value="state.createCity.tiledMap" placeholder="瓦片地图名称" />
          </n-form-item-gi>
          <n-form-item-gi label="标签" :span="8">
            <n-dynamic-tags v-model:value="state.createCity.tags" />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="地图大小">
            <n-input-number v-model:value="state.createCity.mapSize" placeholder="地图大小" />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="地图背景">
            <n-color-picker v-model:value="state.createCity.mapBackground" :modes="['hex']" style="width: 100%;" />
          </n-form-item-gi>
        </n-grid>
      </n-form>
      <template #footer>
        <n-button attr-type="button" @click="createCity">添加城市</n-button>
      </template>
    </n-card>
  </n-modal>
  <n-modal v-model:show="state.modalShowEdit">
    <n-card :style="{ width: '70%', height: store.PageHeight * 0.9 + 'px' }" title="添加城市" :bordered="true" size="huge">
      <n-form ref="formRef" label-placement="left" label-align="left" :model="state.currentCity">
        <n-grid :cols="24" :x-gap="24">
          <n-form-item-gi :span="8" label="名称">
            <n-input v-model:value="state.currentCity.cityName" placeholder="输入城市名称" />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="是否首都">
            <n-switch v-model:value="state.currentCity.isCapital" placeholder="是否首都" />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="是否城市">
            <n-switch v-model:value="state.currentCity.isCity" placeholder="是否城市" />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="是否副本">
            <n-switch v-model:value="state.currentCity.isRaid" placeholder="是否副本" />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="等级">
            <n-input-number v-model:value="state.currentCity.level" placeholder="等级" />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="描述">
            <n-input v-model:value="state.currentCity.dec" placeholder="描述" />
          </n-form-item-gi>
          <n-form-item-gi label="怪物列表" :span="8">
            <n-dynamic-tags v-model:value="state.currentCity.monsters" />
          </n-form-item-gi>
          <n-form-item-gi label="NPC列表" :span="8">
            <n-dynamic-tags v-model:value="state.currentCity.NPCS" />
          </n-form-item-gi>
          <n-form-item-gi label="Buff列表" :span="8">
            <n-dynamic-tags v-model:value="state.currentCity.Buff" />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="声望">
            <n-input v-model:value="state.currentCity.prestigeName" placeholder="声望名称" />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="声望要求">
            <n-input-number v-model:value="state.currentCity.prestigeRequire" placeholder="声望要求" />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="可复活">
            <n-switch v-model:value="state.currentCity.resurrection" placeholder="可复活" />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="tiledMap">
            <n-input v-model:value="state.currentCity.tiledMap" placeholder="瓦片地图名称" />
          </n-form-item-gi>
          <n-form-item-gi label="标签" :span="8">
            <n-dynamic-tags v-model:value="state.currentCity.tags" />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="地图大小">
            <n-input-number v-model:value="state.currentCity.mapSize" placeholder="地图大小" />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="地图背景">
            <n-color-picker v-model:value="state.currentCity.mapBackground" :modes="['hex']" style="width: 100%;" />
          </n-form-item-gi>
        </n-grid>
      </n-form>
      <template #footer>
        <n-button attr-type="button" @click="editCity">更新城市</n-button>
      </template>
    </n-card>
  </n-modal>
  <n-modal v-model:show="state.modalShowCities">
    <n-card :style="{ width: '70%', height: store.PageHeight * 0.9 + 'px' }" title="城市选择" :bordered="true" size="huge">
      <citiesListVue :city-chosen="state.clickCity" />
    </n-card>
  </n-modal>
  <n-modal v-model:show="state.modalShowNPCs">
    <n-card :style="{ width: '70%', height: store.PageHeight * 0.9 + 'px' }" title="NPC选择" :bordered="true" size="huge">
      <npcListVue />
    </n-card>
  </n-modal>
  <n-modal v-model:show="state.modalShowBuffs">
    <n-card :style="{ width: '70%', height: store.PageHeight * 0.9 + 'px' }" title="Buff选择" :bordered="true" size="huge">
      <buffListVue />
    </n-card>
  </n-modal>
  <n-modal v-model:show="state.modalShowMonsters">
    <n-card :style="{ width: '70%', height: store.PageHeight * 0.9 + 'px' }" title="怪物选择" :bordered="true" size="huge">
      <monsterListVue />
    </n-card>
  </n-modal>
  <AppContainer :header-border="true" :loading="state.pageLoading" :page-percentage="state.pagePercentage">
    <template #header>
      <n-space style="padding: 3px">
        <span class="app-title">城市列表</span>
        <n-button size="small" secondary strong @click="addModalShow">增加</n-button>
        <n-radio-group name="radiobuttongroup1" size="small" @update:value="capitalSwitch">
          <n-radio-button value="all" label="全部" />
          <n-radio-button value="iscapital" label="主城" />
          <n-radio-button value="iscity" label="城市" />
          <n-radio-button value="other" label="其他" />
        </n-radio-group>
      </n-space>
    </template>
    <template #default>
      <n-grid :cols="5" :x-gap="12" :y-gap="8">
        <n-gi v-for="i in state.getcities?.records" :key="i._id">
          <n-thing style="border: 1px dashed black; padding: 10px; text-align: left;height: 100%;">
            <template #header>
              <div @click="(state.currentCity=i) && (state.modalShowEdit=true)">
                城市：{{ i.cityName }}-lv.{{ i.level }}
              </div>
            </template>
            <template #header-extra>
              <n-popover v-if="i.isRaid" trigger="hover" :keep-alive-on-hover="false" placement="bottom">
                <template #trigger>
                  <n-icon size="30">
                    <fuben />
                  </n-icon>
                </template>
                <span>副本</span>
              </n-popover>
              <n-popover v-if="!i.isCapital && !i.isCity && !i.isRaid" trigger="hover" :keep-alive-on-hover="false" placement="bottom">
                <template #trigger>
                  <n-icon size="30">
                    <outside />
                  </n-icon>
                </template>
                <span>野外</span>
              </n-popover>
              <n-popover v-if="i.isCity" trigger="hover" :keep-alive-on-hover="false" placement="bottom">
                <template #trigger>
                  <n-icon size="30">
                    <town />
                  </n-icon>
                </template>
                <span>城市</span>
              </n-popover>
              <n-popover v-if="i.isCapital" trigger="hover" :keep-alive-on-hover="false" placement="bottom">
                <template #trigger>
                  <n-icon size="30">
                    <mainCity />
                  </n-icon>
                </template>
                <span>首都</span>
              </n-popover>
            </template>
            <template #description>
              <n-ellipsis :style="{ maxWidth: (state.pageWidth - 250) / 5 + 'px' }">
                {{ i.dec }}
              </n-ellipsis>
            </template>
            <template #footer>
              <n-tag v-for="j in i.tags" :key="j" size="small">{{ j }}</n-tag>
            </template>
            <template #action>
              <n-space justify="end">
                <n-button size="tiny" @click="state.modalShowNPCs=true">NPC</n-button>
                <n-button size="tiny" @click="state.modalShowMonsters=true">怪物</n-button>
                <n-button size="tiny" @click="state.modalShowBuffs=true">Buff</n-button>
                <n-button size="tiny" @click="showCityListClick(i._id as string)">传送门</n-button>
              </n-space>
            </template>
          </n-thing>
        </n-gi>
      </n-grid>
    </template>
    <template #bottom>
      <n-space justify="end" style="padding: 4px">
        <n-pagination v-model:page="state.pageNow" :page-count="state.getcities?.pageSize" :page-slot="6" @update-page="changePage" />
      </n-space>
    </template>
  </AppContainer>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import { City, SearchOption } from '@/types/city.interface'
import { PageReturn } from '@/types/default.interface'
import { SVGICONS } from '@/utils/icons'
import { mainStore } from '@/store'
import citiesListVue from '../components/citiesList.vue'
import buffListVue from '../components/buffList.vue'
import npcListVue from '../components/npcList.vue'
import monsterListVue from '../components/monsterList.vue'
import cityApi from '@/api/city'

const store = mainStore()
const { fuben, outside, town, mainCity } = SVGICONS
interface State {
  modalShowAdd: boolean
  modalShowCities: boolean
  modalShowBuffs: boolean
  modalShowMonsters: boolean
  modalShowNPCs: boolean
  modalShowEdit: boolean
  clickCity: string
  tableHeight: number
  tableLoading: boolean
  pageLoading: boolean
  pagePercentage: number
  pageNow: number
  pageWidth: number
  getcities?: PageReturn<City[]>
  createCity: City
  searchOptions: SearchOption
  currentCity: City
}
const state = reactive<State>({
  modalShowAdd: false,
  modalShowCities: false,
  modalShowBuffs: false,
  modalShowMonsters: false,
  modalShowNPCs: false,
  modalShowEdit: false,
  clickCity: '',
  tableHeight: 0,
  tableLoading: false,
  pageLoading: false,
  pagePercentage: 0,
  pageNow: 1,
  pageWidth: 0,
  createCity: new City(),
  currentCity: new City(),
  searchOptions: {
    pageInfo: {
      pageNo: 1,
      pageLimit: 20,
    },
    searchData: {
      isCapital: undefined,
      isCity: undefined,
      tags: undefined,
    },
  },
})
const addModalShow = () => {
  state.modalShowAdd = true
  state.createCity = new City()
}
const createCity = async () => {
  state.modalShowAdd = false
  state.pageLoading = true
  console.log(state.createCity)
  await cityApi.addCities(state.createCity)
  state.pageLoading = false
}
const editCity = async () => {
  state.modalShowEdit = false
  state.pageLoading = true
  await cityApi.updateCities(state.currentCity)
  state.pageLoading = false
}
const getCities = async (page: number) => {
  state.pageLoading = true
  state.searchOptions.pageInfo.pageNo = page
  const res = await cityApi.getAllCities(state.searchOptions)
  state.getcities = res

  state.pageLoading = false
}
const changePage = async (page: number) => {
  getCities(page)
}
const capitalSwitch = (value: string) => {
  if (value === 'all') {
    state.searchOptions.searchData.isCapital = undefined
    state.searchOptions.searchData.isCity = undefined
  } else if (value === 'iscapital') {
    state.searchOptions.searchData.isCapital = true
    state.searchOptions.searchData.isCity = undefined
  } else if (value === 'iscity') {
    state.searchOptions.searchData.isCapital = undefined
    state.searchOptions.searchData.isCity = true
  } else if (value === 'other') {
    state.searchOptions.searchData.isCapital = false
    state.searchOptions.searchData.isCity = false
  }
  // state.searchOptions.searchData.isCapital = value
  getCities(1)
  // console.log(value)
}
const watchWidth = () => {
  const width = document.body.clientWidth
  state.pageWidth = width - 20
}
const showCityListClick = (id: string) => {
  state.modalShowCities = true
  state.clickCity = id
}
window.addEventListener('resize', watchWidth)
watchWidth()
getCities(1)
</script>
<style lang="less" scoped>
thing{
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>
