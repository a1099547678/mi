<template>
  <div class="mi-vid">
    <div class="vid-title">
      Redmi 10X系列发布会
      <div class="iconfont vid-title-shut" @click="vidShow"></div>
    </div>
    <div class="vid-details">
      <video
        class="details-content"
        autoplay
        ref="detailsContent"
        @click="widgetPlay"
        @timeupdate="videoStart"
        @ended="restartPlay"
      >
        <source
          :src='msg'
          type="video/mp4"
        />
      </video>
      <div class="details-bigplay" v-if="playOp" @click="widgetPlay">
        <i class="iconfont bigplay-ico"></i>
      </div>
      <div class="details-widget">
        <div class="widget-bar">
          <div class="bar-maxlong" ref="barMaxlong" @click="skipBar">
            <div class="maxlong-golong" ref="maxlongGolong"></div>
            <div class="maxlong-dot"></div>
          </div>
        </div>
        <div class="widget-play" @click="widgetPlay">
          <transition name="icodh">
            <i class="iconfont play-ico" v-if="playOp">&#xe66e;</i>
          </transition>
          <transition name="icodh">
            <i class="iconfont play-ico" v-if="!playOp">&#xe76a;</i>
          </transition>
        </div>
        <div class="widget-time">
          <span class="time-span">{{ nowTime }}</span>
          <span class="time-span">/</span>
          <span class="time-span">{{ totalTime }}</span>
        </div>
        <div
          class="iconfont widget-whole"
          ref="widgetWhole"
          @click="fullBtn"
        ></div>
        <div class="widget-volume">
          <i :class="[muteOp ? 'volume-ico-mute' : 'volume-ico','iconfont']"></i>
          <input
            type="range"
            class="volume-maxlong"
            value="100"
            max="200"
            min="0"
            ref="volumeMaxlong"
            @input="adjustVolume"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "mi-video",
  props:['msg'],
  data() {
    return {
      playOp: false,
      muteOp: false,
      totalTime: "",
      nowTime: "",
    };
  },
  mounted() {},
  methods: {
    // 关闭视频 组件传值到 index.vue
    vidShow: function () {
      this.$emit("stopVideo", {
          detailsContent:this.$refs.detailsContent,
          op:false,
          stop:function(){
              this.detailsContent.pause()
          }
      });
    },
    // 暂停键开关
    widgetPlay: function () {
      var detailsContent = this.$refs.detailsContent;
      if (this.playOp) {
        detailsContent.play();
        this.playOp = false;
      } else {
        detailsContent.pause();
        this.playOp = true;
      }
    },
    // 进度条
    videoStart: function () {
      var detailsContent = this.$refs.detailsContent;
      var barMaxlong = this.$refs.barMaxlong;
      var maxlongGolong = this.$refs.maxlongGolong;
      //   console.log(detailsContent.currentTime);
      //   console.log(detailsContent.duration)
      //   console.log(barMaxlong.clientWidth)
      var nowPlace =
        (detailsContent.currentTime / detailsContent.duration) *
        barMaxlong.clientWidth;
      maxlongGolong.style.cssText = ";width:" + nowPlace + "px;";
      //   console.log(nowPlace);
      //   总时间
      var m =
        parseInt(detailsContent.duration / 60) < 10
          ? "0" + parseInt(detailsContent.duration / 60)
          : parseInt(detailsContent.duration / 60);
      var s =
       parseInt(detailsContent.duration % 60) < 10
          ? "0" + parseInt(detailsContent.duration % 60)
          : parseInt(detailsContent.duration % 60);
      this.totalTime = m + ":" + s;
      // 实时时间
      var nowM =
        parseInt(detailsContent.currentTime / 60) < 10
          ? "0" + parseInt(detailsContent.currentTime / 60)
          : parseInt(detailsContent.currentTime / 60);
      var nowS =
        parseInt(detailsContent.currentTime % 60) < 10
          ? "0" + parseInt(detailsContent.currentTime % 60)
          : parseInt(detailsContent.currentTime % 60);
      this.nowTime = nowM + ":" + nowS;
    },
    // 跳到当前位置
    skipBar: function (e) {
      var nowTime =
        (e.offsetX / this.$refs.barMaxlong.clientWidth) *
        this.$refs.detailsContent.duration;
      this.$refs.detailsContent.currentTime = nowTime;
    },
    // 当播放完后
    restartPlay: function () {
      this.playOp = true;
      this.$refs.detailsContent.currentTime = 0;
    },
    fullBtn: function () {
      var de = this.$refs.detailsContent;
      if (de.requestFullscreen) {
        de.requestFullscreen();
      } else if (de.mozRequestFullScreen) {
        de.mozRequestFullScreen();
      } else if (de.webkitRequestFullScreen) {
        de.webkitRequestFullScreen();
      }
      console.log(de.requestFullscreen);
    },
    // 音量调节
    adjustVolume: function (e) {
      var widgetVolumeInput = document.querySelector(
        ".widget-volume input[type=range]"
      );
      var info = e.target.value / 200;
      var plan = info * 100;
      this.$refs.detailsContent.volume = info;
      widgetVolumeInput.style.cssText = ";background-size:" + plan + "% 100%;";
      if (e.target.value == 0) {
        this.muteOp = true;
      } else {
        this.muteOp = false;
      }
    },
  },
};
</script>
<style scoped>
.mi-vid {
  position: relative;
  width: 880px;
}
.details-content {
  width: 880px;
  outline: none;
}
.vid-title {
  width: 100%;
  height: 60px;
  background: #f5f5f5;
  font-size: 18px;
  text-indent: 20px;
  line-height: 60px;
}
.vid-title-shut {
  float: right;
  position: relative;
  width: 40px;
  height: 40px;
  margin: 11px 11px 0 0;
  border-radius: 50%;
  background: #f5f5f5;
  transition: all 0.7s;
  cursor: pointer;
}
.vid-title-shut::before {
  content: "\e713";
  position: absolute;
  top: -10px;
  left: -9px;
  font-size: 20px;
  color: #757575;
  transition: all 0.7s;
}
.vid-title-shut:hover {
  background: #e53935;
}
.vid-title-shut:hover::before {
  color: #fff;
}
.vid-details {
  position: relative;
}
.details-bigplay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.bigplay-ico::before {
  content: "\e66e";
  display: block;
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background: rgba(51, 51, 51, 0.3);
  color: #fff;
  font-size: 50px;
  text-align: center;
  line-height: 80px;
  text-indent: 10px;
}
.details-widget {
  position: absolute;
  bottom: 2px;
  width: 100%;
  height: 50px;
  background: rgba(51, 51, 51, 0.6);
}
.widget-bar {
  position: relative;
}
.bar-maxlong {
  position: absolute;
  width: 100%;
  height: 4px;
  background: rgba(92, 92, 92, 0.6);
  /* background: red; */
  cursor: pointer;
}
.maxlong-golong {
  float: left;
  width: 0px;
  height: 4px;
  background: #ff6700;
  max-width: 867px;
}
.maxlong-dot {
  float: left;
  width: 12px;
  height: 12px;
  margin-top: -4px;
  border-radius: 6px;
  background: #fff;
}

