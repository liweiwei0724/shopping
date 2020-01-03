<template>
  <div>
    <div class="all">
      <div class="listcities">
        <van-icon name="arrow-left" style="  float: left;  line-height: 50px;" />城市列表
      </div>
      <div>
        
      </div>
     
      <div>
        <van-search placeholder="请输入搜索关键词" class="search" v-model="value"  />
      </div>
      <div>
        <van-index-bar>
          <div>
            当前城市
            <div class='current'>
               {{city1}}
            </div>
          </div>
          <div>
               热门城市
            </div>
          <div  class='Popula'>
            
           
            <div v-for="(item,index) in city.data.hotCities" :key="index" class='Popular'> 
            {{item.name}}
          </div>
          </div>
          
          <van-index-anchor index="A" />
          <van-cell title="文本" />
          <van-cell title="文本" />
          <van-cell title="文本" />

          <van-index-anchor index="B" />
          <van-cell title="文本" />
          <van-cell title="文本" />
          <van-cell title="文本" />...
        </van-index-bar>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import city from '../../http/city'
Vue.prototype.city = city
export default {
  data() {
    return {
      arr:[],
      value: "",
      city1:''
    };
  },
  components: {},
  methods: {
    
  },




  mounted() {
    
    let _this = this
    AMap.plugin('AMap.Geolocation', function() {
  var geolocation = new AMap.Geolocation({
    // 是否使用高精度定位，默认：true
    enableHighAccuracy: true,
    // 设置定位超时时间，默认：无穷大
    timeout: 10000,
    // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
    buttonOffset: new AMap.Pixel(10, 20),
    //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
    zoomToAccuracy: true,     
    //  定位按钮的排放位置,  RB表示右下
    buttonPosition: 'RB'
  })

  geolocation.getCurrentPosition()
  AMap.event.addListener(geolocation, 'complete', onComplete)
  AMap.event.addListener(geolocation, 'error', onError)

  function onComplete (data) {
    // data是具体的定位信息
    _this.city1=data.addressComponent.city
    console.log(data);
  }

  function onError (data) {
    // 定位出错
  }
})

  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.all {
  width: 100%;
  height: 500px;
  // background-color: red;
}
.search {
  width: 90%;
  height: 40px;
  border: 1px solid black;
  margin: 0 auto;
}
.listcities {
  width: 100%;
  height: 50px;
  border: 1px solid black;
  line-height: 50px;
  font-size: 20px;
  text-align: center;
}
.current{
  width: 100px;
  height: 40px;
  border: 1px solid black;
}
.Popular{
  width: 100px;
  height: 40px;
  border: 1px solid black;
}
.Popula{
  width: 100%;
  height: 60px;
  display:flex;
  justify-content:space-around;
  flex-wrap: wrap;
}
</style>