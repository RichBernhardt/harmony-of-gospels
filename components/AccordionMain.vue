<template>
  <div
    class="accordion-main"
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
            :class="['button-common',
              gdata.currentParalelGospels === 1
              ? 'active'
              : 'inactive']"
            @click.prevent="gdata.currentParalelGospels--"
            >–</span>
          <span
            :class="['button-common',
              gdata.currentParalelGospels < gdata.maxParalelGospels
              ? 'active'
              : 'inactive']"
            @click.prevent="gdata.currentParalelGospels++"
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
      expanded: false
    }
  },

  // methods: {
  //   addGospel() {
  //     gdata.currentParalelGospels++
  //   }
  // }
  
}
</script>

<style scoped>

  .accordion-main {
    display: flex;
    flex-direction: column;
    /* max-width: var(--singleWidth); */
    background-color: lemonchiffon;
    border: 1px solid darkkhaki;
    border-radius: 5px;
    margin: 3px;
  }

  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: -webkit-sticky; /* Safari */
    position: sticky;
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

  /* .buttons {
    display: flex;
  } */

  .button-common {
    display: inline-block;
    text-align: center;
    width: 1.125em;
    border: solid gray 1px;
    border-radius: 1.125em;
    font-size: 2.25em;
  }

</style>