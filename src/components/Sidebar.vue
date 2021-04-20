<template>
  <div>
    <div class="sidebar">
      <a href="javascript:;" class="sidebar-item">
        <i class="iconfont">&#xe622;</i>
        <span class="item-title">手机App</span>
      </a>
      <a href="javascript:;" class="sidebar-item">
        <i class="iconfont">&#xe630;</i>
        <span class="item-title">个人中心</span>
      </a>
      <a href="javascript:;" class="sidebar-item">
        <i class="iconfont">&#xe659;</i>
        <span class="item-title">售后服务</span>
      </a>
      <a href="javascript:;" class="sidebar-item">
        <i class="iconfont">&#xe615;</i>
        <span class="item-title">人工客服</span>
      </a>
      <a href="javascript:;" class="sidebar-item">
        <i class="iconfont">&#xe612;</i>
        <span class="item-title">购物车</span>
      </a>
    </div>
    <div class="backtop" v-if="flag" @click="backtop">
      <a href="javascript:;" class="backtop-item">
        <i class="iconfont">&#xe633;</i>
        <span class="item-title">回顶部</span>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "side-bar",
  data() {
    return {
      flag: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", () => {
      //  console.log(document.documentElement.scrollTop);
      //获取页面滚动的高度
      let scrollTop = document.documentElement.scrollTop;
      if (scrollTop > 600) {
        this.flag = true;
      } else {
        this.flag = false;
      }
    });
  },
  methods:{
      backtop(){
          document.documentElement.scrollTop = 0;
      }
  }
};
</script>
<style scoped>
.sidebar {
  position: fixed;
  bottom: 16%;
  right: 0;
}
.sidebar-item {
  display: block;
  width: 80px;
  height: 80px;
  background-color: #fff;
  border: 1px solid #f5f5f5;
  color: #999;
  cursor: pointer;
}
.sidebar-item:hover {
  color: #ec6616;
}
.sidebar-item > .iconfont {
  display: block;
  margin: 10px 0 5px 0;
  font-size: 34px;
  text-align: center;
}
.sidebar-item > .item-title {
  display: block;
  text-align: center;
}
.backtop {
  position: fixed;
  bottom: 60px;
  right: 0;
}
.backtop-item {
  display: block;
  width: 80px;
  height: 80px;
  background-color: #fff;
  border: 1px solid #f5f5f5;
  color: #999;
  cursor: pointer;
}
.backtop-item > .iconfont {
  display: block;
  margin: 10px 0 5px 0;
  font-size: 34px;
  text-align: center;
}
.backtop-item > .item-title {
  display: block;
  text-align: center;
}
.backtop-item:hover {
  color: #ec6616;
}
</style>>
