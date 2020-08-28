<template>
  <section
    class="accordion-sub"
    v-bind="{ expanded }"
  >
    <button 
      class="header-as-button"
      @click="onSubAccordionHeaderClick()"
    >
      <div
        class="title"
        v-text="store.timeline[groupIndex][groupTitle][eventIndex][0]"
      />
      <div
        v-show="!expanded"  
        ref="ranges"
        class="ranges"
      >
        <span
          v-for="reducedRange in reducedRanges"
          :key="reducedRange.indexInitial"
          class="reduced-range"
          v-text="reducedRange.range"
        />
      </div>
    </button>

    <transition
      @enter="showGospels"
      @leave="hideGospels"
      @after-leave="reinstateOverflow"
    >
      <section
        v-show="expanded"
        ref="gospels"
        :key="keyToForceRerender"
        class="gospels"
      >
        <div
          v-for="author in gospels.authors"
          v-show="author.indexCurrent + 1 <= store.gospels.parallelCurrent"
          :key="author.indexCurrent"
          class="gospel"
        >
          <div class="ranges sticky-ranges">
            <!-- https://stackoverflow.com/a/925252 -->
            <a
              v-for="range in gospels.ranges"
              :key="range.indexCurrent"
              href="javascript:"
              :class="[(range.indexInitial === author.indexInitial)
                ? 'self' : '']"
              @click.prevent="swapGospels({
                rangeInitial: range.indexInitial,
                rangeCurrent: range.indexCurrent,
                authorInitial: author.indexInitial,
                authorCurrent: author.indexCurrent,
              })"
              v-text="range.range"
            />
          </div>
          <div
            class="gospel-text"
            tabindex="-1"
            v-html="author.gospel"
          />
        </div>
      </section>
    </transition>
  </section>
</template>

<script>
import { store } from "~/components/store";

export default {
  
  props: {
    groupIndex: Number,
    groupTitle: String,
    eventIndex: Number,
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

    // TRANSITION METHODS (Transitions on header click)

    // https://vuejs.org/v2/guide/transitions.html#JavaScript-Hooks
    // https://stackoverflow.com/q/56537331
    showGospels(el) {
      // https://stackoverflow.com/a/54422687
      requestAnimationFrame(() => {
        el.style.height = el.scrollHeight + "px";
      });
    },

    hideGospels(el) {
      el.style.height = 0;
      el.style.overflow = "hidden";
    },

    reinstateOverflow(el) {
      el.style.overflow = "visible";
    },


    // OTHER METHODS

    onSubAccordionHeaderClick() {
      this.expanded = !this.expanded;

      // Main-Accordion closes the previously open Sub-Accordion
      // ...and perform height transition on itself.
      // (Sub-Accordion transition is automatic by CSS)
      this.$emit('on-sub-accordion-header-click', this.eventIndex);
      
      this.setLocation();
      
      if(this.gospels.authors.length === 0) {
        this.createGospels()

      // Initialising for future requestParentTransitionForSwapGospels()
      this.$refs.gospels.style.height = this.$refs.gospels.scrollHeight + 'px';
      };
    },
    

    setLocation() {
      store.map.currentLocation = store.timeline[
        this.groupIndex][this.groupTitle][this.eventIndex][1];
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

      this.requestParentTransitionForSwapGospels();
    },


    requestParentTransitionForSwapGospels() {
      const gospelsPrevious = this.$refs.gospels.scrollHeight;

      requestAnimationFrame(() => {
        const gospelsCurrent = this.$refs.gospels.scrollHeight;
        
        this.$emit('on-sub-accordion-gospel-swap', 
          gospelsCurrent - gospelsPrevious);
        
        this.$refs.gospels.style.height = gospelsCurrent + 'px';
      });
    },

  },

}
</script>

<style scoped>

  .accordion-sub {
    display: flex;
    flex-direction: column;
    background-color: var(--bg-light);
    border-bottom: 1px solid darkkhaki;
    cursor: default;
  }

  .accordion-sub:last-child {
    border: none;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
 
  .header-as-button {
    all: unset;
    position: sticky;
    position: -webkit-sticky;
    top: 3em;
    background-color: var(--bg-light);
    font-family: 'Times New Roman', serif;
    display: flex;
    flex-direction: column;
    padding-left: 5px;
    padding-right: 5px;
    border-radius: 5px;
  }

  .title {
    display: flex;
    align-items: center;
    font-weight: bold;
    min-height: 2em;
  }

  .ranges {
    display: flex;
    flex-wrap: wrap;
    font-size: 0.9em;
  }

  .sticky-ranges {
    justify-content: center;
    position: sticky;
    position: -webkit-sticky;
    top: 5em;
    background-color: var(--bg-light);
  }

  .reduced-range {
    padding-right: 14px;
  }

  a {
    padding-left: 7px;
    padding-right: 7px;
    padding-top: 5px;
    padding-bottom: 5px;
    background-color: var(--bg-light);
  }

  a:visited {
    color:blue;
  }

  .self {
    font-weight: bold;
    color:inherit;
    text-decoration: inherit;
  }

  .gospels {
    display: flex;
    transition: height 400ms;
  }

  .gospel {
    flex: 1;
    padding-left: 7px;
    padding-right: 7px;
    margin-bottom: 5px;
  }

  /* https://stackoverflow.com/a/47824568 */
  .gospel:not(:first-child) {
    border-left: solid gray 1px;
  }

  .gospel-text {
    overflow: hidden;
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

  /* popup */
  .gospel-text >>> details span {
    position: absolute;
    z-index: 1;
    background-color: var(--popup);
    padding: 5px;
    box-shadow: 6px 6px 3px 3px rgba(0,0,0,50%);
    /* https://stackoverflow.com/a/46547461 */
    margin: 0 auto 0 0;
    left: 10px;
    right: 10px;
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