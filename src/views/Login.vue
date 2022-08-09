<template>
  <div class="login-container">
    <div class="login-box">
      <n-card title="后台" style="background-color: rgba(216, 216, 216, 0.705)">

          <n-form>
            <n-form-item-row label="用户名">
              <n-input v-model:value="state.username" autofocus placeholder="用户名" />
            </n-form-item-row>
            <n-form-item-row label="密码">
              <n-input v-model:value="state.password" type="password" show-password-on="click" placeholder="密码" @keyup="handleKeyUp" />
            </n-form-item-row>
          </n-form>
          <n-button type="primary" block @click="loginclick">登录</n-button>

      </n-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useMessage, useNotification, useDialog } from 'naive-ui'
import { ref, reactive } from 'vue'
import { mainStore } from '@/store/index'
import router from '@/router'
import user from '@/api/user'
import { Login } from '@/types/login.interface'

window.$message = useMessage()
window.$notification = useNotification()
window.$dialog = useDialog()
const store = mainStore()
const notification = useNotification()
const handleKeyUp = (e: { key: string }) => {
  if (e.key == 'Enter') {
    loginclick()
  }
}
const tabValue = ref<string>()
const state = reactive<Login>({
  username: '',
  password: '',
})
const loginclick = async () => {
  const res = await user.login(state)
  if (!res) {
    return
  }
  sessionStorage.setItem('token', res.token) // session设置token
  router.push('/home')

}

</script>

<style lang="less" scoped>
.login-container {
  width: 100%;
  height: 100vh;
  background: url(/3.png) 100% 100%;
  background-size: cover;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  &::before {
    content: '';
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: rgba(255, 255, 255, 0.3);
    background-size: cover;
  }
}
.login-box {
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .login-form {
    width: 312px;
    margin: 16px auto;

    .login-input {
      color: rgb(255, 255, 255);
      background: transparent;
      align-items: center;
      justify-content: center;

      ::v-deep(.n-input__input-el) {
        color: rgb(255, 255, 255);
        caret-color: #fff;
      }

      ::v-deep(.n-input__state-border) {
        border: none;
        &:hover {
          border: none;
        }
      }
    }
  }
}
</style>
