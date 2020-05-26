<template>
  <div class="m-iselect op-area">
    <span class="name">按省份选择:</span>
    <el-select v-model="pvalue" placeholder="省份" class="select">
      <el-option v-for="item in province" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <el-select v-model="cvalue" placeholder="城市" class="select" :disabled="!pvalue.length">
      <el-option v-for="item in city" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <span class="name" style="margin:0 10px 0 30px">直接搜索:</span>
    <el-select
      v-model="inputs"
      filterable
      remote
      reserve-keyword
      placeholder="请输入城市中文或拼音"
      :remote-method="remoteMethod"
      @change="handleSelect"
    >
      <el-option v-for="item in cities" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  data() {
    return {
      pvalue: "",
      province: [],
      cvalue: "",
      city: [],
      inputs: "",
      cities: []
    };
  },
  async mounted() {
    let {
      status,
      data: { province }
    } = await this.$axios.get("/geo/province");
    if (status === 200) {
      this.province = province.map(item => {
        return {
          value: item.id,
          label: item.name
        };
      });
    }
  },
  watch: {
    async pvalue(newPvalue) {
      let {
        status,
        data: { city }
      } = await this.$axios.get(`/geo/province/${newPvalue}`);
      if (status === 200) {
        this.city = city.map(item => {
          return {
            value: item.id,
            label: item.name
          };
        });
        this.cvalue = "";
      }
    }
  },
  methods: {
    remoteMethod: _.debounce(async function(query) {
      if (query !== "") {
        this.cities = []
        if (this.cities.length) {
          this.cities.filter(
            item => item.label.indexOf(query) > -1
          );
        } else {
          let {
            status,
            data: { city }
          } = await this.$axios.get("/geo/city");
          if (status === 200) {
            this.cities = city.map(item => {
              return {
                value: item.id,
                label: item.name
              };
            });
            this.cities = this.cities.filter(
              item => item.label.indexOf(query) > -1
            );
          }
          
        }
      }
    }, 200),
    handleSelect() {
      this.$router.push('/')
    }
  
  }
};
</script>

<style scoped>
@import "@/assets/css/changeCity/iselect.scss";
.select {
  width: 150px;
  height: 40px;
  padding: 10px 0 10px 10px;
}
span {
  font-size: 16px;
  color: #333;
  font-weight: 500;
}
.op-area {
  padding-bottom: 30px;
  border-bottom: 1px solid #e5e5e5;
}
</style>