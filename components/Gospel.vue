<template>
  <div 
    v-show="expanded && (lengthIndex + 1 <= gdata.gospels.paralelCurrent)"
    class="sole-gospel separator">
      <div
        class="range-wrapper"
      >
        <span
          v-for="range in rangesWithDefault"
          :key="range"
          class="range"
        >
          {{ range }}
        </span>
      </div>
      <div
        class="gospel-text"
        v-html="gdata.htmlOutput[groupIndex][groupTitle][eventIndex][gospelIndex]"
      />
    </div>
</template>

<script>
import { gdata } from "~/components/gdata";

export default {

  props: {
    groupIndex: Number,
    groupTitle: String,
    eventIndex: Number,
    gospelIndex: Number,
    expanded: Boolean,
    lengthIndex: Number,
    ranges: Array,
  },

  data() {
    return {
      gdata,
    }
  },

  computed: {
    rangesWithDefault() {
      const rangesClone = JSON.parse(JSON.stringify(this.ranges));
      rangesClone.unshift("Default");
      return rangesClone;
    }
  },

}
</script>

<style scoped>

  .sole-gospel {
    flex: 1;
    min-width: 10em;
    max-width: 25em;
    padding-left: 5px;
    padding-right: 5px;
    margin-bottom: 5px;
  }

  /* https://stackoverflow.com/a/47824568 */
  .separator:not(:first-child) {
    border-left: solid gray 1px;
  }

  .range-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    font-weight: normal;
    font-size: 0.9em;
    font-family: 'Times New Roman', serif;
  }

  .range {
    padding-left: 7px;
    padding-right: 7px;
  }

  .gospel-text {
    margin-top: 1em;
    text-align: justify;
    /* https://stackoverflow.com/a/20818206/ */
    line-height: 1.4;
  }

</style>