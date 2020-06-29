<template>
  <main class="gospels-root">
    <!-- As the whole initialisation is lifecycle hook driven, it -->
    <!-- is cruical to have control over component creation order. -->
    <!-- Component creation order can be defined here. -->
    <timelineBuilder />
    <htmlOutput />
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
import timelineBuilder from "~/components/TimelineBuilder";
import htmlOutput from "~/components/HtmlOutput";
import AccordionMain from "~/components/AccordionMain";
import Map from "~/components/Map"
// import ButtonMap from "~/components/ButtonMap"
// import ButtonMenu from "~/components/ButtonMenu"

export default {

  components: {
    timelineBuilder,
    htmlOutput,
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
