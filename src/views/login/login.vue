<template>
  <div class="homepage-hero-module">
    <div class="video-container">
      <div :style="fixStyle" class="filter">
        <form onsubmit="return false">
          <h3>登 录</h3>

          <label for="username">用户名</label>
          <input type="text" placeholder="账号/邮箱/电话" id="username" />

          <label for="password">密码</label>
          <input type="password" placeholder="密码" id="password" />

          <button @click="login">登 录</button>
          <!-- <div class="social">
            <div class="go"><i class="fab fa-google"></i>忘记密码?</div>
            <div class="fb"><i class="fab fa-facebook"></i>注册</div>
          </div> -->
          <div class="form-footer">gaoxinke.cn</div>
        </form>
        <!-- <transition name="fade">
          <div class="login" v-if="loginVisible">
            <div class="login-top">
              <a style="color: white">登录</a>
            </div>
            <div class="login-main">
              <el-form ref="login_form" :model="loginForm">
                <el-form-item>
                  <el-input
                    v-model="loginForm.name"
                    prefix-icon="el-icon-user"
                    placeholder="账号"
                  ></el-input>
                </el-form-item>

                <el-form-item>
                  <el-input
                    v-model="loginForm.pwd"
                    prefix-icon="el-icon-lock"
                    placeholder="密码"
                    show-password
                  ></el-input>
                </el-form-item>

                <el-form-item>
                  <el-row>
                    <el-col :span="12"
                      ><el-button
                        style="width: 90%"
                        type="primary"
                        class="an"
                        @click="register"
                        >注册</el-button
                      ></el-col
                    >
                    <el-col :span="12">
                      <el-button
                        style="width: 90%"
                        type="primary"
                        class="an"
                        @click="login"
                        >登录</el-button
                      ></el-col
                    >
                  </el-row>
                </el-form-item>
              </el-form>
            </div>
            <div class="login-footer">gaoxinke.cn</div>
          </div>
        </transition>
        <transition name="fade">
          <div class="register" v-if="!loginVisible">
            <div class="register-top">
              <a style="color: white">注册</a>
            </div>
            <div class="register-main">
              <el-form ref="register_form" :model="registerForm" :rules="register_rules">
                <el-form-item prop="name">
                  <el-input
                    v-model="registerForm.name"
                    prefix-icon="el-icon-user"
                    placeholder="账号"
                  ></el-input>
                </el-form-item>

                <el-form-item prop="pwd">
                  <el-input
                    v-model="registerForm.pwd"
                    prefix-icon="el-icon-lock"
                    placeholder="密码"
                    show-password
                  ></el-input>
                </el-form-item>

                <el-form-item prop="pwdt">
                  <el-input
                    v-model="registerForm.pwdt"
                    prefix-icon="el-icon-key"
                    placeholder="确认密码"
                    show-password
                  ></el-input>
                </el-form-item>

                <el-form-item prop="icad">
                  <el-input
                    v-model="registerForm.icad"
                    prefix-icon="el-icon-postcard"
                    placeholder="注册码"
                  ></el-input>
                </el-form-item>

                <el-form-item prop="code">
                  <el-row style="height: 40px">
                    <el-col :span="12">
                      <el-input
                        style="width: 100%"
                        v-model="registerForm.code"
                        prefix-icon="el-icon-position"
                        placeholder="验证码"
                      >
                        <template #suffix>
                          <span>60s</span>
                        </template>
                      </el-input>
                    </el-col>
                    <el-col :span="12">
                      <div @click="reImg">
                        <el-image
                          style="width: 100px; height: 40px"
                          :src="verifier.b4url"
                          fit="fill"
                        >
                          <template #error>
                            <div
                              style="
                                width: 100%;
                                height: 100%;
                                background-color: aliceblue;
                              "
                            >
                              点击刷新
                            </div>
                          </template>
                        </el-image>
                      </div>
                    </el-col>
                  </el-row>
                </el-form-item>

                <el-form-item>
                  <el-row>
                    <el-col :span="12">
                      <el-button
                        style="width: 90%"
                        type="primary"
                        class="an"
                        @click="backtrack"
                        >返回</el-button
                      ></el-col
                    >
                    <el-col :span="12"
                      ><el-button
                        style="width: 90%"
                        type="primary"
                        class="an"
                        @click="toRegister"
                        >提交</el-button
                      ></el-col
                    >
                  </el-row>
                </el-form-item>
              </el-form>
            </div>
            <div class="register-footer">gaoxinke.cn</div>
          </div>
        </transition> -->
      </div>
      <video
        :style="fixStyle"
        autoplay
        loop
        muted
        class="fillWidth"
        v-on:canplay="canplay"
      >
        <source src="http://api.gaoxinke.cn/img/fwindos.mp4" type="video/mp4" />
        浏览器不支持 video 标签，建议升级浏览器。
        <source
          src="http://api.gaoxinke.cn/img/fwindos.webm"
          type="video/webm"
        />
        浏览器不支持 video 标签，建议升级浏览器。
      </video>
      <div class="poster hidden" v-if="!vedioCanPlay">
        <img
          :style="fixStyle"
          src="http://api.gaoxinke.cn/img/fwindos.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { ref, reactive, Ref } from "vue";
