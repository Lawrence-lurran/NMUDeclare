<!--
 * @Author: lucas-se 1320467676@qq.com
 * @Date: 2022-07-19 14:57:56
 * @LastEditors: lucas-se 1320467676@qq.com
 * @LastEditTime: 2022-10-15 20:42:23
 * @FilePath: /NUMDeclare/NMUDeclare/frontend/src/layout/index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by lucas-se 1320467676@qq.com, All Rights Reserved. 
-->
<template>
  <div class="layoutView">
    <header>这里是header</header>
    <router-view></router-view>
    <footer>这里是footer</footer>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）

export default {
  name: 'layoutView',
  components: {},
  // 定义属性
  data() {
    return {}
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
}
</script>

<style lang="scss" scoped>
$header-height: 10%;
.layoutView {
  height: 100%;
  header {
    width: 100%;
    height: $header-height;
    background-color: rgb(22, 101, 238);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: bolder;
    .el-icon-s-operation {
      position: absolute;
      left: 10px;
    }
  }
}
</style>
