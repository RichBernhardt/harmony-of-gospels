<template>
  <span style="display:none" />
</template>

<script>
import { store } from "~/components/store";

// The timeline is the blueprint:
// [ { groupTitle: [default,mt,mk,lk,jn,week,eventTitle,location],... },... ].
// The fetched timeline has gaps for minimizing editing errors and data transfer.
// It is completed here in this component.
export default {

  created() {
    if (!store.htmlOutput.length) {

      let group, groupTitle, event, gospel;

      for ( // blueprint for outer accordion:
        group = 0;
        group < store.timeline.length;
        group++) {
        
        groupTitle = Object.keys(store.timeline[group]);

        for ( // blueprint for inner accordion:
          event = 0; 
          event < store.timeline[group][groupTitle].length; 
          event++) {
          
          for (gospel = 1; gospel < 5; gospel++) {
            if (Array.isArray(
              store.timeline[group][groupTitle][event][gospel] )) {

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
          if (!Array.isArray(store.timeline[group][groupTitle][event][0])) {
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
        case 1: store.timeline[g][gt][e][go].unshift("MT"); break;
        case 2: store.timeline[g][gt][e][go].unshift("MK"); break;
        // Luke's gospel has 24 chapters. Luke wrote the Acts too and
        // some chapters from the Acts are also part of this topic:
        case 3: (store.timeline[g][gt][e][go][0] < 25) 
                    ? store.timeline[g][gt][e][go].unshift("LK") 
                    : store.timeline[g][gt][e][go].unshift("Act"); break;
        case 4: store.timeline[g][gt][e][go].unshift("JN"); break;
      }
    },

    // group, groupTitle, event, gospel
    nestingGospels(g,gt,e,go) {
      const aux = JSON.stringify(
        store.timeline[g][gt][e][go]);
      store.timeline[g][gt][e][go] = null;
      store.timeline[g][gt][e][go] = [];
      store.timeline[g][gt][e][go][0] = 
        JSON.parse(aux);
    },

    completeDefault(g,gt,e) {
      switch (store.timeline[g][gt][e][0]) {
        // "empty" are for events recorded by a single gospel only
        // case "": store.timeline[g][gt][e][0] = 
        //   store.timeline[g][gt][e][
        //     store.timeline[g][gt][e].findIndex(i=>i)]; 
        //     break;
        case "MT": store.timeline[g][gt][e][0] = 
          store.timeline[g][gt][e][1]; 
          break;
        case "MK": store.timeline[g][gt][e][0] = 
          store.timeline[g][gt][e][2]; 
          break;
        case "LK": store.timeline[g][gt][e][0] = 
          store.timeline[g][gt][e][3]; 
          break;
        case "JN": store.timeline[g][gt][e][0] = 
          store.timeline[g][gt][e][4]; 
          break;
      }
    }

  },

}
</script>
