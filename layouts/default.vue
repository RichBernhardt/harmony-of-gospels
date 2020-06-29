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
    font-family: serif;
  }

  /* Shorthand for: flex-grow: 1; flex-shrink: 0; flex-basis: 0; */
  .verses {
    flex: 1;
    margin: 5px;
    text-align: justify;
    line-height: 1.4; /* https://stackoverflow.com/a/20818206/ */
  }

  /* https://stackoverflow.com/a/13878902/ */
  .verse-ref {
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    font-size: 0.6rem;
    font-weight: bold;
    color: dimgray;
    padding-left: 0.5em;
    padding-right: 0.3em;
  }

</style>
