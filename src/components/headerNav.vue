<template>
  <div class="head flex">
    head
    <!-- <div class="logo flex1">
      <img src="../assets/img/logo-new.png" class="logo-img mt10 ml20" />
    </div>
    <div class="user cur-pointer">
      <div class="flex1">
        <img :src="userInfo.avatar" class="user-info mr20 mt10" />
      </div>
      <div class="popover">
        <div class="popover-body">
          <div class="user-name">
            <span>{{userInfo.userName}}</span>
          </div>
          <div class="line"></div>
          <div class="text-div mt8 cur-pointer" @click="userInfoMgr">
            <i class="iconfont iconset mr8"></i>
            <span class="text">账号设置</span>
          </div>
          <div class="text-div cur-pointer" @click="logout">
            <i class="iconfont iconinput_exit mr8"></i>
            <span class="text">退出</span>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
@Component
export default class headerNav extends Vue{
 private userInfo: any = {}
};
</script>

<style lang="less" scoped>
.head {
  height: 60px;
  background: rgba(255, 255, 255, 1);
  .logo {
    height: 60px;
    width: 190px;
  }
  .user {
    .user-info {
      float: right;
      width: 40px;
      height: 40px;
      border-radius: 50px;
    }
    &:hover .popover {
      display: block;
    }
  }

  .popover {
    display: none;
    position: absolute;
    margin-right: 11px;
    top: 52px;
    right: 0;
    width: 178px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 6px 0px rgba(203, 203, 212, 0.6);
    border-radius: 4px 0px 0px 0px;
    border: 1px solid rgba(227, 227, 227, 1);
    z-index: 10;
    cursor: default;
    .user-name {
      margin-left: 9px;
      height: 26px;
      font-size: 20px;
      font-family: MicrosoftYaHei;
      color: rgba(51, 51, 51, 1);
      line-height: 26px;
      margin-top: 11px;
    }
    .line {
      width: 160px;
      height: 1px;
      background: rgba(203, 203, 212, 1);
      margin-left: 9px;
      margin-top: 10px;
    }

    .text-div {
      width: 178px;
      height: 35px;
      margin-left: 9px;
      .text {
        line-height: 19px;
        font-size: 14px;
        font-family: MicrosoftYaHei;
        color: rgba(51, 51, 51, 1);
      }
    }
  }
}
</style>


