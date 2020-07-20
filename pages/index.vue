<template>
  <main>
    <Map />
    <div>
      <AccordionMain 
        v-for="(group,groupIndex) in store.htmlOutput"
        :key="groupIndex"
        v-bind="{ 
          groupIndex,
          groupTitle: (Object.keys(group)).toString()
        }" />
    </div>
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
    }
  }

}
</script>
