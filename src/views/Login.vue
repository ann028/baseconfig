<template>
  <main>
    <section class="login_box">
      <!-- <el-input placeholder="账号" suffix-icon="el-icon-date" v-model="userInfo.userName" class="mt20"></el-input>
      <el-input placeholder="密码" suffix-icon="el-icon-date" v-model="userInfo.password" class="mt20"></el-input>
      <el-button round  @click="doLoginIn" class="mt20">login</el-button> -->

      <el-form ref="userForm" label-width="0px" :rules="userRules" :model="userInfo">
        <el-form-item prop="userName">
          <el-input v-model="userInfo.userName">
            <i slot="prefix" class="el-input__icon el-icon-user-solid"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="userInfo.password"  show-password>
            <i slot="prefix" class="el-input__icon el-icon-s-order"></i>
          </el-input>
        </el-form-item>
        <el-form-item class="main_center" style="width: 100%;">
          <el-button :loading="loading" type="primary" style="width: 100%;margin-bottom: 30px;" @click="doLoginIn('userForm')" >login</el-button>
        </el-form-item>
      </el-form>
    </section>
  </main>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import * as UserApi from '../api/user'
@Component
export default class login extends Vue{
  private userInfo = {}
  private loading: boolean = false
  public userRules = {
    userName: [
      { required: true, message: '请输入用户名称', trigger: 'blur' },
    ],
    password: [
      { required: true, message: '请输入密码', trigger: 'blur' },
    ]
  }
  private async doLoginIn(userForm: any) {
    // this.loading = true
    const form: any = this.$refs[userForm]
    form.validate((valid: any) => {
      if (valid) {
        UserApi.login(this.userInfo).then((res: any) => {
        if (res.data.success) {
          this.$store.dispatch('getUserLogin', res.data.data)
          this.$router.push({ path: '/'})
          this.$message.success('登陆成功！')
        } else {
          this.$message.error(res.data.msg)
        }
      })
      } else {
        return false
      }
    });
  }
}
</script>
<style lang="less" scoped>
main{
  width: 100%;
  height: 100vh;
  display: flex;
  // align-items: center;
  justify-content: center;
  .login_box{
    width: 400px;
    padding: 160px 35px 0;
  }
}
/deep/.el-form-item__content{
  width: 100%;
}
</style>