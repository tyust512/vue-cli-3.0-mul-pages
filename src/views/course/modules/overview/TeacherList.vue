<template>
  <div class="lession" >
    <div class="list-lession-body" :key="index" v-for="(item,index) in selectObj.lessonList">
      <ul class="list-lession-item" :id="item.id">
        <li class="list-lession-item-top">
          <div class="item-top-left">
            <span>
            </span>
            <h3>{{item.title}}</h3>
          </div>
          <div :class="type[item.status]" class="item-top-right"></div>
        </li>
        <li class="list-lession-item-center">
          <div class="item-center-left">
          <img class="logo" src="@/assets/images/lessionLogo.png">
          <div class="material">
            <img src="@/assets/images/icon_detail.png">
            <a @click="CourseMaterials(item.courseId, item.id)">课程资料</a>
          </div>
          </div>
          <div class="item-center-right">{{item.description}}</div>
        </li>
        <li class="list-lession-item-bottom">
          <div class="item-bottom-left" >
            <div v-if="item.hasQuiz">
              <img src="@/assets/images/icon_test.png">
              <!-- <a href="#" @click="analysis(item.id)">课堂测验解析</a> -->
              <router-link :to="{name:'testAnalysis'}">课堂测验解析</router-link>
            </div>
          </div>
          <div class="item-bottom-right">
            <div class="lock open" v-if="item.lockStatus=='1'">
              <span>已解锁</span>
              <a @click="greet(item.id,item.lockStatus,item.status)">
                <img src="@/assets/images/icon_unlock.png">
              </a>
            </div>
            <div class="lock close"  v-if="item.lockStatus=='0'">
              <span>已锁定</span>
              <a @click="greet(item.id,item.lockStatus,item.status)">
                <img src="@/assets/images/icon_lock.png">
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <el-dialog
      title=""
      :visible.sync="dialogVisible"
      width="526px"
      class="dialog"
      >
      <div class="tips">
        <div class="tipsTitle">温馨提示</div>
        <h4 class="tipsContent">课程锁定后，学生将无法进入该课程。</h4>
        <label class="noPrompt"><input type="checkbox" value="1"><div>下次登录前不再提醒</div></label>
        <span slot="footer" class="dialog-footer">
          <div class="dialog-footer-button" @click="dialogVisible = false">放弃</div>
          <div class="dialog-footer-button dialog-footer-sure" type="primary" @click="dialogVisible = false">确定上锁</div>
        </span>
      </div>

    </el-dialog>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  props: {
    selectObj: Object, // 传入的选中单元数据
  },
})
export default class TeacherList extends Vue {
  dialogVisible=false
  type = ['mark1', 'mark2', 'mark3'] // 0 未开始 ，1进行中 ，2已完成
  // lession=[
  //   {
  //     type: 'mark1',
  //     lock: 'open',
  //     classHourId: 1,
  //   },
  //   {
  //     type: 'mark2',
  //     lock: 'open',
  //     classHourId: 2,
  //   },
  //   {
  //     type: 'mark2',
  //     lock: 'open',
  //     classHourId: 3,
  //   },
  //   {
  //     type: 'mark3',
  //     lock: 'open',
  //     classHourId: 4,
  //   },
  //   {
  //     type: 'mark2',
  //     lock: 'open',
  //     classHourId: 5,
  //   },
  //   {
  //     type: 'mark1',
  //     lock: 'close',
  //     classHourId: 6,
  //   }
  // ]
  mounted () {
    // this.$refs.treeMenu.setSelected(2, 3)
    this.unitInformation()
  }

