<!--
 * @Author: Andy
 * @Date: 2022-09-03 22:48:41
 * @LastEditTime: 2022-09-08 21:22:20
-->
<template>
  <n-modal v-model:show="state.modalShowAdd">
    <n-card :style="{ width: '70%', height: store.PageHeight * 0.9 + 'px' }" title="添加怪物" :bordered="true" size="huge">
      <n-form ref="formRef" label-placement="left" label-align="left" :model="state.creatMonster">
        <n-grid :cols="24" :x-gap="24">
          <n-form-item-gi :span="8" label="名称">
            <n-input v-model:value="state.creatMonster.monsterName" placeholder="输入怪物名称" />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="类型">
            <n-input-number v-model:value="state.creatMonster.monsterType" placeholder="1.近战 2.远程 3.BOSS" />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="等级">
            <n-input-number v-model:value="state.creatMonster.level" placeholder="等级" />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="掉落金钱">
            <n-input-number v-model:value="state.creatMonster.coin" placeholder="掉落金钱" />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="掉落经验">
            <n-input-number v-model:value="state.creatMonster.exp" placeholder="掉落经验" />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="防御力">
            <n-input-number v-model:value="state.creatMonster.vit" placeholder="防御力" />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="攻击力">
            <n-input-number v-model:value="state.creatMonster.atk" placeholder="攻击力" />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="血量">
            <n-input-number v-model:value="state.creatMonster.hp" placeholder="血量" />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="自由对话">
            <n-dynamic-tags v-model:value="state.creatMonster.freeTalk" />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="图标">
            <n-input v-model:value="state.creatMonster.icon" placeholder="图标头像" />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="攻击距离">
            <n-input-number v-model:value="state.creatMonster.atkDistance" placeholder="攻击距离" />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="描述">
            <n-input v-model:value="state.creatMonster.dec" placeholder="描述" />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="声望值">
            <n-input-number v-model:value="state.creatMonster.prestige" placeholder="声望值" />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="声望名称">
            <n-input v-model:value="state.creatMonster.prestigeName" placeholder="声望名称" />
          </n-form-item-gi>
        </n-grid>
      </n-form>
      <template #footer>
        <n-button attr-type="button" @click="createMoster">添加怪物</n-button>
      </template>
    </n-card>
  </n-modal>
  <AppContainer :header-border="true" :loading="state.pageLoading" :page-percentage="state.pagePercentage">
    <template #header>
      <n-space style="padding: 3px">
        <span class="app-title">怪物列表</span>
        <n-button size="small" secondary strong @click="state.modalShowAdd=true">增加</n-button>
        <n-radio-group name="radiobuttongroup1" size="small" @update:value="1">
          <n-radio-button value="all" label="全部" />
          <n-radio-button value="iscapital" label="主城" />
          <n-radio-button value="iscity" label="城市" />
          <n-radio-button value="other" label="其他" />
        </n-radio-group>
      </n-space>
    </template>
    <template #default>
      <n-grid :cols="5">
        <n-gi v-for="m in state.monsterList" :key="m._id">
          <n-thing style="padding: 10px; text-align: left; height: 100%;border: 1px dashed black;">
            <template #avatar>
              <n-avatar style="background-color: #ff4d4f" round>{{ m.icon }}</n-avatar>
            </template>
            <template #header>{{ m.monsterName }}</template>
            <template #header-extra>{{ m.monsterType==1?'近战':m.monsterType==2?'远程':'BOSS' }}</template>
            <template #description>{{ m.dec }}</template>
            干！
            <template #footer><n-button>掉落</n-button></template>
            <template #action></template>
          </n-thing>
        </n-gi>
      </n-grid>
    </template> 
  </appcontainer>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import monsterApi from '@/api/monster'
import { Monster, SearchOption } from '@/types/monster.interface'
import { mainStore } from '@/store'

const store = mainStore()
interface State{
  modalShowAdd:boolean,
  pageLoading: boolean
  pagePercentage: number
  monsterList: Monster[]
  searchOption:SearchOption
  creatMonster:Monster
}
const state = reactive<State>({
  creatMonster: new Monster(),
  modalShowAdd: false,
  pageLoading: false,
  pagePercentage: 0,
  monsterList: [],
  searchOption: {
    pageInfo: {
      pageNo: 1,
      pageLimit: 15,
    } },
})
const createMoster = () => {
  monsterApi.addMonsters(state.creatMonster).then((res) => {
    console.log(res)
  })
}
const init = () => {
  monsterApi.getAllMonsters(state.searchOption).then((res) => {
    state.monsterList = res.records
  })
}
init()
</script>
<style lang=""></style>
