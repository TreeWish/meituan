export default {
  dbs:'mongodb://127.0.0.1:27017/student',
  redis: {
    get host() {
      return '127.0.0.1';
    },
    get post() {
      return 6379;
    }
  },
  smtp: {
    get host() {
      return 'smtp.qq.com';
    },
    get user() {
      return '1131093754@qq.com';
    },
    get pass() {
      return 'skvmhtubysregijf';
    },
    // 随机生成验证码
    get code() {
      return ()=>{
        return Math.random().toString(16).slice(2,6).toUpperCase();
      }
    },
    // 设置有效期
    get expire() {
      return ()=>{
        return new Date().getTime() + 60*60*1000;
      }
    }
  }
}