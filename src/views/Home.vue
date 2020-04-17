<template>
  <div class="home col" >
    <headerNav class="head"></headerNav>
    <section class="flex page_content">
      <menuNav class="menu col"></menuNav>
      <router-view class="router_view col"></router-view>
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
  width: 100%;
  height: 100%;
  background-color: #f4f4f6;
  .head {
    height: 60px;
    width: 100%;
  }
  .page_content{
    width: 100%;
    min-height: calc(100vh - 80px);
    .menu{
      width: 220px;
      min-height: calc(100vh - 80px);
    }
    .router_view{
      // max-width: calc(100vw - 240px);
      // min-height: calc(100vh - 112px);
      background:rgba(245,247,250,1);
      box-sizing: border-box;
      padding: 20px;
      border-radius:12px;
      width: 100%;
    }
  }
}
</style>
