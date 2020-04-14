<template>
  <main>
    <div>
      <el-input placeholder="用户名" v-model="userInfo.loginName">
        <i slot="suffix" class="el-input__icon el-icon-date"></i>
      </el-input>
      <el-input placeholder="密码" v-model="userInfo.password" class="mt20">
        <i slot="suffix" class="el-input__icon el-icon-date"></i>
      </el-input>
      <el-button type="primary" round class="mt20" @click="doLoginIn">登录</el-button>
    </div>
  </main>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import * as UserApi from '../api/user'
@Component
export default class login extends Vue{
  private userInfo = {}
  private async doLoginIn() {
    console.log(this.$store)
    // let res: any = await UserApi.login(this.userInfo)
    // console.log(res.data)
    // if (res.data.success) {
    //   this.$store.dispatch('saveUser', {
    //     userId: res.data.data.userId,
    //     token: res.data.data.token,
    //   });
    //   this.$router.push({ path: '/'})
    // }
    this.axios.post('http://localhost:9000/user/account/login').then((res: any) => {
      console.log(res)
    })
    // console.log(this.userInfo)
    // UserApi.login(this.userInfo).then((res: any) => {
    //   console.log(res.data)
    //   if (res.data.success) {
    //     this.$router.push({ path: '/'})
    //   }
    // })
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
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>