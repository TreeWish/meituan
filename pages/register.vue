<template>
  <div class="page-register">
    <article class="header">
      <header>
        <a href="/" class="site-logo" />
        <span class="login">
          <em class="bold">已有美团账号？</em>
          <a href="/login">
            <el-button type="primary" size="small">登录</el-button>
          </a>
        </span>
      </header>
    </article>
    <section>
      <el-form
        :model="regForm"
        :rules="rules"
        ref="regRef"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="昵称" prop="name">
          <el-input v-model="regForm.name"></el-input>
        </el-form-item>
         <el-form-item label="邮箱" prop="email">
          <el-input v-model="regForm.email"></el-input>
        </el-form-item>
         <el-form-item label="验证码" prop="code">
          <el-input v-model="regForm.code"></el-input>
        </el-form-item>
         <el-form-item label="密码" prop="password">
          <el-input v-model="regForm.password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="cpassword">
          <el-input v-model="regForm.cpassword"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="register">同意以下协议并注册</el-button>
          <div class="error">{{ error }}</div>
        </el-form-item>
        <el-form-item>
          <a
            class="f1"
            href="http://www.meituan.com/about/terms"
            target="_blank">《美团网用户协议》</a>
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>

<script>
export default {
  layout: "blank",
  data() {
    return {
      regForm: {
        name: '',
        email: '',
        code: '',
        password: '',
        cpassword: ''
      }
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/register/index.scss";
</style>
