<script setup>
import { computed,onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

const count = computed(() => store.state.count);
const isLiked = computed(() => store.state.isLiked);
const isReset = computed(() => store.state.isReset);
const message = computed(() => store.getters.statusMessage);
const doubleCount = computed(() => store.getters.doubleCount);
const greetingMessage = computed(() => store.getters.greetingMessage);
const isAdult = computed(() => store.getters.isAdult);

const name = computed(()=>store.state.user.name);

onMounted(()=>{
  store.dispatch('fetchUser')
})


const like = () => {
  store.commit("like");
};

const reset = () => {
  store.commit("reset");
};
</script>

<template>
  <div>
    <p class="count-txt">{{ count }}</p>
    <p>{{ message }}</p>
    <p>{{ doubleCount }}</p>
    <p>{{ greetingMessage }}</p>
    <p>{{ isAdult }}</p>
    <div>
      <p v-if="isLiked">User liked</p>
      <p v-else>User disliked</p>
      <button @click="like">
        {{ isLiked ? "unlike" : "like" }}
      </button>
      <button @click="reset">reset</button>
    </div>

    <div>
      <h1>Hello {{ name }}</h1>
    </div>

  </div>
</template>

<style scoped>
.count-txt {
  color: white;
}
</style>
