<template>
  <div
    class="accordion-sub"
    v-bind="{ expanded }"
  >
    <button
      ref="header"
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
        <div ref="ranges" class="range-container">
          <div :class="['range-dummy', (expanding) 
                ? 'range-dummy-expanded' 
                : 'range-dummy-collapsed']" 
          />
          <div
            v-show="author.indexCurrent === 0 || expanded === expanding"
            ref="range"
            :class="['range', (expanding) ? 'range-expanded' : 'range-collapsed']"
          >
            <!-- https://stackoverflow.com/a/925252 -->
            <a
              v-for="range in gospels.ranges"
              v-show="(expanding || 
                !(!expanding && range.range === '[Default]')
              )"
              :key="range.indexCurrent"
              href="javascript:"
              :class="['link',
                (expanding)
                ? (range.indexInitial === author.indexInitial) 
                  ? 'link-expanded link-self' 
                  : 'link-expanded'
                : 'link-collapsed'
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
          <div :class="[(expanding) 
                ? 'range-dummy-expanded' 
                : 'range-dummy-collapsed']" 
          />
        </div>
        <div
          v-show="expanded"
          ref="text"
          :class="['gospel-text',
            (expanding)
              ? 'gospel-text-expanded'
              : 'gospel-text-collapsed'
          ]"
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
      expanding: false,
      expanded: false,
      gospels: {
        ranges: [],
        authors: [],
      },
      // Needs to be separate when main-accordion access them
      headerHeightCollapsed: undefined,
      gospelsHeightCollapsed: undefined,
      // ScrollHeight excludes borders and margins.
      // Having no border in the scope, we handle margins only.
      margins: 5, // pixels (see in $refs: gospel)
    }
  },


  created() {
    this.createRanges();
    this.createGospels();
  },


  mounted() {
    // Store collapsed header & gospels height
      this.storeCollapsedHeight();
  },


  methods: {

    onHeaderClick() {
      // Set location
      store.map.currentLocation = store.timeline[
        this.groupIndex][this.groupTitle][this.eventIndex][1];

      // Transitions https://stackoverflow.com/q/56537331

      // OPTIONS (incumbent refers to previously clicked):
      // 1. Open first ever (no incumbent)
      // 2. Open another (auto close incumbent)
      // 3. Close opened (re-click on incumbent)
      // 4. Re-open user-closed (re-click on incumbent)

      // 1. Open first ever (no incumbent)
      if (this.$parent.subaccordionIncumbent === null) {

        this.$parent.subaccordionIncumbent = this.eventIndex;

        this.toExpand();
      }

      // 2. Open another (auto close incumbent)
      else if (this.$parent.subaccordionIncumbent !== this.eventIndex) {

        this.$parent.$refs.subaccordion[
          this.$parent.subaccordionIncumbent].toCollapse(false);

        this.$parent.subaccordionIncumbent = this.eventIndex;

        this.toExpand();
      }

      // 3. Close opened (re-click on incumbent)
      else if (this.expanded) { 
        this.toCollapse(true); 
      }
      
      // 4. Re-open user-closed (re-click on incumbent)
      else { 
        this.toExpand(); 
      }

      // Always do
      setTimeout( () => {
        // Scroll the content into view
        this.setScrollBy();
      }, store.transitionDuration);
    },


    setScrollBy() {
      const scrollDiff = 
        this.$refs.gospels.getBoundingClientRect().top - (5.3 * 16);
    // 5.3 * 16: accordion header min-widths in pixels (main: 3em, sub: 2.3em)

      this.$setScrollBy(scrollDiff);
    },


    toCollapse(alertMainaccordion) {
      // Call Main-Accordion to start transition
      this.expanding = false;
      if (alertMainaccordion) { this.$emit('update-height'); }

      // Trigger self to start collapse-transition
      this.$refs.gospels.style.height = 
        this.gospelsHeightCollapsed + 'px';
      
      // this.setScrollBy();

      // Once transition finished, hide transitioned section
      setTimeout( () => {
        this.expanded = false;
      }, store.transitionDuration);
    },


    toExpand() { 
      // Get collapsed height in case it is 
      // out of sync by any prior activity.
      this.storeCollapsedHeight();

      // Update gospels height in case it is 
      // out of sync by any prior activity.
      this.$refs.gospels.style.height = this.gospelsHeightCollapsed + 'px';

      // Turn transitioned section visible
      this.expanding = true;
      this.expanded = true;

      setTimeout( () => {
        // Trigger sub-accordion to start expand-transition
        this.$refs.gospels.style.height = 
          this.getGospelsHeight() + 'px';
        
        // Call Main-Accordion to start transition
        this.$emit('update-height');
      });
    },  


    storeCollapsedHeight() {
      // Store collapsed header & gospels height
      this.headerHeightCollapsed = 
        this.$refs.header.getBoundingClientRect().height;
      
      this.gospelsHeightCollapsed = this.getGospelsHeight();
    },


    onParallelGospelsChange(eventSource) {
      // Update gospels height before change,
      // in case it is out of sync by any prior activity. 
      this.$refs.gospels.style.height = 
        this.getGospelsHeight() + 'px';

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
        // Update gospels height after change,
        // which triggers self transition
        this.$refs.gospels.style.height = 
          this.getGospelsHeight() + 'px';
        
        this.$emit('update-height');

        this.setScrollBy();
      });
    },


    getGospelsHeight() {
      // elements with v-for and v-show together does not update
      // their scrollHeight properly. Therefore we go for the
      // sum of their nested elements' own scrollHeights instead.
      const getListHeight = (ref) => {
        const refHeights = [];
        for (let i = 0; i < this.$refs[ref].length; i++) {
          refHeights.push( this.$refs[ref][i].getBoundingClientRect().height );
        }
        return Math.max( ...refHeights );
      }

      return getListHeight("range") + getListHeight("text") + this.margins;

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
    background-color: var(--bg-light);
  }

  nav {
    display: flex;
    /* align-items: center; */
  }

  .button-parallels {
    all: unset;
    display: inline-flex;
    justify-content: center;
    /* align-items: center; */
    /* align-content: center; */
    width: 2ch;
    /* Need both height & font-size */
    height: 1em;
    font-size: 2.1em;
    border-radius: 1em;
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

/* ######################## GOSPELS ######################### */

  .gospels {
    display: flex;
    transition: height var(--transition-duration);
    /* alternative to overflow: hidden */
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
    position: sticky;
    position: -webkit-sticky;
    top: 5.3em;
    background-color: var(--bg-light);
  }

  .range {
    flex: 4;
    font-size: 0.9em;
    background-color: var(--bg-light);
  }

  .range-expanded {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .range-collapsed {
    max-width: calc(100vw - 24px);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .range-dummy {
    transition: flex var(--transition-duration);
  }

  .range-dummy-expanded {
    flex: auto;
  }

  .range-dummy-collapsed {
    flex: 0;
  }

  .link {
    padding-bottom: 7px;
    background-color: var(--bg-light);
    white-space: nowrap;
  }

  .link-expanded {
    padding-left: 7px;
    padding-right: 7px;
  }

  .link-collapsed {
    text-decoration: none;
    color: black;
  }

  .link:visited {
    color:blue;
  }

  .link-collapsed:not(:last-child) {
    padding-right: 10px;
  }

  .link-self {
    font-weight: bold;
    color:inherit;
    text-decoration: inherit;
  }

  .gospel-text {
    transition: opacity var(--transition-duration);
    z-index: -1;
    padding-top: 1em;
    text-align: justify;
    /* https://stackoverflow.com/a/20818206/ */
    line-height: 1.4;
  }

  .gospel-text-expanded {
    opacity: 1;
  }

  .gospel-text-collapsed {
    opacity: 0;
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

/* ###################### POPUPS ########################### */

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
    /* added */
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