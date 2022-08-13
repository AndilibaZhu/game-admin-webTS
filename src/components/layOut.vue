<template>
  <n-config-provider :locale="zhCN">
    <n-layout position="static" class="layout" has-sider>
      <n-layout-sider
        class="layout-sider"
        :width="200"
        :native-scrollbar="false"
        bordered
        show-trigger
        collapse-mode="width"
        :collapsed-width="64"
        @update-collapsed="state.collapsed = !state.collapsed"
      >
        <img src="/fire.png" style="height: 45px; margin: 10px" />

        <n-menu
          :inverted="state.inverted"
          :collapsed-width="64"
          :collapsed-icon-size="22"
          :default-value="route.path"
          :options="state.menuOptions"
          :expanded-keys="state.expandedKeys"
          @update:value="handleUpdateValue"
          @update:expanded-keys="handleExpandedKeys"
        />
      </n-layout-sider>

      <n-layout class="layout-content">
        <n-layout-header style="height: 6%" bordered>
          <div style="padding: 5px">
            <n-space justify="space-between" style="align-items: center">
              <span style="font-size: 24px; line-height: 48px">后台管理</span>
              <n-dropdown :options="dropOptions" @select="dropSelect">
                <div class="user-info">
                  <span class="username">你好</span>
                </div>
              </n-dropdown>
            </n-space>
          </div>
        </n-layout-header>

        <n-layout-content style="height: 94%" content-style="padding: 10px; background-color: #F3F5F8; height: 100%" :native-scrollbar="false">
          <div class="app-main">
            <router-view />
          </div>
        </n-layout-content>
      </n-layout>
    </n-layout>
  </n-config-provider>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { useMessage, useNotification, useDialog, zhCN, MentionOption } from 'naive-ui'
// import { mainStore } from '@/store/index'
import { ICONS } from '@/utils/icons'

window.$message = useMessage()
window.$notification = useNotification()
window.$dialog = useDialog()
// const store = mainStore()
const router = useRouter()
const route = useRoute()
interface State {
  collapsed: boolean
  menuOptions: MentionOption[]
  expandedKeys: string[]
  inverted: boolean
  menuSelected: string
}
const state = reactive<State>({
  inverted: false,
  expandedKeys: [route.matched[0]?.path],
  collapsed: false,
  menuOptions: [],
  menuSelected: route.path,
})
const dropOptions = [
  {
    label: '用户信息',
    key: 'profile',
    icon: ICONS.user,
  },
  {
    label: '退出登录',
    key: 'logout',
    icon: ICONS.logout,
  },
]
const dropSelect = async (key: any) => {
  switch (key) {
    case 'profile':
      router.push('/user/profile')
      break
    case 'logout':
      logout()
      break
  }
}
state.menuOptions = [
  {
    label: '首页',
    key: '/home',
    icon: ICONS.home,
  },
  {
    label: '玩家列表',
    key: '/player',
    icon: ICONS.user,
  },
  {
    label: '城市列表',
    key: '/city',
    icon: ICONS.house,
    children: [
      {
        label: '城市列表',
        key: '/city/city',
        icon: ICONS.house,
      },
      {
        label: '地图列表',
        key: '/city/map',
        icon: ICONS.map,
      },
    ],
  },
]

const handleExpandedKeys = (keys: string[]) => {
  state.expandedKeys = keys
}
const handleUpdateValue = (key: string) => {
  router.push({ path: key })
}
const logout = () => {
  sessionStorage.removeItem('token')
  sessionStorage.removeItem('user')
  window.$message.success('退出登录成功')
  router.push('/login')
}
</script>
<style lang="less" scoped>
::v-deep(.n-space) {
  > div {
    padding: 0 !important;
  }
}
.user-info {
  height: 48px;
  user-select: none;
  ::v-deep(.n-avatar) {
    height: 32px;
    width: 32px;
    margin-top: 8px;
    margin-right: 8px;
    float: left;
  }
  > .username {
    line-height: 48px;
  }
}
.layout {
  display: flex;
  flex-direction: row;
  flex: auto;

  .layout-sider {
    min-height: 100vh;
    box-shadow: 2px 0 8px 0 rgb(29 35 41 / 5%);
    position: relative;
    z-index: 13;
    transition: all 0.2s ease-in-out;
  }
}
.layout-content {
  flex: auto;
  min-height: 100vh;
  height: 100vh;
}
</style>
