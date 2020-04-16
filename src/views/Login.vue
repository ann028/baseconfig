<template>
  <div>
    login
  </div>
</template>
<script lang="ts">
import {Vue} from 'vue-property-decorator'
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