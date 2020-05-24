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
          <el-button size="mini" @click="sendMsg">免费获取短信动态码</el-button>
          <span class="status">{{ statusMsg }}</span>
        </el-form-item>
        <el-form-item label="验证码" prop="code">
          <el-input v-model="regForm.code" maxlength="4"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="regForm.password" type="password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="cpassword">
          <el-input v-model="regForm.cpassword" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="register">同意以下协议并注册</el-button>
          <div class="error">{{ error }}</div>
        </el-form-item>
        <el-form-item>
          <a class="f1" href="http://www.meituan.com/about/terms" target="_blank">《美团网用户协议》</a>
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>

<script>
import CryptoJS from "crypto-js";
export default {
  layout: "blank",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.regForm.cpassword !== "") {
          this.$refs.regRef.validateField("cpassword");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.regForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      regForm: {
        name: "",
        email: "",
        code: "",
        password: "",
        cpassword: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入昵称", trigger: "blur" },
          { min: 2, max: 8, message: "长度在 2 到 8 个字符", trigger: "blur" }
        ],
        email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"]
          }
        ],
        code: [
          { required: true, message: "请输入动态验证码", trigger: "blur" },
          { min: 4, max: 4, message: "长度为 4 个字符", trigger: "blur" }
        ],
        password: [{ validator: validatePass, trigger: "blur" }],
        cpassword: [{ validator: validatePass2, trigger: "blur" }]
      },
      error: "",
      statusMsg: ""
    };
  },
  methods: {
    sendMsg() {
      const self = this;
      let namePass;
      let emailPass;
      if (self.timerid) {
        return false;
      }
      this.$refs["regRef"].validateField("name", valid => {
        namePass = valid;
      });
      self.statusMsg = "";
      if (namePass) {
        return false;
      }
      this.$refs["regRef"].validateField("email", valid => {
        emailPass = valid;
      });
      // 验证通过，处理中文编码
      if (!namePass && !emailPass) {
        self.$axios
          .post("/users/verify", {
            username: encodeURIComponent(self.regForm.name),
            email: self.regForm.email
          })
          .then(({ status, data }) => {
            if (status === 200 && data && data.code === 0) {
              let count = 60;
              self.statusMsg = `验证码已发送,剩余${count--}秒`;
              self.timerid = setInterval(function() {
                self.statusMsg = `验证码已发送,剩余${count--}秒`;
                if (count === 0) {
                  clearInterval(self.timerid);
                }
              }, 1000);
            } else {
              self.statusMsg = data.msg;
            }
          });
      }
    },
    register() {
      this.$refs["regRef"].validate(async valid => {
        if (!valid) return;
        const { data, status } = await this.$axios.post("/users/signup", {
          username: encodeURIComponent(this.regForm.name),
          password: CryptoJS.MD5(this.regForm.password).toString(),
          email: this.regForm.email,
          code: this.regForm.code
        });
        if (status === 200 && data && data.code === 0) {
          this.$router.push("/login");
        } else {
          this.error = data.msg;
        }
        setTimeout(function() {
          this.error = "";
        }, 1500);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/register/index.scss";
</style>
