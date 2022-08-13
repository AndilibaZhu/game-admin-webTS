<!--
 * @Author: Andy
 * @Date: 2022-04-24 16:00:45
 * @LastEditTime: 2022-08-13 11:12:08
  <n-config-provider :theme="darkTheme">
    </n-config-provider>
    import { NConfigProvider, darkTheme } from "naive-ui";

-->

<template>
  <n-notification-provider>
    <n-message-provider>
      <n-dialog-provider>
        <router-view />
      </n-dialog-provider>
    </n-message-provider>
  </n-notification-provider>
</template>
<script lang="ts" setup>

document.title = import.meta.env.VITE_TITLE
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #212930;
}
</style>
