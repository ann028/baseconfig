<template>
  <div class="about" >
    <h1 >This is an about page</h1>
    <button @click="doAbout1">点击</button>
  </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
@Component
export default class about extends Vue{
  private doAbout1() {
    this.$router.push({path: '/'})
  }
}
</script>
