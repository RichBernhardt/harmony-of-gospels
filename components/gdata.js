// https://stackoverflow.com/questions/62302299/
import Vue from 'vue'
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
  currentLocation: "",
  minGospelWidth: 200, // px
  currentParalelGospels: 1,
  maxParalelGospels: 1,
  mapOnShow: false,
  // paralelGospels: 1,
});
