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
            <img :src="cycle_imgs[0].src" ref="cycle_img" @click="handleClickCycleImg" />
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
              <a :href="item.link" :title="item.title">{{ item.title }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="mid2">
      <div class="mid2-title">
        <span>成果简介</span>
      </div>
      <div class="mid2-content" v-html="result_summary"></div>
    </div>
    <div class="mid3">
      <div class="mid32" v-for="item in bannerImgs" :key="item.id">
        <a :href="item.link" target="_blank">
          <img :src="item.src" style="width: 100%; height: 100%" />
        </a>
      </div>
    </div>
    <!-- 播放视频 -->
    <!-- <div class="mid3">
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
    </div> -->
    <div class="mid4">
      <div class="mid4-title">代表性成果</div>
      <div class="mid4-content">
        <div class="mid4-content-imgs" ref="mid4-content-imgs">
          <div class="mid4-img" v-for="item in scrollImgs" :key="'scroll' + item.id">
            <img :src="item.src" @click="handdleClickScrollImg(item.link)" />
          </div>
        </div>
      </div>
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
import banner1 from '@/assets/banner1.png';
import banner2 from '@/assets/banner2.png';
import banner3 from '@/assets/banner3.png';
import banner4 from '@/assets/banner4.jpg';

export default {
  name: 'HomePage',
  components: {},
  // 定义属性
  data() {
    return {
      // 德育专栏
      cycle_imgs: [
        { id: 1, src: cycle1, link: '/MoralEducation' },
        { id: 2, src: cycle2, link: '/MoralEducation' },
        { id: 3, src: cycle3, link: '/MoralEducation' },
        { id: 4, src: cycle4, link: '/MoralEducation' },
        { id: 5, src: cycle5, link: '/MoralEducation' },
      ],
      cycle_img_order: 0,
      timer: null,
      // 创新专栏
      innovations: [
        { link: '/InnovationActivities', title: '学生创新成果' },
        { link: '/InnovationActivities', title: '创新教育' },
        { link: '/InnovationActivities', title: '网络空间安全特长班' },
        { link: '/InnovationActivities', title: '组织学科竞赛' },
      ],
      // 成果简介
      result_summary: `<p style="margin:0;">深化<strong>“三全育人”</strong>综合改革是落实立德树人根本任务，建设特色鲜明的高水平现代化综合大学的必然要求。
      近年来，北方民族大学党委以习近平新时代中国特色社会主义思想为指引，坚持党的全面领导，坚持社会主义办学方向，
      坚持铸牢中华民族共同体意识工作主线，紧紧围绕<strong>“为谁培养人、培养什么人、怎样培养人”</strong>这个时代课题，以深化“三全育人”综合改革为切入点，
      聚焦组织领导、体系建构、制度机制、队伍建设、平台载体建设等工作，准确识变、科学应变、主动求变，进行了积极的探索与实践。</p>
      <p style="margin:0;">踏石留印，抓铁有痕。为忠实记录我们走过的艰苦奋斗历程，我们将近年来学校深化“三全育人”综合改革重点工作进行了归纳整理，
      按照<strong>“领导关怀、组织领导、制度建设、重要会议、活动实践、工作成效、新闻报道”</strong>等七个版块以时间为轴进行了梳理总结。
      官微将在近期推出其中部分内容，以展示学校“三全育人”工作阶段性成果。</p>
      <p style="margin:0;">心之所向，方能行远。北民大人将牢记初心和使命，胸怀“国之大者”，以<strong>更高的政治站位、更坚定的意志、更实的举措</strong>持续深化“三全育人”综合改革，
      创建铸牢中华民族共同体意识示范校，推动学校实现高质量发展。</p>`,
      // 右侧四张图
      bannerImgs: [
        { id: 1, src: banner1, link: 'https://www.nmu.edu.cn/' },
        { id: 2, src: banner2, link: 'https://www.nmu.edu.cn/' },
        { id: 3, src: banner3, link: 'https://www.nmu.edu.cn/' },
        { id: 4, src: banner4, link: 'https://www.nmu.edu.cn/' },
      ],
      // 滚动图
      scrollImgs: [
        { id: 1, src: cycle1, link: '/AchievementsAppraisal' },
        { id: 2, src: cycle2, link: '/AchievementsAppraisal' },
        { id: 3, src: cycle3, link: '/AchievementsAppraisal' },
        { id: 4, src: cycle4, link: '/AchievementsAppraisal' },
        { id: 5, src: cycle5, link: '/AchievementsAppraisal' },
        { id: 6, src: cycle1, link: '/AchievementsAppraisal' },
        { id: 7, src: cycle2, link: '/AchievementsAppraisal' },
        { id: 8, src: cycle3, link: '/AchievementsAppraisal' },
        { id: 9, src: cycle4, link: '/AchievementsAppraisal' },
        { id: 10, src: cycle5, link: '/AchievementsAppraisal' },
      ],
    };
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    // 轮播图按钮点击
    changeImg(id) {
      this.cycle_img_order = id - 1;
      this.$refs['cycle_img'].src = this.cycle_imgs[id - 1].src;

      this.initialCycleBtnStyle();
    },
    // 操作轮播图按钮样式
    initialCycleBtnStyle() {
      for (let i = 0; i < this.cycle_imgs.length; i++) {
        this.$refs[`cycle-img-btn${i + 1}`][0].style.background = 'rgb(102,102,102, 0.5)'; // 先把所有按钮的背景色恢复
        //这里为什么返回的是一个数组？
      }
      this.$refs[`cycle-img-btn${this.cycle_img_order + 1}`][0].style.background = 'rgb(241,123,10)'; //这里为什么返回的是一个数组？
    },
    // 轮播图图片点击
    handleClickCycleImg() {
      const link = this.cycle_imgs[this.cycle_img_order].link;
      this.$router.push(link);
    },
    // 滚动图图片点击
    handdleClickScrollImg(link) {
      this.$router.push(link);
    },
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // 轮播图
    this.timer = setInterval(() => {
      this.cycle_img_order = ++this.cycle_img_order < this.cycle_imgs.length ? this.cycle_img_order : 0;
      this.$refs['cycle_img'].src = this.cycle_imgs[this.cycle_img_order].src;

      this.initialCycleBtnStyle(); //
    }, 5000);

    // // 代表性成果——图片滚动
    // let a = this.$refs['mid4-content-imgs'];
    // let left = 0;
    // setInterval(() => {
    //   a.style.marginLeft = left + 'px';
    //   left -= 10;
    //   console.log(left);
    // }, 500);
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

  .mid32 {
    height: 117px;
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
    height: 200px;
    width: 100%;
    position: relative;

    .mid4-content-imgs {
      display: flex;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translate(0, -50%);

      animation: mymove 20s infinite;
      -webkit-animation: mymove 20s infinite; /*Safari and Chrome*/

      .mid4-img {
        width: 140px;
        height: 180px;
        margin: 10px 0 0 10px;

        background: red;

        img {
          width: 100%;
          height: 100%;
        }
        img:hover {
          cursor: pointer;
        }
      }
    }

    // 动画
    @keyframes mymove {
      0% {
        left: 0;
        transform: translate(0, -50%);
      }
      50% {
        left: 100%;
        transform: translate(-100%, -50%);
      }
      100% {
        left: 0;
        transform: translate(0, -50%);
      }
    }
    @-webkit-keyframes mymove /*Safari and Chrome*/ {
      0% {
        left: 0;
        transform: translate(0, -50%);
      }
      50% {
        left: 100%;
        transform: translate(-100%, -50%);
      }
      100% {
        left: 0;
        transform: translate(0, -50%);
      }
    }
  }
}
</style>
