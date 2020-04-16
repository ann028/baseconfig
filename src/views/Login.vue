<template>
  <main>
    <section class="login_box">
      <el-input placeholder="账号" suffix-icon="el-icon-date" v-model="userInfo.userName" class="mt20"></el-input>
      <el-input placeholder="密码" suffix-icon="el-icon-date" v-model="userInfo.password" class="mt20"></el-input>
      <el-button round  @click="doLoginIn" class="mt20">login</el-button>
    </section>
  </main>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import * as UserApi from '../api/user'
@Component
export default class login extends Vue{
  private userInfo = {}
  private async doLoginIn() {
    UserApi.login(this.userInfo).then((res: any) => {
      if (res.data.success) {
        this.$store.dispatch('getUserLogin', res.data.data)
        this.$router.push({ path: '/'})
      } else {
        this.$message.error(res.data.msg)
      }
    })
  }
}
</script>
<style lang="less" scoped>
main{
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .login_box{
    width: 500px
  }
}
</style>