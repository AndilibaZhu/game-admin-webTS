<!--
 * @Author: Andy
 * @Date: 2022-08-12 14:46:41
 * @LastEditTime: 2022-08-26 10:11:46
-->
<template>
  <AppContainer :header-border="true" :loading="state.pageLoading" :page-percentage="state.pagePercentage">
    <template #header>
      <n-space style="padding: 3px">
        <span class="app-title">地图列表</span>
      </n-space>
    </template>
    <template #default>
      <n-grid :cols="24" style="height: 100%">
        <n-gi :span="4" style="height: 90%;padding: 10px;">
          <n-space vertical style="text-align: left">
            <span class="app-title">地图列表</span>
            <n-radio-group name="radiogroup" @update:value="citySelectChange">
              <n-space vertical>
                <n-radio v-for="city in state.citiesSimple" :key="city._id" :value="city._id">
                  {{ city.cityName }}
                </n-radio>
              </n-space>
            </n-radio-group>
          </n-space>
        </n-gi>
        <n-gi id="mapCanvas" :span="16" style="height: 90%;padding: 10px;">
          <div :style="{ width: state.mapDef.canvasWidth + 'px', height: state.mapDef.canvasWidth + 'px' }">
            <div style="position: absolute">
              <tr
                v-for="i in state.currentSelectCity.mapSize"
                :key="i"
                :style="{
                  width: state.mapDef.canvasWidth + 'px', 
                  height: state.mapDef.canvasWidth / state.currentSelectCity.mapSize + 'px',
                }"
              >
                <td
                  v-for="j in state.currentSelectCity.mapSize"
                  :key="j"
                  :style="{
                    width: state.mapDef.canvasWidth / state.currentSelectCity.mapSize + 'px',
                    height: state.mapDef.canvasWidth / state.currentSelectCity.mapSize + 'px',
                    backgroundColor: state.currentSelectCity.mapBackground,
                  }"
                  @click="mapClick(i, j)"
                ></td>
              </tr>
            </div>
            <div v-for="unit in state.currentSelectCity.mapUnits" :key="unit.Id" style="position: absolute">
              <span
                :style="{
                  position: 'absolute',
                  top: unit.y * (state.mapDef.canvasWidth / state.currentSelectCity.mapSize) - 20 + 'px',
                  left: unit.x * (state.mapDef.canvasWidth / state.currentSelectCity.mapSize) - 100 + 'px',
                  width: '200px',
                  transform: 'scale(0.8)',
                  pointerEvents: 'none',
                }"
              >
                传送门:{{ unit.n }}
              </span>
              <n-icon
                :component="unitComponents[unit.t - 1]"
                :size="state.mapDef.canvasWidth / state.currentSelectCity.mapSize"
                :style="{
                  position: 'absolute',
                  top: unit.y * (state.mapDef.canvasWidth / state.currentSelectCity.mapSize) + 'px',
                  left: unit.x * (state.mapDef.canvasWidth / state.currentSelectCity.mapSize) + 'px',
                  width: state.mapDef.canvasWidth / state.currentSelectCity.mapSize + 'px',
                  height: state.mapDef.canvasWidth / state.currentSelectCity.mapSize + 'px',
                }"
              ></n-icon>
            </div>
          </div>
        </n-gi>
        <n-gi :span="4" style="height: 90%;padding: 10px; justify-content: center">
          <n-space vertical>
            <div>背景颜色</div>
            <n-color-picker :value="state.currentSelectCity.mapBackground" :modes="['hex']" style="width: 100%" />
            <div>
              <n-form ref="formRef" inline label-placement="left">
                <n-form-item label="长&宽："><n-input-number :value="state.currentSelectCity.mapSize" /></n-form-item>
              </n-form>
            </div>
            <n-collapse accordion style="text-align: left" @update:expanded-names="expandedNames => (state.unitTypeSelect = expandedNames['0'])">
              <n-collapse-item title="传送门" name="1">
                <template #default>
                  <n-radio-group name="radio2group" style="text-align: left" @update:value="portalSelectChange">
                    <n-space vertical>
                      <n-radio v-for="portal in state.currentSelectCity.portal" :key="portal" :value="portal">
                        {{ state.citiesSimple.find(res => res._id === portal)?.cityName }}
                      </n-radio>
                    </n-space>
                  </n-radio-group>
                </template>
              </n-collapse-item>
              <n-collapse-item title="NPC" name="2">
                <div>NPC</div>
              </n-collapse-item>
              <n-collapse-item title="BOSS" name="3">
                <div>BOSS</div>
              </n-collapse-item>
            </n-collapse>
          </n-space>
        </n-gi>
      </n-grid>
    </template>
    <template #bottom>
      <n-space justify="end" style="padding: 4px"></n-space>
    </template>
  </AppContainer>
