<template>
  <div class="personalCenter">
    <div class="personal_info">
      <div class="personal_title">个人账户信息</div>
      <div class="personal">
        <img class="person_pic" src="@/assets/images/icon_personB.png" alt="">
        <div class="info_table">
          <ul>
            <li class="_info_list info_name">
              <span class="list_item">姓名</span>
              <span class="list_item_last">{{pageData.userInfo.realName}}</span>
            </li>
             <li class="_info_list list_info_sec">
              <span class="list_item">账户名称</span>
              <span class="list_item_last">{{pageData.userInfo.loginName}}</span>
            </li>
             <li class="_info_list">
              <span class="list_item">昵称</span>
              <span class="list_item_last">{{pageData.userInfo.nickName}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="foot_img">
      <img src="@/assets/images/pic_ad2.png" alt="">
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import { getUserInfo } from './request'

@Component()
export default class PersonalCenter extends Vue {
  pageData = {
    userInfo: {},
  }

  created () {
    this.getUserInfo()
  }

  // 获取用户信息
  async getUserInfo () {
    this.pageData.userInfo = await getUserInfo()
  }
}
</script>

<style lang="scss" scoped>
.personalCenter{
  min-width: 1200px;
  margin: 0 auto;
  padding: 0 27.5px;
  background: $DominantFontColorfff;
  .personal_info{
    .personal_title{
      text-align: center;
      font-size: $fontsize-18;
      color: #000;
      padding: 18px 0 12px 0 ;
      border-bottom: 3px solid #cfcfcf;
    }
    .personal{
      display: flex;
      width: 660px;
      height: 118px;
      margin: 27px auto;
      .person_pic{
        width: 72px;
        height: 72px;
        border-radius: 50%;
        margin-top: 12px;
      }
      .info_table{
        width: 100%;
        margin-left: 43px;
        ._info_list{
          height: 39px;
          line-height: 39px;
          .list_item{
            display: inline-block;
            background: rgba(216,216,216,.3);
            width: 146px;
            padding-right: 22px;
            text-align: right;
            font-size: $fontsize-14;
            color:#000;
          }
          .list_item_last{
            margin-left: 54px;
            font-size: $fontsize-14;
            color: #6F6F6F;
          }
        }
        .list_info_sec{
          border: 1px solid #cfcfcf;
          border-right: none;
          border-left: none;
        }
      }
    }
  }
  .foot_img{
    height: 399px;
    margin-top: 143px;
    padding-bottom: 33px;
    img{
      width: 100%;
      height: 100%;
    }
  }
}
</style>
