<template>
  <div class="Smoothed">
    <div class='top'>商品推荐</div>
    <div style="display: flex;" class="all">
      <van-swipe @change="onChange" v-for="(item,index) in arr1" :key="index" :width="124" :loop="true">
        <div class="photo">
          <van-swipe-item>
            
              <img :src="item.image" alt style=" height:100px;width:124px;clear:both;" />
          
            <!-- <div class='name'>{{item.goodsName}}</div> -->
            <!-- <div>{{item.nallPrice}}{{item.price}}</div> -->
          </van-swipe-item>
        </div>

        <div class="custom-indicator" slot="indicator">{{ current + 1 }}/17</div>
      </van-swipe>
      <!-- <van-swipe @change="onChange" >
  <van-swipe-item class='nus'>1</van-swipe-item>
  <van-swipe-item class='nus'>2</van-swipe-item>
  <van-swipe-item class='nus'>3</van-swipe-item>
  <van-swipe-item class='nus'>4</van-swipe-item>
  <van-swipe-item class='nus'>4</van-swipe-item>
  <van-swipe-item class='nus'>4</van-swipe-item>
  <van-swipe-item class='nus'>4</van-swipe-item>

  <div class="custom-indicator" slot="indicator">
    {{ current + 1 }}/7
  </div>
</van-swipe> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    arr1: {
      type: Array,
      default: () => {}
    },
    floorr1: {
      type: Array,
      default: () => {}
    },
    floorr2: {
      type: Array,
      default: () => {}
    },
    floorr3: {
      type: Array,
      default: () => {}
    }
  },
  data() {
    return {
      current: 0
    };
  },
  components: {},
  methods: {
    onChange(index) {
      this.current = index;
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.Smoothed {
  width: 100%;
  height: 200px;
  border: 1px solid black;
  
 
}
.top{
  width: 100%;
  height: 20px;
  background-color: red;
}
.all{
  width: 2150px;
  height: 178px;
  flex-wrap: wrap;
border: 1px solid green;
}
.photo {
  width: 155px;
  height: 178px;
  border: 1px solid black;
}
.name{
  width: 100px;
  height: 20px;
  overflow: hidden;
text-overflow: ellipsis; //超出部分以省略号显
white-space: nowrap;

}
.nus{
  width: 100px;
  height: 20px;
  border: 1px solid black;
}
</style>


     