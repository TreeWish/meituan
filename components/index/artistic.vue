<template>
  <section class="m-istyle">
    <dl @mouseover="over" @mouseleave="out">
      <dt>有格调</dt>
      <dd
        :class="{active:kind==='all'}"
        kind="all"
        keyword="景点">全部</dd>
      <dd
        :class="{active:kind==='part'}"
        kind="part"
        keyword="美食">约会聚餐</dd>
      <dd
        :class="{active:kind==='spa'}"
        kind="spa"
        keyword="丽人">丽人SPA</dd>
      <dd
        :class="{active:kind==='movie'}"
        kind="movie"
        keyword="电影">电影演出</dd>
      <dd
        :class="{active:kind==='travel'}"
        kind="travel"
        keyword="旅游">品质出游</dd>
    </dl>
    <ul class="ibody">
      <li
        v-for="item in cur"
        :key="item.title">
        <el-card
          :body-style="{ padding: '0px' }"
          shadow="never">
          <img
            :src="item.img"
            class="image">
          <ul class="cbody">
            <li class="title">{{ item.title }}</li>
            <li class="pos"><span>{{ item.pos }}</span></li>
            <li class="price">￥<em>{{ item.price }}</em><span>/起</span></li>
          </ul>
        </el-card>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  data: () => {
    return {
      kind: 'all',
      list: {
        all: [
           {
             title: '海河/图书大厦/创展大厦一居',
             pos: '整套1举世可住两人',
          img: 'https://img.meituan.net/phoenix/e79ceadbe6602e17357a6bcdeeb6ece7228168.jpg@740w_416h_1e_1c',
          price: '299'
        },
        {
          img: 'http://p0.meituan.net/iphoenix/89c656d1ecdeee4c14338e3dc005b0be152422.jpg@740w_416h_1e_1c'
        }
        ],
        part: [
           {
          img: 'http://p0.meituan.net/iphoenix/89c656d1ecdeee4c14338e3dc005b0be152422.jpg@740w_416h_1e_1c'
        }
        ],
        spa: [
          {
            img: 'http://p1.meituan.net/iphoenix/6892c2dbda446174f0195ae364ebcf9e258534.jpg@740w_416h_1e_1c'
          }
        ],
        movie: [
          {
            img: 'https://img.meituan.net/phoenix/36a6f3ce8e39bb3a4dc775b1d3090cb6486989.jpg@740w_416h_1e_1c'
          }
        ],
        travel: [
          {
            img: 'https://img.meituan.net/phoenix/f70e424f65c6ecdc3326cf0821f9564c62226.jpg@740w_416h_1e_1c'
          }
        ]
      },
      curr: [
        {
          img: 'https://img.meituan.net/phoenix/e79ceadbe6602e17357a6bcdeeb6ece7228168.jpg@740w_416h_1e_1c'
        },
        {
          img: 'http://p0.meituan.net/iphoenix/89c656d1ecdeee4c14338e3dc005b0be152422.jpg@740w_416h_1e_1c'
        }
      ],
      active: false
    }
  },
  methods: {
    over(e) {
     e.target.className = 'active';
     this.kind = e.target.getAttribute('kind');
    //console.log(this.list[this.kind])
    },
    out(e) {
      e.target.className = '';
    }
  },
  computed: {
    cur() {
      if(this.kind === null){
        this.kind = 'all'
      }
      return this.list[this.kind];
    }
  },
}
</script>
<style lang="scss">
    @import "@/assets/css/index/artistic.scss";
</style>
