<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="leave">
      <dt>全部分类</dt>
      <dd v-for="(item,index) in menu" :key="index" @mouseenter="enter">
        <i :class="item.type"></i>
        {{item.name}}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div class="detail" v-if="kind" @mouseenter="detailenter" @mouseleave="detailleave">
      <template v-for="(item,index) in currentMenuType.child">
        <h2 style="boder:1px soild #ccc" :key="index">
          {{item.title}}
          <a class="more">更多</a>
        </h2>
        <span v-for="(i,index) in item.child" :key="index">{{i}}</span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kind: "",
      menu: this.$store.state.home.menu
    };
  },
  methods: {
    enter(e) {
      this.kind = e.target.querySelector("i").className;
    },
    leave() {
      let self = this;
      self.timer = setTimeout(() => {
        self.kind = "";
      }, 150);
    },
    detailenter() {
      clearTimeout(this.timer);
    },
    detailleave() {
      this.kind = "";
    }
  },
  computed: {
    currentMenuType() {
      return this.menu.filter(item => item.type === this.kind)[0];
    }
  }
};
</script>

<style scoped>
.detail h2 {
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 10px;
  margin-top: 24px;
}
.more {
  font-size: 12px;
  color: #999;
  font-weight: 400;
  float: right;
  margin-right: 6px;
  margin-top: 2px;
}
</style>
