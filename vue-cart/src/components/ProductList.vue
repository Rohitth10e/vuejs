<script setup>
import { computed } from "vue";
import { useToast } from "vue-toastification";
import { useStore } from "vuex";

const store = useStore();
const toast = useToast();

const products = computed(() => store.state.products.products);
const cart = computed(() => store.state.cart.items);

const getProductQty = (id) => {
  const prd = cart.value.find((item) => item.id === id);
  return prd ? prd.quantity : 0;
};

const addToCart = (product) => {
  store.commit("cart/addToCart", product);
  toast.success(`${product.name} added to cart!`)
};

const incrementQuantity = (id) => {
  store.commit("cart/incrementQuantity", id);
};

const decrementQuantity = (id) => {
  store.commit("cart/decrementQuantity", id);
};

</script>

<template>
  <div class="prd-container">
    <transition-group name="fade" tag="div">
      <div class="prd" v-for="(product, idx) in products" :key="product.id">
        <p>
          {{ product.name }} – Rs.<span>{{ product.price }} /-</span>
        </p>
        <div v-if="getProductQty(product.id)" class="qty-group">
          <button @click="decrementQuantity(product.id)">-</button>
          <span>{{ getProductQty(product.id) }}</span>
          <button @click="incrementQuantity(product.id)">+</button>
        </div>
        <div v-else>
          <button @click="addToCart(product)">Add to cart</button>
        </div>
      </div>
    </transition-group>
  </div>
</template>
