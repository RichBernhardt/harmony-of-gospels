
// NOTE: This is not Vuex, but Simple Store Pattern

// https://stackoverflow.com/questions/62302299/
// https://vuejs.org/v2/api/#Vue-observable

import Vue from 'vue'
import timelineRaw from '~/components/timelineRaw.js'
import gospel from "~/components/gospelsNCV.js"

export const store = Vue.observable({
  // assigning innitial values is a must
  timeline: timelineRaw,
  gospels: {
    MT: gospel.mt,
    MK: gospel.mk,
    LK: gospel.lk,
    JN: gospel.jn,
    ACT: gospel.act,
    parallelCurrent: 1,
    parallelMax: "",
    widthMin: 160,
    widthMax: 400,
    widthSplit: "",
  },
  map: {
    currentLocation: "",
    // onShow: false,
  },
  windowWidth: "", // fed by index.vue
  windowHeight: "", // fed by index.vue 
});
