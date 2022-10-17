<!--
 * @Author: lucas-se 1320467676@qq.com
 * @Date: 2022-07-19 14:57:56
 * @LastEditors: lucas-se 1320467676@qq.com
 * @LastEditTime: 2022-10-17 20:29:15
 * @FilePath: /NUMDeclare/NMUDeclare/frontend/src/layout/index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by lucas-se 1320467676@qq.com, All Rights Reserved. 
-->
<template>
  <div class="layoutView">
    <div class="logo"></div>
    <header>
      <div class="header">
        <ul class="nav">
          <li @click="pushRouter('HomePage')">首页</li>
          <li @click="pushRouter('ApplicationForm')">
            成果申请书
            <ul class="second-nav">
              <li>
                <a href="http://aqjxcg.xupt.edu.cn/cgsqs1/cghjqk.htm"
                  >成果获奖情况</a
                >
              </li>
              <li>
                <a href="http://aqjxcg.xupt.edu.cn/cgsqs1/cgjjjjjdgjwt.htm"
                  >解决的关键问题</a
                >
              </li>
              <li>
                <a href="http://aqjxcg.xupt.edu.cn/cgsqs1/ffycs.htm"
                  >方法与措施</a
                >
              </li>
              <li>
                <a href="http://aqjxcg.xupt.edu.cn/cgsqs1/cgts.htm">成果特色</a>
              </li>
              <li>
                <a href="http://aqjxcg.xupt.edu.cn/cgsqs1/cgtgyy.htm"
                  >成果推广应用</a
                >
              </li>
              <li>
                <a href="http://aqjxcg.xupt.edu.cn/cgsqs1/wcr.htm">完成人</a>
              </li>
            </ul>
          </li>
          <li @click="pushRouter('SummaryReport')">成果总结报告</li>
          <li @click="pushRouter('AchievementsAppraisal')">成果鉴定</li>
          <li @click="pushRouter('MoralEducation')">
            德育园地
            <ul class="second-nav">
              <li>
                <a href="http://aqjxcg.xupt.edu.cn/dyyd/bwcx_ljsm.htm"
                  >不忘初心，牢记使命</a
                >
              </li>
              <li>
                <a href="http://aqjxcg.xupt.edu.cn/dyyd/dyjykctx.htm"
                  >德育教育课程体系</a
                >
              </li>
              <li>
                <a href="http://wlaqz.xupt.edu.cn/" target="_blank"
                  >网络安全宣传周</a
                >
              </li>
              <li>
                <a href="http://aqjxcg.xupt.edu.cn/dyyd/dygzz1.htm"
                  >党员工作站</a
                >
              </li>
              <li>
                <a href="http://wlaqz.xupt.edu.cn/gzzd.htm" target="_blank"
                  >职业规范教育</a
                >
              </li>
            </ul>
          </li>
          <li @click="pushRouter('InnovationActivities')">
            创新活动
            <ul class="second-nav">
              <li>
                <a href="http://aqjxcg.xupt.edu.cn/cxhd1/xkjs.htm">学科竞赛</a>
              </li>
              <li>
                <a href="http://aqjxcg.xupt.edu.cn/cxhd1/cxcy.htm">创新创业</a>
              </li>
              <li>
                <a href="http://aqjxcg.xupt.edu.cn/cxhd1/kjlx.htm">科技立项</a>
              </li>
              <li>
                <a href="http://aqjxcg.xupt.edu.cn/cxhd1/kjlx1.htm"
                  >学生发表论文</a
                >
              </li>
              <li>
                <a href="http://aqjxcg.xupt.edu.cn/cxhd1/kjlx2.htm"
                  >学生参与专利</a
                >
              </li>
              <li>
                <a href="http://aqjxcg.xupt.edu.cn/cxhd1/kjlx3.htm"
                  >学生代表性作品</a
                >
              </li>
            </ul>
          </li>
          <li @click="pushRouter('TeachingResources')">
            教学资源
            <ul class="second-nav">
              <li>
                <a href="http://aqjxcg.xupt.edu.cn/jxzy/szjs/szzc.htm"
                  >师资介绍</a
                >
                <ul class="third-nav">
                  <li>
                    <a href="http://aqjxcg.xupt.edu.cn/jxzy/szjs/szzc.htm"
                      >师资组成</a
                    >
                  </li>
                  <li>
                    <a href="http://aqjxcg.xupt.edu.cn/jxzy/szjs/jxtd.htm"
                      >教学团队</a
                    >
                  </li>
                </ul>
              </li>
              <li>
                <a href="http://aqjxcg.xupt.edu.cn/jxzy/kcjs1/jc.htm"
                  >课程建设</a
                >
                <ul class="third-nav">
                  <li>
                    <a href="http://aqjxcg.xupt.edu.cn/jxzy/kcjs1/jc.htm"
                      >出版教材</a
                    >
                  </li>
                  <li>
                    <a href="http://aqjxcg.xupt.edu.cn/jxzy/kcjs1/jpkc.htm"
                      >精品课程</a
                    >
                  </li>
                  <li>
                    <a href="http://aqjxcg.xupt.edu.cn/jxzy/kcjs1/spjx.htm"
                      >视频教学</a
                    >
                  </li>
                </ul>
              </li>
              <li>
                <a href="http://aqjxcg.xupt.edu.cn/jxzy/sypt/sysjbqk.htm"
                  >实验平台</a
                >
                <ul class="third-nav">
                  <li>
                    <a href="http://aqjxcg.xupt.edu.cn/jxzy/sypt/sysjbqk.htm"
                      >实验室基本情况</a
                    >
                  </li>
                  <li>
                    <a href="http://tg.xiyou.edu.cn/virexp/" target="_blank"
                      >虚拟仿真实验室</a
                    >
                  </li>
                  <li>
                    <a href="http://222.24.62.75/labproc/" target="_blank"
                      >开放实验预约</a
                    >
                  </li>
                </ul>
              </li>
              <li>
                <a href="http://aqjxcg.xupt.edu.cn/jxzy/jkxt/jgcg.htm"
                  >教科协同</a
                >
                <ul class="third-nav">
                  <li>
                    <a href="http://aqjxcg.xupt.edu.cn/jxzy/jkxt/kypt.htm"
                      >教研平台</a
                    >
                  </li>
                  <li>
                    <a href="http://aqjxcg.xupt.edu.cn/jxzy/jkxt/jgcg.htm"
                      >教改成果</a
                    >
                  </li>
                  <li>
                    <a href="http://aqjxcg.xupt.edu.cn/jxzy/jkxt/kycg.htm"
                      >科研成果</a
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li @click="pushRouter('DevelopEffective')">
            培养成效
            <ul class="second-nav">
              <li>
                <a href="http://aqjxcg.xupt.edu.cn/pycx/jyqk.htm">招生就业</a>
              </li>
              <li>
                <a href="http://aqjxcg.xupt.edu.cn/pycx/qypj.htm"
                  >主办会议与竞赛</a
                >
              </li>
              <li>
                <a href="http://aqjxcg.xupt.edu.cn/pycx/shyx.htm">社会影响</a>
              </li>
              <li>
                <a href="http://aqjxcg.xupt.edu.cn/pycx/yxxy.htm">优秀校友</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
    <router-view></router-view>
    <footer>
      <div class="fot">
        <p>
          CopyRight © 2022 All Rights
          Reserved.北方民族大学高等教育国家级教学成果奖申报网站 版权所有<br />地址：宁夏回族自治区-银川市-西夏区-文昌北街204号
          电话：0951-2066992 技术支持：swjtu-vge
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）

