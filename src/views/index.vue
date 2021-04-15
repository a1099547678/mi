<template>
  <div class="index">
    <!-- 轮播图部分 -->
    <div class="w swiper-box">
      <swiper ref="mySwiper" :options="swiperOptions" class="w">
        <swiper-slide v-for="(item, index) in SlideImg" :key="index"
          ><a :href="item.src"
            ><img :src="item.src" alt="" class="swiper-no-swiping" /></a
        ></swiper-slide>
      </swiper>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      <!-- 轮播图部分 -->
      <!-- 商品导航栏 -->
      <div class="commodity">
        <ul class="commodity-list">
          <li>手机&#160;电话卡<i class="iconfont"></i></li>
          <li>电视&#160;盒子<i class="iconfont"></i></li>
          <li>笔记本&#160;显示器<i class="iconfont"></i></li>
          <li>家电&#160;插线板<i class="iconfont"></i></li>
          <li>出行&#160;穿戴<i class="iconfont"></i></li>
          <li>智能&#160;路由器<i class="iconfont"></i></li>
          <li>电源&#160;配件<i class="iconfont"></i></li>
          <li>健康&#160;儿童<i class="iconfont"></i></li>
          <li>耳机&#160;音箱<i class="iconfont"></i></li>
          <li>生活&#160;箱包<i class="iconfont"></i></li>
        </ul>
        <!-- 商品列表栏 -->
        <div class="commodity-site">
          <ul v-for="(itembig, index) in SiteList" :key="index">
            <li v-for="(item, index) in itembig" :key="index">
              <a href="javascript:;">
                <img :src="item.src" alt="" />
                {{ item.name }}
              </a>
            </li>
          </ul>
        </div>
        <!-- 商品列表栏 -->
      </div>
      <!-- 商品导航栏 -->
    </div>
    <!-- 广告栏部分 -->
    <div class="w column">
      <ul class="column-menu">
        <li>
          <a href="javascript:;">
            <i class="iconfont">&#xe61a;</i>
            <span>小米秒杀</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <i class="iconfont">&#xe646;</i>
            <span>企业团购</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <i class="iconfont">&#xe67a;</i>
            <span>F码通道</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <i class="iconfont">&#xe947;</i>
            <span>米粉卡</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <i class="iconfont">&#xe632;</i>
            <span>以旧换新</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <i class="iconfont">&#xe63a;</i>
            <span>话费充值</span>
          </a>
        </li>
      </ul>
      <ul class="column-banner">
        <li>
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5d4298059889417157e8492750328492.jpg?w=632&h=340"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5d4298059889417157e8492750328492.jpg?w=632&h=340"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5d4298059889417157e8492750328492.jpg?w=632&h=340"
            alt=""
          />
        </li>
      </ul>
    </div>
    <!-- 广告栏部分 -->
    <!-- 内容主体 -->
    <div class="menu">
      <!-- 小米秒杀 -->
      <div class="w menu-seckill">
        <h2>小米秒杀</h2>
        <div class="seckill-time">
          <div class="time-down">14:00&#32;&#32;场</div>
          <i class="iconfont time-ico">&#xe673;</i>
          <div class="time-end">距离结束还有</div>
          <div class="time-exact">
            <span>03</span>
            <b>:</b>
            <span>03</span>
            <b>:</b>
            <span>03</span>
          </div>
        </div>
        <div class="swiper2-box">
          <swiper ref="mySwiper2" :options="swiperOptions2">
            <swiper-slide class="noSwiping"
              ><img
                src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a27cccc02ebc33e76ecf71b49a3e7d3a.png?thumb=1&w=200&h=200&f=webp&q=90"
                alt=""
                style="width: 50px; height: 50px"
            /></swiper-slide>
            <swiper-slide class="swiper-wrapper">Slide 2</swiper-slide>
            <swiper-slide class="swiper-wrapper">Slide 3</swiper-slide>
            <swiper-slide class="swiper-wrapper">Slide 4</swiper-slide>
            <swiper-slide class="swiper-wrapper">Slide 5</swiper-slide>
            <swiper-slide class="swiper-wrapper">Slide 6</swiper-slide>
            <swiper-slide class="swiper-wrapper">Slide 7</swiper-slide>
            <swiper-slide class="swiper-wrapper">Slide 8</swiper-slide>
            <swiper-slide class="swiper-wrapper">Slide 9</swiper-slide>
            <swiper-slide class="swiper-wrapper">Slide 10</swiper-slide>
            <swiper-slide class="swiper-wrapper">Slide 11</swiper-slide>
            <swiper-slide class="swiper-wrapper">Slide 12</swiper-slide>
          </swiper>
          <div class="swiper2-button-prev iconfont"></div>
          <div class="swiper2-button-next iconfont"></div>
        </div>
      </div>
      <!-- 小米秒杀 -->
      <!-- banner_box -->
      <div class="w banner_box">
        <a href="javascript:;">
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/431e5fd6bfd1b67d096928248be18303.jpg?thumb=1&w=1349&h=132&f=webp&q=90"
            alt=""
          />
        </a>
      </div>
      <!-- banner_box -->
      <!-- 手机区 -->
      <div class="w miphone">
        <h2>手机</h2>
        <ul class="miphone-brick">
          <li class="brick-list">
            <a href="">
              <img
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c583f2edc613f1be20fa415910b13ce3.jpg?thumb=1&w=234&h=614&f=webp&q=90"
                alt=""
              />
            </a>
          </li>
          <li class="brick-list">
            <a href="">
              <img
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5dc32ec73299ff79556dcd1cf0f0ac11.png?thumb=1&w=200&h=200&f=webp&q=90"
                alt=""
              />
              <span>小米MIX FOLD</span>
              <span>折叠大屏|自研究芯片</span>
              <span>9999元起</span>
            </a>
          </li>
          <li class="brick-list"><a href=""></a></li>
          <li class="brick-list"><a href=""></a></li>
          <li class="brick-list"><a href=""></a></li>
          <li class="brick-list"><a href=""></a></li>
          <li class="brick-list"><a href=""></a></li>
          <li class="brick-list"><a href=""></a></li>
          <li class="brick-list"><a href=""></a></li>
        </ul>
      </div>
      <!-- 手机区 -->
      <!-- banner_box 1-->
      <div class="w banner_box">
        <a href="javascript:;">
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/431e5fd6bfd1b67d096928248be18303.jpg?thumb=1&w=1349&h=132&f=webp&q=90"
            alt=""
          />
        </a>
      </div>
      <!-- banner_box 1-->
    </div>
    <!-- 商品展示柜 1-->
    <div>
      <index-showcase></index-showcase>
    </div>
    <!-- 商品展示柜 1-->
    <!-- banner_box 2-->
    <div class="w banner_box">
      <a href="javascript:;">
        <img
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/431e5fd6bfd1b67d096928248be18303.jpg?thumb=1&w=1349&h=132&f=webp&q=90"
          alt=""
        />
      </a>
    </div>
    <!-- banner_box 2-->
    <!-- 商品展示柜 2-->
    <div>
      <index-showcase></index-showcase>
    </div>
    <!-- 商品展示柜 2-->
    <!-- banner_box 3-->
    <div class="w banner_box">
      <a href="javascript:;">
        <img
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/431e5fd6bfd1b67d096928248be18303.jpg?thumb=1&w=1349&h=132&f=webp&q=90"
          alt=""
        />
      </a>
    </div>
    <!-- banner_box 3-->
    <!-- 商品展示柜 3-->
    <div>
      <index-showcase></index-showcase>
    </div>
    <!-- 商品展示柜 3-->
    <!-- banner_box 4-->
    <div class="w banner_box">
      <a href="javascript:;">
        <img
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/431e5fd6bfd1b67d096928248be18303.jpg?thumb=1&w=1349&h=132&f=webp&q=90"
          alt=""
        />
      </a>
    </div>
    <!-- banner_box 4-->
    <!-- 发布会视频 -->
    <div class="recall">
      <div class="w recall-conference">
        <h2>视频</h2>
        <a href="javascript:;" class="conference-more">
          <span class="more-span">查看全部</span>
          <i class="iconfont more-ico"></i>
        </a>
        <ul class="conference-vd">
          <li
            class="vd-list"
            @click="showMivideo(item.src)"
            v-for="(item, index) in videoList"
            :key="index"
          >
            <img
              src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/101b19aca4bb489bcef0f503e44ec866.jpg?thumb=1&w=296&h=180&f=webp&q=90"
              alt=""
              class="vd-list-picture"
            />
            <span class="iconfont vd-list-play"></span>
            <h3 class="vd-list-title">Redmi 10X系列发布会</h3>
            <p class="vd-list-desc">Redmi 10X系列发布会</p>
          </li>
        </ul>
      </div>
      <transition name="recall-mask">
        <div class="recall-mask" v-if="miVideoOp"></div>
      </transition>
      <transition name="mivideo-box">
        <div class="mivideo-box" v-if="miVideoOp">
          <mi-video @stopVideo="stopOp" :msg="giveMivideo"></mi-video>
        </div>
      </transition>
    </div>
    <!-- 发布会视频 -->
    <!-- 内容主体 -->
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import IndexShowcase from "../components/IndexShowcase";
import MiVideo from "../components/MiVideo";
import Vue from "vue";
export default {
  name: "index",
  components: {
    Swiper,
    SwiperSlide,
    IndexShowcase,
    MiVideo,
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      // swiper1
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        effect: "fade", //淡入效果
        noSwiping: true, //不可滑动
        speed: 1500, //轮播速度
        // 设置箭头图标
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
          delay: 5000, //切换间隔
          disableOnInteraction: false,
        },
        loop: true,
        loopPreventsSlide: false,
        // 点击圆点切换
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
      // swiper2
      swiperOptions2: {
        navigation: {
          nextEl: ".swiper2-button-next",
          prevEl: ".swiper2-button-prev",
        },
        autoplay: {
          delay: 5000, //切换间隔
          disableOnInteraction: false,
        },
        speed: 1500, //轮播速度
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 20,
        noSwiping: true,
        noSwipingClass: "swiper-wrapper",
      },
      // 轮播图图片
      SlideImg: [
        {
          id: 0,
          src:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e023dd94c146d0f27f7ae8e98213abff.jpg?thumb=1&w=1226&h=460&f=webp&q=90",
        },
        {
          id: 1,
          src:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/67e705d12eb50ff0d01c0a17d4428754.jpg?w=2452&h=920",
        },
        {
          id: 2,
          src:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/85fe83512254832000635fb15f048df5.jpg?thumb=1&w=1226&h=460&f=webp&q=90",
        },
        {
          id: 3,
          src:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e023dd94c146d0f27f7ae8e98213abff.jpg?thumb=1&w=1226&h=460&f=webp&q=90",
        },
        {
          id: 4,
          src:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dd1230a223865a9b98f4b2cd437eea08.jpg?thumb=1&w=1226&h=460&f=webp&q=90",
        },
      ],
      // 商品列表图片
      SiteList: [
        [
          {
            id: 0,
            src:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ac38f4abb13391b5f254cd47aebb55bb.png?thumb=1&w=40&h=40&f=webp&q=90",
            name: "小米电视机",
          },
          {
            id: 0,
            src:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ac38f4abb13391b5f254cd47aebb55bb.png?thumb=1&w=40&h=40&f=webp&q=90",
            name: "小米电视机",
          },
          {
            id: 0,
            src:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ac38f4abb13391b5f254cd47aebb55bb.png?thumb=1&w=40&h=40&f=webp&q=90",
            name: "小米电视机",
          },
          {
            id: 0,
            src:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ac38f4abb13391b5f254cd47aebb55bb.png?thumb=1&w=40&h=40&f=webp&q=90",
            name: "小米电视机",
          },
          {
            id: 0,
            src:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ac38f4abb13391b5f254cd47aebb55bb.png?thumb=1&w=40&h=40&f=webp&q=90",
            name: "小米电视机",
          },
          {
            id: 0,
            src:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ac38f4abb13391b5f254cd47aebb55bb.png?thumb=1&w=40&h=40&f=webp&q=90",
            name: "小米电视机",
          },
        ],
        [
          {
            id: 0,
            src:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ac38f4abb13391b5f254cd47aebb55bb.png?thumb=1&w=40&h=40&f=webp&q=90",
            name: "小米电视机",
          },
        ],
        [],
        [],
      ],
      // 视频列表
      videoList: [
        {
          src:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e25d81c4922fca5ebe51877717ef9b76.mp4",
        },
        {
          src:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/812358b69886e576c66a01f1f00affe9.mp4",
        },
      ],
      giveMivideo: "",
      miVideoOp: false,
    };
  },
  computed: {
    // swiper() {
    //   return this.$refs.mySwiper.$swiper;
    // },
  },
  mounted() {
    // console.log("Current Swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 1000, false);
  },
  methods: {
    showMivideo: function (src) {
      if (!this.miVideoOp) {
        this.miVideoOp = true;
      }
      this.giveMivideo = src;
    },
    stopOp: function (op) {
      op.stop();
      var that = this
      setTimeout(function () {
        that.miVideoOp = op.op
      }, 0);
    },
  },
};
</script>

