<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团" />
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input
            v-model="inputs"
            placeholder="搜索商家或地点"
            @focus="focus"
            @blur="blur"
            @input="input"
          />
          <button class="el-button el-button--warning">
            <i class="el-icon-search" />
          </button>
          <dl class="hotPlace" v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd>huoguo</dd>
            <dd>huoguo</dd>
            <dd>huoguo</dd>
          </dl>
          <dl class="searchList" v-if="isSearchList">
            <dd>huoguo</dd>
            <dd>huoguo</dd>
            <dd>huoguo</dd>
          </dl>
        </div>
        <p class="suggest">
          <a href>火锅底料</a>
          <a href>火锅底料</a>
        </p>
        <ul class="nav">
          <li>
            <nuxt-link to="/" class="takeout">美团外卖</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="movie">猫眼电影</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="hotel">美团酒店</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="apartment">民宿/公寓</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="business">商家入驻</nuxt-link>
          </li>
        </ul>
      </el-col>
      <el-col :span="6" class="right">
        <ul class="security">
          <li>
            <i class="refund" />
            <p class="txt">随时退</p>
          </li>
          <li>
            <i class="single" />
            <p class="txt">不满意免单</p>
          </li>
          <li>
            <i class="overdue" />
            <p class="txt">过期退</p>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputs: "",
      isFocus: false,
      hotPlace: [],
      searchList: []
    };
  },
  methods: {
    input(e) {
      console.log(e.targe);
    },
    focus() {
      this.isFocus = true;
    },
    blur() {
      this.isFocus = false;
    }
  },
  computed: {
    isHotPlace() {
      return this.isFocus && !this.inputs;
    },
    isSearchList() {
      return this.isFocus && this.inputs;
    }
  }
};
</script>

<style scoped>
</style>
