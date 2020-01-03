<template>
  <div>
    <div class="boy-photo">
      <div v-for="(item,index) in arr" :key="index" class="photo">
        <div>
          <img :src="item.image" alt style=" height: 45px;width:45px;" />
        </div>
        <div class="write">{{item.mallCategoryName}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    arr: {
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
.boy-photo {
  width: 350px;
  height: 90px;
  border: 1px solid black;

  display: flex;
  justify-content: space-around;
  margin: 20px auto;
}
.boy-photo > div {
  width: 30px;
  height: 30px;
}
.photo {
  margin-top: 10px;
  margin-right: 15px;
}
.write {
  width: 50px;
  height: 10px;
  font-size: 12px;
}
</style>