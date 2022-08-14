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
    };
  },
});

const mountedApp = app.mount("#app");
