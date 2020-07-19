<template>
  <div
    class="accordion-main"
    :style="{ 
      'min-width': Math.min(
          store.gospels.widthMax,
          store.gospels.widthWin
        ) + 'px',
      'max-width': Math.min(
          store.gospels.widthMax * store.gospels.paralelCurrent,
          store.gospels.widthWin
        ) + 'px', }"
    v-bind="{ expanded }">
      <div :class="['header', expanded ? 'expanded' : '']">
        <div
          class="title"
          @click.prevent="expanded = ! expanded"
          v-text="groupTitle"
        />
        <div class="buttons">
          <span
            class="button-common"
            @click.prevent="
              if( store.gospels.paralelCurrent > 1 )
                store.gospels.paralelCurrent--"
            >–</span>
          <span
            class="button-common"
            @click.prevent="
              if( store.gospels.paralelCurrent < store.gospels.paralelMax )
                store.gospels.paralelCurrent++"
            >+</span>
        </div>
      </div>
    <AccordionSub
      v-for="(event,eventIndex) in store.htmlOutput[groupIndex][groupTitle]"
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
    }
  },
  
}
</script>

<style scoped>

  .accordion-main {
    display: flex;
    flex-direction: column;
    max-width: fit-content;
    background-color: lemonchiffon;
    border: 1px solid darkkhaki;
    border-radius: 5px;
    margin: 3px;
  }

  .header {
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

  .button-common {
    display: inline-block;
    text-align: center;
    width: 1.125em;
    border-radius: 1.125em;
    font-size: 2.25em;
  }

  .button-common:active {
    background-color: orangered;
  }

</style>