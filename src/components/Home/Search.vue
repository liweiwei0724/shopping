<template>
  <div>
    <van-search
      placeholder="请输入搜索关键词"
      v-model="value"
      background="blue"
      style="width: 290px;line-height"
    />
  </div>
</template>

<script>
export default {
  floorr1: {
    type: Array,
    default: () => {}
  },
  data() {
    return {
      value: ""
    };
  },
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>