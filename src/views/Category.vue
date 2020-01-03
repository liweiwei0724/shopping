//商品 分类
<template>
  <div>
    <div class="top-shopping">商品分类</div>

    <div style="display: flex;">

      <div>
        <van-sidebar v-model="activekey" @change="onChange">
          <div v-for="(item,index) in arr" :key="index">
            <div>
              <van-sidebar-item :title="`${item.mallCategoryName}`" class="shoppinglist" />
            </div>
          </div>
        </van-sidebar>
      </div>
      
        <div v-for="(item,index) in arr" :key="index">
          <van-tabs>
            <van-tab
              v-for="(item,index) in item.mallCategoryId[activekey]"
              :key="index"
              :title="`${item.mallSubName}`"
            ></van-tab>
          </van-tabs>
       
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      activekey:0,
      arr: []
    };
  },

  methods: {
    onChange(index) {
      if( this.item.mallCategoryId[index]===this.item.mallCategoryId[index]){
        item.mallSubName
        console.log(10);
        }
        else{}
      
    },
    // getData() {
    //   this.$api
    //     .category()
    //     .then(res => {
    //       console.log(res);
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // }
    getData() {
      this.$api
        .category(this.arr)
        .then(res => {
          this.arr = res.data.category;
          // console.log(this.arr);
       
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getData();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.top-shopping {
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 20px;
  border: 1px solid black;
}
.shoppinglist {
  width: 80px;
  // border: 1px solid #000;
}
</style>