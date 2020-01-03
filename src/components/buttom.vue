<template>
  <div class="buttom">
    



<!-- <van-tabbar
  v-model="active"
  active-color="#07c160"
  inactive-color="#000"
>
  <van-tabbar-item icon="home-o">商场</van-tabbar-item>
  <van-tabbar-item icon="search">分类</van-tabbar-item>
  <van-tabbar-item icon="freinds-o">我的</van-tabbar-item>
  <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
</van-tabbar> -->



    <van-tabbar 
    route class="all"
     v-model="active"
  active-color="red"
  
  inactive-color="#000"
    >
      <van-tabbar-item  icon="home-o" replace to="/" >
        商场
      </van-tabbar-item>
      <van-tabbar-item  icon="bars" replace to="/Category" >
        分类
      </van-tabbar-item>
      <van-tabbar-item  icon="shopping-cart-o" replace to="/ShoppingCart" >
       购物车
      </van-tabbar-item>
      <van-tabbar-item  icon="friends-o" replace to="/My" >
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 2
    };
  },
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.all {
  border: 1px solid black;
  width: 375px;
  height: 40px;
}

</style>