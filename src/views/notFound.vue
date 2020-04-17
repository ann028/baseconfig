<template>
  <main>
    <img src="../../src/assets/img/404.png" alt="" style="srcImg">
  </main>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
@Component
export default class notFound extends Vue {
  
}
</script>
<style lang="less" scoped>
main{
  display: flex;
  justify-content: center;
  .srcImg{
    width: 300px;
    height: 300px;
  }
}
</style>