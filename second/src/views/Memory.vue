<template>
    <div>
        <h1>Memory</h1>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
})
export default class Memory extends Vue {
  msg!: string;
}
</script>