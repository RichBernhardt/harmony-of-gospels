<template>
  <button
    class="map-toggle"
    @click.prevent="gdata.mapOnShow = ! gdata.mapOnShow"
    >
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