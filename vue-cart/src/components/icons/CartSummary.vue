<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
import { useToast } from "vue-toastification";

const store = useStore();
const toast = useToast();

const products = computed(() => store.state.products.products);
const cart = computed(() => store.state.cart.items);


const clearCart = () => {
  store.commit("cart/clearCart");
  toast.info('Cart cleared')
};

const cartTotal = computed(() => store.getters["cart/cartTotal"]);

</script>

<template>
  <div class="cart-summary">
    <p><strong>Total:</strong> Rs.{{ cartTotal }}/-</p>
    <button @click="clearCart">Clear Cart</button>
  </div>
</template>
