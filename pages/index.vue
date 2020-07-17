<template>
  <main>
    <Map />
    <div>
      <AccordionMain 
        v-for="(group,groupIndex) in gdata.htmlOutput"
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
import { gdata } from "~/components/gdata";
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
      gdata
    }
  },

  mounted() {
    // https://stackoverflow.com/a/47219938
    // https://stackoverflow.com/a/49263255
    window.addEventListener('resize', this.onResize);
    this.onResize();
  },
  
  methods: {
    onResize() {
      gdata.gospels.widthWin = window.innerWidth; // px

      gdata.gospels.paralelMax =
        Math.min(
          5, // the maximum we need is five: default, mt, mk, lk, jn
          Math.floor( window.innerWidth / gdata.gospels.widthMin )
        );
        
      if (gdata.gospels.paralelCurrent > gdata.gospels.paralelMax) {
        gdata.gospels.paralelCurrent = gdata.gospels.paralelMax
      }
    }
  }

}
</script>
