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
      class="range-wrapper-header"
    >
      <span
        v-for="reducedRange in reducedRanges"
        :key="reducedRange.index"
        class="range"
      >
        {{ reducedRange.range }}
      </span>
    </div>
    <div 
      class="all-gospel"
      :key="keyToForceRerender"
    >
      <div
        v-for="(verses, versesIndex) in gospels.verses"
        :key="versesIndex"
        v-show="expanded && (versesIndex + 1 <= gdata.gospels.paralelCurrent)"
        class="sole-gospel separator"
      >
        <div
          class="range-wrapper-gospel"
        >
          <span
            v-for="range in gospels.ranges"
            :key="range.index"
            :class="['range', 'selectable', (range.index === versesIndex) ? 'self' : '']"
            @click.prevent="swapGospels(range.index, versesIndex)"
          >
            {{ range.range }}
          </span>
        </div>
        <div
          class="gospel-text"
          v-html="verses"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { gdata } from "~/components/gdata";

export default {
  
  props: {
    groupIndex: Number,
    groupTitle: String,
    eventIndex: Number
  },

  data () {
    return {
      gdata,
      expanded: false,
      gospels: {
        ranges: [],
        verses: ""
      },
      // https://michaelnthiessen.com/key-changing-technique/
      keyToForceRerender: 0,
    }
  },

  created() {
    this.createGospelRanges();
    this.cloneAvailableGospels();
  },


  computed: {
    // Removing "Default" from the beginning
    reducedRanges() {
      const result = 
        (this.gospels.ranges[0].range === "Default")
        ? this.gospels.ranges.slice(1)
        : this.gospels.ranges.slice(0)
      return result;
    }
  },


  methods: {

    createGospelRanges() {

      let i = 0;

      for (let gospel = 0; gospel <= 4; gospel++) {

        if (gdata.timeline[this.groupIndex][this.groupTitle][
            this.eventIndex][gospel]) {
          
          if (gospel === 0) { this.gospels.ranges.push(
            {
              index: i,
              range: "Default"
            }
          ) }

          else {            
            this.gospels.ranges.push(
              {
                index: i,
                range: 
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
              }
            );
          }

          i++;
          
        }
      }
    },


    cloneAvailableGospels() {
      const gospels = // [Default,Mt,Mk,Lk,Jn]
        gdata.htmlOutput[this.groupIndex][this.groupTitle][this.eventIndex]
          .slice(0,5);

      this.gospels.verses = Array
        .from(gospels, (v,i,a) => v)
        .filter( (v,i,a) => gospels[i]);
    },


    setLocation() {
      gdata.map.currentLocation = gdata.htmlOutput[
        this.groupIndex][this.groupTitle][this.eventIndex][6];
    },


    swapGospels(rangeIndex, versesIndex) {
      // https://stackoverflow.com/questions/872310/javascript-swap-array-elements
      [ this.gospels.ranges[rangeIndex].index, this.gospels.ranges[versesIndex].index ] = 
        [ this.gospels.ranges[versesIndex].index, this.gospels.ranges[rangeIndex].index ];

      [ this.gospels.verses[rangeIndex], this.gospels.verses[versesIndex] ] = 
        [ this.gospels.verses[versesIndex], this.gospels.verses[rangeIndex] ];
      
      // https://michaelnthiessen.com/key-changing-technique/
      this.keyToForceRerender++;
    },

  },

}
</script>

<style scoped>
 
  .header {
    position: sticky;
    /* Safari */
    position: -webkit-sticky;
    top: 3em;
    min-height: 1.5em;
    border-radius: 5px;
    border: 0px none lemonchiffon;
    background-color: lemonchiffon;
    font-family: 'Times New Roman', serif;
    font-weight: bold;
  }

  .accordion-sub {
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
  }

  .range-wrapper-header {
    display: flex;
    justify-content: flex-end;
    font-size: 0.9em;
    font-family: 'Times New Roman', serif;
  }

  .range-wrapper-gospel {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    font-weight: normal;
    font-size: 0.9em;
    font-family: 'Times New Roman', serif;
  }

  .range {
    padding-left: 7px;
    padding-right: 7px;
  }

  .selectable {
    padding-top: 5px;
    padding-bottom: 5px;
    color:blue;
    text-decoration: underline;
    cursor: pointer;
  }

  .self {
    font-weight: bold;
    /* https://stackoverflow.com/a/28083939 */
    /* https://css-tricks.com/almanac/properties/p/pointer-events/ */
    pointer-events: none;
    cursor: none;
    color:inherit;
    text-decoration: inherit;
  }

  .sole-gospel {
    flex: 1;
    padding-left: 5px;
    padding-right: 5px;
    margin-bottom: 5px;
  }

  /* https://stackoverflow.com/a/47824568 */
  .separator:not(:first-child) {
    border-left: solid gray 1px;
  }

  .gospel-text {
    margin-top: 1em;
    text-align: justify;
    /* https://stackoverflow.com/a/20818206/ */
    line-height: 1.4;
  }

  /* https://stackoverflow.com/a/13878902/ */
  /* https://vue-loader.vuejs.org/guide/scoped-css.html#deep-selectors */
  .gospel-text >>> .verse-ref {
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