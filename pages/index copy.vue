<template>
    <main class="split-view">
      <div class="left">
        <AccordionMain
          v-for="(group,groupIndex) in store.timeline"
          :key="groupIndex"
          v-bind="{ 
            groupIndex,
            groupTitle: (Object.keys(group)).toString()
          }"
        />
      </div>
      <div class="right"></div>
    <Map />
    <!-- <ButtonMap /> -->
    <!-- <ButtonMenu /> -->
  </main>
</template>

<script>
import { store } from "~/components/store";
import Map from "~/components/Map"
import AccordionMain from "~/components/AccordionMain";
// import ButtonMap from "~/components/ButtonMap"
// import ButtonMenu from "~/components/ButtonMenu"

export default {

  components: {
    Map,
    AccordionMain,
    // ButtonMap,
    // ButtonMenu
  },


  data () {
    return {
      store
    }
  },


  created() {
    this.relocateDefaultGospel();
  },

  
  mounted() {
    // https://stackoverflow.com/a/47219938
    // https://stackoverflow.com/a/44779316
    window.addEventListener('resize', () => {
      requestAnimationFrame(this.onResize)});

    requestAnimationFrame(this.onResize);
  },
  

  methods: {
    onResize() {
      store.gospels.widthWin = window.innerWidth; // px

      store.gospels.paralelMax =
        Math.min(
          5, // the maximum we need is five: default, mt, mk, lk, jn
          Math.floor( window.innerWidth / store.gospels.widthMin )
        );
        
      if (store.gospels.paralelCurrent > store.gospels.paralelMax) {
        store.gospels.paralelCurrent = store.gospels.paralelMax
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
            // the full gospel instead...
            for ( aux = 3;
              store.timeline[g][gt][e][aux][0][0] !== store.timeline[g][gt][e][2];)
              { aux++ 
            }
            store.timeline[g][gt][e][2] = store.timeline[g][gt][e][aux];
            // ...and delete the full gospel from its 
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
    is that: Any ancestor between the sticky element and its 
    user-scrollable container with overflow computed as
    anything but visible/clip will effectively prevent
    sticking behavior. https://caniuse.com/#feat=css-sticky.
    And the children (accordions) both have sticky headers.
    The other reason is that the draggable corner can be on
    the top center by rotating this right side panel: */
    transform: rotate(180deg);
    border-right: solid gray 1px;
  }

</style>