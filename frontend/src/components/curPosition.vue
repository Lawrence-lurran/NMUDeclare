<!--
 * @Author: lucas-se 1320467676@qq.com
 * @Date: 2022-10-17 17:23:07
 * @LastEditors: lucas-se 1320467676@qq.com
 * @LastEditTime: 2022-10-17 19:29:20
 * @FilePath: /NUMDeclare/NMUDeclare/frontend/src/components/curPosition.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by lucas-se 1320467676@qq.com, All Rights Reserved. 
-->
<template>
  <div class="container">
    <div class="midcd">
      <div>
        当前位置:
        <span @click="pushRouter('HomePage')">首页</span>
        <span v-for="(item, index) of path" :key="index">
          &gt;&gt;{{ item }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）

export default {
  name: 'curPosition',
  components: {},
  // 定义属性
  data() {
    return {}
  },
  props: {
    path: {
      type: Array,
      default: function () {
        return []
      },
    },
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    pushRouter(to) {
      this.$router.push(to)
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
.midcd {
  text-align: left;
  line-height: 30px;
  font-size: 12px;
  border-bottom: 1px solid #0290e1;
}

.midcd span {
  color: #000000;
  text-decoration: none;
}
</style>
