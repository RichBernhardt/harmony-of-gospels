<template>
  <span style="display:none" />
</template>

<script>
import { store } from "~/components/store";

export default {

  created() {
    if (!store.htmlOutput.length) {

      // The goal is to have the following content in store.htmlOutput: 
      // [ { groupTitle: [ [default,mt,mk,lk,jn,week+eventTitle,location],... ] },... ]
      let group, groupTitle, event;

      for (
        group = 0; 
        group < store.timeline.length; 
        group++) {

        groupTitle = Object.keys(store.timeline[group]);
        store.htmlOutput[group] = {};
        store.htmlOutput[group][groupTitle] = [];

        for (
          event = 0; 
          event < store.timeline[group][groupTitle].length; 
          event++) {

          // [default,mt,mk,lk,jn,week,eventTitle,location]
          store.htmlOutput[group][groupTitle][event] = [];
          // [default,mt,mk,lk,jn,...]
          this.createHTML(group,groupTitle,event);
          // [...,week,eventTitle,location]
          this.addSpaceTime(group,groupTitle,event);
        }
      }
    }    
  },


  methods: {

    createHTML(g,gt,e) { // group, groupTitle, event
      let gospel, entry, verse, author, chapter;

      // [[[default]],[[mt]],[[mk]],[[lk]],[[jn]],...]
      for (gospel = 0; gospel < 5; gospel++) {

        // avoiding undefined middleware array elements
        store.htmlOutput[g][gt][e][gospel] = "";

        if (Array.isArray(store.timeline[g][gt][e][gospel])) {

          for ( // [["author",chapter,verseFrom,verseTo],["author",... ],... ]
            entry = 0; 
            entry < store.timeline[g][gt][e][gospel].length; 
            entry++) {

            author = store.timeline[g][gt][e][gospel][entry][0];
            chapter = store.timeline[g][gt][e][gospel][entry][1];

            for ( // ["author",chapter,verseFrom,verseTo]
              verse = store.timeline[g][gt][e][gospel][entry][2];
              verse <= store.timeline[g][gt][e][gospel][entry][3];
              verse++) {

              // In this for-loop, we have finally reached the bottom of
              // the rabbit's hole and can build the html content.
              if (author === "Act") {
                
                store.htmlOutput[g][gt][e][gospel] += 
                  '<div class="verse-ref"><div>Act</div>' +
                  chapter + ':' + verse + '</div>' +
                  store.gospels.LK[chapter-1][verse-1];
              }
              else {

                store.htmlOutput[g][gt][e][gospel] += 
                '<div class="verse-ref"><div>' + author + '</div>' +
                chapter + ':' + verse + '</div>' +
                store.gospels[author][chapter-1][verse-1];
              }
            }
          }
        }
      }
    },

    // input:  [...,week,eventTitle,location]
    // output: [...,week+eventTitle,location]
    addSpaceTime(g,gt,e) {      
      
      // Week in store is a raw number.
      // We concatenate with "Week" and a separator pipe
      // before copying into htmlOutput
      if (store.timeline[g][gt][e][5]) {
        store.timeline[g][gt][e][5] =
          "Week " + store.timeline[g][gt][e][5] + " | ";
      }

      store.htmlOutput[g][gt][e][5] = 
        store.timeline[g][gt][e][5] + store.timeline[g][gt][e][6];

      store.htmlOutput[g][gt][e][6] = store.timeline[g][gt][e][7];

    }

  }

}
</script>