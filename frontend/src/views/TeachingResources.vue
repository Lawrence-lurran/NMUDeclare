<!--
 * @Author: lucas-se 1320467676@qq.com
 * @Date: 2022-10-17 12:45:39
 * @LastEditors: lucas-se 1320467676@qq.com
 * @LastEditTime: 2022-10-17 21:05:24
 * @FilePath: /NUMDeclare/NMUDeclare/frontend/src/views/TeachingResources.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by lucas-se 1320467676@qq.com, All Rights Reserved. 
-->
<template>
  <div class="content">
    <el-container>
      <el-aside width="280px">
        <MenuList :title="title" :menu="menu" @changePath="changePath">
        </MenuList>
      </el-aside>
      <el-main>
        <curPosition :path="path" />
        <MainContent />
      </el-main>
    </el-container>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）

export default {
  name: 'TeachingResources',
  components: {},
  // 定义属性
  data() {
    return {
      title: '教学资源',
      path: ['教学资源', '师资介绍'],
      menu: [
        {
          id: 1,
          content: '师资介绍',
          showSub: false,
          children: [
            { id: 1, content: '师资组成' },
            { id: 2, content: '教学团队' },
          ],
        },
        {
          id: 2,
          content: '课程建设',
          showSub: false,
          children: [
            { id: 1, content: '出版教材' },
            { id: 2, content: '精品课程' },
            { id: 3, content: '视频教学' },
          ],
        },
        {
          id: 3,
          content: '实验平台',
          showSub: false,
          children: [
            { id: 1, content: '实验室基本情况' },
            { id: 2, content: '虚拟仿真实验室' },
            { id: 3, content: '开发实验室预约' },
          ],
        },
        {
          id: 4,
          content: '教科协同',
          showSub: false,
          children: [
            { id: 1, content: '教研平台' },
            { id: 2, content: '教改成果' },
            { id: 3, content: '科研成果' },
          ],
        },
      ],
    }
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    changePath(path) {
      this.path = path
      console.log(path)
    },
  },
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
.content {
  width: 1000px;
  margin: 0 auto;
  overflow: hidden;
  .el-main {
    width: 720px;
    min-height: 400px;
    background: #ffffff;
    border-radius: 10px;
    padding: 0 10px 10px 10px;
    margin-top: 10px;
  }
}
</style>
