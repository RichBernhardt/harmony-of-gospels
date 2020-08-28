<template>
  <section
    class="accordion-main"
    v-bind="{ expanded }"
  >
    <button
      :class="['header-as-button', expanded ? 'header-border-bottom' : '']"
      @click="onMainAccordionHeaderClick()"
    >
        <div
          class="title"
          v-text="groupTitle"
        />
        <nav v-show="expanded">
          <button
            class="button-parallels"
            @click.stop="
              if( store.gospels.parallelCurrent > 1 )
                store.gospels.parallelCurrent--;
              onParalelGospelsButtonClick()"
          >
            –
          </button>
          <button
            class="button-parallels"
            @click.stop="
              if( store.gospels.parallelCurrent < store.gospels.parallelMax )
                store.gospels.parallelCurrent++;
              onParalelGospelsButtonClick()"
          >
            +
          </button>
        </nav>
    </button>

    <transition
      @enter="showSubAccordions"
      @leave="hideSubAccordions"
    >
      <section
        v-show="expanded"
        ref="subaccordions"
        class="sub-accordions"
      >
        <!-- Minimise initial DOM nodes for quick page loading -->
        <template v-if="hasEverExpanded">
          <AccordionSub
            v-for="(event,eventIndex) in store.timeline[groupIndex][groupTitle]"
            ref="subaccordion"
            :key="eventIndex"
            v-bind="{ 
              groupIndex,
              groupTitle,
              eventIndex
            }"
            @on-sub-accordion-header-click="onSubAccordionHeaderClick"
            @on-sub-accordion-gospel-swap="mainToFollowSubHeightChange"
          />
        </template>
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
  },


  data() {
    return {
      store,
      expanded: false,
      hasEverExpanded: false,
      expandedSubAccordionIncumbent: null,
    }
  },


  mounted() {
    this.$refs.subaccordions.style.height = 0;
  },


  methods: {

    onMainAccordionHeaderClick() {
      this.hasEverExpanded = true;
      this.expanded = !this.expanded;
      // Index.vue closes the previously open Main-Accordion:
      this.$emit('on-main-accordion-header-click', this.groupIndex);

      // Initialising for future transition needs...
      this.$refs.subaccordions.style.height = 
        this.$refs.subaccordions.scrollHeight + 'px';
    },


    // TRANSITION METHODS
    // https://vuejs.org/v2/guide/transitions.html#JavaScript-Hooks
    // https://stackoverflow.com/q/56537331
    showSubAccordions(el) {
      // https://stackoverflow.com/a/54422687
      requestAnimationFrame(() => {
        el.style.height = el.scrollHeight + "px";
      });    
    },
    hideSubAccordions(el) {
      el.style.height = 0;
    },


    onSubAccordionHeaderClick(indexClicked) {
      const indexIncumbent =
        (this.expandedSubAccordionIncumbent !== null)
          ? this.expandedSubAccordionIncumbent
          : indexClicked;

      const gospelsIncumbent = 
        this.$refs.subaccordion[indexIncumbent].$refs.gospels.scrollHeight;

      const rangesIncumbent =
        this.$refs.subaccordion[indexIncumbent].$refs.ranges.scrollHeight;
      
      requestAnimationFrame(() => {      
        const gospelsClicked =
          this.$refs.subaccordion[indexClicked].$refs.gospels.scrollHeight;

        const rangesClicked =
          this.$refs.subaccordion[indexClicked].$refs.ranges.scrollHeight;

        const heightDiff =
          (gospelsClicked+rangesClicked) - (gospelsIncumbent+rangesIncumbent);

        this.$refs.subaccordions.style.height = Number(
          this.$refs.subaccordions.style.height.slice(0,-2)) + heightDiff + 'px';
        
        // Update current Sub-Accordion reference
        if (indexIncumbent !== indexClicked) {
          this.$refs.subaccordion[indexIncumbent].expanded = false;
        }
        this.expandedSubAccordionIncumbent = indexClicked;
      });      
    },


    onParalelGospelsButtonClick() {
      const gospelsIncumbent = this.$refs.subaccordion[
        this.expandedSubAccordionIncumbent].$refs.gospels.scrollHeight;

      requestAnimationFrame(() => {
        const gospelsClicked = this.$refs.subaccordion[
          this.expandedSubAccordionIncumbent].$refs.gospels.scrollHeight;
        
        const heightDiff = gospelsClicked - gospelsIncumbent;

        this.$refs.subaccordion[this.expandedSubAccordionIncumbent]
          .$refs.gospels.style.height = 
            gospelsClicked + 'px';
            // Number(this.$refs.subaccordion[this.expandedSubAccordionIncumbent]
            // .$refs.gospels.style.height.slice(0,-2)) + heightDiff + 'px';
            
          this.mainToFollowSubHeightChange(heightDiff);
       });
    },


    mainToFollowSubHeightChange(heightDiff) {
      this.$refs.subaccordions.style.height = Number(
          this.$refs.subaccordions.style.height.slice(0,-2)) + heightDiff + 'px';
    },

  },
  
}
</script>

<style scoped>
  .sub-accordions {
    transition: height 400ms;
  }

  .accordion-main {
    display: flex;
    flex-direction: column;
    border: 1px solid darkkhaki;
    border-radius: 5px;
    margin: 3px;
    cursor: default;
  }

  .header-as-button {
    all: unset;
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    padding-left: 5px;
    padding-right: 5px;
    background-color: var(--bg-main-accordion-header);
    border-radius: 5px;
  }

  .header-border-bottom {
    border-bottom: 1px solid darkkhaki;
  }

  .title {
    display: flex;
    align-items: center;
    flex: 1;
    min-height: 3em;
    text-align: left;
    font-weight: bold;
    font-family: 'Times New Roman', serif;
  }

  nav {
    display: flex;
    align-items: center;
  }

  .button-parallels {
    all: unset;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 1.125em;
    border-radius: 1.125em;
    font-size: 2.25em;
    padding: 0;
    margin: 0;
    cursor: pointer;
    background-color: var(--bg-main-accordion-header);
  }

  .button-parallels:active {
    background-color: hsl(16, 100%, 75%);
  }

  .button-parallels:focus, .header-as-button:focus {
    filter: brightness(95%);
  }

</style>