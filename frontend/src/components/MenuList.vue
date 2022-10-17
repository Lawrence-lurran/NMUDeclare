<!--
 * @Author: lucas-se 1320467676@qq.com
 * @Date: 2022-10-16 23:06:43
 * @LastEditors: lucas-se 1320467676@qq.com
 * @LastEditTime: 2022-10-17 21:14:40
 * @FilePath: /NUMDeclare/NMUDeclare/frontend/src/components/MenuList.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by lucas-se 1320467676@qq.com, All Rights Reserved. 
-->
<template>
  <div class="MenuList">
    <div class="container">
      <div class="title">{{ this.title }}</div>
      <div class="list">
        <ul>
          <li
            v-for="item of this.menu"
            :key="item.id"
            @click="handleClick(item, $event)"
          >
            {{ item.content }}
            <ul class="third-nav" v-if="item.showSub">
              <li v-for="child of item.children" :key="child.id">
                {{ child.content }}
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）

export default {
  name: 'MenuList',
  components: {},
  // 定义属性
  data() {
    return {}
  },
  props: {
    title: {
      type: String,
      default: '这里是title',
    },
    menu: {
      type: Array,
      default: function () {
        return [
          {
            id: 1,
            content: '不忘初心，牢记使命',
            showSub: false,
            children: [
              { id: 1, content: '德育教育课程体系' },
              { id: 2, content: '网络安全宣传周' },
            ],
          },
          { id: 2, content: '德育教育课程体系', showSub: false },
          { id: 3, content: '网络安全宣传周', showSub: false },
          { id: 4, content: '党员工作站', showSub: false },
          { id: 5, content: '职业规范教育', showSub: false },
        ]
      },
    },
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    handleClick(item, e) {
      const path = [this.title, item.content]
      if (e.currentTarget === e.target) {
        if (item.children) {
          console.log('showSub')
          item.showSub = !item.showSub
        } else {
          console.log('click了：' + e.target.innerText)
          this.$emit('changePath', path)
        }
      } else {
        console.log('click了：' + e.target.innerHTML)
        path.push(e.target.innerHTML)
        this.$emit('changePath', path)
      }
    },
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    const path = [this.title]
    if (this.menu.length > 0) {
      path.push(this.menu[0].content)
      if (this.menu[0].children) {
        path.push(this.menu[0].children[0].content)
      }
    }

    this.$emit('changePath', path)
  },
  beforeCreate() {}, // 生命周期 - 创建之前
  beforeMount() {}, // 生命周期 - 挂载之前
  beforeUpdate() {}, // 生命周期 - 更新之前
  updated() {}, // 生命周期 - 更新之后
  beforeDestroy() {}, // 生命周期 - 销毁之前
  destroyed() {}, // 生命周期 - 销毁完成
  activated() {}, // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>

<style lang="scss" scoped>
.MenuList {
  width: 250px;
}
.title {
  background: #014a95;
  text-align: center;
  color: #ffffff;
  border-radius: 10px;
  padding: 0 10px;
  line-height: 40px;
}

.container {
  width: 250px;
  margin-top: 10px;
}
.list {
  width: 250px;
  background-color: #d9e9fa;
  font-size: 14px;
}

.list ul li {
  border-bottom: solid 1px #ffffff;
}

.list ul li {
  text-align: left;
  color: #000000;
  display: block;
  line-height: 36px;
  position: relative;
  text-decoration: none;
  color: #003870;
  display: list-item;
}
</style>