import { useRouter, useRoute } from "vue-router";

const loginVisible = ref(true);

// const drawer = ref(false);
// const dark = ref(false);
// const miniVariant = ref(false);
const vedioCanPlay = ref(false);
const fixStyle = ref({
  height: "",
  width: "",
  "margin-bottom": "",
  "margin-left": "",
});
const canplay = () => {
  vedioCanPlay.value = true;
};
window.onresize = () => {
  //屏幕适应
  const windowWidth = document.body.clientWidth;
  const windowHeight = document.body.clientHeight;
  const windowAspectRatio = windowHeight / windowWidth;
  let videoWidth;
  let videoHeight;
  if (windowAspectRatio < 0.5625) {
    videoWidth = windowWidth;
    videoHeight = videoWidth * 0.5625;
    fixStyle.value = {
      height: windowWidth * 0.5625 + "px",
      width: windowWidth + "px",
      "margin-bottom": (windowHeight - videoHeight) / 2 + "px",
      "margin-left": "initial",
    };
  } else {
    videoHeight = windowHeight;
    videoWidth = videoHeight / 0.5625;
    fixStyle.value = {
      height: windowHeight + "px",
      width: windowHeight / 0.5625 + "px",
      "margin-left": (windowWidth - videoWidth) / 2 + "px",
      "margin-bottom": "initial",
    };
  }
};
const myEvent = new Event("resize");
window.dispatchEvent(myEvent);

const loginForm = reactive({
  name: "",
  pwd: "",
});

const registerForm = reactive({
  name: "",
  pwd: "",
  pwdt: "",
  icad: "",
  code: "",
});

const register_form: Ref = ref();

interface Icallback {
  (message?: string | Error | undefined): Error | void;
}

interface Ivalidate {
  (rule: object, value: string, callback: Icallback): void;
}

interface IruleForm {
  title: {
    validator: Ivalidate;
    trigger: string;
  };
  author: {
    validator: Ivalidate;
    trigger: string;
  };
  outLink: {
    validator: Ivalidate;
    trigger: string;
  };
  text: {
    validator: Ivalidate;
    trigger: string;
  };
}

const validateName: Ivalidate = (rule, value, callback) => {
  if (value === "") {
    return callback(new Error("请输入账号"));
  }
  if (value.length > 12) {
    return callback(new Error("长度不能超过12个字符"));
  }
  callback();
};

const validatePwd: Ivalidate = (rule, value, callback) => {
  if (value === "") {
    return callback(new Error("请输入密码"));
  }
  if (value.length > 18) {
    return callback(new Error("长度不能超过18个字符"));
  }
  callback();
};

const validatePwdt: Ivalidate = (rule, value, callback) => {
  if (value === "") {
    return callback(new Error("请确认密码"));
  }
  if (value.length > 18) {
    return callback(new Error("长度不能超过18个字符"));
  }
  callback();
};

const validateIcad: Ivalidate = (rule, value, callback) => {
  if (value === "") {
    return callback(new Error("请输入注册码"));
  }
  if (value.length > 9) {
    return callback(new Error("长度不能超过9个字符"));
  }
  callback();
};

const validateCode: Ivalidate = (rule, value, callback) => {
  if (value === "") {
    return callback(new Error("请输入验证码"));
  }
  if (value.length > 4) {
    return callback(new Error("长度不能超过4个字符"));
  }
  callback();
};

const register_rules = ref({
  name: [{ validator: validateName, trigger: "blur" }],
  pwd: [{ validator: validatePwd, trigger: "blur" }],
  pwdt: [{ validator: validatePwdt, trigger: "blur" }],
  icad: [{ validator: validateIcad, trigger: "blur" }],
  code: [{ validator: validateCode, trigger: "blur" }],
});

let verifier = reactive({
  b4url: "",
  codeUuid: "",
});

const router = useRouter();
const route = useRoute();

