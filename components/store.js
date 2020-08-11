
// NOTE: This is not Vuex, but Simple Store Pattern

// https://stackoverflow.com/questions/62302299/
// https://vuejs.org/v2/api/#Vue-observable

import Vue from 'vue'
import timeline from '~/components/timelineNCV.js'
import gospel from "~/components/gospelsNCV.js"

export const store = Vue.observable({
  // assigning innitial values is a must
  timeline,
  gospels: {
    MT: gospel.mt,
    MK: gospel.mk,
    LK: gospel.lk,
    JN: gospel.jn,
    ACT: gospel.act,
    parallelCurrent: 1,
    parallelMax: "",
    widthMin: 160, // = 20ch
    // https://michaelnthiessen.com/key-changing-technique/
    keyToRerenderOnVersionSwitch: 0,
  },
  map: {
    currentLocation: "",
    onShow: false,
  },
  media: {
    windowWidth: "", // fed by index.vue
    windowHeight: "", // fed by index.vue
    hasPointer: "",
    widthSplit: "",
  },
  menu: {
    initialLoad: false,
    onShow: false,
  }

});
