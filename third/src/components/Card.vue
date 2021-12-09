<template>
  <div class="hello" :style="{
    backgroundColor: `rgba(${card.r}, ${card.g}, ${card.b}, ${card.a})`}" >
    {{ `rgba(${card.r}, ${card.g}, ${card.b}, ${card.a})` }}
    <button @click="onClickDelete">x</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "memoryCard",
  props: {
    card: Object,
  },
  methods: {
    onClickDelete() {
      console.log("this is delete");
      this.$emit("delete", this.card);
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