const login = () => {
  router.push("/");
};

document.onkeydown = (e) => {
  if (e.key == "Enter") {
    if (route.fullPath == "/login") {
      login();
    }
  }
};

const register = () => {
  loginVisible.value = false;
};

let backtrack = () => {
  loginVisible.value = true;
};

const reImg = async () => {
  const { data: res } = await axios.get("/lc/system/getVerifierImg");
  verifier.b4url = res.base64;
  verifier.codeUuid = res.codeUuid;
};

const verification = async () => {
  const { data: res } = await axios.get("/lc/system/verification", {
    params: {
      codeUuid: verifier.codeUuid,
      code: registerForm.code,
    },
  });
  console.log(res);
};

const toRegister = () => {
  register_form.value.validate(async (valid: any) => {
    if (valid) {
      console.log("通过");
    } else {
      console.log("no");
    }
  });
  console.log(registerForm);
  // verification();
};
</script>

<style scoped>
.login {
  background: rgba(255, 255, 255, 0.2);
  z-index: 2;
  position: absolute;
  width: 350px;
  border-radius: 5px;
  height: 450px;
  box-shadow: 0px 0px 5px #333333;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 1s;
  -moz-transition: all 1s; /* Firefox 4 */
  -webkit-transition: all 1s; /* Safari 和 Chrome */
  -o-transition: all 1s; /* Opera */
}
.login-top {
  font-size: 24px;
  margin-top: 100px;
  padding-left: 10px;
  box-sizing: border-box;
  color: white;
  margin-bottom: 50px;
}
.login-main {
  margin-left: 35px;
  margin-right: 35px;
}
.login-footer {
  color: rgb(116, 114, 114);
  height: 3%;
  width: 100%;
  position: fixed;
  bottom: 5px;
}

.register {
  background: rgba(255, 255, 255, 0.2);
  z-index: 2;
  position: absolute;
  width: 350px;
  border-radius: 5px;
  height: 450px;
  box-shadow: 0px 0px 5px #333333;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 1s;
  -moz-transition: all 1s; /* Firefox 4 */
  -webkit-transition: all 1s; /* Safari 和 Chrome */
  -o-transition: all 1s; /* Opera */
}
.register-top {
  font-size: 24px;
  margin-top: 15px;
  padding-left: 10px;
  box-sizing: border-box;
  color: white;
  margin-bottom: 15px;
}
.register-main {
  margin-left: 35px;
  margin-right: 35px;
  margin-bottom: 20px;
}
.register-footer {
  color: rgb(116, 114, 114);
  height: 3%;
  width: 100%;
  position: fixed;
  bottom: 5px;
  text-align: center;
}
.homepage-hero-module,
.video-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.video-container .poster img {
  z-index: 0;
  position: absolute;
}

.video-container .filter {
  z-index: 1;
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
}

.fillWidth {
  width: 100%;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave {
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s all 2s ease-out 1s;
}

form {
  height: 450px;
  width: 400px;
  background-color: rgba(255, 255, 255, 0.13);
  position: absolute;
  transform: translate(-50%, -50%);
  top: 45%;
  left: 50%;
  border-radius: 10px;
  backdrop-filter: blur(1px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 50px 35px;
}
form * {
  font-family: "Poppins", sans-serif;
  color: #ffffff;
  letter-spacing: 0.5px;
  outline: none;
  border: none;
}
form h3 {
  font-size: 32px;
  font-weight: 500;
  line-height: 42px;
  text-align: center;
}

label {
  display: block;
  margin-top: 30px;
  font-size: 16px;
  font-weight: 500;
}
input {
  display: block;
  height: 50px;
  width: 95%;
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 3px;
  padding: 0 10px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 300;
}
::placeholder {
  color: #e5e5e5;
}
button {
  margin-top: 50px;
  width: 100%;
  background-color: #ffffff;
  color: #080710;
  padding: 15px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
}
.social {
  margin-top: 30px;
  display: flex;
}
.social div {
  background: red;
  width: 170px;
  border-radius: 3px;
  padding: 5px 10px 10px 5px;
  background-color: rgba(255, 255, 255, 0.27);
  color: #eaf0fb;
  text-align: center;
}
.social div:hover {
  background-color: rgba(255, 255, 255, 0.47);
}
.social .fb {
  margin-left: 25px;
}
.social i {
  margin-right: 4px;
}
.form-footer {
    color: rgb(114, 114, 114);
    height: 3%;
    width: 85%;
    position: fixed;
    bottom: 5px;
    text-align: center;
}
</style>
