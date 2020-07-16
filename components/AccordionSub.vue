<template>
  <div 
    class="accordion-sub" v-bind="{ expanded }"
    
  >
    <div
      class="header" 
      @click.prevent="expanded = ! expanded; setLocation();">
        {{ gdata.htmlOutput[groupIndex][groupTitle][eventIndex][5] }}
    </div>
    <div
      v-show="!expanded"
      class="range-wrapper"
    >
      <span
        v-for="range in ranges"
        :key="range"
        class="range"
      >
        {{ range }}
      </span>
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
          expanded,
          lengthIndex,
          ranges }"
      />
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
      expanded: false,
      ranges: [],
    }
  },

  created() {
    for (let gospel = 1; gospel <= 4; gospel++) {

      if (gdata.timeline[this.groupIndex][this.groupTitle][
          this.eventIndex][gospel]) {
          
        this.ranges.push(
          gdata.timeline[this.groupIndex][this.groupTitle][
            this.eventIndex][gospel][0][0]
            // https://stackoverflow.com/a/53203953/
            .replace(/(^.)(.*)/, (_,$1,$2) => $1 + $2.toLowerCase()) + " " +  
          gdata.timeline[this.groupIndex][this.groupTitle][
            this.eventIndex][gospel][0][1] + ":" +
          gdata.timeline[this.groupIndex][this.groupTitle][
            this.eventIndex][gospel][0][2] + "-" +
          gdata.timeline[this.groupIndex][this.groupTitle][
            this.eventIndex][gospel][0][3]
        );
      }
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
      gdata.map.currentLocation = gdata.htmlOutput[
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
    /* max-width: fit-content; */
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

  .range-wrapper {
    display: flex;
    /* flex-wrap: wrap; */
    justify-content: flex-end;
    /* font-weight: normal; */
    font-size: 0.9em;
    font-family: 'Times New Roman', serif;
  }

  .range {
    padding-left: 7px;
    padding-right: 7px;
  }

</style>