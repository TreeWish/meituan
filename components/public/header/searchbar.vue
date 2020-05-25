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
            <dd v-for="(item, index) in hotPlace" :key="index">
              <a :href="'/products?keyword='+encodeURIComponent(item.name)">{{ item.name }}</a>
            </dd>
          </dl>
          <dl class="searchList" v-if="isSearchList">
            <dd v-for="(item, index) in searchList" :key="index">
              <a :href="'/products?keyword='+encodeURIComponent(item.name)">{{ item.name }}</a>
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <span v-for="(item, index) in hotPlace" :key="index">
              <a :href="'/products?keyword='+encodeURIComponent(item.name)">{{ item.name }}</a>
          </span>
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
import _ from 'lodash'
export default {
  data() {
    return {
      inputs: "",
      isFocus: false,
      hotPlace: [],
      searchList: []
    };
  },
  mounted() {
    this.hotPlace = this.$store.state.home.hotPlace.slice(0,5);
  },
  methods: {
    input: _.debounce(async function() {
      let city = this.$store.state.geo.position.city.replace('市', '');
      this.searchList = [];
      let { status, data: {top}} = await this.$axios.get('/search/top', {
        params: {
          input: this.inputs,
          city
        }
      });
      this.searchList = top.slice(0, 10);
    }, 300),
    focus() {
      this.isFocus = true;
    },
    blur() {
      let self=this;
      setTimeout(function(){
        self.isFocus=false
      },200)
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
