//详情页
<template>
  <div>
    <div class="photo">
      <van-swipe :autoplay="3000" indicator-color="white">
        <!-- 轮播图{{item.slides.image}} -->
        <van-swipe-item>
          <img :src="arr.image" alt style=" height: 350px;width:100%;" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="name">
      <div>
         {{arr.name}}
      </div>
     <div style="color:red;">
       ￥{{ arr.present_price}}
     </div>
      </div>
    <div class="criticise">
      <div>
        运费：0
      </div>
      <div>
        剩余：{{arr.amount}}
      </div>
     
      <div>
         收藏:<van-icon name="like-o" @click='Give' id='color' />
      </div>
    </div>
    <div class="store">
    <div>
      <van-icon name="shop-o" />
      有赞的店
      <van-button type="danger" style="height:30px;line-height:30px;">官方</van-button>
    </div>
    <div>
      进入店铺
      <van-icon name="arrow" />
    </div>
    </div>
    <div class="commodity">
      <van-tabs v-model="active" >
 
  <van-tab title="商品详情">11111111111</van-tab>
  <van-tab title="商品评论">111111111111111111111111</van-tab>
</van-tabs>
    </div>

    <div>
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon icon="cart-o" text="购物车" info="5" />
        <van-goods-action-icon icon="shop-o" text="店铺" info="12" />
        <van-goods-action-button type="warning" text="加入购物车" />
        <van-goods-action-button type="danger" text="立即购买" />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
import { white } from 'color-name';
export default {
  data() {
    return {
      active:0,
      arr: {},
  id:''
    };
  },
  components: {},
  methods: {
          Give(){
            let id=document.getElementById('color');
            if(localStorage.key.name !==''){
          //  if(  id.style.background  = ''){
             console.log(1);
             id.style.background  = "red";
          //  }else{
          //      id.style.background  = "";
          //  }
                
          
                     
                     
            }
            else if(localStorage.key.name===''){
                id.style.background  = "";
            }
          },

    


    postData() {
      this.$api
        .goodOne(this.id)
        .then(res => {
          this.arr=res.goods.goodsOne;
         
          console.log(res);
          // console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
  
    this.id = this.$route.query.id;
    
   console.log(this.id);
   this.postData()
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.photo {
  width: 100%;
  height: 350px;
  // background-color: red;
}
.name {
  width: 100%;
  height: 40px;
  
  font-size: 13px;
  margin-left: 10px;
}
.criticise {
  width: 96%;
  height: 40px;

  font-size: 14px;
     display: flex;
  justify-content: space-between;
  line-height: 40px;
  margin-left: 10px;

}
.store {
  width: 96%;
  height: 40px;
  
    display: flex;
    font-size: 15px;
  justify-content:space-between;
  line-height: 40px;
  margin-left: 10px;
}
.commodity {
  width: 96%;
  height: 40px;

  line-height: 40px;
  font-size: 21px;
  display: flex;
  justify-content: space-around;
  margin-left: 10px;
}


</style>