<style>
.index {
  background: #f5f5f5;
}
.swiper-box {
  position: relative;
  height: 460px;
}
/* 轮播图 *************************************************/
.swiper-container {
  height: 460px;
}
.swiper-container img {
  width: 100%;
  height: 100%;
}
.swiper-button-prev,
.swiper-button-next {
  position: absolute;
  top: 50%;
  width: 40px;
  height: 65px;
  color: rgba(210, 210, 210, 0.9);
  --swiper-navigation-size: 30px; /* 设置按钮大小 */
  transform: translateY(-50%);
  z-index: 1;
}
.swiper-button-prev::after {
  margin-right: 4px;
}
.swiper-button-next::after {
  margin-left: 4px;
}
.swiper-button-prev {
  margin-left: 220px;
}
.swiper-button-next {
  margin-right: -10px;
}
.swiper-button-prev:hover,
.swiper-button-next:hover {
  color: #ffffff;
  background: rgba(118, 118, 118, 0.5);
}
.swiper-pagination {
  position: absolute;
  bottom: 30px;
  right: 30px;
  z-index: 1;
}
.swiper-pagination > span {
  width: 10px;
  height: 10px;
  margin: 2px;
  background-color: rgba(0, 0, 0, 0.4);
  border: 2px solid #fff;
  border-radius: 100%;
  outline-style: none;
}
.swiper-pagination > span:hover {
  background-color: #888888;
  opacity: 1;
}

