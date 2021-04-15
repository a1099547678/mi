<template>
  <div>
    <!-- 服务 -->
    <div class="w">
      <ul class="service">
        <li>
          <a href="">
            <i class="iconfont">&#xe659;</i>
            预约维修服务
          </a>
        </li>
        <li>
          <a href="">
            <i class="iconfont">&#xe638;</i>
            7天无理由退货
          </a>
        </li>
        <li>
          <a href="">
            <i class="iconfont">&#xe639;</i>
            15天免费换货
          </a>
        </li>
        <li>
          <a href="">
            <i class="iconfont">&#xe6ab;</i>
            满99元包邮
          </a>
        </li>
        <li>
          <a href="">
            <i class="iconfont">&#xe611;</i>
            520余家售后网点
          </a>
        </li>
      </ul>
      <div></div>
    </div>
    <!-- 服务 -->
    <!-- 底部导航 -->
    <div class="w FooterSite">
      <p>
        <b>帮助中心</b>
        <a href="javascript:;">账户管理</a>
        <a href="javascript:;">购物指南</a>
        <a href="javascript:;">订单操作</a>
      </p>
      <p>
        <b>服务支持</b>
        <a href="javascript:;">售后政策</a>
        <a href="javascript:;">自助服务</a>
        <a href="javascript:;">相关下载</a>
      </p>
      <p>
        <b>线下门店</b>
        <a href="javascript:;">小米之家</a>
        <a href="javascript:;">服务网点</a>
        <a href="javascript:;">授权体验店</a>
      </p>
      <p>
        <b>关于小米</b>
        <a href="javascript:;">了解小米</a>
        <a href="javascript:;">加入小米</a>
        <a href="javascript:;">投资者关系</a>
        <a href="javascript:;">企业社会责任</a>
        <a href="javascript:;">廉洁举报</a>
      </p>
      <p>
        <b>关注我们</b>
        <a href="javascript:;">新浪微博</a>
        <a href="javascript:;">官方微信</a>
        <a href="javascript:;">联系我们</a>
        <a href="">公益基金会</a>
      </p>
      <p>
        <b>特色服务</b>
        <a href="javascript:;">F码通道</a>
        <a href="javascript:;">礼物码</a>
        <a href="javascript:;">防伪查询</a>
      </p>
      <ul class="tell">
        <li>400-100-5678</li>
        <li>8:00-18:00（仅收市话费)</li>
        <li>
          <i class="iconfont"> &#xe719;</i>
          人工客服
        </li>
        <li>
          关注小米：
          <i class="iconfont">&#xe618;</i>
          <i class="iconfont wx"
            >&#xe610;
            <span class="erweima"></span>
          </i>
        </li>
      </ul>
    </div>
    <!-- 底部导航 -->
    <!-- 备案信息 -->
    <div class="record">
      <div class="w icp">
        <div class="icp-logo"></div>
        <p>
          <a href="">小米商城</a>| <a href="">MIUI</a>| <a href="">米家</a>|
          <a href="">米聊</a>| <a href="">多看</a>| <a href="">游戏</a>|
          <a href="">政企服务</a>| <a href="">小米天猫店</a>|
          <a href="">小米集团隐私政策</a>|
          <a href="">小米公司儿童信息保护规则</a>|
          <a href="">小米商城隐私政策</a>| <a href="">小米商城用户协议</a>|
          <a href="">问题反馈</a>| <a href="">Select&nbsp;Location</a>|
          <a href="">北京互联网法院法律服务工作站</a>|
          <a href="">中国消费者协会</a>|
          <a href="">北京市消费者协会</a>
        </p>
        <p>
          &#169;<a href="">mi.com</a>京ICP证110507号<a href=""
            >京ICP备10046444号</a
          ><a href="">京公网安备11010802020134号</a
          ><a href="">京网文[2020]0276-042号</a>
        </p>
        <p>
          <a href="">（京）网械平台备字（2018）第00005号</a
          ><a href=""> 互联网药品信息服务资格证 (京)-非经营性-2014-0090 </a
          ><a href=""> 营业执照</a><a href="">医疗器械质量公告</a>
        </p>
        <p>
          <a href="">增值电信业务许可证</a>
          网络食品经营备案 京食药网食备202010048
          <a href="">食品经营许可证</a>
        </p>
        <p>
          违法和不良信息举报电话：171-5104-4404
          <a href="">知识产权侵权投诉</a>
          本网站所列数据，除特殊说明，所有数据均出自我司实验室测试
        </p>
        <!-- 五个防伪标识 -->
        <div class="signboard">
          <a href="javascript:;" class="truste"></a>
          <a href="javascript:;" class="credit"></a>
          <a href="javascript:;" class="credible"></a>
          <a href="javascript:;" class="manage"></a>
          <a href="javascript:;" class="safe"></a>
        </div>
        <!-- 五个防伪标识 -->
      </div>
      <div class="wish">
        让全球每个人都能享受科技带来的美好生活
      </div>
    </div>
    <!-- 备案信息 -->
  </div>
