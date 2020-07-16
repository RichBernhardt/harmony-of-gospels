
// https://stackoverflow.com/questions/62302299/
// https://vuejs.org/v2/api/#Vue-observable

import Vue from 'vue'
import timelineRaw from '~/components/timelineRaw.js'
import gospel from "~/components/gospelsNCV.js"

export const gdata = Vue.observable({
  timeline: timelineRaw,
  htmlOutput: [],
  gospels: {
    MT: gospel.mt,
    MK: gospel.mk,
    LK: gospel.lk,
    JN: gospel.jn,
    paralelCurrent: 1,
    paralelMax: 1,
    widthMin: 12, // em
    widthMax: 25, // em
  },
  map: {
    currentLocation: "",
    onShow: false,
  }  
});
