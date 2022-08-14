app.component("product-display", {
  template: `<div class="product-display">
  <div class="product-container">
    <div class="product-image">
      <img :src="image" alt="" />
    </div>
    <div class="product-info">
      <h1>{{title}}</h1>
      <p v-if="onSale">{{ saleMessage }}</p>
      <p v-if="inStock">In Stock</p>
      <p v-else>Out of Stock</p>
      <p> Shipping {{shipping}}</p>
      <ul>
        <li v-for="detail in details">{{detail}}</li>
      </ul>

      <div
        v-for="(variant, index) in variants"
        :key="variant.id"
        @mouseover="updateVariant(index)"
        class="color-circle"
        :style="{backgroundColor:variant.color}"
      ></div>
      <button
        class="button"
        :class="{ disabledButton: !inStock }"
        @click="addCart"
        :disabled="!inStock"
      >
        Add to Cart
      </button>
    </div>
  </div>
</div>`,
  props: {
    premum: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      product: "Socks",
      brand: "Vue Mastery",
      selectedVariant: 0,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        {
          id: 2234,
          color: "green",
          image: "./assets/images/socks_green.jpg",
          quantity: 50,
        },
        {
          id: 2235,
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
          quantity: 0,
        },
      ],
      // solution
      onSale: true,
    };
  },

  methods: {
    changeImage(variantImage) {
      this.image = variantImage;
    },
    updateVariant(index) {
      this.selectedVariant = index;
    },
    addCart() {
      this.$emit("add-to-cart", this.variants[this.selectedVariant].id);
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    saleMessage() {
      if (this.onSale) {
        return this.brand + " " + this.product + " is on sale.";
      }
      return "";
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    shipping() {
      if (!this.shipping) {
        return "Free";
      }
      return 2.99;
    },
  },
});
