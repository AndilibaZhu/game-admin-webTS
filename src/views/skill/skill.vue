<!--
 * @Author: Andy
 * @Date: 2022-09-24 15:12:09
 * @LastEditTime: 2022-09-24 20:31:06
-->
<template>
  <n-modal v-model:show="state.modalShowAdd">
    <n-card :style="{ width: '70%', height: store.PageHeight * 0.9 + 'px' }" title="添加技能" :bordered="true" size="huge">
      <n-form ref="formRef" label-placement="left" label-align="left" :model="state.creatSkill">
        <n-grid :cols="24" :x-gap="24">
          <n-form-item-gi :span="8" label="技能名字">
            <n-input v-model:value="state.creatSkill.skillName" placeholder="输入技能名称" />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="技能类型">
            <n-select
              v-model:value="state.creatSkill.skillType"
              :options="[
                { label: '主动单体', value: 1 },
                { label: '主动群体', value: 2 },
                { label: '主动目标群体', value: 3 },
                { label: '主动dot', value: 4 },
                { label: '主动buff', value: 5 },
                { label: '被动加成', value: 6 },
                { label: '恢复单体', value: 7 },
                { label: '恢复群体', value: 8 },
              ]"
            />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="技能描述">
            <n-input v-model:value="state.creatSkill.skillDec" placeholder="输入技能描述" />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="技能图标">
            <n-input v-model:value="state.creatSkill.skillIcon" placeholder="输入技能图标" />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="技能来源">
            <n-select
              v-model:value="state.creatSkill.skillSource"
              :options="[
                { label: '普通', value: 1 },
                { label: '商店', value: 2 },
                { label: '学习', value: 3 },
              ]"
            />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="技能等级">
            <n-input-number v-model:value="state.creatSkill.skillLevel" placeholder="输入技能等级" />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="技能消耗">
            <n-input-number v-model:value="state.creatSkill.skillCost" placeholder="输入技能消耗" />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="技能冷却">
            <n-input-number v-model:value="state.creatSkill.skillCD" placeholder="输入技能冷却" />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="技能持续时间">
            <n-input-number v-model:value="state.creatSkill.skillLast" placeholder="输入技能持续时间" />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="影响范围">
            <n-input-number v-model:value="state.creatSkill.skillRange" placeholder="输入技能范围" />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="释放距离">
            <n-input-number v-model:value="state.creatSkill.skillDistance" placeholder="输入技能释放距离" />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="技能目标">
            <n-select
              v-model:value="state.creatSkill.skillTarget"
              :options="[
                { label: '自己', value: 1 },
                { label: '敌人', value: 2 },
                { label: '友方', value: 3 },
              ]"
            />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="技能效果">
            <n-select
              v-model:value="state.creatSkill.skillEffect"
              :options="[
                { label: '伤害', value: 1 },
                { label: '治疗', value: 2 },
                { label: '增益', value: 3 },
                { label: '减益', value: 4 },
              ]"
            />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="效果百分比">
            <n-input-number v-model:value="state.creatSkill.skillValue" placeholder="输入技能效果百分比" />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="效果固定值">
            <n-input-number v-model:value="state.creatSkill.skillValue2" placeholder="输入技能固定值" />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="技能职业要求">
            <n-select
              v-model:value="state.creatSkill.skillJobReq"
              :options="[
                { label: '全部', value: 0 },
                { label: '战士', value: 1 },
                { label: '法师', value: 2 },
                { label: '猎人', value: 3 },
              ]"
            />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="技能等级要求">
            <n-input-number v-model:value="state.creatSkill.skillLvReq" placeholder="输入技能等级要求" />
          </n-form-item-gi>
        </n-grid>
      </n-form>
      <template #footer>
        <n-button attr-type="button" @click="creatSkill">增加技能</n-button>
      </template>
    </n-card>
  </n-modal>
  <AppContainer :header-border="true" :loading="state.pageLoading" :page-percentage="state.pagePercentage">
    <template #header>
      <n-space style="padding: 3px">
        <span class="app-title">技能列表</span>
        <n-button size="small" secondary strong @click="state.modalShowAdd = true">增加</n-button>
        <n-radio-group name="radiobuttongroup1" size="small" @update:value="1">
          <n-radio-button value="all" label="全部" />
        </n-radio-group>
      </n-space>
    </template>
    <template #default>
      <n-data-table :columns="skillColumns" :data="state.allSkills.records" :loading="state.tableLoading" />
    </template>
    <template #bottom>
      <n-space justify="end" style="padding: 4px">
        <n-pagination v-model:page="state.pageNow" :page-count="state.allSkills?.pageSize" :page-slot="6" @update-page="changePage" />
      </n-space>
    </template>
  </AppContainer>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import { DataTableColumns } from 'naive-ui'
