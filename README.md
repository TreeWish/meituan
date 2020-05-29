# mt

> Vue + SSR + Koa2 全栈高仿美团网

# 技术栈
前端： Vue全家桶 + Element-UI
SSR: Nuxt.js
通信： Axios
后端： Koa2 + MongoDB + redis

# 实现功能
#### 登陆注册
#### 邮箱验证(SMTP)
#### 服务端缓存
#### 地图服务
#### 城市服务
#### 推荐搜索
#### 产品详情
#### 购物车
#### 订单详情

## Tips:
运行前需开启Redis，MangoDB服务
需要在config.js 修改 user="xxx@qq.com" 和 pass="腾讯SMTP授权码"


## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
