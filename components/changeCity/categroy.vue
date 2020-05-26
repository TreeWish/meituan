<template>
  <div class="op-area">
    <dl class="m-categroy">
      <dt>按拼音首字母选择：</dt>
      <dd v-for="item in list" :key="item">
        <a :href="'#city-'+item">{{ item }}</a>
      </dd>
    </dl>
    <dl v-for="item in block" :key="item.title" class="m-categroy-section">
      <dt :id="'city-'+item.title">{{ item.title }}</dt>
      <dd>
        <span v-for="c in item.city" :key="c">{{ c }}</span>
      </dd>
    </dl>
  </div>
</template>

<script>
import pinyi from "js-pinyin";
export default {
  data() {
    return {
      list: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
      block: []
    };
  },
  async created() {
    let {
      status,
      data: { city }
    } = await this.$axios.get("/geo/city");
    if (status === 200) {
      let blocks = [];
      let pro;
      let c;
      let d = {};
      city.forEach(item => {
        // 提取首字母
        pro = pinyi
          .getFullChars(item.name)
          .toLocaleLowerCase()
          .slice(0, 1);
        // 当前字母的Unicode 编码：
        c = pro.charCodeAt(0);
        if (c > 96 && c < 123) {
          if (!d[pro]) {
            d[pro] = [];
          }
          d[pro].push(item.name);
        }
      });
      // Object.entries()返回一个数组，其元素是与直接在object上找到的可枚举属性键值对相对应的数组
      for (let [k, v] of Object.entries(d)) {
        blocks.push({
          title: k.toUpperCase(),
          city: v
        });
      }
      blocks.sort((a, b) => a.title.charCodeAt(0) - b.title.charCodeAt(0));
      this.block = blocks;
    }
  }
};
</script>


<style lang="scss" scoped>
@import "@/assets/css/changeCity/categroy.scss";
.op-area {
  margin-top: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #e5e5e5;
}
span {
  font-size: 16px;
  color: #333;
  font-weight: 500;
}
dd a {
  color: #666;
}
</style>
