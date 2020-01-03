<template>
  <div>
    <div class="Sellwell">
      <div class="top">热销商品</div>
      <div>
        <div
          v-for="(item,index) in list1"
          :key="index"
          class="write"
          @click="dateils(item.goodsId)"
        >
          <div class="photo">
            <img :src="item.image" alt style="width: 100%;" />
            <!-- <br style="clear:both;" /> -->
            <div class="name">{{item.name}}</div>
            <span>￥{{item.mallPrice}}</span>
            <span style="color:gray">￥{{item.price}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list1: {
      type: Array,
      default: () => {}
    }
  },
  data() {
    return {};
  },
  components: {},
  methods: {
    dateils(val) {
      // console.log(id);
      this.$router.push({ name: "details", query: { id: val} });
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.Sellwell {
  width: 100%;
  height: 400px;
}
.name {
  width: 100%;
  height: 20px;
  overflow: hidden;
  text-overflow: ellipsis; //超出部分以省略号显
  white-space: nowrap;
  clear: both;
}
.photo {
  width: 50%;
  text-align: center;
  color: red;
  margin: 10xp 10px;
  float: left;
  // margin-left: 5px;
}

.top {
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background-color: #ededed;
}
.write {
  height: 60%;
  //   overflow: hidden;

  // text-overflow: display;
  // white-space: nowrap;
}
</style>