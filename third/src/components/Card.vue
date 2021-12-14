<template>
  <div class="hello" :style="{
    backgroundColor: `rgba(${card.r}, ${card.g}, ${card.b}, ${card.a})`}" >
    {{ `rgba(${card.r}, ${card.g}, ${card.b}, ${card.a})` }}
    <button @click="onClickDelete">X</button>
    <button @click="onClickEdit">E</button>
  </div>
</template>

<script lang="ts" setup>
import { Card } from "@/models/Card";
const emits = defineEmits(["delete", "edit"]);

interface iProps {
  card?: Card;
}

// interface testProps {
//   name?: string;
// }

let name = "memoryCard";

const props = withDefaults(defineProps<iProps>(), { card: new Card(0, 0, 0, 1) });
// const testprops = withDefaults(defineProps<testProps>(), { name: "test"});


const onClickDelete = function() {
    console.log("this is delete");
    emits("delete", props.card);
  }
const onClickEdit = function() {
    console.log("this is edit");
    emits("edit", props.card);
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
