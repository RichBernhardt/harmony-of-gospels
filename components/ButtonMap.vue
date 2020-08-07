<template>
  <span
    v-show="(store.media.windowWidth - store.media.widthSplit) < 40"
    @click.prevent="store.map.onShow = ! store.map.onShow"
    :class="['map-toggle', (store.map.onShow) ? 'toggleText' : 'toggleMap']"
    >
  </span>
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
    z-index: 3;
    /* top: 10px; */
    bottom: 10px;
    right: 7px;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    border: 1px solid gray;
    cursor: pointer;
  }

  /* Alternatively: https://medium.com/js-dojo/how-to-pass-variable-to-inline-background-image-in-vue-12150f25bd60 */
  .toggleText {
    background-image: url('~assets/toggleText.svg');
    background-size: 150% 150%;
  }

  .toggleMap {
    background-image: url('~assets/toggleMap.jpg');
  }
  
</style>