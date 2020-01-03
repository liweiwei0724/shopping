<template>
<div>
  <div class='all'>
<span class='photo'>
  <van-icon name="arrow-left" />
</span>
<span>
  个人资料
</span>
 </div> 
 <div>
  <!-- <van-cell-group>
  <van-field
    v-model="username"
    label="用户名"
    placeholder="请输入用户名"
    error
  />
  <van-field
    v-model="phone"
    label="手机号"
    placeholder="请输入手机号"
    
  />
</van-cell-group>
<van-field
    v-model="phone"
    label="昵称"
    placeholder="请输入昵称"
    
  />
</van-cell-group> -->

<van-address-edit
  :area-list="areaList"
  show-postal
 
  show-set-default
  show-search-result
  :search-result="searchResult"
  :area-columns-placeholder="['请选择', '请选择', '请选择']"
  @save="onSave"
  
  @change-detail="onChangeDetail"
/>
 </div>
 <div class='top'>
    <van-tabbar 
    v-model="active"
    :fixed="false"
    >
  <van-tabbar-item icon="home-o">标签</van-tabbar-item>
  <van-tabbar-item icon="search">标签</van-tabbar-item>
  <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
  <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
</van-tabbar>
 </div>
  
</div>


</template>

<script>
 export default {
   data () {
     return {
       active:0,
     areaList,
      searchResult: []
     }
   },
   components: {

   },
   methods: {
   onSave() {
      Toast('save');
    },
    onDelete() {
      Toast('delete');
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }];
      } else {
        this.searchResult = [];
      }
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
.all{
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
}
.photo{
  float: left;
}

.top{
  width:100% ;
  height: 40px;
  border: 1px solid black;
}
</style>