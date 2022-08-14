const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premum: true,
    };
  },
  methods: {
    addCart(id) {
      this.cart.push(id);
    },
  },
});
