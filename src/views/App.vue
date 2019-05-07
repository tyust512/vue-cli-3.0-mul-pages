<template>
  <!-- 总入口 -->
  <div id="app">
    <!-- 页面入口 -->
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'


@Component
export default class App extends Vue {
}
</script>

<style lang="scss">
  // #app {
  //   height: 100%;
  // }
</style>
