<template>
  <!-- 总入口 -->
  <div id="app">
    <!-- 页头 -->
    <Header></Header>

    <!-- 页面入口 -->
    <router-view></router-view>

    <!-- 页脚 -->
    <Footer></Footer>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import Header from '@/components/public/Header.vue'
import Footer from '@/components/public/Footer.vue'

@Component({
  components: {
    Footer,
    Header,
  },
})
export default class App extends Vue {
}
</script>

<style lang="scss">
  // #app {
  //   height: 100%;
  // }
</style>
