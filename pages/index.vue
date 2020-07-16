<template>
  <main class="gospels-root">
    <Map />
    <div id="accordion-wrapper">
      <AccordionMain 
        v-for="(group,index) in gdata.htmlOutput"
        :key="index"
        v-bind="{ 
          groupIndex: index,
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
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
      gdata.gospels.widthWin = window.innerWidth;
    })
  },
  
  methods: {
    onResize() {
      gdata.gospels.widthWin = window.innerWidth;
      gdata.gospels.paralelMax = 
        Math.floor( window.innerWidth / gdata.gospels.widthMin );
      if (gdata.gospels.paralelCurrent > gdata.gospels.paralelMax) {
        gdata.gospels.paralelCurrent = gdata.gospels.paralelMax
      }
    }
  }

}
</script>

<style scoped>

/* .accordion-wrapper {

} */

</style>