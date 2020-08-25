<template>
  <button
    :class="[store.map.onShow ? 'toggleText' : 'toggleMap']"
    @click.prevent="store.map.onShow = ! store.map.onShow"
  />
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
  button {
    all: unset;
    position: fixed;
    z-index: 3;
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