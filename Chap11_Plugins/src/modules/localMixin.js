
const localMixin = {
  data() {
    return {
      num: 0
    }
  },
  methods: {
    increase() {
      this.num += 1;
    },
    decrease() {
      this.num -= 1;
    }
  },
  created() {
    console.log('Local Mixin')
  }
}
export default localMixin;
