<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { QIcon, QBadge } from 'quasar'

const store = useStore()
const cartCount = computed(() => store.state.cart.items.length)
</script>

<template>
  <div class="cart-icon-wrapper">
    <q-badge color="red" floating transparent :label="cartCount">
      <q-icon name="shopping_cart" size="32px" color="primary" />
    </q-badge>
  </div>
</template>

<style scoped>
.cart-icon-wrapper {
  position: relative;
  padding: 1rem;
  cursor: pointer;
}
</style>
