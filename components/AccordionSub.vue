<template>
  <div class="accordion-sub" v-bind="{expanded}">
      <div
        class="header" 
        @click.prevent="expanded = ! expanded; setLocation();"
        v-html="gdata.htmlOutput[groupIndex][groupTitle][eventIndex][5]"
      />
      <div
        v-show="expanded"
        class="verses"
        v-html="gdata.htmlOutput[groupIndex][groupTitle][eventIndex][0]"
      />
  </div>
</template>

<script>
import { gdata } from "~/components/gdata";

export default {
  name: "AccordionSub",
  
  props: {
    groupIndex: Number,
    groupTitle: String,
    eventIndex: Number
  },

  data () {
    return {
      gdata,
      expanded: false
    }
  },

  methods: {
    setLocation() {
      gdata.currentLocation = gdata.htmlOutput[
        this.groupIndex][this.groupTitle][this.eventIndex][6];
    }
  }
}
</script>

<style scoped>

  .accordion-sub {
    background-color: lemonchiffon;
    border: 0px none lemonchiffon;
    border-bottom: 1px solid darkkhaki;
  }

  .accordion-sub:last-child {
    background-color: lemonchiffon;
    border: 0px none lemonchiffon;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  
  .header {
    display: flex;
    align-items: center;
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 3em;
    min-height: 3em;
    border-radius: 5px;
    border: 0px none lemonchiffon;
    background-color: lemonchiffon;
    font-weight: bold;
    text-align: left;
    font-size: 0.9rem;
    margin-left: 5px;
    margin-right: 5px;
  }

</style>