<template>
  <svg
    tabindex="0"
    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
    width="100%" height="100%" viewBox="-70 -70 140 140" version="1.1"
    :style="{right: buttonMapOnShow}"
    @click.prevent="store.menuOnShow = !store.menuOnShow"
    @keyup.space="store.menuOnShow = !store.menuOnShow"
    @keyup.enter="store.menuOnShow = true"
    @keyup.esc="store.menuOnShow = false"
  >
    <g fill="none" stroke-width=".1">
      <circle r="70" fill="rgba(255,250,205,70%)" stroke="#000" stroke-width=".1"/>
    </g>
    <image xlink:href="~assets/flagEN.svg" x="-50" y="-50" width="40%" height="40%" />
    <g fill="none" stroke="#000" stroke-width="6" transform="translate(30,-30)">
      <circle r="12" />
      <path d="m10 10 15 15" stroke-linecap="round" />
    </g>
    <text x="0" y="40" fill="#000" font-family="serif" font-size="40px" 
    text-anchor="middle" textLength="75%">About</text>
  </svg>
</template>

<script>
import { store } from "~/components/store";

export default {
  data() {
    return {
      store
    }
  },

  computed: {
    buttonMapOnShow() {
      const right = 
        (store.media.windowWidth - store.media.widthSplit) < 40 
          ? "64px" 
          : "7px";

      return right;
    }
  }

}
</script>


<style scoped>
  svg {
    position: fixed;
    z-index: 3;
    bottom: 10px;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    border: 1px solid gray;
    cursor: pointer;
  }

  /* svg:focus {
    border: 1px solid black;
  } */


</style>