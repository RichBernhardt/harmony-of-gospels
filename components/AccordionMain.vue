<template>
  <div
    class="accordion-main"
    :style="{ 
      'min-width': gdata.gospels.widthMax + 'em',
      'max-width': Math.min(
          gdata.gospels.paralelCurrent * gdata.gospels.widthMax,
          gdata.gospels.widthWin
        ) + 'em', }"
    v-bind="{ expanded }">
      <div :class="['header', expanded ? 'expanded' : '']">
        <div
          class="title"
          @click.prevent="expanded = ! expanded"
          v-text="groupTitle"
          >
        </div>
        <div class="buttons">
          <span
            class="button-common"
            @click.prevent="
              if( gdata.gospels.paralelCurrent > 1 )
                gdata.gospels.paralelCurrent--"
            >–</span>
          <span
            class="button-common"
            @click.prevent="
              if( gdata.gospels.paralelCurrent < 5 )
                gdata.gospels.paralelCurrent++"
            >+</span>
        </div>
      </div>
    <AccordionSub
      v-for="(event,eventIndex) in gdata.htmlOutput[groupIndex][groupTitle]"
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
import { gdata } from "~/components/gdata";
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
      gdata,
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