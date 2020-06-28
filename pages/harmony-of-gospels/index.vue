<template>
  <main class="gospels-root">
    <AccordionMain 
      v-for="(group,index) in gdata.htmlOutput"
      :key="index"
      v-bind="{ 
        groupIndex: index,
        groupTitle: (Object.keys(group)).toString()
      }" />
    <Map />
    <!-- <ButtonMap /> -->
    <!-- <ButtonMenu /> -->
  </main>
</template>

<script>
import { gdata } from "~/components/gdata";
import AccordionMain from "~/components/AccordionMain";
import Map from "~/components/Map"
// import ButtonMap from "~/components/ButtonMap"
// import ButtonMenu from "~/components/ButtonMenu"

export default {

  components: {
    AccordionMain,
    Map,
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


<style>
html {
  font-size: 100%;
}

/* .gospels-root {
  
} */


</style>
