<script setup>
import ProductList from "./components/ProductList.vue";
import CartSummary from "./components/icons/CartSummary.vue";
import CardList from "./components/CardList.vue";
import CartIcon from "./components/CartIcon.vue";
</script>

<template>
  <div class="main">
    <aside class="cart-side">
      <div class="cart-container">
        <CardList />
        <CartSummary />
      </div>
    </aside>

    <aside class="product-side">
      <ProductList />
    </aside>
  </div>
</template>

<style scoped></style>
