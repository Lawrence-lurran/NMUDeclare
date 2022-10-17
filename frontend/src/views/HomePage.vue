<!--
 * @Author: lucas-se 1320467676@qq.com
 * @Date: 2022-10-15 20:46:36
 * @LastEditors: lucas-se 1320467676@qq.com
 * @LastEditTime: 2022-10-15 21:19:04
 * @FilePath: /NUMDeclare/NMUDeclare/frontend/src/views/HomePage.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by lucas-se 1320467676@qq.com, All Rights Reserved. 
-->
<template>
  <div class="content">
    <div class="mid1">
      <div class="mid11">
        <div class="mid11-title">
          <span>德育专题</span>
        </div>
        <div class="mid11-content">
          <div class="cycle-img">
            <img :src="cycle_imgs[0].src" ref="cycle_img" @click="handleClickImg" />
            <div class="cycle-img-btns">
              <div class="cycle-img-btn" :ref="'cycle-img-btn' + item.id" v-for="item in cycle_imgs" :key="item.id" @click="changeImg(item.id)">
                {{ item.id }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mid12">
        <div class="mid12-title">
          <span>创新专栏</span>
        </div>
        <div class="mid12-content">
          <ul>
            <li v-for="item in innovations" :key="item.title">
              <a :href="item.href" :title="item.title" target="_blank">{{ item.title }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="mid2">
      <div class="mid2-title">
        <span>成果简介</span>
      </div>
      <div class="mid2-content">
        <p>{{ result_summary1 }}</p>
        <p v-html="result_summary2"></p>
      </div>
    </div>
    <div class="mid3">
      <div class="mid31" style="background: #000000 !important">
        <video poster="~../assets/video_poster.jpg" width="340px" height="380px" src="~../assets/video.mp4" controls="controls">
          <source src="~../assets/video.mp4" type="video/mp4" />
          <span style="margin-top: 150px; color: #ffffff; display: block; padding: 0 10px">浏览器版本太低，视频无法正常显示，请升级您的浏览器。</span>
        </video>
      </div>
      <div class="mid32">
        <a href="http://aqjxcg.xupt.edu.cn/liuyan.jsp?urltype=tree.TreeTempUrl&amp;wbtreeid=1056" target="_blank">
          <img src="~../assets/online_call.jpg" />
        </a>
      </div>
    </div>
    <div class="mid4">
      <div class="mid4-title">代表性成果</div>
    </div>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
import cycle1 from '@/assets/cycle1.jpg';
import cycle2 from '@/assets/cycle2.jpg';
import cycle3 from '@/assets/cycle3.jpg';
import cycle4 from '@/assets/cycle4.jpg';
import cycle5 from '@/assets/cycle5.jpg';

export default {
  name: 'HomePage',
  components: {},
  // 定义属性
  data() {
    return {
      result_summary1: `信息安全是国家安全的重要组成部分，习近平总书记指出我国信息安全要“战略清晰，技术先进，产业领先，攻防兼备”，并明确指出：“网络空间的竞争，归根结底是人才的竞争。建设网络强国，没有一支优秀的人才队伍，没有人才创造力迸发，活力涌流，是难以成功的。”西安邮电大学作为西北地区唯一一所以邮电通信技术为特色的高等院校，始终以国家信息安全战略需求为导向，从2004年就开始了信息安全专业招生和人才培养工作，累计培养毕业生1000余人。`,
      result_summary2: `我们秉承<strong>“德育引领，创新驱动，面向行业”</strong>的人才培养理念，信息安全人才培养面向地方信息化建设和信息通信行业需求，围绕中国特色网络安全观，通过理念、队伍、体系、内容、措施等方面的创新构建了“12345”德育教育体系；立足国家网络强国战略，通过目标、队伍、途径、平台、措施等方面的创新实施了“12345”创新教育体系；针对行业和地方需求，通过定位、特色、模块、主线、措施等方面的创新制定了“12345”特色人才培养体系，形成了“三位一体”的人才培养模式，注重学生德育教育、创新能力与攻防兼备能力的培养，信息安全特色人才培养成效显著，具有良好应用效果和示范效应。`,
      // 德育专栏
      cycle_imgs: [
        { id: 1, src: cycle1, link: '/AchievementsAppraisal' },
        { id: 2, src: cycle2, link: '/AchievementsAppraisal' },
        { id: 3, src: cycle3, link: '/AchievementsAppraisal' },
        { id: 4, src: cycle4, link: '/AchievementsAppraisal' },
        { id: 5, src: cycle5, link: '/AchievementsAppraisal' },
      ],
      cycle_img_order: 0,
      timer: null,
      // 创新专栏
      innovations: [
        { href: 'http://aqjxcg.xupt.edu.cn/cxhd1/xkjs.htm', title: '学生创新成果' },
        { href: 'http://aqjxcg.xupt.edu.cn/info/1063/1309.htm', title: '创新教育' },
        { href: 'http://aqjxcg.xupt.edu.cn/info/1063/1316.htm', title: '网络空间安全特长班' },
        { href: 'http://aqjxcg.xupt.edu.cn/info/1063/1320.htm', title: '组织学科竞赛' },
      ],
    };
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    changeImg(id) {
      this.cycle_img_order = id - 1;
      this.$refs['cycle_img'].src = this.cycle_imgs[id - 1].src;

      this.initialCycleBtnStyle();
    },
    initialCycleBtnStyle() {
      for (let i = 0; i < this.cycle_imgs.length; i++) {
        this.$refs[`cycle-img-btn${i + 1}`][0].style.background = 'rgb(102,102,102, 0.5)'; // 先把所有按钮的背景色恢复
        //这里为什么返回的是一个数组？
      }
      this.$refs[`cycle-img-btn${this.cycle_img_order + 1}`][0].style.background = 'rgb(241,123,10)'; //这里为什么返回的是一个数组？
    },
    handleClickImg() {
      const link = this.cycle_imgs[this.cycle_img_order].link;
      this.$router.push(link);
    },
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.timer = setInterval(() => {
      this.cycle_img_order = ++this.cycle_img_order < this.cycle_imgs.length ? this.cycle_img_order : 0;
      this.$refs['cycle_img'].src = this.cycle_imgs[this.cycle_img_order].src;

      this.initialCycleBtnStyle(); //
    }, 5000);
  },
  beforeCreate() {}, // 生命周期 - 创建之前
  beforeMount() {}, // 生命周期 - 挂载之前
  beforeUpdate() {}, // 生命周期 - 更新之前
  updated() {}, // 生命周期 - 更新之后
  beforeDestroy() {
    clearInterval(this.timer);
  }, // 生命周期 - 销毁之前
  destroyed() {}, // 生命周期 - 销毁完成
  activated() {}, // 如果页面有keep-alive缓存功能，这个函数会触发
};
</script>

<style lang="scss" scoped>
.content {
  width: 1000px;
  // height: 200px;
  margin: 0 auto;
  overflow: hidden;
}
.mid1 {
  float: left;
  width: 300px;
  height: 467px;
  margin-top: 10px;

  text-align: left;

  .mid11 {
    display: inline-block;
    width: 100%;
    height: 230px;
    border-radius: 10px;
    background: white;

    .mid11-title {
      margin-top: 5px;
      padding-left: 5px;
      padding-bottom: 5px;
      border-bottom: 2px solid #0290e1;
    }
    .mid11-content {
      position: relative;
      width: 290px;
      height: 200px;

      .cycle-img {
        width: 98%;
        height: 90%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin-left: 5px;

        img {
          width: 100%;
          height: 100%;
        }
        img:hover {
          cursor: pointer;
        }
        .cycle-img-btns {
          position: absolute;
          display: flex;
          bottom: 15px;
          right: 10px;
          height: 10px;
          .cycle-img-btn {
            width: 20px;
            height: 20px;
            margin-right: 10px;
            border-radius: 5px;

            text-align: center;
            font-size: 15px;
            line-height: 20px;
            color: rgb(255, 255, 255, 0.5);
            background: rgb(204, 204, 204, 0.5);
          }
          .cycle-img-btn:first-child {
            background: rgb(241, 123, 10);
          }
          .cycle-img-btn:hover {
            background: rgb(102, 102, 102, 0.5);
            cursor: pointer;
          }
        }
      }
    }
  }
  .mid12 {
    display: inline-block;
    width: 100%;
    height: 230px;
    border-radius: 10px;
    margin-top: 7px;
    background: white;

    .mid12-title {
      margin-top: 5px;
      padding-left: 5px;
      padding-bottom: 5px;
      border-bottom: 2px solid #0290e1;
    }
    .mid12-content {
      width: 260px;
      margin: 5px 0;

      ul {
        margin-top: 0;
      }
      li {
        width: 260px;
        height: 22px;
        list-style: none;
        line-height: 22px;
        font-size: 12px;
        padding: 0 0 0 15px;
        margin-left: -30px;
        background: url(../assets/array.gif) no-repeat left 6px;
      }
      ul li a {
        text-decoration: none;
        color: #000000;
      }
      ul li a:hover {
        color: #fd8005;
      }
    }
  }
}
.mid2 {
  float: left;
  width: 340px;
  height: 467px;
  margin-top: 10px;
  margin-left: 10px;
  border-radius: 10px;
  text-align: left;

  background: white;

  .mid2-title {
    margin-top: 5px;
    padding-left: 5px;
    padding-bottom: 5px;
    border-bottom: 2px solid #0290e1;
  }
  .mid2-content {
    font-family: '微软雅黑';
    font-size: 12px;
    text-indent: 2em;
    line-height: 22px;
    padding: 8px 8px;

    p {
      margin: 0;
    }
  }
}
.mid3 {
  float: right;
  width: 340px;
  height: 467px;
  margin-top: 10px;
  margin-left: 10px;

  .mid31 {
    // border-radius: 10px;
  }
  .mid32 {
    margin-top: 10px;
    border-radius: 10px;
  }
}
.mid4 {
  float: left;
  width: 1000px;
  height: 230px;
  margin-top: 10px;
  border-radius: 10px;
  text-align: left;

  background: white;

  .mid4-title {
    margin-top: 5px;
    padding-left: 5px;
    padding-bottom: 5px;
    border-bottom: 2px solid #0290e1;
  }
  .mid4-content {
  }
}
</style>
