<template>
  <div class="foot_row">
    <p>《我的世界》教育版由微软开发，中国大陆版权归属京东集团独家所有，由京东云管理运营。</p>
   <img src="@/assets/images/footer_logo.png" alt="">
  </div>
</template>
<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class FooterBar extends Vue {}
</script>
<style lang="scss" scoped>
  .foot_row {
    width:100%;
    height:119px;
    // margin-top:-(119px+40px);
    background:#000;
    text-align: center;
    p{
      box-sizing: border-box;
      color: #fff;
      font-size: 14px;
      padding: 28px 0 ;
    }
  }
</style>
