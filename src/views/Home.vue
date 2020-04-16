<template>
  <div class="home" >
    <!-- <span @click="doAbout">home</span> -->
    <header-nav class="head mb20"></header-nav>
    <section class="flex">
      <menuNav class="menu"></menuNav>
      <router-view></router-view>
    </section>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import headerNav from '../components/headerNav.vue'
import menuNav from '../components/menuNav.vue'
@Component({
  components: {
    headerNav,
    menuNav
  }
})
export default class Home extends Vue {
  private mounted() {
    console.log('home')
  }
}
</script>
<style lang="less" scoped>
.home {
  // display: flex;
  // flex-direction: column;
  height: 100vh;
  background-color: #f4f4f6;
  .head {
    height: 60px;
  }
  // .menu {
  //   position: fixed;
  //   top: 60px;
  //   left: 0;
  //   height: 100vh;
  // }
  .main {
    margin-right: 10px;
    height: 100%;
    box-sizing: border-box;
    flex: 1;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    // flex-wrap: wrap;
    overflow-y: scroll;
    margin-left: 220px;
    .router-view {
      width: 100%;
      flex: 1;
      align-self: flex-start;
    }
    .footer {
      align-self: flex-end;
    }
  }
  .clear_ml {
    margin-left: 5px;
  }
}
</style>
