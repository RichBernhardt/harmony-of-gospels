<template>
  <div 
    class="accordion-sub" v-bind="{ expanded }"    
  >
    <div
      class="header"
      tabindex="0"
      @click.prevent="atHeaderClick();"
      @keyup.space="atHeaderClick();"
    >
      {{ store.timeline[groupIndex][groupTitle][eventIndex][0] }}
    </div>
    <div
      v-show="!expanded"
      class="range-wrapper-header"
      @click.prevent="atHeaderClick();"
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
        v-for="author in gospels.authors"
        v-show="expanded && (author.indexCurrent + 1 <= store.gospels.parallelCurrent)"
        :key="author.indexCurrent"
        class="sole-gospel separator"
      >
        <div
          class="range-wrapper-gospel"
        >
          <span
            v-for="range in gospels.ranges"
            :key="range.indexCurrent"
            tabindex="0"
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
            @keyup.space="swapGospels({
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
        authors: []
      },
      // https://michaelnthiessen.com/key-changing-technique/
      keyToForceRerender: 0,
    }
  },


computed: {
    // Remove "[Default]" from the beginning
    reducedRanges() {
      const result = 
        (this.gospels.ranges[0].range === "[Default]")
        ? this.gospels.ranges.slice(1)
        : this.gospels.ranges.slice(0)
      return result;
    }
  },


  created() {
    this.createRanges();
  },


  methods: {
    
    atHeaderClick() {
      this.expanded = !this.expanded;
      this.setLocation();
      if(this.gospels.authors.length === 0) {
        this.createGospels()
      };
    },
    
    
    createRanges() {
      const g  = this.groupIndex;
      const gt = this.groupTitle;
      const e = this.eventIndex;
      let gospel, aux;

      for (gospel = 2; gospel < store.timeline[g][gt][e].length; gospel++) {

        aux = "";

        if ( store.timeline[g][gt][e][gospel].length > 1 ) {
          aux = "[Default]"
        }
        
        else {
          aux = ( gospel === 2 && store.timeline[g][gt][e][3] ) ? "[" : "";
          aux += // https://stackoverflow.com/a/53203953/
            store.timeline[g][gt][e][gospel][0][0]
              .replace(/(^.)(.*)/, (_,$1,$2) => $1 + $2.toLowerCase()) + " " + 
            store.timeline[g][gt][e][gospel][0][1] + ":" +
            store.timeline[g][gt][e][gospel][0][2] + "-" +
            store.timeline[g][gt][e][gospel][0][3];
          aux += ( gospel === 2 && store.timeline[g][gt][e][3] ) ? "]" : "";
        }

        this.gospels.ranges.push(
          {
            indexCurrent: gospel-2,
            indexInitial: gospel-2,
            range: aux
          }
        );
      }
    },


    createGospels() {
    // Create array of html for this particular SubAccordion
      const g  = this.groupIndex;
      const gt = this.groupTitle;
      const e = this.eventIndex;

      let
        gospel,
        entry, // default gospels can have multiple entries
        author,
        chapter,
        verse,
        aux;

      for (gospel = 2; gospel < store.timeline[g][gt][e].length; gospel++) {

        aux = "";

        for (
          entry = 0; 
          entry < store.timeline[g][gt][e][gospel].length; 
          entry++) {

          // ["author",chapter,verseFrom,verseTo]
          author = store.timeline[g][gt][e][gospel][entry][0];
          chapter = store.timeline[g][gt][e][gospel][entry][1];

          for (
            verse = store.timeline[g][gt][e][gospel][entry][2];
            verse <= store.timeline[g][gt][e][gospel][entry][3];
            verse++) {

              aux +=
                '<div class="verse-ref"><div>' + 
                author // https://stackoverflow.com/a/53203953/
                  .replace(/(^.)(.*)/, (_,$1,$2) => $1 + $2.toLowerCase()) +
                '</div>' + chapter + ':' + verse + '</div>' +
                store.gospels[author][chapter-1][verse-1];
          }
        }

        this.gospels.authors.push(
          {
            indexCurrent: gospel-2,
            indexInitial: gospel-2,
            gospel: aux
          }
        );
      }
    },


    setLocation() {
      store.map.currentLocation = store.timeline[
        this.groupIndex][this.groupTitle][this.eventIndex][1];
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

      [ this.gospels.authors[rangeCurrent].indexCurrent,
        this.gospels.authors[authorCurrent].indexCurrent ] =
        [ this.gospels.authors[authorCurrent].indexCurrent,
          this.gospels.authors[rangeCurrent].indexCurrent ];

      [ this.gospels.authors[rangeCurrent],
        this.gospels.authors[authorCurrent] ] =
        [ this.gospels.authors[authorCurrent],
          this.gospels.authors[rangeCurrent] ];

      // https://michaelnthiessen.com/key-changing-technique/
      this.keyToForceRerender++;
    },

  },

}
</script>

<style scoped>

  .accordion-sub {
    --bg: hsl(60, 100%, 84%);
    background-color: var(--bg);
    border-bottom: 1px solid darkkhaki;
  }

  .accordion-sub:last-child {
    border: none;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
 
  .header {
    display: flex;
    align-items: center;
    position: sticky;
    /* Safari */
    position: -webkit-sticky;
    top: 3em;
    padding-left: 5px;
    padding-right: 5px;
    min-height: 2em;
    border-radius: 5px;
    background-color: var(--bg);
    font-family: 'Times New Roman', serif;
    font-weight: bold;
  }

  .range-wrapper-header {
    display: flex;
    justify-content: flex-start;
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

  .all-gospel {
    display: flex;
  }

  .sole-gospel {
    flex: 1;
    padding-left: 7px;
    padding-right: 7px;
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

  .gospel-text >>> summary {
    text-decoration: underline;
  }

  .gospel-text >>> summary::-webkit-details-marker {
    display: none;
  }

  .gospel-text >>> details {
    display: inline;
    --popup: goldenrod;
    --summary: darkgoldenrod;
  }

  /* conditionally styling <summary> with pure CSS:
    https://stackoverflow.com/a/55032002 */
  .gospel-text >>> details[open] summary {
    background-color: var(--summary);
    border-radius: 1px;
    box-shadow: 0 2px 0 2px var(--summary);
  }

  .gospel-text >>> details span {
    position: absolute;
    z-index: 1;
    background-color: var(--popup);
    padding: 5px;
    box-shadow: 6px 6px 3px 3px rgba(0,0,0,50%);
    margin-right: 10px;
  }

  /* "outline-radius" without box-shadow:
    https://stackoverflow.com/a/11426967 */
  .gospel-text >>> details span:after {
    content: '';
    display: block;
    position: absolute;
    top: -2px;
    bottom: -2px;
    left: -2px;
    right: -2px;
    border-radius: 5px;
    border: 2px solid var(--summary);
  }

</style>