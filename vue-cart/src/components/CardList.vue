<script setup>
import { computed } from "vue";
import { useToast } from "vue-toastification";
import { useStore } from "vuex";
const store = useStore();
const toast = useToast();

const cart = computed(() => store.state.cart.items);

const removeFromCart = (id) => {
  store.commit("cart/removeFromCart", id);
  toast.success('Product removed from cart')
};

const incrementQuantity = (id) => {
  store.commit("cart/incrementQuantity", id);
};

const decrementQuantity = (id) => {
  store.commit("cart/decrementQuantity", id);
};
</script>

<template>
    <div v-if="cart.length === 0">
      <p>Your cart is empty. Add some products!</p>
    </div>

    <div v-else>
      <p><strong>Your cart:</strong> {{ cart.length }} items</p>

      <transition-group name="fade" tag="div">
        <div v-for="(item, idx) in cart" :key="item.id" class="cart-item">
          <p>
            {{ item.name }} – {{ item.quantity }} pcs × Rs.{{ item.price }} =
            <strong>Rs.{{ item.price * item.quantity }}</strong>
          </p>
          <div class="qty-group">
            <button
              @click="decrementQuantity(item.id)"
              :disabled="item.quantity === 1"
            >
              -
            </button>
            <span>{{ item.quantity }}</span>
            <button @click="incrementQuantity(item.id)">+</button>
          </div>
          <button @click="removeFromCart(item.id)">Remove</button>
        </div>
      </transition-group>

      <CartSummary />
    </div>
</template>
