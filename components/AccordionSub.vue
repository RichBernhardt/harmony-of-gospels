<template>
  <div class="accordion-sub" v-bind="{expanded}">
      <div
        class="header" 
        @click.prevent="expanded = ! expanded; setLocation();">
          <div>
            {{ gdata.htmlOutput[groupIndex][groupTitle][eventIndex][5] }}
          </div>
          <div
            class="gospel-nav"
            v-show="!expanded"
          >
            <span 
              v-for="(gospel) in [1,2,3]"
              :key="gospel">
              {{ navigation(gospel) }}
            </span>
          </div>
      </div>
      <div 
        class="gospel-wrapper"
        v-show="expanded">
        <div class="gospel-nav">
          <span>Default</span>
          <span 
            v-for="(gospel) in [1,2,3]"
            :key="gospel">
              {{ navigation(gospel) }}
          </span>
        </div>
        <div
          class="gospel-text"
          v-html="gdata.htmlOutput[groupIndex][groupTitle][eventIndex][0]"
        />
      </div>
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
    },

    navigation(gospel) {
      // https://stackoverflow.com/questions/40522634
      if (gdata.timeline[this.groupIndex][this.groupTitle][
          this.eventIndex][gospel]) {
        return gdata.timeline[this.groupIndex][this.groupTitle][
            this.eventIndex][gospel][0][0] +
          gdata.timeline[this.groupIndex][this.groupTitle][
            this.eventIndex][gospel][0][1] + ":" +
          gdata.timeline[this.groupIndex][this.groupTitle][
            this.eventIndex][gospel][0][2] + "-" +
          gdata.timeline[this.groupIndex][this.groupTitle][
            this.eventIndex][gospel][0][3];
      }
    }
  },

}
</script>

<style scoped>

  .accordion-sub {
    max-width: 100%;
    min-width: 290px;
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
    flex-direction: column;
    /* align-items: center; */
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 3em;
    min-height: 3em;
    border-radius: 5px;
    border: 0px none lemonchiffon;
    background-color: lemonchiffon;
    font-weight: bold;
    text-align: left;
    margin-left: 5px;
    margin-right: 5px;
    font-weight: bold;
    font-family: 'Times New Roman', serif;
  }

  .gospel-nav {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
  }

  /* Shorthand for: flex-grow: 1; flex-shrink: 0; flex-basis: 0; */
  .gospel-text {
    flex: 1;
    margin: 5px;
    text-align: justify;
    line-height: 1.4; /* https://stackoverflow.com/a/20818206/ */
  }

</style>