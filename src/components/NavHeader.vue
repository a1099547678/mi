<template>
  <div class="header">
    <!-- 顶部导航栏 -->
    <div class="nav">
      <div class="w nav-title">
        <a href="javascript:;">小米商城</a>
        <span></span>
        <a href="javascript:;">MiUi</a>
        <span></span>
        <a href="javascript:;">Iot</a>
        <span></span>
        <a href="javascript:;">云服务</a>
        <span></span>
        <a href="javascript:;">天星数科</a>
        <span></span>
        <a href="javascript:;">有品</a>
        <span></span>
        <a href="javascript:;">小爱开发平台</a>
        <span></span>
        <a href="javascript:;">企业团购</a>
        <span></span>
        <a href="javascript:;">资质证照</a>
        <span></span>
        <a href="javascript:;">协议规则</a>
        <span></span>
        <a href="javascript:;">下载app</a>
        <span></span>
        <a href="javascript:;">智慧能生活</a>
        <span></span>
        <a href="javascript:;">Select&nbsp;Location</a>
        <!-- 右边的4个 -->
        <a href="javascript:;" class="nav-title-shopping shopping">
          <i class="iconfont">&#xe600;</i>
          <span>购物车(0)</span>
        </a>
        <span></span>
        <a href="javascript:;">消息通知</a>
        <span></span>
        <a href="javascript:;">注册</a>
        <span></span>
        <a href="javascript:;">登录</a>
        <!-- 右边的4个 -->
      </div>
    </div>
    <!-- 顶部导航栏 -->
    <!-- 菜单 -->
    <div class="menu">
      <!-- 商品图片列表 -->
      <div
        @mouseenter="pull_MenuUnfoldImg($event)"
        ref="menuUnfoldImg"
        class="menu-unfoldImg"
      >
        <div class="w unfoldImg-list">
          <a
            :href="'/#/product' + item.categoryId"
            target="_blank"
            v-for="(item, index) in pulldata"
            :key="index"
          >
            <img :src="'http://localhost:3000' + item.img" alt="" /><br />
            <span>{{item.name == '' ? '查看全部':item.name}}</span
            ><br />
            <b>{{item.price == null ? '智能硬件':item.price + '元起'}}</b>
          </a>
        </div>
      </div>
      <!-- 商品图片列表 -->
      <div class="w menu-site">
        <a href="javascript:;" class="XmLogo XmLogo-move"></a>
        <div class="site-list">
          <a
            href="javascript:;"
            @mouseenter="pull_SiteList($event, index)"
            v-for="(item, index) in nav"
            :key="index"
            >{{ item.title }}</a
          >
        </div>
        <div class="site-seekBox">
          <input type="text" placeholder="耳机" />
          <a href="javascript:;"><i class="iconfont">&#xe623;</i></a>
        </div>
      </div>
    </div>
    <!-- 菜单 -->
  </div>
</template>

