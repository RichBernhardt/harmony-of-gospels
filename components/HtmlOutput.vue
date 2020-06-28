<template>
  <p style="display:none" />
</template>

<script>
import { gdata } from "~/components/gdata";

export default {

  created() {
    if (!gdata.htmlOutput.length) {

      // The goal is to have the following content in gdata.htmlOutput: 
      // [ { groupTitle: [ [default,mt,mk,lk,jn,week+eventTitle,location],... ] },... ]
      let group, groupTitle, event;

      for (
        group = 0; 
        group < gdata.timeline.length; 
        group++) {

        groupTitle = Object.keys(gdata.timeline[group]);
        gdata.htmlOutput[group] = {};
        gdata.htmlOutput[group][groupTitle] = [];

        for (
          event = 0; 
          event < gdata.timeline[group][groupTitle].length; 
          event++) {

          // [default,mt,mk,lk,jn,week,eventTitle,location]
          gdata.htmlOutput[group][groupTitle][event] = [];
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
        gdata.htmlOutput[g][gt][e][gospel] = "";

        if (Array.isArray(gdata.timeline[g][gt][e][gospel])) {

          for ( // [["author",chapter,verseFrom,verseTo],["author",... ],... ]
            entry = 0; 
            entry < gdata.timeline[g][gt][e][gospel].length; 
            entry++) {

            author = gdata.timeline[g][gt][e][gospel][entry][0];
            chapter = gdata.timeline[g][gt][e][gospel][entry][1];

            for ( // ["author",chapter,verseFrom,verseTo]
              verse = gdata.timeline[g][gt][e][gospel][entry][2];
              verse <= gdata.timeline[g][gt][e][gospel][entry][3];
              verse++) {

              // In this for-loop, we have finally reached the bottom of
              // the rabbit's hole and can build the html content.
              if (author === "Act") {
                
                gdata.htmlOutput[g][gt][e][gospel] += 
                  '<div class="verse-ref"><div>Act</div>' +
                  chapter + ':' + verse + '</div>' +
                  gdata.LK[chapter-1][verse-1];
              }
              else {

                gdata.htmlOutput[g][gt][e][gospel] += 
                '<div class="verse-ref"><div>' + author + '</div>' +
                chapter + ':' + verse + '</div>' +
                gdata[author][chapter-1][verse-1];
              }
            }
          }
        }
      }
    },

    // input:  [default,mt,mk,lk,jn,week,eventTitle,location]
    // output: [default,mt,mk,lk,jn,week+eventTitle,location]
    addSpaceTime(g,gt,e) {      

      if (gdata.timeline[g][gt][e][5]) {
        gdata.timeline[g][gt][e][5] =
          "Week " + gdata.timeline[g][gt][e][5] + " | ";
      }

      gdata.htmlOutput[g][gt][e][5] = 
        gdata.timeline[g][gt][e][5] + gdata.timeline[g][gt][e][6];

      gdata.htmlOutput[g][gt][e][6] = gdata.timeline[g][gt][e][7];

    }

  }

}
</script>