</template>
<script lang="ts" setup>
import { onMounted, reactive } from 'vue'
import { FullscreenExitRound } from '@vicons/material'
import { City } from '@/types/city.interface'
import cityAPI from '@/api/city'

const unitComponents = [FullscreenExitRound]
interface State {
  tableHeight: number
  tableLoading: boolean
  pageLoading: boolean
  pagePercentage: number
  pageNow: number
  citiesSimple: City[]
  currentSelectCity: City
  currentSelectPortal: string
  unitTypeSelect: string
  mapDef: {
    canvasWidth: number
  }
}
const state = reactive<State>({
  tableHeight: 0,
  tableLoading: false,
  pageLoading: false,
  pagePercentage: 0,
  pageNow: 1,
  citiesSimple: [],
  currentSelectCity: new City(),
  currentSelectPortal: '',
  unitTypeSelect: '',
  mapDef: {
    canvasWidth: 0,
  },
})

const mapClick = async (i: number, j: number) => {
  // window.$message.info(`点击了${ i },${ j }`)
  if (!state.unitTypeSelect) {
    window.$message.info('请选择unit')
    return
  }
  switch (state.unitTypeSelect) {
    case '1':
      // 数组是否已包含该元素
      if (!state.currentSelectPortal) {
        window.$message.error('请选择传送门')
        return
      }
      if (state.currentSelectCity.portal.indexOf(state.currentSelectPortal) == -1) {
        window.$message.error('请选择正确的传送门')
        return
      }
      if (state.currentSelectCity.mapUnits.findIndex(res => res.Id === state.currentSelectPortal) === -1) {
        state.currentSelectCity.mapUnits.push({
          x: j - 1,
          y: i - 1,
          t: 1,
          n: state.citiesSimple.find(res => res._id === state.currentSelectPortal)?.cityName as string,
          Id: state.currentSelectPortal,
        })
      } else {
        state.currentSelectCity.mapUnits[state.currentSelectCity.mapUnits.findIndex(res => res.Id === state.currentSelectPortal)].x = j - 1
        state.currentSelectCity.mapUnits[state.currentSelectCity.mapUnits.findIndex(res => res.Id === state.currentSelectPortal)].y = i - 1
        state.currentSelectCity.mapUnits[state.currentSelectCity.mapUnits.findIndex(res => res.Id === state.currentSelectPortal)].n = state.citiesSimple.find(
          res => res._id === state.currentSelectPortal,
        )?.cityName as string
      }
      await cityAPI.updateCities(state.currentSelectCity)
      await cityAPI.getOneCity({ id: state.currentSelectCity._id as string })
      break
    default:
      break
  }
}
const citySelectChange = async (value: string) => {
  state.currentSelectCity = await cityAPI.getOneCity({ id: value })
  state.currentSelectPortal = ''
}
const portalSelectChange = async (value: string) => {
  state.currentSelectPortal = value
}
const creatMapCanvas = () => {
  const obj = document.getElementById('mapCanvas')
  // 计算obj长宽最短
  if (obj) {
    const width = obj.clientWidth
    const height = obj.clientHeight
    state.mapDef.canvasWidth = width < height ? width : height
  }
  console.log(state.mapDef.canvasWidth)
}
const initPage = async () => {
  state.citiesSimple = await cityAPI.getAllCitiesSimple()
}
initPage()

onMounted(() => {
  setTimeout(() => {
    creatMapCanvas()
  }, 1)
})
</script>
<style lang="less" scoped></style>
