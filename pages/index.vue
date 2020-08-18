<template>
    <main
      id="split-view"
      :key="store.gospels.keyToRerenderOnVersionSwitch"
    >
      <div
        class="split-cell"
        :style="{'width': store.media.splitWidth + 'px'}"
      >
        <AccordionMain
          v-for="(group,groupIndex) in store.timeline"
          :key="groupIndex"
          v-bind="{ 
            groupIndex,
            groupTitle: (Object.keys(group)).toString()
          }"
        />
      </div>
      <div class="split-cell" />
    <Map />
    <ButtonMap v-bind="{ buttonMapOnShow }" />
    <ButtonMenu v-bind="{ buttonMapOnShow }" />
    <input
      id="split-grabber"
      v-model="store.media.splitWidth"
      type="range" 
      :max="store.media.windowWidth-16"
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
    buttonMapOnShow() {
      return store.media.splitWidth > 
          store.media.windowWidth - store.media.windowHeight * 0.4
    },
  },


  watch: {
    'store.media.splitWidth': 'setParallelGospels'
  },

  
  mounted() {
    // https://stackoverflow.com/a/47219938
    // https://stackoverflow.com/a/44779316
    window
      .addEventListener('resize', () => {
        requestAnimationFrame(this.onResize)});

    requestAnimationFrame(this.onResize);
  },
  

  methods: {
    onResize() {
      store.media.windowWidth = window.innerWidth;
      store.media.windowHeight = window.innerHeight;
     
      // The treshold of width of split view
      ( // portrait map details are easy to see from:
        (store.media.windowHeight > 528) &&
        // and if there's room for at least
        // two parallel gospels next to the map
        // (0.4 ≈ SVG map height/width x 2/3)
        ((store.media.windowWidth - store.media.windowHeight * 0.4) > 
          (store.gospels.widthMin * 2))
      )
        ? store.media.splitWidth = 
            store.media.windowWidth - store.media.windowHeight * 0.4
        : store.media.splitWidth = store.media.windowWidth;
      
      this.setParallelGospels();
    },


    setParallelGospels() {
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

<style>

  /* https://css-tricks.com/forums/topic/border-radius-for-outline/ */
  :focus {
    outline: none;
    /* box-shadow: 0 0 3px 0 black; */
  }

  html {
    font-size: 100%;
    font-family: 'Georgia', serif;
  }

  body {
    margin:0;
  }

  /* https://stackoverflow.com/a/34569741 */
  /* https://stackoverflow.com/questions/12266262/position-sticky-on-thead#comment88299740_12456444 */
  #split-view {
    width: 100%;
    display: table;
  }

  .split-cell {
    display: table-cell;
  }

  #split-grabber {
    pointer-events: none;
    position: fixed;
    top: 0; right: 0; bottom: 0; left: 0;
    -webkit-appearance: none;
    width: 100%;
    height: 100vh;
    background: transparent;
    outline: none;
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
    width: 4px;
    height: 100vh;
    background: lightgray;
    box-shadow: 1px 0px 1px 1px gray;
    cursor: col-resize;
  }

</style>