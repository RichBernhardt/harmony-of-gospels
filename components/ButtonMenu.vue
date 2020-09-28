<template>
    <svg
      tabindex="0"
      xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="-70 -70 140 140" version="1.1"
      :style="{'right': rightPosition}"
      @click.prevent="
        store.menu.onShow = !store.menu.onShow;
        store.menu.initialLoad = true;"
      @keyup.space="
        store.menu.onShow = !store.menu.onShow;
        store.menu.initialLoad = true;"
      @keyup.enter="
        store.menu.onShow = true;
        store.menu.initialLoad = true;"
      @keyup.esc="store.menu.onShow = false"
    >
      <g fill="none" stroke-width=".1">
        <circle r="70" fill="hsla(44,100%,88%,70%)" stroke="#000" stroke-width=".1" />
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
  props: {
    buttonMapOnShow: Boolean
  },

  data() {
    return {
      store
    }
  },

  computed: {
    rightPosition() {
      if (this.buttonMapOnShow)
        { return "64px" }
      else
        { return "7px" }
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
    transition: right 400ms;
  }

</style>