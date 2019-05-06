<template>
  <div>
    <div class="course-catalog-con">
      <div class="left-nav">
        <tree-menu ref="treeMenu" :menuData="navData" @selectId="getId"></tree-menu>
      </div>
      <div class="right-nav">
        <teacher-list v-if="unit===1" :selectObj="selectObj" @selectId="getId"></teacher-list>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import { getCatalog, getCatalogDetail, updateTaskLockStatus } from './request'
import TreeMenu from '../../components/treeMenu/TreeMenu.vue'
import TeacherList from './modules/overview/TeacherList.vue'

@Component({
  components: { TreeMenu, TeacherList, CourseMaterials },
})
export default class CourseContainer extends Vue {
  unit = 1 // 是否为单元
  selectClassHourId = 0 // 被选中的课程
  selectObj = {}
  navData = [
    {
      unitName: '单元一',
      unitId: 1,
      classHour: [
        {
          classHourName: '课时1',
          classHourId: 1,
        }
      ],
    },
    {
      unitName: '单元二',
      unitId: 2,
      classHour: [
        {
          classHourName: '课时2',
          classHourId: 2,
        },
        {
          classHourName: '课时3',
          classHourId: 3,
        }
      ],
    },
    {
      unitName: '单元三',
      unitId: 3,
      classHour: [
        {
          classHourName: '课时3',
          classHourId: 4,
        }
      ],
    },
    {
      unitName: '单元四',
      unitId: 4,
      classHour: [
        {
          classHourName: '课时5',
          classHourId: 6,
        }
      ],
    }
  ]
  // this.unitInformation()
  created () {
    this.getCatalog()
    // this.getCatalogDetail(1)
    this.updateTaskLockStatus()
  }
  mounted () {
    this.$refs.treeMenu.setSelected(1, 1)
  }
  // method
  // 获取课程信息
  async getCatalog () {
    const catalogData = await getCatalog()
    this.selectObj = catalogData[0]
  }
  // 课时详情
  async getCatalogDetail (classHourId) {
    const userInfo = await getCatalogDetail(classHourId)
  }
  // 课程解锁
  async updateTaskLockStatus () {
    const userInfo = await updateTaskLockStatus()
  }
  // 判断是不是单元
  getId (unitId, classHourId) {
    if (!classHourId) {
      this.unit = 1 // 单元
    } else {
      this.unit = 0 // 非单元
      this.selectClassHourId = classHourId
    }
  }
}
</script>

<style lang="scss" scoped>
.course-catalog-con {
  // width: 1200px;
  margin: 0 auto;
  background-color: #fff;
  display:flex;
  padding-top:20px;
  position:relative;
  .left-nav {
    padding-left: 30px;
  }
  .right-nav{
    padding-left: 24px;
    padding-right:30px;
    min-height: 392px;
  }
}
</style>
