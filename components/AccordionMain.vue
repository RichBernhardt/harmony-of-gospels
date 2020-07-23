<template>
  <div
    class="accordion-main"
    v-bind="{ expanded }">
      <div :class="['main-header', expanded ? 'expanded' : '']">
        <div
          class="title"
          @click.prevent="expanded = ! expanded"
          v-text="groupTitle"
        />
        <div
          v-show="expanded"
          class="buttons">
          <span
            class="button"
            @click.prevent="
              if( store.gospels.parallelCurrent > 1 )
                store.gospels.parallelCurrent--"
            >–</span>
          <span
            class="button"
            @click.prevent="
              if( store.gospels.parallelCurrent < store.gospels.parallelMax )
                store.gospels.parallelCurrent++"
            >+</span>
        </div>
      </div>
    <AccordionSub
      v-for="(event,eventIndex) in store.timeline[groupIndex][groupTitle]"
      v-show="expanded"
      :key="eventIndex"
      v-bind="{ 
        groupIndex,
        groupTitle,
        eventIndex }"
    />
  </div>
</template>

<script>
import { store } from "~/components/store";
import AccordionSub from "~/components/AccordionSub";

export default {

  components: {
    AccordionSub
  },

  props: {
    groupIndex: Number,
    groupTitle: String
  },

  data() {
    return {
      store,
      expanded: false,
      onSticky: false,
    }
  },
  
}
</script>

<style scoped>

  .accordion-main {
    display: flex;
    flex-direction: column;
    background-color: lemonchiffon;
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
    background-color: #edee90;
    border: 0px none rgba(0,0,0,0);
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
  }

  .button:active {
    background-color: orangered;
  }

</style>