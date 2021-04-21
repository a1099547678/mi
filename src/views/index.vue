<template>
  <div class="index">
    <!-- 轮播图部分 -->
    <div class="w swiper-box">
      <swiper ref="mySwiper" :options="swiperOptions" class="w">
        <swiper-slide v-for="(item, index) in SlideImg" :key="index"
          ><a :href="item.src"
            ><img
              :src="item.src"
              alt=""
              class="swiper-no-swiping"
              style="width: 1226px; height: 460px" /></a
        ></swiper-slide>
      </swiper>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      <!-- 轮播图部分 -->
      <!-- 商品导航栏 -->
      <div class="commodity">
        <ul class="commodity-list" @mouseenter="commodityShow">
          <li>小米&#160;手机<i class="iconfont"></i></li>
          <li>电视&#160;盒子<i class="iconfont"></i></li>
          <li>笔记本&#160;显示器<i class="iconfont"></i></li>
          <li>家电&#160;插线板<i class="iconfont"></i></li>
          <li>红米&#160;手机<i class="iconfont"></i></li>
          <li>智能&#160;路由器<i class="iconfont"></i></li>
          <li>电源&#160;配件<i class="iconfont"></i></li>
          <li>健康&#160;儿童<i class="iconfont"></i></li>
          <li>耳机&#160;音箱<i class="iconfont"></i></li>
          <li>生活&#160;箱包<i class="iconfont"></i></li>
        </ul>
        <!-- 商品列表栏 -->
        <div class="commodity-site">
          <ul v-for="(itemouter, indexouter) in SiteList" :key="indexouter">
            <li v-for="(item, index) in itemouter" :key="index">
              <a href="javascript:;">
                <img v-lazy="'https://www.wszxd.com' + item.img" alt="" />
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
            v-lazy="'https://www.wszxd.com/public/banner/5d4298059889417157e8492750328492.webp'"
            alt=""
          />
        </li>
        <li>
          <img
            v-lazy="'https://www.wszxd.com/public/banner/793913688bfaee26b755a0b0cc8575fd.webp'"
            alt=""
          />
        </li>
        <li>
          <img
            v-lazy="'https://www.wszxd.com/public/banner/b30177d629bfbe2fb42251c1b8538f7b.webp'"
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
          <div class="time-end">本场已结束</div>
          <div class="time-exact">
            <span>00</span>
            <b>:</b>
            <span>00</span>
            <b>:</b>
            <span>00</span>
          </div>
        </div>
        <div class="swiper2-box">
          <swiper ref="mySwiper2" :options="swiperOptions2">
            <swiper-slide
              class="noSwiping"
              v-for="item in seckillList"
              :key="item.id"
            >
              <a href="javascript:;" class="noSwiping-shopbox">
                <img
                  v-lazy="'https://www.wszxd.com' + item.img"
                  alt=""
                  class="noSwiping-shopbox-imgssize"
                />
                <p class="noSwiping-shopbox-pitem1">{{ item.name }}</p>
                <p class="noSwiping-shopbox-pitem2">{{ item.intro }}</p>
                <p class="noSwiping-shopbox-pitem3">
                  {{ item.price }}元&#160;&#160;<s class="color"
                    >{{ item.worn_price }}元</s
                  >
                </p>
              </a>
            </swiper-slide>
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
            v-lazy="'https://www.wszxd.com/public/banner/431e5fd6bfd1b67d096928248be18303.webp'"
            alt=""
          />
        </a>
      </div>
      <!-- banner_box -->
      <!-- 手机区 -->
      <div class="w miphone">
        <h2>手机</h2>
        <div class="miphone-more">
          <a href="javascript:;" class="miphone-more-atim">
          <span class="atim-span">查看全部</span>
          <i class="iconfont atim-ico"></i>
        </a>
        </div>
        <ul class="miphone-brick">
          <li class="brick-list">
            <a href="">
              <img
                v-lazy="'https://www.wszxd.com/public/banner/c583f2edc613f1be20fa415910b13ce3.webp'"
                alt=""
              />
            </a>
          </li>
          <li class="brick-list" v-for="item in phoneList" :key="item.id">
            <a href="">
              <img v-lazy="'https://www.wszxd.com' + item.img" alt="" />
              <span>{{ item.name }}</span>
              <span>{{ item.intro }}</span>
              <span>{{ item.price }}元起</span>
            </a>
          </li>
        </ul>
      </div>
      <!-- 手机区 -->
      <!-- banner_box 1-->
      <div class="w banner_box">
        <a href="javascript:;">
          <img
            v-lazy="'https://www.wszxd.com/public/banner/41d16e66381cfeda7b6b39ab67678d5e.webp'"
            alt=""
          />
        </a>
      </div>
      <!-- banner_box 1-->
    </div>
    <!-- 商品展示柜 1-->
    <div>
      <transition name="show-index-showcase">
        <index-showcase
          :msg="shopDataOne"
          v-if="shopDataOne.hotList !== ''"
        ></index-showcase>
      </transition>
    </div>
    <!-- 商品展示柜 1-->
    <!-- banner_box 2-->
    <div class="w banner_box">
      <a href="javascript:;">
        <img
          v-lazy="'https://www.wszxd.com/public/banner/59e8fc8ba9718c266882719fb4bbcedd.webp'"
          alt=""
        />
      </a>
    </div>
    <!-- banner_box 2-->
    <!-- 商品展示柜 2-->
    <div>
      <index-showcase
        :msg="shopDataTwo"
        v-if="shopDataTwo.hotList !== ''"
      ></index-showcase>
    </div>
    <!-- 商品展示柜 2-->
    <!-- banner_box 3-->
    <div class="w banner_box">
      <a href="javascript:;">
        <img
          v-lazy="'https://www.wszxd.com/public/banner/88e35cffc82cd98cd53172460067af17.webp'"
          alt=""
        />
      </a>
    </div>
    <!-- banner_box 3-->
    <!-- 商品展示柜 3-->
    <div>
      <index-showcase
        :msg="shopDataThree"
        v-if="shopDataThree.hotList !== ''"
      ></index-showcase>
    </div>
    <!-- 商品展示柜 3-->
    <!-- banner_box 4-->
    <div class="w banner_box">
      <a href="javascript:;">
        <img
          v-lazy="'https://www.wszxd.com/public/banner/431e5fd6bfd1b67d096928248be18303.webp'"
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
            <img v-lazy="item.img" alt="" class="vd-list-picture" />
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
        slidesPerGroup: 3,
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
      // 商品列表展示数据
      SiteList: [],
      // 商品列表图片全部数据
      SiteListAll: {
        xiaomiList: [],
        redmiList: [],
        tvList: [],
        bookList: [],
        wiringList: [],
        redmiList: [],
        wifiList: [],
        partsList: [],
        rimproductList: [],
        headsetList: [],
        liveboxList: [],
      },
      // 小米秒杀数据
      seckillList: "",
      // 手机区数据
      phoneList: "",
      // 视频列表
      videoList: [
        {
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2fd26bb99b723337a2f8eaba84f7d5bb.jpg?thumb=1&w=296&h=180&f=webp&q=90",
          src:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e25d81c4922fca5ebe51877717ef9b76.mp4",
        },
        {
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/101b19aca4bb489bcef0f503e44ec866.jpg?thumb=1&w=296&h=180&f=webp&q=90",
          src:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/11c70c96529b6e6938567ec1aa0910e0.mp4",
        },
        {
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/96563e75833ba4563bd469dd28203b09.jpg?thumb=1&w=296&h=180&f=webp&q=90",
          src:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7cdabcaa763392c86b944eaf4e68d6a3.mp4",
        },
        {
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e74c4ff741bcdfc5b28a48a43e4edc6d.jpg?thumb=1&w=266&h=162&f=webp&q=90",
          src:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/812358b69886e576c66a01f1f00affe9.mp4",
        },
      ],
      // 商品展示柜1数据
      shopDataOne: {
        classBox: "家电",
        title: [
          {
            title: "热门",
          },
          {
            title: "电影电视",
          },
        ],
        banner: [
          {
            img:
              "https://www.wszxd.com/public/banner/116fc43816b87192be4e67cf762e8da5.webp",
          },
          {
            img:
              "https://www.wszxd.com/public/banner/dfbdabe36b2d630d57a015e6fb5eb3ea.webp",
          },
        ],
        shopEnd: {
          hotshopEnd: "",
          oneshopEnd: "",
        },
        hotList: "",
        oneList: [],
      },
      // 商品展示柜2数据
      shopDataTwo: {
        classBox: "生活",
        title: [
          {
            title: "热门",
          },
          {
            title: "配件",
          },
        ],
        banner: [
          {
            img:
              "https://www.wszxd.com/public/banner/9f64bbd58c3f5001bdf0688894f22cb6.webp",
          },
          {
            img:
              "https://www.wszxd.com/public/banner/9f6c89cf21efc23799f6130224cef007.webp",
          },
        ],
        shopEnd: {
          hotshopEnd: "",
          oneshopEnd: "",
        },
        hotList: "",
        oneList: [],
      },
      // 商品展示柜3数据
      shopDataThree: {
        classBox: "搭配",
        title: [
          {
            title: "热门",
          },
          {
            title: "智能",
          },
          {
            title: "路由器",
          },
        ],
        banner: [
          {
            img:
              "https://www.wszxd.com/public/banner/a660ce095e8f553a9ed1515265f4e9fc.webp",
          },
          {
            img:
              "https://www.wszxd.com/public/banner/6874615b3c50e837ffe532eb6ea4ef1a.webp",
          },
        ],
        shopEnd: {
          hotshopEnd: "",
          oneshopEnd: "",
          twoshopEnd: "",
        },
        hotList: "",
        oneList: [],
        twoList: [],
      },
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
    // 获取小米手机数据
    this.axios
      .get("https://www.wszxd.com/product/xiaomi", {
        params: {
          begin: 0,
          ending: 8,
        },
      })
      .then((response) => {
        // 数据传到  轮播图上的  导航栏
        this.SiteListAll.xiaomiList = this.group(response.data.data, 6);
        // 数据传到  小米秒杀
        this.seckillList = response.data.data;
        // 数据传到  手机区
        this.phoneList = response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
    // 获取电视数据
    this.axios
      .get("https://www.wszxd.com/product/television", {
        params: {
          begin: 0,
          ending: 8,
        },
      })
      .then((response) => {
        // 数据传到  轮播图上的  导航栏
        this.SiteListAll.tvList = this.group(response.data.data, 6);
        // 数据传到 indexShowcase组件 的 商品栏
        // 商品栏1的 one
        this.shopDataOne.oneList = response.data.data.slice(0, 8);
        this.shopDataOne.shopEnd.oneshopEnd =
          response.data.data[response.data.data.length - 1];
      })
      .catch((error) => {
        console.log(error);
      });
    // 获取笔记本数据
    this.axios
      .get("https://www.wszxd.com/product/jotter", {
        params: {
          begin: 0,
          ending: 6,
        },
      })
      .then((response) => {
        // 数据传到  轮播图上的  导航栏
        this.SiteListAll.bookList = this.group(response.data.data, 6);
      })
      .catch((error) => {
        console.log(error);
      });
    // 获取 家电 数据
    this.axios
      .get("https://www.wszxd.com/product/appliances", {
        params: {
          begin: 0,
          ending: 6,
        },
      })
      .then((response) => {
        // 数据传到  轮播图上的  导航栏
        this.SiteListAll.wiringList = this.group(response.data.data, 6);
        // 数据传到 indexShowcase组件 的 商品栏
        // 商品栏1的hot
        this.shopDataOne.hotList = response.data.data.slice(0, 6);
        this.shopDataOne.shopEnd.hotshopEnd =
          response.data.data[response.data.data.length - 1];
      })
      .catch((error) => {
        console.log(error);
      });
    // 获取红米手机数据
    this.axios
      .get("https://www.wszxd.com/product/redmi", {
        params: {
          begin: 0,
          ending: 6,
        },
      })
      .then((response) => {
        // 数据传到  轮播图上的  导航栏
        this.SiteListAll.redmiList = this.group(response.data.data, 6);
      })
      .catch((error) => {
        console.log(error);
      });
    // 获取 路由器 数据
    this.axios
      .get("https://www.wszxd.com/product/wifi", {
        params: {
          begin: 0,
          ending: 6,
        },
      })
      .then((response) => {
        // 数据传到  轮播图上的  导航栏
        this.SiteListAll.wifiList = this.group(response.data.data, 6);
        // 商品栏3的 two
        this.shopDataThree.twoList = response.data.data.slice(0, 7);
        this.shopDataThree.shopEnd.twoshopEnd =
          response.data.data[response.data.data.length - 1];
      })
      .catch((error) => {
        console.log(error);
      });
    // 获取 电源配件 数据
    this.axios
      .get("https://www.wszxd.com/product/parts", {
        params: {
          begin: 0,
          ending: 6,
        },
      })
      .then((response) => {
        // 数据传到  轮播图上的  导航栏
        this.SiteListAll.partsList = this.group(response.data.data, 5);
        // 商品栏3的 one
        this.shopDataThree.oneList = response.data.data.slice(0, 7);
        this.shopDataThree.shopEnd.oneshopEnd =
          response.data.data[response.data.data.length - 1];
      })
      .catch((error) => {
        console.log(error);
      });
    // 获取 周边产品 数据
    this.axios
      .get("https://www.wszxd.com/product/rimproduct", {
        params: {
          begin: 0,
          ending: 8,
        },
      })
      .then((response) => {
        // 数据传到  轮播图上的  导航栏
        this.SiteListAll.rimproductList = this.group(response.data.data, 6);
        // 数据传到 indexShowcase组件 的 商品栏
        // 商品栏2的hot
        this.shopDataTwo.hotList = response.data.data.slice(0, 7);
        this.shopDataTwo.shopEnd.hotshopEnd =
          response.data.data[response.data.data.length - 1];
      })
      .catch((error) => {
        console.log(error);
      });
    // 获取 耳机音箱 数据
    this.axios
      .get("https://www.wszxd.com/product/headset", {
        params: {
          begin: 0,
          ending: 8,
        },
      })
      .then((response) => {
        // 数据传到  轮播图上的  导航栏
        this.SiteListAll.headsetList = this.group(response.data.data, 6);
        // 商品栏3的 hot
        this.shopDataThree.hotList = response.data.data.slice(0, 7);
        this.shopDataThree.shopEnd.hotshopEnd =
          response.data.data[response.data.data.length - 1];
      })
      .catch((error) => {
        console.log(error);
      });
    // 获取 生活箱包 数据
    this.axios
      .get("https://www.wszxd.com/product/livebox", {
        params: {
          begin: 0,
          ending: 8,
        },
      })
      .then((response) => {
        // 数据传到  轮播图上的  导航栏
        this.SiteListAll.liveboxList = this.group(response.data.data, 6);
        // 商品栏2的 one
        this.shopDataTwo.oneList = response.data.data.slice(0, 7);
        this.shopDataTwo.shopEnd.oneshopEnd =
          response.data.data[response.data.data.length - 1];
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    // 数组分组
    group: function (arr, num) {
      var basics = num;
      var data = [];
      if (arr.length >= basics) {
        var g = 1;
        for (let i = 0; i <= arr.length / basics; i++) {
          var temp = arr.slice(basics * i, basics * g);
          g++;
          data.push(temp);
          if (data[data.length - 1].length === 0) {
            data.pop();
          }
        }
        return data;
      } else {
        console.log("数据不够，太短了");
      }
    },
    showMivideo: function (src) {
      if (!this.miVideoOp) {
        this.miVideoOp = true;
      }
      this.giveMivideo = src;
    },
    stopOp: function (op) {
      op.stop();
      var that = this;
      setTimeout(function () {
        that.miVideoOp = op.op;
      }, 0);
    },
    commodityShow: function () {
      var commodityList = document.querySelectorAll(".commodity-list li");
      var that = this;
      commodityList.forEach((item, i) => {
        item.setAttribute("data-index", i);
        item.onmouseenter = function () {
          var index = this.getAttribute("data-index");
          if (index == 0) {
            that.SiteList = that.SiteListAll.xiaomiList;
          } else if (index == 1) {
            that.SiteList = that.SiteListAll.tvList;
          } else if (index == 2) {
            that.SiteList = that.SiteListAll.bookList;
          } else if (index == 3) {
            that.SiteList = that.SiteListAll.wiringList;
          } else if (index == 4) {
            that.SiteList = that.SiteListAll.redmiList;
          } else if (index == 5) {
            that.SiteList = that.SiteListAll.wifiList;
          } else if (index == 6) {
            that.SiteList = that.SiteListAll.partsList;
          } else if (index == 7) {
            that.SiteList = that.SiteListAll.rimproductList;
          } else if (index == 8) {
            that.SiteList = that.SiteListAll.headsetList;
          } else {
            that.SiteList = that.SiteListAll.liveboxList;
          }
        };
      });
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
  color: #000;
}
.commodity-site a:hover {
  color: #ff6700;
}
.commodity-site img {
  width: 40px;
  height: 40px;
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
.noSwiping {
  background: #fafafa;
}
.noSwiping-shopbox-imgssize {
  display: block;
  width: 150px;
  height: 120px;
  margin: 54px auto 0 auto;
}
.noSwiping-shopbox-pitem1 {
  margin-top: 36px;
  font-size: 15px;
  color: #000;
  text-align: center;
}
.noSwiping-shopbox-pitem2 {
  color: #b0b0b0;
  font-size: 10px;
  text-align: center;
}
.noSwiping-shopbox-pitem3 {
  margin-top: 10px;
  color: #ff6700;
  font-size: 15px;
  text-align: center;
}
.noSwiping-shopbox-pitem3 > .color {
  color: #b0b0b0;
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
.miphone-more{
  position: relative;
}
.miphone-more-atim{
  display: block;
  position: absolute;
  top: -36px;
  right: 0;
}
.miphone-more-atim:hover>.atim-span{
  color: #ff6700;
}
.miphone-more-atim:hover>.atim-ico::before{
  background-color: #ff6700;
}

.miphone-more-atim>.atim-span{
  font-size: 12px;
  color: #000;
  transition: all 0.3s;
}

.miphone-more-atim>.atim-ico::before {
  content: "\e621";
  width: 16px;
  height: 16px;
  margin-left: 8px;
  border-radius: 8px;
  background: #b0b0b0;
  text-align: center;
  vertical-align: middle;
  color: #fff;
  transition: all 0.3s;
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
  width: 200px;
  height: 148px;
  margin: 28px auto 0 auto;
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
/* indexShowcase动画 *******/
.show-index-showcase-enter-active {
  animation: qqq 0.8s 1;
}
.show-index-showcase-leave-active {
  animation: showMask 0.8s reverse;
}
@keyframes qqq {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>