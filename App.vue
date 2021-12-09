<template>
  <p v-bind:style="{ backgroundColor: myBG }">
    Hallo mooie componentjes! {{ msg }}
  </p>
  <p :class="{ active: isActive }">Testen</p>
  <p :style="{ color: activeColor, fontSize: fontSize + 'px' }">tralila</p>
  <button v-on:click="onClickButton" v-if="!loggedIn">klik maar even</button>
  <div v-if="cardArray" v-on:click="onClickCards">
    <div
      v-bind:id="card.set"
      v-for="card in shuffle(cardArray)"
      :key="card.set"
    >
      {{ card.card1 }}
    </div>
  </div>
</template>
<script>
export default {
  name: "HalloComponent",
  props: {},
  data() {
    return {
      count: 1,
      cardArray: [],
      msg: "voor de vue training",
      myBG: "rgba(255, 192, 203, 50)",
      isActive: true,
      fontSize: 20,
    };
  },
  created() {
    // `this` points to the vm instance
    console.log("count is: " + this.count); // => "count is: 1"
    fetch("cards.json")
      .then((response) => response.json())
      .then((data) => (this.cardArray = this.shuffle((data)));
  },
  mounted() {
    // `this` points to the vm instance
    console.log("mounted count is: " + this.count); // => "count is: 1"
  },
  computed: {},
  methods: {
    onClickButton() {
      console.log("yes")
      this.isActive = !this.isActive;
    },
    onClickCards(e) {
      console.log(e.target);
    },
    shuffle(array) {
      var m = array.length,
        t,
        i;
      // While there remain elements to shuffle…
      while (m) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);
        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
      }
      return array;
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.active {
  background-color: aquamarine;
}
</style>
