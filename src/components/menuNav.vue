<template>
  <div class="menu">
    <el-menu
      ref="menu"
      :default-active="defaultMenu"
      active-text-color="#2C67FD"
      :default-openeds="defaultOpeneds"
    >
      <div v-for="(menu, index) in filterMenu" :key="index">
        <el-submenu :index="`${index}`" v-if="menu.children">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{menu.meta.title}}</span>
          </template>
         <el-menu-item :index="childMenu.name" v-for="(childMenu, i) in menu.children" :key="i" @click="toRoute(childMenu.name)">
            <i class="el-icon-setting"></i>
            <span slot="title">{{childMenu.meta.title}}</span>
          </el-menu-item>
        </el-submenu>
        <el-menu-item v-else :index="menu.name" @click="toRoute(menu.name)">
          <i class="el-icon-setting"></i>
          <span slot="title">{{menu.meta.title}}</span>
        </el-menu-item>
      </div>
    </el-menu>
    
  </div>
</template>
<script lang="ts">
import {Vue, Component, Watch} from 'vue-property-decorator'
@Component
export default class menuNav extends Vue{
  private roles: any = []
  private staffRoles: any = []
  private filterMenu: any = []
  private defaultOpeneds: any = []
  private filtersRoute: any = ''

  private toRoute(name: any) {
    if ( this.$route.name !== name) {
      this.$router.push({name});
    }
  }

  private mounted() {
    this.staffRoles = this.$store.state.auth.roles || sessionStorage.getItem('roles')
    let addRoutes: any = this.$store.state.auth.addRoutes
    this.filterMenu = addRoutes[0].children.filter((item: any) => {
      return item.meta.title
    })
  }
  
  get defaultMenu() {
    if (this.$route.matched && this.$route.matched.length > 2) {
      return this.$route.matched[2].name
    } else {
      return this.$route.name + ''
    }
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

  private filtersRoutefiltersRoute() {
    if (this.$route.matched && this.$route.matched.length > 2) {
      this.filtersRoute= this.$route.matched[2].name;
    } else {
      this.filtersRoute= this.$route.name;
    }
  }
}
</script>
<style lang="less" scoped>
.menu {
  width: 200px;
  height: 100%;
  background: rgba(255, 255, 255, 1);
}  
/deep/.el-menu {
  border: none
}

</style>