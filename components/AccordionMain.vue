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
        <!-- :style="{'transition': `height ${transitionDuration}` }" -->
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
            @on-sub-accordion-gospel-change="setMainaccordionHeight"
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
      subaccordionIncumbent: null,
      mainaccordionHeight: 0,
      firstSubaccordion: true,
      // transitionHeightDiff: 0,
    }
  },


  // computed: {
  //   transitionDuration() {
  //     return this.transitionHeightDiff / store.transitionSpeed + 'ms';
  //   }
  // },


  methods: {
    onMainAccordionHeaderClick() {
      if (this.hasEverExpanded === false) {
        this.hasEverExpanded = true;
        this.$refs.subaccordions.style.height = 0;
      }

      // To expand
      if (!this.expanded) {
        this.expanded = true;

        setTimeout(() => {
          // Call Index.vue to close the previously opened main-accordion:
          this.$emit('on-main-accordion-header-click', this.groupIndex);

          // Initialise for future sub-accordion transition requests
          this.setMainaccordionHeight();
        });

      // To collapse
      } else {
        this.mainaccordionHeight = 0;
        this.expanded = false;
      }
    },


    onSubAccordionHeaderClick(indexClicked) {
      // If no sub-accordion has ever been clicked before
      if (this.subaccordionIncumbent === null) {
        // Update reference of clicked sub-accordion
        this.subaccordionIncumbent = indexClicked;
      }

      else {
        const indexIncumbent = this.subaccordionIncumbent;

        const subaccordionPrevious = 
          this.$refs.subaccordion[indexIncumbent];

        if (indexClicked !== indexIncumbent) {
          // Set sub-accordion header height
          subaccordionPrevious.$refs.header.style.height = 
            subaccordionPrevious.headerHeightCollapsed + 'px';
          // Trigger sub-accordion to start collapse-transition
          subaccordionPrevious.$refs.gospels.style.height = 
            subaccordionPrevious.gospelsHeightCollapsed + 'px';

          this.subaccordionIncumbent = indexClicked;
          subaccordionPrevious.expanding = false;
      
          // // Calc transition duration of sub-accordion collapse
          // const transitionDuration = 
          //   heightDiffToCollapse / store.transitionSpeed + 'ms';
          // Once transition finished, hide transitioned section
          setTimeout( () => {
            subaccordionPrevious.expanded = false;
          }, 1000);
        }
      }

      this.setMainaccordionHeight();
    },


    setMainaccordionHeight(preventScroll) {
      let mainaccordionHeight = 0; let i = 0;

      for (i; i < this.$refs.subaccordion.length; i++) {
        if (this.$refs.subaccordion[i].expanding) {
            mainaccordionHeight += 
              this.getExpandedSubaccordionHeight(this.$refs.subaccordion[i]) - 1;
        }
        else { mainaccordionHeight += 
          this.getCollapsedSubaccordionHeight(this.$refs.subaccordion[i]); }
      }

      // Add borders
      const borders = this.$refs.subaccordion.length;
      mainaccordionHeight += borders;

      // Adjust height
      this.$refs.subaccordions.style.height =
        mainaccordionHeight + 'px';

      // // Adjust scroll position
      if (this.subaccordionIncumbent === null || preventScroll) {
        this.mainaccordionHeight = mainaccordionHeight;
      }
      if (this.subaccordionIncumbent !== null && this.firstSubaccordion) {
        this.mainaccordionHeight = mainaccordionHeight;
        this.firstSubaccordion = false;
      }

      const heightDiff = (this.mainaccordionHeight <= mainaccordionHeight)
        ? this.mainaccordionHeight - mainaccordionHeight
        : mainaccordionHeight - this.mainaccordionHeight;

      this.$setScrollBy(heightDiff);

      // Set height
      this.mainaccordionHeight = mainaccordionHeight;

    },


    getExpandedSubaccordionHeight(subaccordion) {
      subaccordion = subaccordion || 
        this.$refs.subaccordion[this.subaccordionIncumbent];

      return subaccordion.$refs.header.scrollHeight +
        subaccordion.getGospelsHeight();
        // + subaccordion.marginsAndBorders;
    },


    getCollapsedSubaccordionHeight(subaccordion) {
      subaccordion = subaccordion || 
        this.$refs.subaccordion[this.subaccordionIncumbent];
        
      return subaccordion.headerHeightCollapsed +
        subaccordion.gospelsHeightCollapsed;
    },


    // TRANSITION METHODS
    // https://vuejs.org/v2/guide/transitions.html#JavaScript-Hooks
    // https://stackoverflow.com/q/56537331
    showSubAccordions(el) {
      // https://stackoverflow.com/a/54422687
      setTimeout(() => {
      //   el.style.height = el.scrollHeight + "px";
      el.style.height = this.mainaccordionHeight + "px";
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