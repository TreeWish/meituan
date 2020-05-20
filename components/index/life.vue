<template>
  <div class="m-life">
    <el-row>
      <el-col :span="14">
        <Slider />
      </el-col>
      <el-col :span="4">
        <div class="m-life-pic"></div>
      </el-col>
      <el-col :span="6">
        <div class="m-life-login">
          <h4>
            <img class="head-img-row" src="//s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg" alt="">
          </h4>
          <p class="m-life-login-name">Hi! 你好</p>
          <p><nuxt-link to="/register"><el-button 
            round 
            size="medium">注册</el-button></nuxt-link></p>
          <p><nuxt-link to="/login"><el-button 
            round 
            size="medium">立即登录</el-button></nuxt-link></p>
        </div>
      </el-col>
    </el-row>
    <el-row>
     <el-col :span="7">
        <div class="m-life-hotel"/>
      </el-col>
      <el-col :span="7">
        <div class="m-life-music"/>
      </el-col>
      <el-col :span="4">
        <div class="m-life-coop"/>
      </el-col>
      <el-col :span="6">
        <div class="m-life-downapp">
          <img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="下载APP">
           <p>美团APP手机版</p>
          <h4><span class="red">1元起</span><em class="gary">吃喝玩乐</em></h4>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Slider from '@/components/index/slider.vue'
export default {
  components: {
    Slider
  }
};
</script>

<style lang="scss" scoped>
  @import "@/assets/css/index/life.scss";
  .head-img-row {
    border-radius: 30px;
    margin: 0px auto 4px auto;
  }
</style>
