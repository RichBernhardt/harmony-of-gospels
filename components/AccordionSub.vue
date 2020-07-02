<template>
  <div class="accordion-sub" v-bind="{ expanded }">
      <div
        class="header" 
        @click.prevent="expanded = ! expanded; setLocation();">
          {{ gdata.htmlOutput[groupIndex][groupTitle][eventIndex][5] }}
      </div>
      <div
        class="range-wrapper"
        v-show="!expanded">
          <span
            v-for="range in ranges"
            :key="range"
            >
              {{ range }}
          </span>
      </div>
      <div
        class="range-wrapper"
        v-show="expanded"
        >
        <span>Default | </span>
        <span
          v-for="range in ranges"
          :key="range"
          >
            {{ range }}
        </span>
      </div>
        <div
          class="gospel-text"
          v-show="expanded"
          v-html="gdata.htmlOutput[groupIndex][groupTitle][eventIndex][0]"
        />
  </div>
</template>

<script>
import { gdata } from "~/components/gdata";

export default {
  name: "AccordionSub",
  
  props: {
    groupIndex: Number,
    groupTitle: String,
    eventIndex: Number
  },

  data () {
    return {
      gdata,
      expanded: false,
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
            .replace(/(^.)(.*)/, (_,$1,$2) => $1 + $2.toLowerCase()) +
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

  methods: {
    setLocation() {
      gdata.currentLocation = gdata.htmlOutput[
        this.groupIndex][this.groupTitle][this.eventIndex][6];
    }

  },

}
</script>

<style scoped>

  .accordion-sub {
    max-width: 100%;
    min-width: 290px;
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
  
  .range-wrapper {
    float: right;
    overflow: auto;
    font-weight: normal;
    font-size: 0.9em;
    font-family: 'Times New Roman', serif;
  }

  /* Shorthand for: flex-grow: 1; flex-shrink: 0; flex-basis: 0; */
  .gospel-text {
    margin-top: 1.5em;
    text-align: justify;
    line-height: 1.4; /* https://stackoverflow.com/a/20818206/ */
  }

</style>