<template>
  <div>
    <!-- Component creation order can be defined here. -->
    <!-- As the whole initialisation is lifecycle hook driven, it -->
    <!-- is cruical to have control over component creation order. -->
    <timelineBuilder />
    <htmlOutput />
    <nuxt />  <!-- nuxt element is replaced by each page -->
  </div>
</template>

<script>
// import { gdata } from "~/components/gdata";
import timelineBuilder from "~/components/TimelineBuilder";
import htmlOutput from "~/components/HtmlOutput";

export default {

  components: {
    timelineBuilder,
    htmlOutput
  },

}
</script>

<style>

  html {
    font-size: 100%;
    font-family: 'Georgia', serif;
    --singleWidth: 400px; /* 1(r)em = 16px */
  }

  body {
    margin:0;
  }

</style>
