<template>
  <div>
    <div class="body">
      <div class="Return" @click="Return('/My')">
        <van-icon name="arrow-left" color="white" />
      </div>
      <div class="login">
        <div class="sigin">登录/注册</div>
        <div class="Input">
          <van-cell-group>
            <van-field v-model="name" placeholder="USERNAME" />
          </van-cell-group>
          <van-cell-group>
            <van-field v-model="pass"   type="password" placeholder="PASSWORD" />
          </van-cell-group>
          <van-cell-group>
            <van-field v-model="phone" label="手机号" placeholder="仅注册可用" error-message="手机号格式错误" />
          </van-cell-group>
          <van-cell-group>
            <van-field v-model="sms" center clearable label="短信验证码" placeholder="仅注册可用">
              <van-button slot="button" size="small" type="primary">发送验证码</van-button>
            </van-field>
          </van-cell-group>
          <div style="display:flex">
            <van-cell-group>
              <van-field v-model=" Code" placeholder="请输入验证码" label="验证码" label-width="60px" />
            </van-cell-group>

            <div class="Verification" v-html="codeimg" @click="code"></div>
          </div>
        </div>
        <div>
          <span class="Register">
            <van-button type="primary" style=" width: 85px;"   @click='Login'>登入</van-button>
          </span>
          <span class="Register">
            <van-button type="warning" style=" width: 85px;" @click="register">注册</van-button>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      phone: "",
      sms: "",
      pass: "",
      Code: "",
      codeimg: ""
    };
  },
  components: {},
  methods: {
    Return(val) {
      this.$router.push(val);
    },






    //注册
    register() {
      this.$api
        .register(this.name, this.pass, this.Code)
        .then(res => {
          console.log(res);
          if (res.code !== 200) {
           this.$toast(res.msg);
          } else {
            localStorage.setItem("name", this.name, "pass", this.pass);
            this.$router.push('/')
            this.$toast(res.msg);
          
          }
        })
        .catch(err => {
          console.log(err);
        });
    },



    //登入
    Login(){
      this.$api
        .login(this.name, this.pass, this.Code)
        .then(res => {
          console.log(res);
          if (res.code !== 200) {
           this.$toast(res.msg);
          } else {
            localStorage.setItem("name", this.name, "pass", this.pass);
            this.$router.push('/')
             this.$toast(res.msg);
         
                
          
          }
        })
        .catch(err => {
          console.log(err);
        });
    
    },


    code() {
      this.$api
        //点击跟换验证码
        .getAverify()
        .then(res => {
          this.codeimg = res;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getData() {
      //默认验证码
      this.$api
        .getAverify()
        .then(res => {
          this.codeimg = res;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getData();
    // this.getData2()
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.body {
  width: 100%;
  height: 667px;
  background-color: red;
  background: url("../assets/login.jpg");
}
.Return {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  text-align: center;
  background-color: gray;
  line-height: 35px;
}
.login {
  width: 80%;
  height: 500px;
  line-height: 30px;
  margin: 30% 10%;

  background-color: white;
}
.sigin {
  padding: 10px 10px;
  font-size: 19px;
}
.Input {
  margin-top: 80px;
  line-height: 10px;
}
.Register {
  margin-left: 10px;
}
.Verification {
  width: 80px;
  height: 40px;

  margin-right: 20px;
}
</style>