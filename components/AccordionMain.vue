<template>
  <div
    class="accordion-main"
    v-bind="{ expanded }"
  >
      <div 
        :class="['main-header', expanded ? 'expanded' : '']"
        tabindex="0"
        @keyup.space="expanded = ! expanded; expandFirst = true;"
      
      >
        <div
          class="title"
          @click.prevent="expanded = ! expanded; expandFirst = true;"
          v-text="groupTitle"
        />
        <div
          v-show="expanded"
          class="buttons">
          <span
            class="button"
            tabindex="0"
            @click.prevent="
              if( store.gospels.parallelCurrent > 1 )
                store.gospels.parallelCurrent--"
            @keyup.space="
              if( store.gospels.parallelCurrent > 1 )
                store.gospels.parallelCurrent--"
            >–</span>
          <span
            class="button"
            tabindex="0"
            @click.prevent="
              if( store.gospels.parallelCurrent < store.gospels.parallelMax )
                store.gospels.parallelCurrent++"
            @keyup.space="
              if( store.gospels.parallelCurrent < store.gospels.parallelMax )
                store.gospels.parallelCurrent++"
            >+</span>
        </div>
      </div>
    <!-- Minimise initial DOM nodes for quick page loading -->
    <template v-if="expandFirst">
      <AccordionSub
        v-for="(event,eventIndex) in store.timeline[groupIndex][groupTitle]"
        v-show="expanded"
        :key="eventIndex"
        v-bind="{ 
          groupIndex,
          groupTitle,
          eventIndex }"
      />
    </template>
  </div>
</template>

<script>
import { store } from "~/components/store";

export default {

  props: {
    groupIndex: Number,
    groupTitle: String
  },

  data() {
    return {
      store,
      expanded: false,
      expandFirst: false,
    }
  },
  
}
</script>

<style scoped>

  .accordion-main {
    display: flex;
    flex-direction: column;
    /* background-color: lemonchiffon; */
    border: 1px solid darkkhaki;
    border-radius: 5px;
    margin: 3px;
  }

  .main-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: sticky;
    /* Safari */
    position: -webkit-sticky;
    top: 0px;
    z-index: 1;
    background-color: hsl(75, 90%, 70%);
    border-radius: 5px;
    padding-left: 5px;
    padding-right: 5px;
  }

  .expanded {
    border-bottom: 1px solid darkkhaki;
  }

  .title {
    display: flex;
    flex: 1;
    min-height: 3em;
    align-items: center;
    text-align: left;
    font-weight: bold;
    font-family: 'Times New Roman', serif;
  }

  .buttons {
    display: flex;
    align-items: center;
  }

  .button {
    display: inline-block;
    text-align: center;
    width: 1.125em;
    border-radius: 1.125em;
    font-size: 2.25em;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }

  .button:active {
    background-color: orangered;
  }

</style>