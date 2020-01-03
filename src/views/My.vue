<template>
  <div>
    <div class="my-top">会员中心</div>
    <div class="backgroud">
      <div class="photo">
        <van-icon name="setting-o" color='white' @click='Setup' />
      </div>
      <div class="name">
        <div class="portrait"></div>
        <div>欢迎您：{{name}}</div>
      
          <div @click="clicksign('/Login')" >登入/注册</div>
      
        
        
      </div>
    </div>
    <div class="label">


   <van-tabbar :v-model="active"
   :fixed="false"
   >
  <van-tabbar-item icon="home-o">待付款</van-tabbar-item>
  <van-tabbar-item icon="search">待发货</van-tabbar-item>
  <van-tabbar-item icon="friends-o">待收货</van-tabbar-item>
  <van-tabbar-item icon="setting-o" info="5">评价</van-tabbar-item>
  <van-tabbar-item icon="setting-o">已完成</van-tabbar-item>
</van-tabbar>
      
    </div>

    
  <transition name="van-fade">
  <div :v-show="visible" class='mins'>
      <div>
        <van-icon name="shop-collect-o" />
      全部订单
    </div>
     <div>
    <van-icon name="arrow" />
  </div>
    </div>
</transition>

<!-- 上滑进入 -->
<transition name="van-slide-up">
  <div :v-show="visible" class='mins'>
    <div>
      <van-icon name="points" />收藏商品
    </div>
     <div>
    <van-icon name="arrow" />
  </div>
    </div>
</transition>

<!-- 下滑进入 -->
<transition name="van-slide-down" >
  <div :v-show="visible" class='mins'>
    <div>
      <van-icon name="cash-back-record" />地址管理
    </div>
     <div>
    <van-icon name="arrow" />
  </div>
     </div>
 
</transition>

<!-- 左滑进入 -->
<transition name="van-slide-left">
  <div :v-show="visible" class='mins'>
      <div>
        <van-icon name="wap-home-o" />
      最近浏览
    </div>
     <div>
    <van-icon name="arrow" />
  </div>
    </div>
</transition>

<!-- 右滑进入 -->

    
  </div>
</template>

<script>
export default {
  data() {
    return {
      name:'',
      active: 0,
      visible:''
    };
  },
  components: {},
  methods: {
    clicksign(val) {
      this.$router.push(val);
    },
    Setup(){
      this.$router.push('/person')
    }
  },
  mounted() {
     this.name = localStorage.getItem("name");
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.my-top {
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
}
.backgroud {
  width: 100%;
  height: 200px;
  background-color: #e30c7b;
  position: relative;
}
.label {
  width: 100%;
  height: 60px;
  
  text-align: center;
  margin: 10xp;
  line-height: 100px;
}

.photo {
  width: 30px;
  height: 30px;
  float: right;
}
.portrait {
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 50%;
  
}
.name {
  width: 150px;
  height: 150px;
  position:absolute;
  margin:5% 35%;
}
.mins{
  margin-top:10px; 
  width: 100%;
  height: 40px;
  line-height: 40px;
  display: flex;
  justify-content: space-between;
}
</style>