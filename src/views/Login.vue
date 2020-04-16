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
    // this.axios.post('/data/tableData', this.userInfo).then((res: any) => {
    //   console.log('122', res.data, this.$store)
    //   this.$store.dispatch('getUserInfo', res.data)
    //   this.$router.push({ path: '/'})
    // }).catch((res: any) => {
    //   console.log(res.data)
    // })
    // console.log(this.userInfo)
    UserApi.login(this.userInfo).then((res: any) => {
      console.log(res.data)
      if (res.data.success) {
        this.$router.push({ path: '/'})
      }
    })
    // this.$store.dispatch('saveUser', this.userInfo).then(() => {
    //   this.$router.push({ path: '/' }); //登录成功之后重定向到首页
    // }).catch(err => {
    //   this.$message.error(err); //登录失败提示错误
    // });

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