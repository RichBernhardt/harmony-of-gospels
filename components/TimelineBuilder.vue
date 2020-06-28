<template>
  <p style="display:none" />
</template>

<script>
import { gdata } from "~/components/gdata";

// The timeline is the blueprint:
// [ { groupTitle: [default,mt,mk,lk,jn,week,eventTitle,location],... },... ].
// The fetched timeline has gaps for minimizing editing errors and data transfer,
// and we complete it here in this component.
export default {

  created() {
    if (!gdata.htmlOutput.length) {

      let group, groupTitle, event, gospel;

      for ( // blueprint for outer accordion:
        group = 0;
        group < gdata.timeline.length;
        group++) {
        
        groupTitle = Object.keys(gdata.timeline[group]);

        for ( // blueprint for inner accordion:
          event = 0; 
          event < gdata.timeline[group][groupTitle].length; 
          event++) {
          
          for (gospel = 1; gospel < 5; gospel++) {
            if (Array.isArray(
              gdata.timeline[group][groupTitle][event][gospel] )) {

                // In TimelineRaw the default gospels (MT,MK,LK,JN)
                // do not have "author" item. Thus instead of this:
                // ["author",chapter,verseFrom,verseTo], they are
                // like this: [chapter,verseFrom,verseTo].
                // For ease of data handling, we uniform them by
                // adding the "author" to it.
                this.addAuthor( group, groupTitle, event, gospel );

                // All gospel entry follows the following pattern: 
                // ["author",chapter,verseFrom,verseTo]
                // Although some default gospel has multiple entries
                // which results an array-in-array structure:
                // [["author",chapter,verseFrom,verseTo],["author",... ]
                // For ease of data handling, we make the default and
                // non-default gospels uniform, by nesting the non-default
                // ones (MT,MK,LK,JN) into an extra wrapping array.
                this.nestingGospels( group, groupTitle, event, gospel );
            }
          }

          // In TimelineRaw, the default record:
          // - can either be left empty or
          // - can store only a reference to the selected gospel ("MT") or
          // - can have multiple [entries]- as mentioned above.
          // Here (after the above gospel-loop) we complete the first two options.
          if (!Array.isArray(gdata.timeline[group][groupTitle][event][0])) {
            this.completeDefault(group, groupTitle, event);
          }
          
        }
      }
    }
  },


  methods: {
    // group, groupTitle, event, gospel
    addAuthor(g,gt,e,go) {
      switch (go) {
        case 1: gdata.timeline[g][gt][e][go].unshift("MT"); break;
        case 2: gdata.timeline[g][gt][e][go].unshift("MK"); break;
        // Luke's gospel has 24 chapters. Luke wrote the Acts too and
        // some chapters from the Acts are also part of this topic:
        case 3: (gdata.timeline[g][gt][e][go][0] < 25) 
                    ? gdata.timeline[g][gt][e][go].unshift("LK") 
                    : gdata.timeline[g][gt][e][go].unshift("Act"); break;
        case 4: gdata.timeline[g][gt][e][go].unshift("JN"); break;
      }
    },

    // group, groupTitle, event, gospel
    nestingGospels(g,gt,e,go) {
      const aux = JSON.stringify(
        gdata.timeline[g][gt][e][go]);
      gdata.timeline[g][gt][e][go] = null;
      gdata.timeline[g][gt][e][go] = [];
      gdata.timeline[g][gt][e][go][0] = 
        JSON.parse(aux);
    },

    completeDefault(g,gt,e) {
      switch (gdata.timeline[g][gt][e][0]) {
        // "empty" are for events recorded by a single gospel only
        case "": gdata.timeline[g][gt][e][0] = 
          gdata.timeline[g][gt][e][
            gdata.timeline[g][gt][e].findIndex(i=>i)]; 
            break;
        case "MT": gdata.timeline[g][gt][e][0] = 
          gdata.timeline[g][gt][e][1]; 
          break;
        case "MK": gdata.timeline[g][gt][e][0] = 
          gdata.timeline[g][gt][e][2]; 
          break;
        case "LK": gdata.timeline[g][gt][e][0] = 
          gdata.timeline[g][gt][e][3]; 
          break;
        case "JN": gdata.timeline[g][gt][e][0] = 
          gdata.timeline[g][gt][e][4]; 
          break;
      }
    }

  },

}
</script>
