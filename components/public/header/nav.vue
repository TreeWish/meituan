<template>
  <div class="m-nav">
    <ul class="nav">
      <li class="list">
        <nuxt-link to="/my">我的美团</nuxt-link>
        <dl>
          <dd>
            <nuxt-link to="order">我的订单</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="order">我的收藏</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="order">抵用券</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="order">用户设置</nuxt-link>
          </dd>
        </dl>
      </li>
      <li class="list">
        <nuxt-link to="/order">手机APP</nuxt-link>
      </li>
      <li class="list bd">
        <nuxt-link to="/center">商家中心</nuxt-link>
        <dl>
          <dd>
            <nuxt-link to="/userCenter">登录商家中心</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/coop">我想合作</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/wap">免费手机开店</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/kaipiao">商家申请开票</nuxt-link>
          </dd>
        </dl>
      </li>
      <li class="list">
        <nuxt-link to="/my">美团规则</nuxt-link>
        <dl>
          <dd>
            <nuxt-link to="/userCenter">规则中心</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/coop">规则目录</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/wap">规则评议院</nuxt-link>
          </dd>
        </dl>
      </li>
      <li class="list site">
        <nuxt-link to="/site">网站导航</nuxt-link>
        <div class="subContainer">
          <dl class="hotel">
            <dt>酒店旅游</dt>
            <dd>
              <a href="https://www.meituan.com/iflight/" target="_blank">国际机票</a>
            </dd>
            <dd>
              <a href="https://www.meituan.com/train/" target="_blank">火车票</a>
            </dd>
            <dd>
              <a href="https://minsu.meituan.com/" target="_blank">民宿</a>
            </dd>
            <dd>
              <a href="https://hotel.meituan.com/beijing/c20036/" target="_blank">经济型酒店</a>
            </dd>
            <dd>
              <a href="https://hotel.meituan.com/beijing/c20037/" target="_blank">主题酒店</a>
            </dd>
            <dd>
              <a href="https://hotel.meituan.com/beijing/c20038/" target="_blank">商务酒店</a>
            </dd>
            <dd>
              <a href="https://hotel.meituan.com/beijing/c20039/" target="_blank">公寓</a>
            </dd>
            <dd>
              <a href="https://hotel.meituan.com/beijing/c20040/" target="_blank">豪华酒店</a>
            </dd>
            <dd>
              <a href="https://hotel.meituan.com/beijing/c20041/" target="_blank">客栈</a>
            </dd>
            <dd>
              <a href="https://hotel.meituan.com/beijing/c20042/" target="_blank">青年旅社</a>
            </dd>
            <dd>
              <a href="https://hotel.meituan.com/beijing/c20043/" target="_blank">度假酒店</a>
            </dd>
            <dd>
              <a href="https://hotel.meituan.com/beijing/c20044/" target="_blank">别墅</a>
            </dd>
            <dd>
              <a href="https://hotel.meituan.com/beijing/c20045/" target="_blank">农家院</a>
            </dd>
          </dl>
          <dl class="food">
            <dt>吃美食</dt>
            <dd>
              <a href="https://bj.meituan.com/meishi/c20004/" target="_blank">烤鱼</a>
            </dd>
            <dd>
              <a href="https://bj.meituan.com/meishi/c36/" target="_blank">特色小吃</a>
            </dd>
            <dd>
              <a href="https://bj.meituan.com/meishi/c54/" target="_blank">烧烤</a>
            </dd>
            <dd>
              <a href="https://bj.meituan.com/meishi/c40/" target="_blank">自助餐</a>
            </dd>
            <dd>
              <a href="https://bj.meituan.com/meishi/c17/" target="_blank">火锅</a>
            </dd>
            <dd>
              <a href="https://bj.meituan.com/meishi/c393/" target="_blank">代金券</a>
            </dd>
          </dl>
          <dl class="movie">
            <dt>看电影</dt>
            <dd>
              <a href="https://maoyan.com/films" target="_blank">热映电影</a>
            </dd>
            <dd>
              <a href="https://maoyan.com/cinemas" target="_blank">热门影院</a>
            </dd>
            <dd>
              <a href="https://maoyan.com/board" target="_blank">热映电影口碑榜</a>
            </dd>
            <dd>
              <a href="https://maoyan.com/board/6" target="_blank">最受期待电影</a>
            </dd>
            <dd>
              <a href="https://maoyan.com/board/1" target="_blank">国内票房榜</a>
            </dd>
            <dd>
              <a href="https://maoyan.com/board/2" target="_blank">北美票房榜</a>
            </dd>
            <dd>
              <a href="https://maoyan.com/board/4" target="_blank">电影排行榜</a>
            </dd>
          </dl>
          <dl class="app">
            <dt>手机应用</dt>
            <dd>
              <a href="https://i.meituan.com/mobile/down/meituan" target="_blank">
                <img
                  class="appicon"
                  src="//s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png"
                  title="美团app"
                  alt="美团app"
                />
              </a>
            </dd>
            <dd>
              <a href="https://waimai.meituan.com/mobile/download/default" target="_blank">
                <img
                  class="appicon"
                  src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png"
                  title="外卖app"
                  alt="外卖app"
                />
              </a>
            </dd>
            <dd>
              <a href="https://minsu.meituan.com/app/" target="_blank">
                <img
                  class="appicon"
                  src="https://p0.meituan.net/travelcube/162c3308d9622f6d9cfaa49e60be4dca8573.png"
                  title="民宿app"
                  alt="民宿app"
                />
              </a>
            </dd>
            <dd>
              <a href="https://www.dianping.com/events/m/index.htm" target="_blank">
                <img
                  class="appicon"
                  src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png"
                  title="点评app"
                  alt="点评app"
                />
              </a>
            </dd>
            <dd>
              <a href="https://maoyan.com/app" target="_blank">
                <img
                  class="appicon"
                  src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png"
                  title="猫眼app"
                  alt="猫眼app"
                />
              </a>
            </dd>
          </dl>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>
