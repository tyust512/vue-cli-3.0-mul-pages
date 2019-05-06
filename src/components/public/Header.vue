<template>
  <header>
    <div class="menu">
      <!-- 图标 -->
      <div class="logo">
        <span>京东云</span>
      </div>

      <!-- 菜单栏 -->
      <div class="menu-item">
        <a href="/course#/">
          <img class="icon" src="../../assets/images/icon_classroom.png" alt="">
          <span>我的教室</span>
        </a>
      </div>
      <!-- <div class="menu-item">
        <img class="icon"  src="../../assets/images/icon_other.png" alt="">
        <span>我的导航</span>
      </div> -->
      <div class="menu-item last-item">
        <a href="/personal-center#/">
          <img class="icon"  src="../../assets/images/icon_center.png" alt="">
          <span>个人中心</span>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
@Component
export default class HeaderBar extends Vue {}
</script>

<style lang="scss" scoped>
.menu {
  height: 40px;
  display: flex;
  background: #000;
  box-sizing: border-box;
  padding: 0 28px 0 25px;
  color: #FFFFFF;
  line-height: 40px;
  vertical-align: middle;

  .logo {
    height: 40px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    overflow: hidden;

    display: block;
    cursor: pointer;
    margin-top: 7px;
    width: 92px;
    height: 25px;
    background: url(//static-portal.jdcloud.com/jcloud/jc/2.2.0/widget/jdc-header-v2/i/jdc-logo.svg)
      center no-repeat;
    background-size: 100%;
    text-indent: -100px;
  }

  .menu-item {
    position: relative;
    flex: 100px 0 0;
    margin-left: 35px;

    .icon {
      width: 23px;
      height: 23px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%)
    }

    span {
      position: absolute;
      left: 28px;
      color:#fff;
    }
  }
  .last-item {
    margin-left: auto;
  }
}
</style>
