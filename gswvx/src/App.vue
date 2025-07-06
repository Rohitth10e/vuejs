<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const count = computed(() => store.state.counter.count);
const name = computed(() => store.getters['user/name']);
const username = computed(() => store.getters['user/username']);

const increment = () => {
  store.commit("counter/increment");
};

const decrement = () => {
  store.commit("counter/decrement");
};

onMounted(()=>{
  store.dispatch('user/fetchUser');
})

const doubleCount = computed(() => store.getters["counter/doubleCount"]);
</script>

<template>
  <div>
    <h3 class="count-txt">Count: {{ count }}</h3>
    <h3 class="count-txt">Double: {{ doubleCount }}</h3>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
  <div class="user-container"> 
    <p>{{ name }}</p>
    <p>@{{ username }}</p>
  </div>
</template>

<style scoped>
.count-txt {
  color: white;
}
</style>
