<template>
  <div 
    class="accordion-sub" v-bind="{ expanded }"
  >
    <div
      class="header" 
      @click.prevent="expanded = ! expanded; setLocation();">
        {{ store.htmlOutput[groupIndex][groupTitle][eventIndex][5] }}
    </div>
    <div
      v-show="!expanded"
      class="range-wrapper-header"
    >
      <span
        v-for="reducedRange in reducedRanges"
        :key="reducedRange.indexInitial"
        class="reduced-range"
      >
        {{ reducedRange.range }}
      </span>
    </div>
    <div 
      :key="keyToForceRerender"
      class="all-gospel"
    >
      <div
        v-for="author in gospels.author"
        v-show="expanded && (author.indexCurrent + 1 <= store.gospels.paralelCurrent)"
        :key="author.indexCurrent"
        class="sole-gospel separator"
      >
        <div
          class="range-wrapper-gospel"
        >
          <span
            v-for="range in gospels.ranges"
            :key="range.indexCurrent"
            :class="[
              'range', 
              (range.indexInitial === author.indexInitial) ? 'self' : 'selectable'
            ]"
            @click.prevent="swapGospels({
              rangeInitial: range.indexInitial,
              rangeCurrent: range.indexCurrent,
              authorInitial: author.indexInitial,
              authorCurrent: author.indexCurrent,
            })"
          >
            {{ range.range }}
          </span>
        </div>
        <div
          class="gospel-text"
          v-html="author.gospel"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "~/components/store";

export default {
  
  props: {
    groupIndex: Number,
    groupTitle: String,
    eventIndex: Number
  },

  data () {
    return {
      store,
      expanded: false,
      gospels: {
        ranges: [],
        author: ""
      },
      // https://michaelnthiessen.com/key-changing-technique/
      keyToForceRerender: 0,
    }
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


  created() {
    this.createGospelRanges();
    this.createAvailableGospels();
  },


  methods: {
    createGospelRanges() {

      for (let gospel = 0; gospel <= 4; gospel++) {

        if (store.timeline[this.groupIndex][this.groupTitle][
            this.eventIndex][gospel]) {
          
          if (gospel === 0) { this.gospels.ranges.push(
            {
              indexCurrent: gospel,
              indexInitial: gospel,
              range: "Default"
            }
          ) }

          else {            
            this.gospels.ranges.push(
              {
                indexCurrent: gospel,
                indexInitial: gospel,
                range: 
                  store.timeline[this.groupIndex][this.groupTitle][
                    this.eventIndex][gospel][0][0]
                    // https://stackoverflow.com/a/53203953/
                    .replace(/(^.)(.*)/, (_,$1,$2) => $1 + $2.toLowerCase()) + " " +  
                  store.timeline[this.groupIndex][this.groupTitle][
                    this.eventIndex][gospel][0][1] + ":" +
                  store.timeline[this.groupIndex][this.groupTitle][
                    this.eventIndex][gospel][0][2] + "-" +
                  store.timeline[this.groupIndex][this.groupTitle][
                    this.eventIndex][gospel][0][3]
              }
            );
          }          
        }
      }
    },


    createAvailableGospels() {
      this.gospels.author = 
        store.htmlOutput[this.groupIndex][this.groupTitle][this.eventIndex]
          .slice(0,5) // [Default,Mt,Mk,Lk,Jn]
          .filter( (v,i,a) => a[i] );
      
      for (let i = 0; i < this.gospels.author.length; i++) {
        this.gospels.author[i] = {
          indexInitial: i,
          indexCurrent: i,
          gospel: this.gospels.author[i],
        }
      }
    },


    setLocation() {
      store.map.currentLocation = store.htmlOutput[
        this.groupIndex][this.groupTitle][this.eventIndex][6];
    },


    swapGospels({
      rangeInitial, 
      rangeCurrent, 
      authorInitial, 
      authorCurrent
    }) {
      
      // https://stackoverflow.com/questions/872310/javascript-swap-array-elements
      [ this.gospels.ranges[rangeInitial].indexCurrent, 
        this.gospels.ranges[authorInitial].indexCurrent ] =
        [ this.gospels.ranges[authorInitial].indexCurrent,
        this.gospels.ranges[rangeInitial].indexCurrent ];

      [ this.gospels.author[rangeCurrent].indexCurrent,
        this.gospels.author[authorCurrent].indexCurrent ] =
        [ this.gospels.author[authorCurrent].indexCurrent,
          this.gospels.author[rangeCurrent].indexCurrent ];

      [ this.gospels.author[rangeCurrent],
        this.gospels.author[authorCurrent] ] =
        [ this.gospels.author[authorCurrent],
          this.gospels.author[rangeCurrent] ];

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

  .reduced-range {
    padding-left: 7px;
    padding-right: 7px;
  }

  .range {
    padding-left: 7px;
    padding-right: 7px;
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .selectable {
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