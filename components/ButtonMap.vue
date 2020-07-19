<template>
  <button
    class="map-toggle"
    @click.prevent="store.mapOnShow = ! store.mapOnShow"
    >
  </button>
</template>

<script>
import { store } from "~/components/store";

export default {
  data() {
    return {
      store
    }
  }
}
</script>


<style scoped>
  .map-toggle {
    position: fixed;
    z-index: 2;
    top: 0.5em;
    right: 6em;
    width: 3em;
    height: 3em;
    border-radius: 1.5em;
    background-color: rgba(0,0,0,0);
  }
</style>