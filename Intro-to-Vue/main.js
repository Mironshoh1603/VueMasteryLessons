const app = Vue.createApp({
  data() {
    return {
      product: "Shoes",
      firstName: "Mironshoh",
      lastName: "Asadov",
      clicked: false,
      image: "./assets/images/socks_green.jpg",
      stock: true,
      quantity: 36,
      cart: 0,
      details: ["50% cotton", "30% wool", "20% polyester"],
      // solution
      sizes: ["S", "M", "L", "XL"],
      // solution
      variants: [
        { id: 2234, color: "green", image: "./assets/images/socks_green.jpg" },
        { id: 2235, color: "blue", image: "./assets/images/socks_blue.jpg" },
      ],
    };
  },
  methods: {
    addCart() {
      this.cart += 1;
    },
    changeImage(variantImage) {
      this.image = variantImage;
    },
  },
});

const mountedApp = app.mount("#app");
