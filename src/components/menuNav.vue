<template>
  <div class="menu">
     <!-- <el-menu
      default-active="2"
      class="el-menu-vertical-demo">
      <el-submenu index="1" v-if="hasRoles(['admin', 'staff'])">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group >
          <template slot="title">分组一</template>
          <el-menu-item index="1-1" @click="toRoute('About')">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2"  v-if="hasRoles(['staff'])">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3"  v-if="hasRoles(['admin'])">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4"  v-if="hasRoles(['admin'])">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu> -->
     <el-menu
      default-active="2"
      class="el-menu-vertical-demo">
      <el-submenu index="1" >
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group >
          <template slot="title">分组一</template>
          <el-menu-item index="1-1" @click="toRoute('About')">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2" >
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
@Component
export default class menuNav extends Vue{
  private roles: any = []
  private staffRoles: any = []

  private toRoute(name: any) {
    if ( this.$route.name !== name) {
      this.$router.push({name});
    }
  }

  private mounted() {
    this.staffRoles = this.$store.state.auth.roles || sessionStorage.getItem('roles')
    console.log('menu', this.$store.state.auth.routers)
  }

  // private hasRoles (roles: any) {
  //   console.log(sessionStorage.getItem('roles'))
  //   let staffRoles: any = sessionStorage.getItem('roles')
  //   staffRoles = staffRoles.split(',')
  //   for (let role of roles) {
  //     for (let staffRole of staffRoles) {
  //       if (staffRole === role) {
  //         return true
  //       }
  //     }
  //   }
  //   return false
  // }
}
</script>
<style lang="less" scoped>
.menu {
  width: 200px;
  height: 100vh;
  background: rgba(255, 255, 255, 1);
}
</style>