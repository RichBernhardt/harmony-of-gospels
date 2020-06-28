// https://stackoverflow.com/questions/62302299/vue-js-store-pattern-sharing-data-between-sibling-components
import Vue from 'vue'
// import Vue from 'vue/dist/vue.js'
import timelineRaw from '~/components/timelineRaw.js'
import gospels from "~/components/gospelsNCV.js"

// https://vuejs.org/v2/api/#Vue-observable
export const gdata = Vue.observable({
  timeline: timelineRaw,
  MT: gospels.mt,
  MK: gospels.mk,
  LK: gospels.lk,
  JN: gospels.jn,
  htmlOutput: [],
  mapOnShow: false
});
