// 几楼食品
<template>
 <div>
 <div class="body">
        <div class="top">休闲食品</div>
        <div >
          <div v-for='(item,index) in floorr1' :key='index' @click='dateils(item.goodsId)' >
           <img :src="item.image" alt="" style="width: 50%;" class='photo' >
           <!-- {{item.goodsId}} -->
        </div> 
        </div>
       
      </div>
      <div class="body">
        <div class="top">新鲜水果</div>
        <div >
          <div v-for='(item,index) in floorr2' :key='index' @click='dateils(item.goodsId)' >
           <img :src="item.image" alt="" style="width: 50%;" class='photo' >
           <!-- {{item.goodsId}} -->
        </div> 
        </div>
       
      </div>
    
      <div class="body">
        <div class="top2">营养奶品</div>
        <div >
          <div v-for='(item,index) in floorr3' :key='index'  @click='dateils(item.goodsId)'>
           <img :src="item.image" alt="" style="width: 50%;" class='photo' >
           <!-- {{item.goodsId}} -->
        </div> 
        </div>
       
      </div>
      <!-- <div>
        <div style="flex:1">
          <div></div>
          <div></div>
        </div>
        <div style="flex:1">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div> -->

      <!-- <div>
        <div style="flex:1"></div>
        <div style="flex:1"></div>
      </div> -->
    </div>
 
</template>

<script>
 export default {
   props: {
   
     floorr1:{
     type:Array,
     default:()=>{}
   },
    floorr2:{
     type:Array,
     default:()=>{}
   },
    floorr3:{
     type:Array,
     default:()=>{}
   }
  },
   data () {
     return {
          
     }
   },
   components: {

   },
   methods: {
  dateils(val) {
     
      this.$router.push({ name: "details", query: { id: val} });
      
    }
   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.body {
  width: 100%;
  height: 320px;
 
  
   
    
  

}
.photo{
float:left;
// margin-left: 5px;
}

.top {
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: red;
  background-color: #EDEDED;
}
.top2 {
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: red;
  background-color: #EDEDED;
}
.top3 {
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: red;
  background-color: #EDEDED;
}

</style>