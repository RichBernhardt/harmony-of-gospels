<template>
  <span
    v-show="(store.windowWidth - store.gospels.widthSplit) < 40"
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
    top: 60px;
    right: 30px;
    width: 56px;
    height: 56px;
    border-radius: 28px;
    border: 0px none rgba(0,0,0,0);
    background-color: rgba(0,0,0,0);
  }

  /* Alternatively: https://medium.com/js-dojo/how-to-pass-variable-to-inline-background-image-in-vue-12150f25bd60 */
  .toggleText {
    background-image: url('~assets/toggleText.png');
  }

  .toggleMap {
    background-image: url('~assets/toggleMap.png');
  }
  
</style>