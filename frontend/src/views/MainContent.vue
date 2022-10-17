<!--
 * @Author: lucas-se 1320467676@qq.com
 * @Date: 2022-10-17 19:18:01
 * @LastEditors: lucas-se 1320467676@qq.com
 * @LastEditTime: 2022-10-17 21:09:35
 * @FilePath: /NUMDeclare/NMUDeclare/frontend/src/views/MainContent.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by lucas-se 1320467676@qq.com, All Rights Reserved. 
-->
<template>
  <div>
    <ul>
      <li v-for="item of list" :key="item.id">
        <a
          href="http://aqjxcg.xupt.edu.cn/info/1031/1151.htm"
          class="c44509"
          target="_blank"
          :title="item.title"
          >{{ item.title }}</a
        ><span class="date"> &nbsp;{{ item.date }}&nbsp;</span>
      </li>
    </ul>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）

export default {
  name: 'MainContent',
  components: {},
  // 定义属性
  data() {
    return {
      list: [
        {
          id: 1,
          title: '2016年大学生科技立项项目',
          date: '2017年03月10日',
        },
        {
          id: 2,
          title: '2015年大学生科技立项项目',
          date: '2016年10月20日',
        },
        {
          id: 3,
          title: '2014年大学生科技立项项目',
          date: '2016年09月07日',
        },
        {
          id: 4,
          title: '2013年大学生科技立项项目',
          date: '2016年05月25日',
        },
        {
          id: 5,
          title: '2012年大学生科技立项项目',
          date: '2015年12月23日',
        },
        {
          id: 6,
          title: '2011年大学生科技立项项目',
          date: '2015年12月23日',
        },
        {
          id: 7,
          title: '2010年大学生科技立项项目',
          date: '2015年11月10日',
        },
        {
          id: 8,
          title: '2009年大学生科技立项项目',
          date: '2015年06月18日',
        },
        {
          id: 9,
          title: '2008年大学生科技立项项目',
          date: '2015年04月08日',
        },
        {
          id: 10,
          title: '2007年大学生科技立项项目',
          date: '2015年03月23日',
        },
      ],
    }
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
ul li {
  width: 100%;
  list-style: none;
  color: #000000;
  float: left;
  height: 30px;
  line-height: 30px !important;
  border-bottom: 1px dashed #cccccc;
  font-size: 14px;
  a {
    color: #000000;
    float: left;
    line-height: 30px !important;
    text-decoration: none;
  }
  A.c44509 {
    font-size: 9pt;
    line-height: 150%;
    color: #333333;
    text-decoration: none;
  }
  A.c44509:link {
    color: #222222;
  }
  A.c44509:visited {
    color: #222222;
  }
  A.c44509:active {
    color: #222222;
  }
  A.c44509:hover {
    color: #cc0000;
  }
  .date {
    line-height: 150%;
    font-size: 9pt;
    text-decoration: none;
  }
}
</style>