.widget-play {
  position: relative;
  float: left;
  margin-left: 36px;
  color: #fff;
}
.widget-play > .play-ico {
  position: absolute;
  top: 14px;
  display: inline-block;
  font-size: 22px;
  cursor: pointer;
  user-select: none;
}
.icodh-enter-active {
  animation: icodh 0.3s 1;
}
.icodh-leave-active {
  animation: icodh 0.3s reverse;
}
@keyframes icodh {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
.widget-time {
  float: left;
  width: 100px;
  height: 45px;
  margin-top: 4px;
  margin-left: 94px;
  text-align: center;
  line-height: 45px;
}
.widget-time > .time-span {
  color: #fff;
  font-size: 15px;
}
.widget-volume {
  float: right;
  height: 45px;
  margin-right: 40px;
  text-align: center;
  line-height: 45px;
  color: #fff;
}
.volume-ico::before {
  content: "\e662";
  float: left;
  font-size: 20px;
}
.volume-ico-mute::before {
  content: "\e619";
  float: left;
  font-size: 20px;
}
.volume-maxlong {
  display: block;
  width: 100px;
  height: 4px;
  margin: 20px 0 0 22px;
  border-radius: 2px;
  cursor: pointer;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none; /*清除系统默认样式*/
  height: 12px; /*拖动块高度*/
  width: 12px; /*拖动块宽度*/
  background: #fff; /*拖动块背景*/
  border-radius: 50%; /*外观设置为圆形*/
}
.widget-volume input[type="range"] {
  -webkit-appearance: none; /*清除系统默认样式*/
  width: 100px;
  background: -webkit-linear-gradient(#ff6700, #ff6700) no-repeat, #ddd;
  background-size: 50% 100%; /*设置左右宽度比例*/
  height: 4px; /*横条的高度*/
  border-radius: 2px;
}
.widget-whole {
  float: right;
  margin-right: 14px;
}
.widget-whole::after {
  content: "\e627";
  line-height: 48px;
  font-size: 26px;
  color: #fff;
}
.widget-whole:hover::after{
    color: #ff6700;
    cursor: pointer;
}
</style>