<template>
<div>
   <div class="address" @click="address('/Listcities')">
    地图
    <van-icon name="arrow-down" />
  </div>
</div>
 
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    address(val){
      this.$router.push(val)
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.address {
  width: 80px;
  height: 100%;
  text-align: center;
  line-height: 55px;
}
</style>