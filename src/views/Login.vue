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
    // let res: any = await UserApi.login(this.userInfo)
    // console.log(res.data)
    // if (res.data.success) {
    //   this.$store.dispatch('saveUser', {
    //     userId: res.data.data.userId,
    //     token: res.data.data.token,
    //   });
    //   this.$router.push({ path: '/'})
    // }
    this.axios.post('/data/tableData', this.userInfo).then((res: any) => {
      console.log('122', res.data)
      this.$store.dispatch('setRoles', {
        roles: res.data.roles.toString()
      })
      this.$store.dispatch('saveUser', {
        userId: res.data.userId,
        token: res.data.token,
        role: res.data.roles
      })
       
        this.$router.push({ path: '/'})
    }).catch((res: any) => {
      console.log(res.data)
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