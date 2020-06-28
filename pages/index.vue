<template>
  <div class="routes">
    <!-- As the whole initialisation is lifecycle hook driven, it -->
    <!-- is cruical to have control over component creation order. -->
    <!-- Component creation order can be defined here. -->
    <timelineBuilder />
    <htmlOutput />
    <nuxt-link to="/harmony-of-gospels">Harmony of Gospels</nuxt-link>
    <nuxt-link to="/about">About</nuxt-link>
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


<style scoped>

html {
  font-size: 100%;
}

.routes {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

</style>
