<template>
  <button
    class="menu"
    @click.prevent=""
    >
    <hr/>
    <hr/>
    <hr/>
  </button>
</template>

<script>
import { gdata } from "~/components/gdata";

export default {
  data() {
    return {
      gdata
    }
  }
}
</script>


<style scoped>
  .menu {
    position: fixed;
    z-index: 2;
    top: 0.5em;
    right: 2em;
    width: 3em;
    height: 3em;
    background-color: rgba(0,0,0,0);
  }
</style>