export default {
  name: 'layoutView',
  components: {},
  // 定义属性
  data() {
    return {
      to: 'HomePage',
    }
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    pushRouter(to) {
      if (this.to !== to) {
        this.to = to
        this.$router.push(to)
      }
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
.layoutView {
  height: 100%;
  .logo {
    width: 1000px;
    height: 270px;
    margin: 0 auto;
    background: url(../assets/logo.gif);
    border-top: 6px solid #2e62c4;
    background-size: 100% 100%;
  }
  header {
    .header {
      height: 40px;
      font-size: 16px;
      color: white;
    }
    .header .nav {
      width: 1000px;
      height: 40px;
      line-height: 40px;
      margin: 0 auto;
      position: relative;
      z-index: 111;
      background: #014a95;
    }

    .header .nav li {
      float: left;
      padding: 0 27px;
      list-style: none;
      height: 40px;
      line-height: 40px;
      text-align: center;
    }

    .header .nav li a {
      color: #fff;
      text-decoration: none;
    }

    .header .nav li a:hover {
      color: #fd8005;
    }

    .header .nav li .second-nav {
      width: 64px;
      display: none;
      position: relative;
      margin-left: -27px;
      font-size: 12px;
    }

    .header .nav li .second-nav li {
      position: relative;
      height: 40px;
      line-height: 40px;
      background: #014a95;
      border-top: 1px solid #056dd8;
      width: 118px;
      padding: 0;
    }

    .header .nav li .second-nav li .third-nav {
      width: 118px;
      height: 200px;
      display: none;
      margin-top: -41px;
      margin-left: 118px;
      font-size: 12px;
    }

    .third-nav li {
      width: 118px !important;
      padding: 0 !important;
    }
  }
  .fot {
    width: 1000px;
    margin: 0 auto;
    background: #014a95;
    height: 80px;
    margin-top: 10px;
    p {
      color: #ffffff;
      text-align: center;
      font-size: 14px;
      line-height: 20px;
      display: block;
      padding-top: 20px;
    }
  }
}
</style>