  unitInformation () {
    // console.log(this.selectObj.catalogData)
  }
  // 课程加锁解锁
  greet (index, lockStatus, status) {
    this.dialogVisible = true
    // if (lockStatus == 1 && status == 0) {
    //   lockStatus = 0
    // } else if (lockStatus == 0 ) {
    //   lockStatus = 1
    // }else{
    //   alert('课程已经开始，不能锁定了！')
    // }
  }
  handleClose (done) {
    this.$confirm('确认关闭？')
      .then(_ => {
        done()
      })
      .catch(_ => {})
  }
  // 课堂解析 获取课程当前id
  CourseMaterials (courseId, classHourId) {
    this.$emit('selectId', courseId, classHourId)
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" >
$DominantColorBlue:#39BDF0;
$DominantFontColor6F:#6f6f6f;
$DominantFontColorc7:#c7c7c7;
$DominantFontColorfff:#fff;
 .lession{
   font-size:12px !important;
   overflow:hidden;
   .list-lession-body{
     border:3px solid transparent;
     width:324px;
     background: #FFFFFF;
     float:left;
     margin:0px 20px 30px 0px;
   }
   .list-lession-body:nth-child(3n){
     margin:0px 0px 30px 0px;
   }
   .list-lession-item{
     box-shadow: 0 0 2px 0 rgba(0,0,0,0.25);
     .list-lession-item-top{
       display:flex;
       justify-content:space-between;
       .item-top-left{
         span{
           display:block;
           width:107px;
           height:3px;
           background:$DominantColorBlue;
         }
         h3{
          color: #000000;
          line-height:34px;
          padding-left:10px;
          // font-weight:bold;
         }

       }
      .item-top-right{
        width:68px;
        height:38px;
        // background:url(~@/assets/images/mark_01.png) no-repeat 1px 0px;
      }
      .mark1{
        background:url(~@/assets/images/mark_01.png) no-repeat 1px 0px;
      }
       .mark2{
        background:url(~@/assets/images/mark_02.png) no-repeat 1px 0px;
      }
       .mark3{
        background:url(~@/assets/images/mark_03.png) no-repeat 1px 0px;
      }
     }
     .list-lession-item-center{
       padding: 4px 10px 22px;
       display:flex;
       .item-center-left{
          .logo{
            width:160px;
            height:90px;
                }
          .material{
            width:100%;
            height:24px;
            display:flex;
            align-items:center;
            img{
              padding-right:4px;
            }
            a{
              color:$DominantColorBlue;
              text-decoration:underline;
              cursor: pointer;
            }
          }
       }
       .item-center-right{
         height:140px;
         padding-left:8px;
         font-size: 12px;
         color: $DominantFontColor6F;
         line-height: 20px;
         overflow: hidden;
         text-overflow:ellipsis;//文本溢出显示省略号
         display: -webkit-box;
          -webkit-line-clamp: 7;
          -webkit-box-orient: vertical;
       }

     }
     .list-lession-item-bottom{
       height:26px;
       display:flex;
       justify-content:space-between;
       color:#fff;
       align-items:center;
       background: #8E8E8E;
       padding:0 10px;
       .item-bottom-left{
         display:flex;
         align-items:center;
          height:26px;
          img{
            padding-right:6px;
          }
          a{
            color:$DominantFontColorfff;
            text-decoration:underline;
          }
       }
       .item-bottom-right{
         .lock{
          display:flex;
          align-items:center;
          height:26px;
          color:$DominantFontColorc7;
          span{
            display:inline-block;
            padding-right:4px;
          }
          a{
            display:inline-block;
            height: 18px;
            width: 41px;

          }
        }
        .close{
          a{
            background:url(~@/assets/images/icon_bg_close.png) no-repeat;
            background-size:100% 100%;
            img{
              padding:4px 26px;
            }
          }
        }
        .open{
          a{
            background:url(~@/assets/images/icon_bg_open.png) no-repeat;
            background-size:100% 100%;
          }
          img{
              padding: 4px 8px;
          }
        }
       }
     }
   }
   .list-lession-body:hover{
        border:3px solid $DominantColorBlue;
   }
   .dialog{
      .el-dialog{
        border: 3px solid #39BDF0;
        box-shadow: 7px 10px 12px 1px rgba(0,0,0,0.30);
        .el-dialog__body{
          padding: 10px 20px 40px;
        }
        .tips{
          width:340px;
          margin:0 auto;
          .tipsTitle{
            font-size: 14px;
            color: #39BDF0;
            text-align:center;
            margin-bottom: 20px;
          }
          .tipsContent{
            font-size: 20px;
            color: #6F6F6F;
          }
          .noPrompt{
            height:60px;
            line-height:40px;
            display:flex;
            align-items:center;
            padding-top: 14px;
            padding-top: 22px;
            margin-bottom: 10px;
            input[type="checkbox"]{
              background-color: #fff;
              -webkit-appearance:none;
              border: 1px solid #C7C7C7;
              border-radius: 2px;
              outline: none;
              width: 16px;
              height: 16px;
              margin-right:10px;
              position: relative;
            }
            input[type=checkbox]:after {
              position: absolute;
              width: 14px;
              height: 14px;
              top: 0;
              content: " ";
              background-color: #fff;
              color: #333;
              display: inline-block;
              visibility: visible;
              padding: 0px 3px;
              border-radius: 3px;
            }
            input[type=checkbox]:checked:after {
              content: "✓";
              font-size: 12px;
            }
          }
          .dialog-footer{
            display:flex;
            justify-content:space-between;
            .dialog-footer-button{
              width:144px;
              height:26px;
              line-height:26px;
              font-size: 14px;
              color: #FFFFFF;
              text-align:center;
              background: #39BDF0;
              border-radius: 18px;
            }
            .dialog-footer-sure{
              background: #3551A1;
              margin-right:12px;
              margin-left:0px;
            }
          }
        }
      }
    }
 }

</style>
