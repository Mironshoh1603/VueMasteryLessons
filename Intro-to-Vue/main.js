const app = Vue.createApp({
  data() {
    return {
      product: "Shoes",
      firstName: "Mironshoh",
      lastName: "Asadov",
      clicked: false,
      image: "./assets/images/socks_green.jpg",
    };
  },
});

const mountedApp = app.mount("#app");
