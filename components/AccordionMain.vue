<template>
  <div
    class="accordion-main"
    v-bind="{expanded}">
      <button
        class="header-button"
        @click.prevent="expanded = ! expanded">
          {{ groupTitle }}
      </button>
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
    z-index: 0;
  }

  .header-button {
    display: block;
    height: 3em;
    margin-bottom: 3px;
    border: 2px solid orangered;
    border-radius: 3px;
    background-color: rgba(255,255,255,0.88);
    text-align: left;
    font-weight: bold;
    color: orangered;    
  }

</style>