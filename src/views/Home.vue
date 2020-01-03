<template>
  <div class="home">
    <div class="shopping-top" style="didplay:flex;">
      <div>
        <Address></Address>
      </div>
      <div>
        <Search></Search>
      </div>
    </div>

    <Rchart :iamgs="iamgs"></Rchart>
    <MallCategoryName :arr="arr"></MallCategoryName>
    <Advertisement :list="list"></Advertisement>
    <Smoothed :arr1="arr1"></Smoothed>
    <Commodity :floorr1="floorr1" :floorr2="floorr2" :floorr3="floorr3"></Commodity>
    <Listshopping :list1="list1"></Listshopping>
  </div>
</template>

<script>
import Address from "../components/Home/Address";
import Rchart from "../components/Home/Rchart";
import Search from "../components/Home/Search";
import MallCategoryName from "../components/Home/MallCategoryName";
import Advertisement from "../components/Home/Advertisement";
import Smoothed from "../components/Home/Smoothed";
import Commodity from "../components/Home/Commodity";
import Listshopping from "../components/Home/Listshopping";

export default {
  components: {
    Listshopping,
    Commodity,
    Smoothed,
    MallCategoryName,
    Advertisement,
    Address,
    Rchart,
    Search
  },
  data() {
    return {
      iamgs: [],
      value: "",
      arr: [],
      list: {},
      arr1: [],
      floorr1: [],
      floorr2: [],
      floorr3: [],
      list1: []
    };
  },

  methods: {
    getData() {
      this.$api
        .recommend()
        .then(res => {
          this.iamgs = res.data.slides;
          this.arr = res.data.category;
          this.list = res.data.advertesPicture;
          this.arr1 = res.data.recommend;
          this.floorr1 = res.data.floor1;
          this.floorr2 = res.data.floor2;
          this.floorr3 = res.data.floor3;
          this.list1 = res.data.hotGoods;
          // console.log(res.data.hotGoods);
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

<style scoped >
.shopping-top {
  width: 100%;
  height: 55px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
}
.address {
  width: 100px;
  height: 100%;
  text-align: center;
  line-height: 55px;
}
.boy {
  width: 100%;
  height: 100%;
  border: 1px solid black;
}
.home {
  width: 100%;
  height: 100%;
}
</style>