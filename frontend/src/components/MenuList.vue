<!--
 * @Author: lucas-se 1320467676@qq.com
 * @Date: 2022-10-16 23:06:43
 * @LastEditors: lucas-se 1320467676@qq.com
 * @LastEditTime: 2022-10-16 23:29:26
 * @FilePath: /NUMDeclare/NMUDeclare/frontend/src/components/MenuList.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by lucas-se 1320467676@qq.com, All Rights Reserved. 
-->
<template>
  <div>
    <div class="container">
      <div class="title">{{ this.title }}</div>
      <div class="list">
        <ul>
          <li v-for="item of this.menu" :key="item">
            <a href="#">
              {{ item }}
              <span>-&gt;</span>
            </a>
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
    return {};
  },
  props: {
    title: {
      type: String,
      default: '这里是title',
    },
    menu: {
      type: Array,
      default: function () {
        return ['这里是菜单一', '这里是菜单一'];
      },
    },
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, // 生命周期 - 创建之前
  beforeMount() {}, // 生命周期 - 挂载之前
  beforeUpdate() {}, // 生命周期 - 更新之前
  updated() {}, // 生命周期 - 更新之后
  beforeDestroy() {}, // 生命周期 - 销毁之前
  destroyed() {}, // 生命周期 - 销毁完成
  activated() {}, // 如果页面有keep-alive缓存功能，这个函数会触发
};
</script>

<style lang="scss" scoped>
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
  float: left;
  margin-top: 10px;
}
.list {
  width: 250px;
  margin: 10px auto;
  background-color: #d9e9fa;
  font-size: 14px;
}

.list ul li {
  border-bottom: solid 1px #ffffff;
  list-style: none;
}

.list ul li span {
  float: right;
  margin-right: 30px;
  color: #000000;
}

.list ul li a {
  padding-left: 10px;
  color: #000000;
  display: block;
  height: 36px;
  line-height: 36px;
  position: relative;
  text-decoration: none;
  color: #003870;
}

.list ul li ul {
  display: none;
  background-color: #e5f2ff;
}

.list ul li ul li {
  border-left: 0;
  border-right: 0;
}
</style>
