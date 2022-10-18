<!--
 * @Author: lucas-se 1320467676@qq.com
 * @Date: 2022-10-15 21:14:07
 * @LastEditors: lucas-se 1320467676@qq.com
 * @LastEditTime: 2022-10-17 21:19:46
 * @FilePath: /NUMDeclare/NMUDeclare/frontend/src/views/ApplicationForm.vue
 * @Description: 这里是成果申请书模块
 * 
 * Copyright (c) 2022 by lucas-se 1320467676@qq.com, All Rights Reserved. 
-->
<template>
  <div class="content">
    <div class="content">
      <el-container>
        <el-aside width="280px">
          <MenuList :title="title" :menu="menu" @changePath="changePath"> </MenuList>
        </el-aside>
        <el-main>
          <curPosition :path="path" />
          <MainContent />
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）

export default {
  name: 'ApplicationForm',
  // components: {},
  // 定义属性
  data() {
    return {
      title: '成果申请书',
      path: [],
      menu: [
        {
          id: 1,
          content: '成果获奖情况',
          showSub: false,
        },
        {
          id: 2,
          content: '解决的关键问题',
          showSub: false,
        },
        {
          id: 3,
          content: '方法与措施',
          showSub: false,
        },
        {
          id: 4,
          content: '成果特色',
          showSub: false,
        },
        {
          id: 5,
          content: '成果推广应用',
          showSub: false,
        },
        {
          id: 6,
          content: '完成人',
          showSub: false,
        },
      ],
    };
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    changePath(path) {
      this.path = path;
      console.log(path);
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
};
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
