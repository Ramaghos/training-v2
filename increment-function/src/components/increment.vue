<template>
  <section class="section ">
    <div>
      <p>{{ number }}</p>
    </div>
    <button type="button" @click="number++">Increment</button>
    <button type="button" @click="number--">Decrement</button>
  </section>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    let number = ref(0);

    return {
      number,
    };
  },
};
</script>
