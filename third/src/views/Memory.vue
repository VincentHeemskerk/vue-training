<template>
    <Suspense>
        <template #default>
        <div class="memory">
            <h1>This is the memory card game page</h1>
            <input type="range" min="0" max="255" v-model="currentCard.r"><br/>
            <input type="range" min="0" max="255" v-model="currentCard.g"><br/>
            <input type="range" min="0" max="255" v-model="currentCard.b"><br/>
            <input type="range" min="0" max="1" step="0.01" v-model="currentCard.a"><br/>
            <blegh
                @delete="onClickDelete" @edit="onClickEdit"
                v-for="(cp, index) in cpArray" :key="index"
                :card="cp"
                ></blegh>
            <div class="colorbox" :style="{
    backgroundColor: `rgba(${currentCard.r}, ${currentCard.g}, ${currentCard.b}, ${currentCard.a})`}"></div>
            <button @click="addCard">New card</button>
            <button @click="saveCard">Save card</button>
        </div>
        </template>
        <template #fallback>
            {{ "Loading" }}
        </template>
    </Suspense>
</template>


<script lang="ts" setup>
import axios from "axios";
import blegh from "../components/Card.vue";
import { Card } from "../models/Card";
import { ref } from "vue";

let message = "This is dog";
let cpArray = ref([] as Card[]);
let currentCard = ref(new Card(0, 0, 0, 1));

function onClickDelete(card: Card) {
    console.log(card);
    cpArray.value.splice(cpArray.value.indexOf(card), 1);
}
function onClickEdit(card: Card) {
    console.log(card);
    currentCard.value = card;
}
function addCard() {
    currentCard.value = new Card(0, 0, 0, 1); 
    // cpArray.value.push(currentCard.value);
}
function saveCard() {
    cpArray.value.push(currentCard.value);
    addCard();
}

axios
    .get<Card[]>("https://my-json-server.typicode.com/cmmnct/patchDemo/patches")
    .then((response) => (cpArray.value = response.data))
    .catch(error => console.log(error));

</script>
<style>
.colorbox {
    height: 100px;
}
</style>