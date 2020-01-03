<template>
  <div>
    <div class="Rotationchart">
      <van-swipe :autoplay="3000" indicator-color="white">
        <!-- 轮播图{{item.slides.image}} -->
        <van-swipe-item v-for="(item,index) in iamgs" :key="index">
          <img :src="item.image" alt style=" height: 150px;width:100%;" />
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    iamgs: {
      type: Array,
      default: () => {}
    }
  },

  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.Rotationchart {
  width: 100%;
  height: 150px;
  background-color: red;
}
</style>