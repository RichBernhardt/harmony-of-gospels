<template>
  <main>
    <article
      id="split-left"
      :key="store.gospels.keyToRerenderOnVersionSwitch"
      :style="{'flex': flexRatio}"
    >
      <slot />
    </article>

    <article
      v-show="isSplitView"
      :style="{'flex': 1-flexRatio}"
    />

    <!-- https://stackoverflow.com/a/63473733/ -->
    <input
      v-show="isSplitView"
      id="split-grabber"
      v-model="store.media.splitWidth"
      type="range"
      :max="store.media.windowWidth"
    >
  </main>
</template>

<script>
import { store } from "~/components/store";

export default {
  data: () => ({
    store
  }),
    

  computed: {
    flexRatio() {
      if (this.isSplitView) {
        // return store.media.splitWidth / (store.media.windowWidth + 18);
        return store.media.splitWidth / store.media.windowWidth * 0.987;
      }
      else { return 1 }
    },

    isSplitView() {
      return (
        // Portrait map details are easy to see from:
        store.media.windowHeight > 528) &&
        // and if there's room for at least
        // two parallel gospels next to the map
        // (0.4 ≈ SVG map height/width x 2/3)
        ((store.media.windowWidth - store.media.windowHeight * 0.4) > 
          (store.gospels.widthMin * 2))
    }
  },


  watch: {
    'store.media.splitWidth': 'onSplitViewResize'
  },


  mounted() {
    // https://stackoverflow.com/a/47219938
    // https://stackoverflow.com/a/44779316
    window
      .addEventListener('resize', () => {
        requestAnimationFrame(this.onWindowResize)});

    requestAnimationFrame(this.onWindowResize);
  },


  methods: {

    onWindowResize() {
      store.media.windowWidth = window.innerWidth;
      store.media.windowHeight = window.innerHeight;
     
      (this.isSplitView)
        ? store.media.splitWidth = 
            store.media.windowWidth - store.media.windowHeight * 0.4
        : store.media.splitWidth = store.media.windowWidth;
      
      this.onSplitViewResize();
    },


    onSplitViewResize() {
      store.gospels.parallelMax =
        Math.min(
          5, // the maximum we need is five: default, mt, mk, lk, jn
          Math.floor( store.media.splitWidth / store.gospels.widthMin )
        );
        
      if (store.gospels.parallelCurrent > store.gospels.parallelMax) {
        store.gospels.parallelCurrent = store.gospels.parallelMax
      }
    },
    
  }
  
}
</script>

<style scoped>
  main {
    display: flex;
    width: 100%;
  }

  #split-grabber {
    pointer-events: none;
    position: fixed;
    top: 0; bottom: 0; left: 0;
    -webkit-appearance: none;
    /* Safari allows dragging behind scroll bar */
    width: calc(100% - 12px);
    height: 100vh;
    background: transparent;
    outline: none;
    margin: 0;
  }

  #split-grabber::-webkit-slider-thumb {
    pointer-events: auto;
    -webkit-appearance: none;
    appearance: none;
    width: 5px;
    height: 100vh;
    background: lightgray;
    box-shadow: 1px 2px 2px 0px gray;
    cursor: col-resize;
  }

  #split-grabber::-moz-range-thumb {
    pointer-events: auto;
    -webkit-appearance: none;
    appearance: none;
    width: 5px;
    height: 100vh;
    background: lightgray;
    box-shadow: 1px 2px 2px 0px gray;
    cursor: col-resize;
  }

</style>