/* 商品导航栏 ******************************************************/
.commodity {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  width: 230px;
  height: 420px;
  padding: 20px 0;
  background: rgba(105, 101, 101, 0.6);
}
.commodity-list {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.commodity-list > li {
  flex: 1;
  display: flex;
  position: relative;
  padding: 0 30px;
  align-items: center;
  color: #ffffff;
  font-size: 14px;
}
.commodity-list > li > .iconfont::after {
  content: "\e621";
  position: absolute;
  top: 50%;
  right: 22px;
  font-size: 15px;
  transform: translateY(-50%);
}
.commodity-list > li:hover {
  background-color: #ff6700;
}
/* 商品列表栏 ***************************************************/
.commodity-site {
  display: none;
  position: absolute;
  top: 0;
  left: 230px;
  z-index: 2;
  /* width: 995px; */
  height: 460px;
  background-color: #fff;
  max-width: 995px;
  overflow: hidden;
  box-shadow: 0 8px 16px rgb(0 0 0 / 18%);
}
.commodity-site > ul {
  width: 249px;
  height: 460px;
}
.commodity-site > ul > li {
  width: 238px;
  height: 65px;
  padding: 5px 0 5px 10px;
}
.commodity-site a {
  display: inline-block;
  margin: 13px 0 0 8px;
  color: red;
}
.commodity-site img {
  vertical-align: middle;
}
.commodity-list:hover + .commodity-site {
  display: flex;
}
.commodity-site:hover {
  display: flex;
}
/* 广告栏 **************************************************/
.column {
  height: 170px;
  margin-top: 10px;
}
.column-menu {
  display: flex;
  float: left;
  flex-wrap: wrap;
  width: 230px;
  height: 170px;
  background: #5f5750;
}
.column-menu > li {
  flex: 1;
  flex-basis: 56px;
  margin: 0 10px;
  border-bottom: 1px solid #665e57;
}
.column-menu > li > a {
  display: block;
  position: relative;
  width: 56px;
  text-align: center;
}
.column-menu > li > a::before {
  content: "";
  position: absolute;
  top: 0;
  left: 68px;
  width: 1px;
  height: 70px;
  background-color: #665e57;
}
.column-menu > li:nth-of-type(3n) > a::before {
  content: "";
  width: 0px;
}
.column-menu > li > a > i {
  display: block;
  margin-top: 10px;
  font-size: 34px;
  color: #fff;
  color: #888888;
  transition: all 0.3s;
}
.column-menu > li > a > span {
  display: block;
  margin-top: 10px;
  color: #888888;
  transition: all 0.3s;
}
.column-menu > li > a:hover > i,
.column-menu > li > a:hover > span {
  color: #fff;
}
.column-banner {
  display: flex;
  float: left;
  width: 995px;
  height: 170px;
}
.column-banner > li {
  flex: 1;
  margin-left: 10px;
}
.column-banner > li > img {
  width: 100%;
  height: 170px;
}
/* 内容主体 *********************************************/
.menu {
  width: 100%;
  background: #f5f5f5;
}
/* 小米秒杀 ***********************************/
.menu-seckill {
  height: 380px;
  margin-top: 30px;
}

.seckill-time {
  float: left;
  width: 234px;
  height: 320px;
  border-top: 1px solid #e53935;
  background: #f1eded;
}
.time-down {
  margin-top: 30px;
  text-align: center;
  color: #e53934;
  font-size: 28px;
}
.time-ico {
  display: block;
  margin-top: 10px;
  color: #e53934;
  font-size: 100px;
  text-align: center;
}
.time-end {
  display: block;
  margin-top: 10px;
  color: #6d6d6d;
  text-align: center;
  font-size: 16px;
}
.time-exact {
  margin-top: 22px;
  text-align: center;
}
.time-exact > span {
  display: inline-block;
  width: 46px;
  height: 46px;
  background: #605751;
  line-height: 46px;
  color: #fff;
  font-size: 25px;
}
.time-exact > b {
  font-size: 25px;
  color: #605751;
}
.swiper2-box {
  float: left;
  position: relative;
  width: 990px;
  height: 320px;
}
.swiper2-box > .swiper-container {
  height: 320px;
  margin-left: 10px;
}
.swiper2-box .swiper-slide {
  border-top: 1px solid;
}
.swiper2-box .swiper-slide:nth-child(5n-4) {
  border-top-color: #ffac13;
}
.swiper2-box .swiper-slide:nth-child(5n-3) {
  border-top-color: #83c44e;
}
.swiper2-box .swiper-slide:nth-child(5n-2) {
  border-top-color: #2196f3;
}
.swiper2-box .swiper-slide:nth-child(5n-1) {
  border-top-color: #e53935;
}
.swiper2-box .swiper-slide:nth-child(5n) {
  border-top-color: #00c0a5;
}
.swiper2-button-prev,
.swiper2-button-next {
  display: block;
  width: 40px;
  height: 24px;
  border: 1px solid #e0e0e0;
  text-align: center;
}
.swiper2-button-prev {
  position: absolute;
  top: -40px;
  right: 41px;
  line-height: 24px;
  transform: rotate(180deg);
}
.swiper2-button-next {
  position: absolute;
  top: -40px;
  right: 0px;
  line-height: 27px;
}
.swiper2-button-prev::after {
  display: inline-block;
  content: "\e621";
  font-size: 24px;
  color: #b0b0b0;
}
.swiper2-button-next::after {
  content: "\e621";
  display: inline-block;
  font-size: 24px;
  color: #b0b0b0;
}
.swiper2-button-next:hover::after,
.swiper2-button-prev:hover::after {
  color: #ff6a00;
}
/* banner_box **************************************************/
.banner_box {
  height: 120px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.banner_box > a > img {
  width: 1225px;
  height: 120px;
}
/* 手机区 ***********************************************************/
.miphone {
  height: 614px;
}
.miphone-brick {
  width: 1225px;
  height: 556px;
}
.brick-list:nth-child(1) {
  width: 234px;
  height: 532px;
  margin: 0;
}
.brick-list:nth-child(1) > a > img {
  width: 234px;
  height: 546px;
  margin: 0;
}
.brick-list > a > span {
  display: block;
  text-align: center;
}
.brick-list > a > span:nth-child(2) {
  font-size: 14px;
  color: #333;
}
.brick-list > a > span:nth-child(3) {
  color: #b0b0b0;
}
.brick-list > a > span:nth-child(4) {
  margin-top: 10px;
  color: #ff6a00;
  font-size: 14px;
}
.brick-list {
  float: left;
  width: 234px;
  height: 268px;
  margin: 0 0 10px 13px;
  background: #ffffff;
  transition: all 0.4s;
}
.brick-list > a > img {
  display: block;
  width: 160px;
  height: 160px;
  margin: 15px auto 0 auto;
}
.brick-list:hover {
  box-shadow: 0 15px 30px rgb(0 0 0 / 10%);
  transform: translate3d(0, -2px, 0);
}
/* 发布会视频 **********************************************/
.recall-conference {
  position: relative;
  height: 360px;
}
.conference-more {
  display: block;
  position: absolute;
  top: 16px;
  right: 0;
  height: 24px;
}
.conference-more:hover > .more-ico::before {
  background: #ff6700;
}
.conference-more:hover > .more-span {
  color: #ff6700;
}
.conference-more > .more-ico::before {
  content: "\e621";
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-left: 10px;
  border-radius: 20px;
  background: #b0b0b0;
  line-height: 20px;
  text-align: center;
  color: #fff;
  transition: all 0.3s;
}
.conference-more > .more-span {
  color: #000;
  font-size: 16px;
  transition: all 0.3s;
}
.conference-vd {
  display: flex;
  width: 1225px;
}
.vd-list {
  position: relative;
  flex: 1;
  height: 280px;
  margin-left: 10px;
  background: #fff;
  cursor: pointer;
  transition: all 0.3s;
}
.vd-list:hover {
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  transform: translate3d(0, -2px, 0);
}
.vd-list:first-child {
  margin: 0;
}

.vd-list-picture {
  height: 180px;
  width: 100%;
}
.vd-list-play {
  display: block;
  position: absolute;
  top: 142px;
  left: 14px;
  width: 30px;
  height: 20px;
  border: 2px solid #fff;
  border-radius: 12px;
  transition: all 0.3s;
}
.vd-list-play::after {
  content: "\e66e";
  position: absolute;
  top: 4px;
  left: 10px;
  font-size: 12px;
  color: #fff;
}
.vd-list-picture:hover + .vd-list-play {
  background: #ff6700;
  border: 2px solid #ff6700;
}
.vd-list-play:hover {
  background: #ff6700;
  border: 2px solid #ff6700;
}
.vd-list-title {
  margin-top: 20px;
  text-align: center;
}
.vd-list-desc {
  margin-top: 10px;
  color: #b0b0b0;
  text-align: center;
}
.recall-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: gray;
  opacity: 0.6;
  z-index: 99;
}
.mivideo-box {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
}
.mivideo-box-enter-active {
  animation: showRecallVid 0.8s 1;
}
.mivideo-box-leave-active {
  animation: showRecallVid 0.8s reverse;
}
.recall-mask-enter-active {
  animation: showMask 0.8s 1;
}
.recall-mask-leave-active {
  animation: showMask 0.8s reverse;
}
@keyframes showRecallVid {
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
}
@keyframes showMask {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.6;
  }
}
</style>