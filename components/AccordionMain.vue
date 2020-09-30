<template>
  <section
    ref="mainaccordion"
    class="accordion-main"
    v-bind="{ expanded }"
  >
    <button
      :class="['header-as-button', expanded ? 'header-border-bottom' : '']"
      @click="onHeaderClick()"
    >
        <div
          class="title"
          v-text="groupTitle"
        />
    </button>
    <section
      v-show="expanded"
      ref="subaccordions"
      class="sub-accordions"
    >
      <!-- Minimise initial DOM nodes for quick page loading -->
      <template v-if="hasSubaccordionsCreated">
        <AccordionSub
          v-for="(event,eventIndex) in store.timeline[groupIndex][groupTitle]"
          ref="subaccordion"
          :key="eventIndex"
          v-bind="{ 
            groupIndex,
            groupTitle,
            eventIndex
          }"
          @update-height="setMainaccordionHeight"
        />
      </template>
    </section>
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
      heightOld: 0,
      heightNew: 0,
      hasSubaccordionsCreated: false,
      subaccordionIncumbent: null,
    }
  },


  methods: {
    onHeaderClick() {
      // OPTIONS (incumbent refers to previously clicked):
      // 1. Open first ever (no incumbent)
      // 2. Open another (auto close incumbent)
      // 3. Close opened (re-click on incumbent)
      // 4. Re-open user-closed (re-click on incumbent)

      // 1. Open first ever (no incumbent)
      if (store.incumbents.main === null) {

        store.incumbents.main = this.groupIndex;

        this.toExpand();
      }

      // 2. Open another (auto close incumbent)
      else if (store.incumbents.main !== this.groupIndex) {
        
        // It's really ugly, I know, but want to confine all
        // relevant code to the component, and have no better idea.
        this.$parent.$parent.$refs.mainaccordion[
          store.incumbents.main].toCollapse();

        store.incumbents.main = this.groupIndex;

        this.toExpand();
      }

      // 3. Close opened (re-click on incumbent)
      else if (this.expanded) { 
        this.toCollapse(); 
      }
      
      // 4. Re-open user-closed (re-click on incumbent)
      else { 
        this.toExpand(); 
      }

      // Always do
      setTimeout( () => {
        // Scroll content into view
        this.setScrollBy();
        // Update stored height
        this.heightOld = this.heightNew;
      }, store.transitionDuration);

    },


    setScrollBy() {
      const scrollDiff = 
        this.$refs.mainaccordion.getBoundingClientRect().top;

      this.$setScrollBy(scrollDiff);
    },


    toCollapse() {
      // Trigger self to start collapse-transition
      this.$refs.subaccordions.style.height = 0;
      
      // Update stored height
      this.heightNew = 0;

      this.setScrollBy();

      // Once transition finished, hide transitioned section
      setTimeout( () => {
        this.expanded = false;
      }, store.transitionDuration);
    },


    toExpand() {
      // Create Subaccordion (if not exist yet)
      this.hasSubaccordionsCreated = true;

      // Set height
      this.$refs.subaccordions.style.height = 0;

      this.expanded = true;

      setTimeout( () => {
        this.setMainaccordionHeight();
      });
    },


    setMainaccordionHeight() {
      this.heightNew = 0; let i = 0;

      for (i; i < this.$refs.subaccordion.length; i++) {
        
        if (this.$refs.subaccordion[i].expanding) {
          this.heightNew += 
            this.getExpandedSubaccordionHeight(this.$refs.subaccordion[i]);
        }
        else { 
          this.heightNew += 
            this.getCollapsedSubaccordionHeight(this.$refs.subaccordion[i]); 
        }
      }

      // Take borders into account for height 
      // difference (1px per subaccordion)
      this.heightNew += this.$refs.subaccordion.length;

      // Update height
      this.$refs.subaccordions.style.height =
        this.heightNew + 'px';
    },


    getExpandedSubaccordionHeight(subaccordion) {
      subaccordion = subaccordion || 
        this.$refs.subaccordion[this.subaccordionIncumbent];

      return subaccordion.$refs.header.getBoundingClientRect().height +
        subaccordion.getGospelsHeight();
    },


    getCollapsedSubaccordionHeight(subaccordion) {
      subaccordion = subaccordion || 
        this.$refs.subaccordion[this.subaccordionIncumbent];
        
      return subaccordion.headerHeightCollapsed +
        subaccordion.gospelsHeightCollapsed;
    },

  },
  
}
</script>

<style scoped>
  .sub-accordions {
    transition: height var(--transition-duration);
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
    z-index: 2;
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