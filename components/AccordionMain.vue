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
            @on-sub-accordion-gospel-change="mainToFollowSubHeightChange"
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
      subAccordionIncumbent: null,
    }
  },


  methods: {

    onMainAccordionHeaderClick() {
      if (this.hasEverExpanded === false) {
        this.hasEverExpanded = true;
        this.$refs.subaccordions.style.height = 
          this.$refs.subaccordions.scrollHeight + 'px';
      }
      
      this.expanded = !this.expanded;
      // Call Index.vue to close the previously opened Main-Accordion:
      this.$emit('on-main-accordion-header-click', this.groupIndex);

      // Initialise for future Sub-Accordion transition requests
      this.$refs.subaccordions.style.height = 
        this.$refs.subaccordions.scrollHeight + 'px';
    },


    onSubAccordionHeaderClick(received) { // received: { indexClicked, heightDiff }  
      const heightDiff = received.heightDiff;
      const indexClicked = received.indexClicked;

      // Init
      const indexIncumbent = (this.subAccordionIncumbent !== null)
        ? this.subAccordionIncumbent
        : indexClicked;
      
      // Update reference of clicked Sub-Accordion
      this.subAccordionIncumbent = indexClicked;

      // Set Main-Accordion's height for transition
      if (indexIncumbent === indexClicked) {
        this.mainToFollowSubHeightChange(heightDiff);
      }

      // Collapse previously expanded (incumbent) Sub-Accordion
      else {
        // Get heightDiff of Sub-Accordion to collapse
        const heightDiffCollapse =
          this.$refs.subaccordion[indexIncumbent].collapsedGospelsHeight -
            Number(this.$refs.subaccordion[indexIncumbent]
              .$refs.gospels.style.height.slice(0,-2));
        
        // Set Main-Accordion's height for transition
        const deltaHeight = heightDiff + heightDiffCollapse;
        this.mainToFollowSubHeightChange(deltaHeight);

        // Trigger Sub-Accordion to start collapse-transition
        this.$refs.subaccordion[indexIncumbent].$refs.gospels.style.height = 
          this.$refs.subaccordion[indexIncumbent].collapsedGospelsHeight + 'px';
        
        // Once transition finished, hide transitioned section
        setTimeout( () => {
          this.$refs.subaccordion[indexIncumbent].expanded = false;
        }, 1000);
      }
    },


    mainToFollowSubHeightChange(heightDiff) {
      this.$refs.subaccordions.style.height = Number(
          this.$refs.subaccordions.style.height.slice(0,-2)) + heightDiff + 'px';
    },



    // TRANSITION METHODS
    // https://vuejs.org/v2/guide/transitions.html#JavaScript-Hooks
    // https://stackoverflow.com/q/56537331
    showSubAccordions(el) {
      // https://stackoverflow.com/a/54422687
      setTimeout(() => {
        el.style.height = el.scrollHeight + "px";
      });
    },
    
    hideSubAccordions(el) {
      el.style.height = 0;
    },

  },
  
}
</script>

<style scoped>
  .sub-accordions {
    transition: height 1s;
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

</style>