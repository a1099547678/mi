<template>
  <div>
    <div class="w cabinet">
      <h2>{{ msg.classBox }}</h2>
      <ul class="cabinet-rbox">
        <li
          class="cabinet-rbox-list"
          v-for="(item, index) in msg.banner"
          :key="index"
        >
          <a href="">
            <img v-lazy="item.img" alt="" class="rbox-list-imgs" />
          </a>
        </li>
      </ul>
      <ul class="cabinet-lbox">
        <ul class="cabinet-lbox-page">
          <li
            v-for="(item, index) in msg.title"
            :class="[
              tabnum == index ? 'lbox-page-list-hover' : '',
              'lbox-page-list',
            ]"
            :key="index"
            @mouseenter="cutTab($event, index)"
          >
            {{ item.title }}
          </li>
        </ul>
        <li
          class="cabinet-lbox-list"
          v-for="(item, index) in showList"
          :key="index"
        >
          <a href="">
            <img
              v-lazy="'https://www.wszxd.com' + item.img"
              alt=""
              class="lbox-list-imgs"
            />
            <p class="lbox-list-ps">{{ item.name }}</p>
            <p class="lbox-list-ps">{{item.intro}}</p>
            <p class="lbox-list-ps">{{ item.price }}元 <s>{{item.worn_price == null ? '' : item.worn_price + '元'}}</s></p>
          </a>
        </li>
        <li class="cabinet-lbox-list">
          <a href="">
            <p class="list-title">{{ shopEnd.name }}</p>
            <p class="list-price">{{ shopEnd.price }}元</p>
            <img :src="'https://www.wszxd.com' + shopEnd.img" alt="" />
          </a>
        </li>
        <li class="cabinet-lbox-list">
          <a href="">
            <div class="list-more">
              <p class="list-more-ps">浏览更多</p>
              <p class="list-more-hot">热门</p>
              <div class="list-more-arr">
                <i class="iconfont">&#xe621;</i>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "index-showcase",
  props: ["msg"],
  data() {
    return {
      tabnum: 0,
      showList: [],
      shopEnd: "",
    };
  },
  created() {},
  mounted() {
    this.showList = this.msg.hotList;
    if (this.msg.hotList !== "") {
      this.shopEnd = this.msg.shopEnd.hotshopEnd;
    }
  },
  watch: {},
  methods: {
    // tab栏切换
    cutTab: function (event, index) {
      this.tabnum = index;
      if (index == 0) {
        this.showList = this.msg.hotList;
        this.shopEnd = this.msg.shopEnd.hotshopEnd;
      } else if (index == 1) {
        this.showList = this.msg.oneList;
        this.shopEnd = this.msg.shopEnd.oneshopEnd;
      }else if (index == 2) {
        this.showList = this.msg.twoList;
        this.shopEnd = this.msg.shopEnd.twoshopEnd;
      }
    },
  },
};
</script>
<style>
.cabinet {
  height: 610px;
}
.cabinet-rbox {
  float: left;
}
.cabinet-lbox {
  float: left;
  position: relative;
  width: 990px;
}
.cabinet-lbox-page {
  position: absolute;
  top: -50px;
  right: 0;
  height: 40px;
}
.lbox-page-list {
  float: left;
  margin-left: 10px;
  border-bottom: none;
  line-height: 40px;
  font-size: 16px;
  color: #333;
  cursor: pointer;
  transition: all 0.2s;
}
/* .lbox-page-list:hover {
  border-bottom: 3px solid #ff6700;
  color: #ff6700;
} */
.lbox-page-list-hover {
  border-bottom: 3px solid #ff6700;
  color: #ff6700;
}
.cabinet-rbox-list {
  width: 234px;
  height: 270px;
  margin-bottom: 10px;
  background: #fff;
  transition: all 0.3s;
}
.cabinet-rbox-list:hover {
  box-shadow: 0 15px 30px rgb(0 0 0 / 10%);
  transform: translate3d(0, -2px, 0);
}
.rbox-list-imgs {
  width: 234px;
  height: 270px;
}
.lbox-list-imgs {
  display: block;
  width: 160px;
  height: 110px;
  margin: 30px auto 0 auto;
}
.lbox-list-ps {
  text-align: center;
}
.lbox-list-ps:nth-of-type(1) {
  margin-top: 20px;
  color: #333333;
  font-size: 14px;
}
.lbox-list-ps:nth-of-type(2) {
  color: #b0b0b0;
  font-size: 10px;
}
.lbox-list-ps:nth-of-type(3) {
  margin-top: 25px;
  color: #ff6700;
  font-size: 14px;
}
.lbox-list-ps:nth-of-type(3) > s {
  margin-top: 25px;
  color: #b0b0b0;
  font-size: 10px;
}
.cabinet-lbox-list {
  float: left;
  width: 237px;
  height: 270px;
  background: #fff;
  margin: 0 0 10px 10px;
  transition: all 0.3s;
}
.cabinet-lbox-list:hover {
  box-shadow: 0 15px 30px rgb(0 0 0 / 10%);
  transform: translate3d(0, -2px, 0);
}
.cabinet-lbox-list:nth-last-child(-n + 2) {
  position: relative;
  margin-bottom: 10px;
  width: 234px;
  height: 130px;
  background: #fff;
}
.cabinet-lbox-list:nth-last-child(2) > a > img {
  display: block;
  position: absolute;
  top: 20px;
  left: 150px;
  width: 80px;
  height: 80px;
}
.cabinet-lbox-list:nth-last-child(2) .list-title {
  position: absolute;
  top: 40px;
  left: 38px;
  width: 100px;
  color: #333333;
  font-size: 14px;
}
.cabinet-lbox-list:nth-last-child(2) .list-price {
  position: absolute;
  top: 62px;
  left: 38px;
  line-height: 22px;
  font-size: 14px;
  color: #ff6700;
}
.cabinet-lbox-list .list-more {
  height: 50px;
  padding: 40px 36px;
}
.cabinet-lbox-list .list-more-ps {
  font-size: 18px;
  color: #333;
}
.cabinet-lbox-list .list-more-hot {
  color: #b0b0b0;
}
.cabinet-lbox-list .list-more-arr {
  float: right;
  width: 40px;
  height: 40px;
  margin-top: -46px;
  border: 6px solid #ff6700;
  border-radius: 100%;
}
.cabinet-lbox-list .list-more-arr > i {
  margin-left: 2px;
  font-size: 40px;
  color: #ff6700;
}
</style>