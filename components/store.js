
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
    widthMin: 160,
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
  menuOnShow: false,
  relocateDefaultGospel: () => {
    // Relocate the default-gospel in timeline to index 2 in each event:
    // [{groupTitle:
    //   [eventTitle,location,DEFAULT-GOSPEL,gospel[i],...],... },... ]
    let 
      g,  // group
      gt, // groupTitle
      e,  // event
      aux; // auxiliary

    for ( g = 0; g < store.timeline.length; g++) {
      gt = Object.keys(store.timeline[g]);
      for ( e = 0; e < store.timeline[g][gt].length; e++) {
        if (!Array.isArray(store.timeline[g][gt][e][2])) {
          // In Timelines, the default record:
          // - can store only a reference to the selected gospel ("MT") or
          // - can have multiple entries which results an array-in-array
          // structure: [["author",chapter,verseFrom,verseTo],["author",... ].
          // Where there is a reference only, we find and replace it by
          // the referenced gospel instead...
          for ( aux = 3;
            store.timeline[g][gt][e][aux][0][0] !== store.timeline[g][gt][e][2];)
            { aux++ 
          }
          store.timeline[g][gt][e][2] = store.timeline[g][gt][e][aux];
          // ...and delete the referenced gospel from its 
          // original place to avoid any duplication
          store.timeline[g][gt][e].splice(aux,1);
        }
      }
    }
  },

});
