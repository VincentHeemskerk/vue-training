<template>
    <Suspense>
        <template #default>
        <div class="memory">
            <h1>This is the memory card game page</h1>
            <blegh
                @delete="onClickDelete"
                v-for="(cp, index) in cpArray" :key="index"
                :card="cp"></blegh>
        </div>
        </template>
        <template #fallback>
            {{ "Loading" }}
        </template>
    </Suspense>
</template>


<script lang="ts" setup>
import { defineComponent } from "vue";
import axios from "axios";
import blegh from "../components/Card.vue";
import { Card } from "../models/Card";
import { ref } from "vue";

let message = "This is dog";
let cpArray = ref([] as Card[]);
let currentCard = new Card(0, 0, 0, 0);

function onClickDelete(card: Card) {
    console.log(card);
    cpArray.value.splice(cpArray.value.indexOf(card), 1);
}
axios
    .get<Card[]>("https://my-json-server.typicode.com/cmmnct/patchDemo/patches")
    .then((response) => (cpArray.value = response.data))
    .catch(error => console.log(error));

</script>