import { PageReturn } from '@/types/default.interface'
import { Skill, SearchOption } from '@/types/skill.interface'
import skillApi from '@/api/skill'
import { mainStore } from '@/store'

const store = mainStore()
interface State {
  tableLoading: boolean
  tableHeight: number
  pageLoading: boolean
  pagePercentage: number
  modalShowAdd: boolean
  allSkills: PageReturn<Skill[]>
  pageNow: number
  searchOption: SearchOption
  creatSkill: Skill
}
const state = reactive<State>({
  tableLoading: false,
  pageLoading: false,
  pagePercentage: 0,
  modalShowAdd: false,
  allSkills: {
    records: [],
    pageSize: 10,
    pageNo: 1,
    total: 0,
  },
  pageNow: 1,
  tableHeight: 0,
  searchOption: {
    pageInfo: {
      pageNo: 1,
      pageLimit: 10,
    },
    searchData: {},
  },
  creatSkill: new Skill(),
})
const skillColumns: DataTableColumns<Skill> = [
  {
    title: '名称',
    key: 'skillName',
  },
  {
    title: '类型',
    key: 'skillType',
    render: (skill: Skill) => {
      // 技能类型 1.主动单体 2.主动群体 3.主动目标群体 4.主动dot 5.主动buff 6.被动加成 7.恢复单体 8.恢复群体
      switch (skill.skillType) {
        case 1:
          return '主动单体'
        case 2:
          return '主动群体'
        case 3:
          return '主动目标群体'
        case 4:
          return '主动dot'
        case 5:
          return '主动buff'
        case 6:
          return '被动加成'
        case 7:
          return '恢复单体'
        case 8:
          return '恢复群体'
        default:
          return '未知'
      }
    },
  },
  {
    title: '描述',
    key: 'skillDec',
    width: 70,
    ellipsis: {
      tooltip: true,
    },
  },
  {
    title: '技能来源',
    key: 'skillSource',
    render: (skill: Skill) => {
      // 技能来源1.普通 2.商店 3.学习
      switch (skill.skillSource) {
        case 1:
          return '普通'
        case 2:
          return '商店'
        case 3:
          return '学习'
        default:
          return '未知'
      }
    },
  },
  {
    title: '等级',
    key: 'skillLevel',
  },
  {
    title: '消耗',
    key: 'skillCost',
  },
  {
    title: '冷却',
    key: 'skillCD',
  },
  //  skillLast: number // 技能持续时间
  {
    title: '持续时间',
    key: 'skillLast',
  },
  //  skillRange: number // 技能范围
  {
    title: '影响范围',
    key: 'skillRange',
  },
  {
    title: '释放距离',
    key: 'skillDistance',
  },
  // 技能目标 1.自己 2.敌人 3.友方
  {
    title: '技能目标',
    key: 'skillTarget',
    render: (skill: Skill) => {
      switch (skill.skillTarget) {
        case 1:
          return '自己'
        case 2:
          return '敌人'
        case 3:
          return '友方'
        default:
          return '未知'
      }
    },
  },
  // 技能效果 1.伤害 2.治疗 3.增益 4.减益
  {
    title: '效果',
    key: 'skillEffect',
    render: (skill: Skill) => {
      switch (skill.skillEffect) {
        case 1:
          return '伤害'
        case 2:
          return '治疗'
        case 3:
          return '增益'
        case 4:
          return '减益'
        default:
          return '未知'
      }
    },
  },
  // 技能效果值
  {
    title: '效果值',
    key: 'skillValue',
    render: (skill: Skill) => `${ skill.skillValue }%+${ skill.skillValue2 }`,
  },
  // 技能价格
  {
    title: '技能价格',
    key: 'skillPrice',
  },
  // 等级要求
  {
    title: '等级要求',
    key: 'skillLvReq',
  },
  // 技能职业要求 1.战士 2.法师 3.猎人
  {
    title: '职业要求',
    key: 'skillJobReq',
    render: (skill: Skill) => {
      switch (skill.skillJobReq) {
        case 0:
          return '全部'
        case 1:
          return '战士'
        case 2:
          return '法师'
        case 3:
          return '猎人'
        default:
          return '未知'
      }
    },
  },

  {
    title: '操作',
    key: 'action',
    width: 200,
    render: () => {},
  },
]

const changePage = (page: number) => {
  state.pageNow = page
  state.searchOption.pageInfo.pageNo = page
  skillApi.getAllSkills(state.searchOption).then(res => {
    state.allSkills = res
  })
}
const creatSkill = () => {
  skillApi.addSkills(state.creatSkill).then(res => {
    if (res) {
      state.creatSkill = new Skill()

      changePage(1)
    }
  })
}
const watchHeight = () => {
  const height = document.body.clientHeight
  state.tableHeight = height - 200
}
window.addEventListener('resize', watchHeight)
changePage(1)
</script>
<style scoped></style>
