<template>
  <div
    class="accordion-sub"
    v-bind="{ expanded }"
  >
    <button 
      class="header"
      @click="onHeaderClick()"
    >
      <div
        class="title"
        v-text="store.timeline[groupIndex][groupTitle][eventIndex][0]"
      />
      <transition name="button-parallels">
        <nav v-show="expanded && gospels.ranges.length > 1">
          <button
            class="button-parallels"
            @click.stop="onParallelGospelsChange('minus')"
          >
            –
          </button>
          <button 
            class="button-parallels"
            @click.stop="onParallelGospelsChange('plus')"
          >
            +
          </button>
        </nav>
      </transition>
    </button>
    <section
      ref="gospels"
      class="gospels"
    >
      <div
        v-for="author in gospels.authors"
        v-show="
          expanded && author.indexCurrent + 1 <= store.gospels.parallelCurrent
          || !expanded && author.indexCurrent === 0
        "
        :key="author.indexCurrent"
        class="gospel"
      >
        <div class="range-container">
          <div
            ref="range" 
            :class="['range', (expanded) ? 'range-expanded' : '']"
          >
            <!-- https://stackoverflow.com/a/925252 -->
            <a
              v-for="range in gospels.ranges"
              v-show="(expanded || 
                !(!expanded 
                  && author.indexInitial === 0 
                  && range.range === '[Default]')
              )"
              :key="range.indexCurrent"
              href="javascript:"
              :class="[
                (expanded)
                ? (range.indexInitial === author.indexInitial) ? 'self' : ''
                : 'a-collapsed'
              ]"
              @click.prevent="onGospelsSwap({
                rangeInitial: range.indexInitial,
                rangeCurrent: range.indexCurrent,
                authorInitial: author.indexInitial,
                authorCurrent: author.indexCurrent,
              })"
              v-text="range.range"
            />
          </div>
          <div :class="[(expanded) 
                ? 'range-dummy-expanded' 
                : 'range-dummy-collapsed']" 
          />
        </div>
        <div
          v-show="expanded"
          ref="text"
          class="gospel-text"
          tabindex="-1"
          v-html="author.gospel"
        />
      </div>
    </section>
  </div>
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
        authors: [],
      },
      collapsedGospelsHeight: undefined,
    }
  },


  created() {
    this.createRanges();
    this.createGospels();
  },


  methods: {

    onHeaderClick() {
      // Set location
      store.map.currentLocation = store.timeline[
        this.groupIndex][this.groupTitle][this.eventIndex][1];

      // Transitions https://stackoverflow.com/q/56537331
      if (!this.expanded) { this.onHeaderClickTransitionExpand(); }
      else { this.onHeaderClickTransitionCollapse(); }
    },


    onHeaderClickTransitionExpand() {
      // Store collapsed height
      this.collapsedGospelsHeight = this.$refs.gospels.scrollHeight;
      // Apply collapsed height
      this.$refs.gospels.style.height = this.collapsedGospelsHeight + 'px';
      // Turn transitioned section visible
      this.expanded = true;

      setTimeout( () => {
        // Call Main-Accordion to start expand-transition
        this.$emit(
          'on-sub-accordion-header-click', 
          {
            indexClicked: this.eventIndex,
            heightDiff: this.$refs.gospels.scrollHeight - this.collapsedGospelsHeight
          }
        );
        // Trigger Sub-Accordion to start expand-transition
        this.$refs.gospels.style.height = this.$refs.gospels.scrollHeight + 'px';
      });
    },  


    onHeaderClickTransitionCollapse() {
      // Call Main-Accordion to start collapse-transition
      this.$emit(
        'on-sub-accordion-header-click', 
        {
          indexClicked: this.eventIndex,
          heightDiff: this.collapsedGospelsHeight - this.$refs.gospels.scrollHeight
        }
      );
      // Trigger Sub-Accordion to start collapse-transition
      this.$refs.gospels.style.height = this.collapsedGospelsHeight + 'px';     

      // Once transition finished, hide transitioned section
      setTimeout( () => {
        this.expanded = false;
      }, 1000);
    },


    onParallelGospelsChange(eventSource) {

      this.$refs.gospels.style.height = 
        this.$refs.gospels.scrollHeight + 'px';

      const heightBefore = 
        this.getHeightOnParallelGospelsChange("text") + 
          this.getHeightOnParallelGospelsChange("range");

      // on button "-"
      if (eventSource === "minus") {
        if( store.gospels.parallelCurrent > 1 ) {
          store.gospels.parallelCurrent--; }
      }
      // on button "+"
      if (eventSource === "plus") {
        if( store.gospels.parallelCurrent < store.gospels.parallelMax ) {
          store.gospels.parallelCurrent++; }
      }

      setTimeout(() => {

        const heightAfter = 
          this.getHeightOnParallelGospelsChange("text") +
            this.getHeightOnParallelGospelsChange("range");

        const heightDiff = heightAfter - heightBefore;

        this.$refs.gospels.style.height =
          Number(this.$refs.gospels.style.height.slice(0,-2)) + 
            heightDiff + 'px';

        this.$emit('on-sub-accordion-gospel-change', heightDiff);
      });
    },


    getHeightOnParallelGospelsChange(ref) {
      const refHeights = [];

      for (let i = 0; i < this.$refs[ref].length; i++) {
        refHeights.push(this.$refs[ref][i].scrollHeight);
      }

      return Math.max( ...refHeights );
    },


    onGospelsSwap({
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

      this.onParallelGospelsChange();
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


    createGospels() { // Create array of html for this particular SubAccordion
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

  .accordion-sub:last-child, .accordion-sub:last-child .gospels {
    border: none;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
 
  .header {
    all: unset;
    display: flex;
    align-items: center;
    position: sticky;
    position: -webkit-sticky;
    top: 3em;
    background-color: var(--bg-light);
    border-radius: 5px;
    padding-left: 5px;
    padding-right: 5px;
    font-family: 'Times New Roman', serif;
    font-weight: bold;
  }

  .title {
    display: flex;
    align-items: center;
    flex: 1;
    min-height: 2.3em;
    text-align: left;
  }

  nav {
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
  }

  .button-parallels {
    all: unset;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 2ch;
    height: 1em;
    border-radius: 1em;
    font-size: 2.3em;
    cursor: pointer;
    background-color: var(--bg-light);
  }

  .button-parallels:active {
    background-color: hsl(16, 100%, 75%);
  }

  .button-parallels:focus, .header-as-button:focus {
    filter: brightness(95%);
  }

  .button-parallels-enter-active, .button-parallels-leave-active {
    transition: opacity 400ms;
  }
  
  .button-parallels-enter, .button-parallels-leave-to {
    opacity: 0;
  }

/* ################################################# */

  .gospels {
    display: flex;
    transition: height 1s;
    /* alternative to overflow */
    background-color: var(--bg-light);
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

  .range-container {
    display: flex;
    justify-content: center;
  }

  .range {
    flex: 1;
    display: flex;
    justify-content: center;
    position: sticky;
    position: -webkit-sticky;
    top: 5em;
    background-color: var(--bg-light);
    font-size: 0.9em;
    max-width: fit-content;
  }

  .range-expanded {
    flex-wrap: wrap;
  }

  .range-dummy-expanded {
    flex: 0;
    transition: flex 400ms;
  }

  .range-dummy-collapsed {
    flex: auto;
    transition: flex 400ms;
  }

  a {
    padding-left: 7px;
    padding-right: 7px;
    padding-bottom: 7px;
    background-color: var(--bg-light);
    white-space: nowrap;
  }

  .a-collapsed {
    text-decoration: none;
    color: black;
  }

  a:visited {
    color:blue;
  }

  .self {
    font-weight: bold;
    color:inherit;
    text-decoration: inherit;
  }

  .gospel-text {
    z-index: -1;
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

  /* POPUPS */

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