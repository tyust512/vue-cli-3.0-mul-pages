<template>
  <!-- 首页 -->
  <div class="container home">
    <div class="class_list">
      <!-- 没有课程时的提示 -->
      <section v-if='pageStatus.isEmpty'>
        <div class="class_empty">
          <p class="empty_pic">
            <img src="@/assets/images/icon_wrong.png" alt="">
          </p>
          <div class="empty_info">
            <p class="_info_text">同学您好：</p>
            <p class="_info_text">您的课程尚未被分配，请联系老师分配您的课程。</p>
          </div>
        </div>
      </section>

      <!-- 课程列表 -->
      <section v-else>
        <ul>
          <li class="list_item"
            v-for="(courseInfo, index) in pageData.courseList" :key="index"
          >
          <router-link class="_link" :to="{name: 'course_overview', query: { roomId: courseInfo.roomId }}">
            <div class="item_pic">
              <p class="item_name">{{courseInfo.className}}</p>
            </div>

          </router-link>
          </li>
        </ul>
      </section>

      <div class="foot_img">
        <img src="@/assets/images/pic_ad.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import { login, getCourseList } from './request'
import { forEach } from '../../utils/index'

@Component
export default class Home extends Vue {
  pageData = {
    courseList: [],
  }

  pageStatus = {
    isEmpty: false,
  }

  created () {
    this.login()
    this.getCourseList()
  }

  // 登陆
  async login () {
    const userInfo = await login()
    this.$store.commit('saveUserInfo', userInfo)
  }
  // 获取班级列表
  async getCourseList () {
    const courseList = await getCourseList()
    forEach(courseList, (courseInfo, index) => this.setClassLabel(courseInfo))
    this.pageData.courseList = courseList
  }

  // 设置班级信息
  setClassLabel (courseInfo) {
    const { studentNum, unitNum, progress } = courseInfo
    courseInfo.nums = courseInfo.nums || {}
    courseInfo.nums.classNum = studentNum
    courseInfo.nums.lessionNum = unitNum
    courseInfo.nums.progress = progress
  }
}
</script>

<style lang="scss" scoped>
.home{
  .class_empty{
    display: flex;
    width: 600px;
    height: 80px;
    margin: 0 auto;

    .empty_pic{
      width: 72px;
      height: 72px;
      border-radius: 50%;
      img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .empty_info{
      margin-left: 41px;
      ._info_text{
        font-size: $fontsize-18;
        color:#000;
        line-height: 36px;
      }
    }
  }

  .class_list{
    padding: 34px 28px;

    .list_item{
      padding-bottom: 26px;
      cursor: pointer;

      ._link{
        display: -webkit-flex;
      }
      .item_pic{
        width: 457px;
        height: 111px;
        padding-top: 13px;
        margin-right: 12px;
        background: url('../../assets/images/classbg01.png') no-repeat center center;
        background-size: 100% 100%;
        .item_name{
          width: 252px;
          height: 49px;
          line-height: 49px;
          font-size: $fontsize-18;
          color:#000;
          padding-left: 21px;
          background: url('../../assets/images/titlebg_on.png');
        }
      }
    }
  }
  .foot_img{
    // width: 1145px;
    height: 221px;
    margin: 99px auto 33px auto;
    img{
      width: 100%;
      height: 100%;
    }
  }
}
</style>
