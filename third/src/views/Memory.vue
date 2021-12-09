<template>
    <Suspense>
        <template #default>
        <div class="memory">
            <h1>This is the memory card game page</h1>
            <memoryCard
                @delete="onClickDelete"
                v-for="(cp, index) in cpArray" :key="index"
                :card="cp"></memoryCard>
        </div>
        </template>
        <template #fallback>
            {{ "Loading" }}
        </template>
    </Suspense>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import memoryCard from "../components/Card.vue";
import { Card } from "../models/Card";

export default defineComponent({
    name: "Memory",
    components: {
        memoryCard,
    },
    data() {
        return {
            message: "This is dog",
            cpArray: [] as Card[],
            currentCard: new Card(0, 0, 0, 0),
        };
    },
    created() {
      axios
      .get("https://my-json-server.typicode.com/cmmnct/patchDemo/patches")
      .then((response) => (this.cpArray = response.data))
      .catch(error => console.log(error));
    },
    methods: {
        onClickDelete(card: Card) {
            console.log(card);
            this.cpArray.splice(this.cpArray.indexOf(card), 1);
        }
    }
});
</script>
