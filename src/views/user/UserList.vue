<!--
 * @Author: Andy
 * @Date: 2022-08-11 15:13:02
 * @LastEditTime: 2022-09-24 16:36:59
-->
<template>
  <AppContainer :header-border="true" :loading="state.pageLoading" :page-percentage="state.pagePercentage">
    <template #header>
      <n-space style="padding: 3px">
        <span class="app-title">玩家列表</span>
      </n-space>
    </template>
    <template #default>
      <n-data-table :columns="userColumns" :data="state.allUser.records" :loading="state.tableLoading" :max-height="state.tableHeight" />
    </template>
    <template #bottom>
      <n-space justify="end" style="padding: 4px">
        <n-pagination v-model:page="state.pageNow" :page-count="state.allUser?.pageSize" :page-slot="6" @update-page="changePage" />
      </n-space>
    </template>
  </AppContainer>
</template>
<script lang="ts" setup>
import { createVNode, reactive } from 'vue'
import { DataTableColumns, NSwitch } from 'naive-ui'
import { User } from '@/types/login.interface'
import { PageReturn } from '@/types/default.interface'
import userApi from '@/api/user'

interface State {
  tableHeight: number
  tableLoading: boolean
  pageLoading: boolean
  pagePercentage: number
  allUser: PageReturn<User[]>
  searchOption: {
    pageInfo: {
      pageNo: number
      pageLimit: number
    }
    searchData: {
      username?: string
      isDeleted?: string
      isBaned?: boolean
    }
  }
  pageNow: number
}
const state = reactive<State>({
  tableHeight: 0,
  tableLoading: false,
  pageLoading: false,
  pagePercentage: 0,
  searchOption: {
    pageInfo: {
      pageNo: 1,
      pageLimit: 10,
    },
    searchData: {},
  },
  pageNow: 1,
  allUser: {
    records: [],
    pageSize: 10,
    pageNo: 1,
    total: 0,
  },
})
const userColumns: DataTableColumns<User> = [
  {
    title: '用户名',
    key: 'username',
  },
  {
    title: '密码',
    key: 'password',
    width: 100,
    ellipsis: true,
  },
  {
    title: '创建时间',
    key: 'createTime',
    render: row => createVNode('span', null, {
      default: () => new Date(parseInt(String(row.createTime))).toLocaleString().replace(/:\d{1,2}$/, ' '),
    }),
  },
  {
    title: '上次登录',
    key: 'lastLogin',
    render: row => createVNode('span', null, {
      default: () => new Date(parseInt(String(row.lastLogin))).toLocaleString().replace(/:\d{1,2}$/, ' '),
    }),
  },
  {
    title: 'IP',
    key: 'IPAddress',
  },
  {
    title: '封号',
    key: 'isBaned',
    render: row => createVNode(
      NSwitch,
      {
        defaultValue: row.isBaned,
        onUpdateValue: (e: boolean) => { 
          console.log(e)
          userApi.banUser({ id: row._id, isBaned: e })  
        },
      },
      null,
    ),
  },

  {
    title: '删除',
    key: 'isDeleted',
    render: row => createVNode(
      NSwitch,
      {
        defaultValue: row.isDeleted,
        onUpdateValue: (e: boolean) => {
          console.log(e)
          userApi.deleteUser({ id: row._id, isDeleted: e })
        },
      },
      null,
    ),
  },
]
const changePage = async (page: number) => {
  state.pageNow = page
  state.searchOption.pageInfo.pageNo = page
  state.allUser = await userApi.getAllUsers(state.searchOption)
}

const watchHeight = () => {
  const height = document.body.clientHeight
  state.tableHeight = height - 200
}
window.addEventListener('resize', watchHeight)
changePage(1)
watchHeight()
</script>
<style lang="less" scoped></style>
