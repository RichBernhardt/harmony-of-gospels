
// NOTE: This is not Vuex, but Simple Store Pattern

// https://stackoverflow.com/questions/62302299/
// https://vuejs.org/v2/api/#Vue-observable

import Vue from 'vue'
import timelineRaw from '~/components/timelineRaw.js'
import gospel from "~/components/gospelsNCV.js"

export const store = Vue.observable({
  // assigning an innitial value is a must
  timeline: timelineRaw,
  htmlOutput: [],
  gospels: {
    MT: gospel.mt,
    MK: gospel.mk,
    LK: gospel.lk,
    JN: gospel.jn,
    paralelCurrent: 1,
    paralelMax: "",
    widthMin: 160, // px (=10em)
    widthMax: 400, // px (=25em)
    widthWin: "", // px (fed by index.vue)
  },
  map: {
    currentLocation: "",
    onShow: false,
  },
  
});
