<template>
  <div class="home" >
    <span @click="doAbout">home</span>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
@Component
export default class Home extends Vue {
 private doAbout() {
   console.log(this)
   this.$router.push({path: '/about'})
 }
}
</script>
