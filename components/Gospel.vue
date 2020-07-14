<template>
  <div class="sole-gospel">
      <div
        class="range-wrapper"
      >
        <span
          v-show="expanded"
        >Default | </span>
        <span
          v-for="range in ranges"
          :key="range"
        >
          {{ range }}
        </span>
      </div>
      <div
        v-show="expanded"
        class="gospel-text"
        v-html="gdata.htmlOutput[groupIndex][groupTitle][eventIndex][gospelIndex]"
      />
    </div>
</template>

<script>
import { gdata } from "~/components/gdata";

export default {

  props: {
    groupIndex: Number,
    groupTitle: String,
    eventIndex: Number,
    gospelIndex: Number,
    expanded: Boolean,
  },

  data() {
    return {
      gdata,
      ranges: []
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

    if (this.ranges.length > 1) {
      for (let i = 0; i < this.ranges.length-1; i++) {
        this.ranges[i] += " | ";
      }
    }
  },
  
}
</script>

<style scoped>

  .sole-gospel {
    flex: 1;
    min-width: 10em;
    padding-left: 5px;
    padding-right: 5px;
    margin-bottom: 5px;
  }

  /* https://stackoverflow.com/a/47824568 */
  .sole-gospel:not(:last-child) {
    border-right: solid gray 1px;
  }

  .range-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    font-weight: normal;
    font-size: 0.9em;
    font-family: 'Times New Roman', serif;
  }

  .gospel-text {
    margin-top: 1em;
    text-align: justify;
    /* https://stackoverflow.com/a/20818206/ */
    line-height: 1.4;
  }

</style>