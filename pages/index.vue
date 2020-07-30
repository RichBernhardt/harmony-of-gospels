<template>
    <main class="split-view" id="split-view">
      <div
        id="split-left"
        class="left"
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
      <div
        id="split-right"
        class="right"
        :style="{'width': splitPosition + 'px'}"
      />
    <Map />
    <ButtonMap />
    <ButtonMenu />
    <Menu />
  </main>
</template>

<script>
import { store } from "~/components/store";
import Map from "~/components/Map"
import AccordionMain from "~/components/AccordionMain";
import ButtonMap from "~/components/ButtonMap"
import ButtonMenu from "~/components/ButtonMenu"
import Menu from "~/components/Menu"

export default {

  components: {
    Map,
    AccordionMain,
    ButtonMap,
    ButtonMenu,
    Menu
  },


  data () {
    return {
      store,
      // https://stackoverflow.com/a/60888674
      ResizeObserver: null,
    }
  },
    
    
  computed: {
    splitPosition() { // 0.4 ≈ SVG map height/width x 2/3
      const style = (
        // portrait map details are easy to see from:
        (store.media.windowHeight > 528) &&
        // and if there's room for at least
        // two parallel gospels next to the map
        ((store.media.windowWidth - store.media.windowHeight * 0.4) > 
          (store.gospels.widthMin * 2)) &&
        // and if there is a pointing device available
        (store.media.hasPointer)
      )
        ? store.media.windowHeight * 0.4
        : 0;

      return style;
    }
  },


  created() {
    this.relocateDefaultGospel();
  },

  
  mounted() {
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Testing_media_queries
    store.media.hasPointer = !window.matchMedia("(pointer: none)").matches;

    // https://stackoverflow.com/a/47219938
    // https://stackoverflow.com/a/44779316
    window.addEventListener('resize', () => {
      requestAnimationFrame(this.onResize)});
    
    // https://stackoverflow.com/a/60888674
    this.ResizeObserver = new ResizeObserver(this.onResize)
      .observe(document.getElementById("split-left"));

    requestAnimationFrame(this.onResize);
  },
  

  methods: {
    onResize() {
      store.media.windowWidth = window.innerWidth;
      store.media.windowHeight = window.innerHeight;
      // This is not too elegant for bypassing '"split-left" is null' when
      // switching to the About page, but I haven't found any better yet.
      store.media.widthSplit =
        ( document.getElementById("split-left") )
        ? document.getElementById("split-left").offsetWidth
        : store.media.widthSplit;

      store.gospels.parallelMax =
        Math.min(
          5, // the maximum we need is five: default, mt, mk, lk, jn
          Math.floor( store.media.widthSplit / store.gospels.widthMin )
        );
        
      if (store.gospels.parallelCurrent > store.gospels.parallelMax) {
        store.gospels.parallelCurrent = store.gospels.parallelMax
      }
    },


    relocateDefaultGospel() {
      // Relocate the default-gospel to index 2 in each event:
      // [{groupTitle:
      //   [eventTitle,location,DEFAULT-GOSPEL,gospel[i],...],... },... ]
      let 
        g,  // group
        gt, // groupTitle
        e,  // event
        aux; // auxiliary

      for ( g = 0; g < store.timeline.length; g++) {
        gt = Object.keys(store.timeline[g]);
        for ( e = 0; e < store.timeline[g][gt].length; e++) {
          if (!Array.isArray(store.timeline[g][gt][e][2])) {
            // In TimelineRaw, the default record:
            // - can store only a reference to the selected gospel ("MT") or
            // - can have multiple entries which results an array-in-array
            // structure: [["author",chapter,verseFrom,verseTo],["author",... ].
            // Where there is a reference only, we find and replace it by
            // the referenced gospel instead...
            for ( aux = 3;
              store.timeline[g][gt][e][aux][0][0] !== store.timeline[g][gt][e][2];)
              { aux++ 
            }
            store.timeline[g][gt][e][2] = store.timeline[g][gt][e][aux];
            // ...and delete the referenced gospel from its 
            // original place to avoid any duplication
            store.timeline[g][gt][e].splice(aux,1);
          }
        }
      }
    },

  }

}
</script>

<style>

  html {
    font-size: 100%;
    font-family: 'Georgia', serif;
  }

  body {
    margin:0;
  }

  /* https://stackoverflow.com/a/34569741 */
  /* https://stackoverflow.com/questions/12266262/position-sticky-on-thead#comment88299740_12456444 */
  .split-view {
    width: 100%;
    display: table;
  }

  .left {
    display: table-cell;
  }

  .right { 
    display: table-cell;
    resize: horizontal;
    overflow: auto;
    /* One reason employing "resize" on the right side panel
    is that the children of the other side (left) panel are the
    accordions which have sticky headers. And sticky headers
    require overflow to be visible, while resize
    require overflow to be anything but visible:
    https://caniuse.com/#feat=css-sticky.
    The other reason is that by rotating this right side panel the
    draggable corner can be on the top center which I think is better 
    than on the bottom right corner (not even on view at page load): */
    transform: rotate(180deg);
    border-right: solid gray 1px;
  }

</style>