<!--
 * @Author: Andy
 * @Date: 2022-04-25 13:08:20
 * @LastEditTime: 2022-08-10 16:21:19
-->
<template>
  <AppContainer :header-border="true">
    <template #header>
      <span class="app-title">传奇修仙</span>
    </template>
    <template #default>
      <div class="container">
        <div class="box">
          <span>传奇修仙</span>
          <span>后台管理</span>
        </div>
      </div>
    </template>
  </AppContainer>
</template>
<script lang="ts" setup></script>
<style lang="less">
.container {
  width: 100%;
  height: 85vh;
  background-color: rgb(220, 247, 230);
  background-size: cover;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.box {
  width: 40%;
  height: 40%;
  background-color: #ffffff96;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  span {
    color: #383838;
    font-size: 40px;
  }
}
</style>