</template>

<script>
export default {
  name: "nav-footer",
};
</script>

<style>
/* 服务部分 *************************************/
.service {
  display: flex;
  margin-top: 10px;
}
.service > li {
  position: relative;
  flex: 1;
  height: 80px;
  text-align: center;
  border-bottom: 1px solid #e0e0e0;
}
.service > li::before {
  position: absolute;
  top: 30px;
  left: -5px;
  width: 1px;
  height: 20px;
  background-color: #e0e0e0;
  content: "";
}
.service > li:first-child::before {
  width: 0;
  content: "";
}
.service > li > a {
  font-size: 15px;
  color: #616161;
  line-height: 80px;
}
.service > li > a:hover {
  color: #ff6700;
}
.service > li > a > i {
  font-size: 30px;
  vertical-align: middle;
}
/* 底部导航部分 ***************************/
.FooterSite {
  display: flex;
}
.FooterSite > p {
  flex: 1;
  height: 250px;
  margin-top: 10px;
}
.FooterSite > p > b {
  line-height: 60px;
}
.FooterSite > p > a {
  display: block;
  width: 50%;
  color: #757575;
  line-height: 30px;
}
.FooterSite > p > a:hover {
  color: #ff6700;
}
.tell {
  margin-top: 36px;
  width: 250px;
  height: 110px;
  border-left: 1px solid #e0e0e0;
}
.tell > li {
  margin-top: 3px;
  text-align: center;
}
.tell > li:nth-child(1) {
  font-size: 20px;
  font-weight: 700;
  color: #ff6700;
}
.tell > li:nth-child(3) {
  width: 118px;
  height: 28px;
  margin-left: 65px;
  border: 1px solid #ff6700;
  line-height: 28px;
  color: #ff6700;
}
.tell > li:nth-child(3):hover {
  background-color: #ff6700;
  color: #ffffff;
}
.tell > li:nth-child(4) {
  font-size: 13px;
}
.tell > li:nth-child(4) > i {
  margin-right: 5px;
  font-size: 25px;
  vertical-align: middle;
}
.tell > li:nth-child(4) > i:hover {
  color: #ff6700;
  cursor:pointer;
}
.wx {
  position: relative;
}
.erweima {
  display: none;
  position: absolute;
  top: 26px;
  left: -43px;
  width: 115px;
  height: 115px;
  background: url(../../public/imgs/xiaomi.webp) no-repeat 11px -217px;
}
.wx:hover > .erweima {
  display: block;
}
/* 备案信息 *************************************************/
.record {
  width: 100%;
  height: 260px;
  background-color: #fafafa;
}
.icp {
  position: relative;
}
.icp-logo {
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 60px;
  background: #ff6700 url(../../public/imgs/xiaomi.webp) no-repeat -51px -297px;
}
.icp > p {
  margin-left: 71px;
}
.icp > p:first-of-type > a {
  color: #757575;
}
.icp > p,
.icp > p > a {
  color: #b0b0b0;
}
.icp > p > a:hover {
  color: #ff6700;
}
/* 五个安全标识**************************/
.signboard{
  width: 700px;
  height: 57px;
  margin-left: 65px;
}
.signboard>a{
  display: inline-block;
  vertical-align: middle;
}
.truste{
  width: 170px;
  height: 55px;
  margin-left: -42px;
  background: url(../../public/imgs/xiaomi.webp) no-repeat 0px 0px;
  transform: scale(.5);
}
.credit{
  width: 90px;
  height: 31px;
  margin-left: -39px;
  background: url(../../public/imgs/xiaomi.webp) no-repeat 0px -54px;
}
.credible{
  width: 134px;
  height: 50px;
  margin-left: -16px;
  background: url(../../public/imgs/xiaomi.webp) no-repeat 0px -86px;
  transform: scale(.7);
}
.manage{
  width: 93px;
  height: 30px;
  margin-left: -16px;
  background: url(../../public/imgs/xiaomi.webp) no-repeat 0px -136px;
}
.safe{
  width: 131px;
  height: 49px;
  margin-left: -22px;
  background: url(../../public/imgs/xiaomi.webp) no-repeat 0px -167px;
  transform: scale(.7);
}
.wish{
  width: 100%;
  height: 20px;
  margin-top: 40px;
  letter-spacing: 3px;
  font-size: 17px;
  color: #cbcbcb;
  text-align: center;
  user-select:none;
}
</style>