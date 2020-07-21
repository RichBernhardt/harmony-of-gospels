<template>
  <main>
    <Map />
    <AccordionMain 
      v-for="(group,groupIndex) in store.timeline"
      :key="groupIndex"
      v-bind="{ 
        groupIndex,
        groupTitle: (Object.keys(group)).toString()
      }"
    />
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
      // Relocate the default-gospel to index 2 of each event:
      // [{groupTitle:
      //   [eventTitle,location,gospel[default],gospel[i],...],... },... ]
      let 
        g,  // group
        gt, // groupTitle
        e,  // event
        aux; // auxiliary

      for ( g = 0; g < store.timeline.length; g++) {
        gt = Object.keys(store.timeline[g]);
        for ( e = 0; e < store.timeline[g][gt].length; e++) {
          if (!Array.isArray(store.timeline[g][gt][e][2])) {
            for ( aux = 3;
              store.timeline[g][gt][e][aux][0][0] !== store.timeline[g][gt][e][2];)
              { aux++ 
            }
            store.timeline[g][gt][e][2] = store.timeline[g][gt][e][aux];
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

</style>