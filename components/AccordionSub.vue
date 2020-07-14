<template>
  <div class="accordion-sub" v-bind="{ expanded }">
    <div
      class="header" 
      @click.prevent="expanded = ! expanded; setLocation();">
        {{ gdata.htmlOutput[groupIndex][groupTitle][eventIndex][5] }}
    </div>
    <div class="all-gospel">
      <Gospel
        v-for="(gospelIndex,lengthIndex) in availableGospels"
        :key="lengthIndex"
        v-bind="{ 
          groupIndex,
          groupTitle,
          eventIndex,
          gospelIndex,
          expanded }"
      />
      <!-- v-show="lengthIndex + 1 <= gdata.currentParalelGospels" -->
    </div>
  </div>
</template>

<script>
import { gdata } from "~/components/gdata";
import Gospel from "~/components/Gospel";

export default {

  components: {
    Gospel
  },
  
  props: {
    groupIndex: Number,
    groupTitle: String,
    eventIndex: Number
  },

  data () {
    return {
      gdata,
      expanded: false
    }
  },

  computed: {
    availableGospels() {
      const gospels = // [Default,MT,MK,LK,JN]
        gdata.htmlOutput[this.groupIndex][this.groupTitle][this.eventIndex]
          .slice(0,5);
      
      // getting indexes of available gospels
      return Array
        .from(gospels, (_, i) => i)
        .filter(i => gospels[i]);
    }
  },

  methods: {
    setLocation() {
      gdata.currentLocation = gdata.htmlOutput[
        this.groupIndex][this.groupTitle][this.eventIndex][6];
    }
  },

}
</script>

<style scoped>
 
  .header {
    position: sticky;
    /* Safari */
    position: -webkit-sticky;
    top: 3em;
    min-height: 2em;
    border-radius: 5px;
    border: 0px none lemonchiffon;
    background-color: lemonchiffon;
    font-family: 'Times New Roman', serif;
    font-weight: bold;
  }

  .accordion-sub {
    /* max-width: var(--singleWidth); */
    /* min-width: 290px; */
    background-color: lemonchiffon;
    border: 0px none lemonchiffon;
    border-bottom: 1px solid darkkhaki;
    padding: 5px;
    padding-bottom: 0px;
  }

  .accordion-sub:last-child {
    border: 0px none lemonchiffon;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .all-gospel {
    display: flex;
    /* max-width: var(--singleWidth); */
    min-width: 200px;
  }

</style>