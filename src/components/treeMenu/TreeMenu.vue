<template>
  <div class="tree-menu">
    <dl>
      <dd v-for="unit in menuData" :key="unit.unitId" @click="clickUnit(unit.unitId)" :class="{active: unitId === unit.unitId, showArrow: unitId === unit.unitId && isClickUnit}">
        <span>{{unit.unitName}}</span>
        <ul v-if="unit.classHour && unit.classHour.length" :style="{height: unitId === unit.unitId ? unit.classHour.length * 41 + 'px' : 0}">
          <li v-for="classHour in unit.classHour" :key="classHour.classHourId" @click.stop="clickClassHour(unit.unitId, classHour.classHourId)" :class="{selected: classHourId === classHour.classHourId && !isClickUnit}">
            <div class="className">
              <i></i>{{classHour.classHourName}}
            </div>
          </li>
        </ul>
      </dd>
    </dl>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  props: {
    menuData: {
      type: Array,
      default: [],
    },
  },
})
export default class TreeMenu extends Vue {
  unitId = 1 // 保存点击的一级菜单单元的id
  classHourId = 0 // 保存点击的二级菜单课时的id
  isClickUnit = true // 是否点击的是课时

  clickUnit (unitId) { // 点击单元
    this.unitId = unitId
    this.isClickUnit = true

    this.$emit('selectId', unitId)
  }

  clickClassHour (unitId, classHourId) { // 点击课时
    this.classHourId = classHourId
    this.isClickUnit = false

    this.$emit('selectId', unitId, classHourId)
  }

  setSelected (unitId, classHourId) { // 设置课时选中
    this.unitId = unitId
    this.classHourId = classHourId
    this.isClickUnit = false
  }
}
/*
示例数据
menuData = [
  {
    unitName: '',   //单元
    unitId: 1,
    classHour: [    //单元所属课时
      {
        classHourName: '第一课时',
        classHourId: 0
      }
    ]
  }
]
*/
</script>

<style lang="scss" scoped>
.tree-menu {
  width: 73px;
  height: 100%;
  border-right: 1px solid #CFCFCF;
  background-color: #FFFFFF;
  dl {
    width: 100%;
    dd {
      cursor: pointer;
      width: 73px;
      &.active {
        span {
          color: #000000;
          font-size: 14px;
          line-height: 50px;
        }
        ul {
          margin-bottom: 40px;
        }
      }
      &.showArrow {
        background: url('./arrow.png') right 17px no-repeat;
      }
      span {
        color: #8F8F8F;
        font-size: 12px;
        line-height: 50px;
        display: inline-block;
      }
      ul {
        height: 0px;
        overflow: hidden;
        transition: height 0.5s;
        -webkit-transition: height 0.5s;
        -moz-transition: height 0.5s;
        -ms-transition: height 0.5s;
        -o-transition: height 0.5s;
        li {
          font-size: 12px;
          color: #757575;
          line-height: 40px;
          i {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: #C7C7C7;
            display: inline-block;
            margin-right: 5px;
          }
          .className {
            display: inline-block;
            border-bottom: 1px solid #DFDFDF;
            padding-left: 5px;
            padding-right: 5px;
          }
          &.selected {
            background: url(./arrow.png) right 17px no-repeat;
            .className {
              color: #000000;
              i {
                background-color: #39BDF0;
              }
            }
          }
        }
      }
    }
  }
}
</style>
