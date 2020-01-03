<template>
  <div>
    <div class="Advertisement">
      <img :src="list.PICTURE_ADDRESS" style="height:31px;" />
    </div>
  </div>
</template>

<script>
import { stringify } from "querystring";
export default {
  props: {
    list: {
      type: Object,
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
.Advertisement {
  width: 350px;
  height: 40px;

  margin: 20px auto;
}
</style>