<script>
export default {
  name: "nav-header",
  data() {
    return {
      nav: [
        {
          title: "小米手机",
          src: "",
        },
        {
          title: "Redmi红米",
          src: "",
        },
        {
          title: "电视",
          src: "",
        },
        {
          title: "笔记本",
          src: "",
        },
        {
          title: "家电",
          src: "",
        },
        {
          title: "路由器",
          src: "",
        },
        {
          title: "智能硬件",
          src: "",
        },
        {
          title: "服务",
          src: "",
        },
        {
          title: "社区",
          src: "",
        },
      ],
      // 下拉图片数据
      ProductList: {
        XmList: [],
        RedmiList: [],
        TelevisionList: [],
        JotterList: [],
        AppliancesList: [],
        WifiList: [],
        PartsList:[]
      },
      // 下拉图片数据
      pulldata: [],
    };
  },
  mounted() {
    this.getXmPhoneList("xiaomi", "XmList", 6);
    this.getXmPhoneList("redmi", "RedmiList", 6);
    this.getXmPhoneList("television", "TelevisionList", 6);
    this.getXmPhoneList("jotter", "JotterList", 6);
    this.getXmPhoneList("appliances", "AppliancesList", 6);
    this.getXmPhoneList("wifi", "WifiList", 6);
    this.getXmPhoneList("parts", "PartsList", 6);
  },
  methods: {
    // 获取小米手机商品图
    getXmPhoneList(brand, saveDate, ending) {
      this.axios
        .get("http://localhost:3000/product/" + brand, {
          params: {
            begin: 0,
            ending: ending,
          },
        })
        .then((response) => {
          this.ProductList[saveDate] = response.data.data;
          // console.log(this.ProductList[saveDate]);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // 商品下拉图 a标签触发
    pull_SiteList(event,index) {
      var menuUnfoldImg = this.$refs.menuUnfoldImg;
          menuUnfoldImg.style.height = 228 + "px";
      event.target.onmouseleave = function () {
          menuUnfoldImg.style.height = 0;
        };
        // 渲染数据
         switch (index) {
        case 0:
          this.pulldata = this.ProductList.XmList;
          break;
        case 1:
          this.pulldata = this.ProductList.RedmiList;
          break;
        case 2:
          this.pulldata = this.ProductList.TelevisionList;
          break;
        case 3:
          this.pulldata = this.ProductList.JotterList;
          break;
        case 4:
          this.pulldata = this.ProductList.AppliancesList;
          break;
        case 5:
          this.pulldata = this.ProductList.WifiList;
          break;
        case 6:
          this.pulldata = this.ProductList.PartsList;
          break;
        case 7:
          menuUnfoldImg.style.height = 0;
          break;
        default :
          menuUnfoldImg.style.height = 0;
      }
      // console.log(index);
    },
    // 下拉商品列表
    pull_MenuUnfoldImg(event) {
      event.target.style.height = 228 + "px";
      event.target.onmouseleave = function () {
        this.style.height = 0;
      };
    },
  },
};
</script>

<style>
/* nav-title **********************************/
.header {
  background: #ffffff;
}
.nav {
  background: #333333;
}
.nav-title {
  height: 40px;
}
.nav-title > a {
  display: block;
  float: left;
  line-height: 40px;
  color: #b0b0b0;
}
.nav-title > a:hover {
  color: #ffffff;
}
.nav-title > span {
  float: left;
  width: 1px;
  height: 14px;
  margin: 14px 8px;
  background: #4c4c4c;
}
.nav-title > :nth-last-child(-n + 7) {
  float: right;
}
.nav-title-shopping {
  position: relative;
  width: 120px;
  background: #424242;
}
.nav-title-shopping:hover {
  background-color: #ffffff;
}
.nav-title-shopping > i {
  position: absolute;
  top: -50%;
  left: 7px;
  font-size: 22px;
  transform: translateY(50%);
}
.nav-title-shopping > span {
  margin-left: 36px;
}
.shopping:hover > :nth-child(n + 1) {
  color: #ff6700;
}
/* nav-site *********************************************/
.menu {
  position: relative;
  width: 100%;
}
.menu-site {
  position: relative;
  height: 100px;
}
.XmLogo {
  display: block;
  float: left;
  position: absolute;
  top: 50%;
  width: 55px;
  height: 55px;
  background: #ff6700 url("/imgs/mihome.webp") no-repeat -55px 0;
  transform: translateY(-50%);
  transition: all 0.3s;
}
.XmLogo-move:hover {
  background-position-x: 0px;
}
.site-list {
  position: absolute;
  left: 185px;
}
.site-list > a {
  display: block;
  float: left;
  height: 100px;
  padding-left: 18px;
  line-height: 100px;
  align-content: center;
  font-size: 16px;
  color: #333333;
}
.site-list > a:hover {
  color: #ff6700;
}
.site-seekBox {
  position: absolute;
  top: 25px;
  right: 0;
  width: 300px;
  height: 50px;
}
.site-seekBox > input {
  width: 248px;
  height: 48px;
  border: 1px solid #e0e0e0;
  font-size: 17px;
  text-indent: 14px;
  color: #757575;
}
.site-seekBox > a {
  display: block;
  float: right;
  width: 49px;
  height: 48px;
  border: 1px solid #e0e0e0;
  border-left: none;
  text-align: center;
  line-height: 50px;
}
.site-seekBox > a > i {
  color: #616161;
  font-size: 26px;
}
.site-seekBox > a:hover {
  background-color: #ff6700;
}
.site-seekBox > a:hover > i {
  color: #ffffff;
}
.site-seekBox:hover > input,
.site-seekBox:hover > a {
  border-color: #b0b0b0;
}
.site-seekBox > input:focus,
.site-seekBox > input:focus + a {
  border-color: #ff6700;
}
/* 下拉图片列表 ******************************************/
.menu-unfoldImg {
  overflow: hidden;
  position: absolute;
  top: 100px;
  width: 100%;
  /* height: 228px; */
  height: 0;
  background: #ffffff;
  border-top: 1px solid #e0e0e0;
  box-shadow: 0 3px 12px #d6d6d6;
  transition: all 0.5s;
  z-index: 1;
}
.unfoldImg-list {
  display: flex;
}
.unfoldImg-list > a {
  position: relative;
  flex: 1;
  color: #333333;
  text-align: center;
}
.unfoldImg-list > a::before {
  position: absolute;
  left: 0;
  top: 46px;
  z-index: 1;
  width: 1px;
  height: 100px;
  content: "";
  background-color: #e0e0e0;
}
.unfoldImg-list > a:first-of-type::before {
  content: "";
  width: 0;
}
.unfoldImg-list > a > img {
  margin-top: 35px;
  width: 160px;
  height: 110px;
}

.unfoldImg-list > a > b {
  color: #ff6700;
  line-height: 25px;
}
</style>