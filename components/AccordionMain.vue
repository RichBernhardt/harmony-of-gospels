<template>
  <div
    class="accordion-main"
    v-bind="{expanded}">
      <div
        :class="['header', expanded ? 'expanded' : '']"
        @click.prevent="expanded = ! expanded">
          {{ groupTitle }}
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
  }
  
}
</script>

<style scoped>

  .accordion-main {
    display: flex;
    flex-direction: column;
    max-width: var(--singleWidth);
    background-color: lemonchiffon;
    border: 1px solid darkkhaki;
    border-radius: 5px;
    margin: 3px;
  }

  .header {
    display: flex;
    align-items: center;
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0px;
    z-index: 1;
    min-height: 3em;
    background-color: #edee90;
    border: 0px none rgba(0,0,0,0);
    border-radius: 5px;
    padding-left: 5px;
    padding-right: 5px;
    text-align: left;
    font-weight: bold;
    font-family: 'Times New Roman', serif;
  }

  .expanded {
    border-bottom: 1px solid darkkhaki;
  }

</style>