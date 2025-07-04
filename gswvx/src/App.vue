<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const count = computed(() => store.state.count);
const isLiked = computed(()=>store.state.isLiked);
const isReset = computed(()=>store.state.isReset);

const like = () => {
  store.commit("like")
}

const reset = () => {
  store.commit("reset")
}

</script>

<template>
  <p class="count-txt">{{ count }}</p>

  <div>
    <p v-if="isLiked">User liked</p>
    <p v-else>User disliked</p>
    <button @click="like">
      {{ isLiked ? 'unlike' : 'like' }}
    </button>
    <button @click="reset">reset</button>
  </div>

</template>

<style scoped>
.count-txt{
  color: white;
}
</style>
