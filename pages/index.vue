<template>
  <main class="gospels-root">
    <Map />
    <AccordionMain 
      v-for="(group,index) in gdata.htmlOutput"
      :key="index"
      v-bind="{ 
        groupIndex: index,
        groupTitle: (Object.keys(group)).toString()
      }" />
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

}
</script>
