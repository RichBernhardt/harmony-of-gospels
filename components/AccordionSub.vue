<template>
  <div class="accordion-sub" v-bind="{expanded}">
      <button
        class="header-button" 
        @click.prevent="expanded = ! expanded"
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
  }  
}
</script>

<style>

  .accordion-sub {
    display: flex;
    flex-direction: column;
    margin-bottom: 3px;
    border: 1px solid orangered;
    border-radius: 3px;
    background-color: rgba(255,255,255,0.88);
  }
  
  .header-button {
    display: block;
    min-height: 3em;
    border: 0px none rgba(255,255,255,0);
    background-color: rgba(0,0,0,0);
    font-weight: bold;
    text-align: left; 
  }
  
  .header-button:focus {
    border: 0px none rgba(255,255,255,0);
  }

  /* .header-button:active  {
    border: 0px none rgba(255,255,255,0);
  }

  .header-button:enabled  {
    border: 0px none rgba(255,255,255,0);
  }

  .header-button:visited {
    border: 0px none rgba(255,255,255,0);
  } */

  /* Shorthand for: flex-grow: 1; flex-shrink: 0; flex-basis: 0; */
  .verses {
    flex: 1;
    padding: 5px;
    text-align: justify;
  }

  /* https://stackoverflow.com/a/13878902/1405507 */
  .verse-ref {
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    font-size: 0.6rem;
    font-weight: bold;
    color: gray;
    padding-left: 0.5em;
    padding-right: 0.3em;
  }

</style>