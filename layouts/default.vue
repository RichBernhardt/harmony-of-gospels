<template>
  <div>
    <!-- Component creation order can be defined here. -->
    <!-- As the whole initialisation is lifecycle hook driven, it -->
    <!-- is cruical to have control over component creation order. -->
    <timelineBuilder />
    <htmlOutput />
    <nuxt />
  </div>
</template>

<script>
import timelineBuilder from "~/components/TimelineBuilder";
import htmlOutput from "~/components/HtmlOutput";

export default {

  components: {
    timelineBuilder,
    htmlOutput
  }

}
</script>

<style>
html {
  font-size: 100%;
}
</style>
