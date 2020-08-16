// This Google App Script creates the timeline***.js
// files from a Google Spreadsheet.

function createTimeline() {
  //https://developers.google.com/apps-script/reference/spreadsheet/range#getValues()
  //https://developers.google.com/apps-script/reference/spreadsheet/sheet#getrangea1notation
  const data = SpreadsheetApp.getActiveSheet().getRange("master!C:U").getValues();
  const json = JSON.stringify(data)
  .replace(/,\[/gm,",\n[") // line break after each event
  .replace(/,\n.*\[([^\[]*)(,""){18}.*/gm,"\n  ]},\n  {$1: [") // Main titles > Object Keys
  .replace(/^.*\n.*/,"[") // remove column headers
  .replace(/]$/,"\n  ]}\n]") // end of file
  .replace(/"(\w+,[\w,\\]+)"/gm,"[[$1]]") // "array-type-default" > [array-type-default]
  .replace(/\\n/gm,"],[") // [array-type-default\narray-type-default] > [[array-type-default],[array-type-default]]
  .replace(/(,""){4}/gm,"") // remove empty gospels
  .replace(/,""/gm,"") // remove leftover
  .replace(/\[(\w+),/gm,'["$1",') // author-of-defaults > "author-of-defaults"
  .replace(/,("[MTKLJNACT]+"(,\d+){3})/gm,",[[$1]]") // gospel > [[gospel]]
  ;
  
  // https://stackoverflow.com/a/63264551
  const temp = JSON.parse(json);
  relocateDefaultGospel(temp);
  
  const timeline = JSON.stringify(temp)
  .replace(/\]{4}\},/gm,"]]]\n    ]\n  },\n") // line break between objects
  .replace(/(\{.*)/gm,"  $1") // indentation for objects
  .replace(/(\]{3},)/gm,"$1\n") // line break after events
  .replace(/:\[/gm,":\n    [\n") // line break after objects
  .replace(/\[/,"const timeline = [\n")
  .replace(/(^\[.*)/gm,"      $1") // indentation for events
  .replace(/\]{4}.*/,"]]]\n    ]\n  }\n];\nexport { timeline as default };")
  ;
  
  DriveApp.getFolderById("1zLJcVAWWPA2RdbgNgyzWgKBhnu5Hgmbg").createFile("timeline.js", timeline, MimeType.PLAIN_TEXT);
  //  My Drive > Harmony of Gospels > timeline script output folder
  //  https://drive.google.com/drive/folders/1zLJcVAWWPA2RdbgNgyzWgKBhnu5Hgmbg
};


function relocateDefaultGospel(timeline) {
    // Relocate the default-gospel in timeline to index 2 in each event:
    // [{groupTitle:
    //   [eventTitle,location,DEFAULT-GOSPEL,gospel[i],...],... },... ]
    let 
      g,  // group
      gt, // groupTitle
      e,  // event
      aux; // auxiliary

    for ( g = 0; g < timeline.length; g++) {
      gt = Object.keys(timeline[g]);
      for ( e = 0; e < timeline[g][gt].length; e++) {
        if (!Array.isArray(timeline[g][gt][e][2])) {
          // In Timelines, the default record:
          // - can store only a reference to the selected gospel ("MT") or
          // - can have multiple entries which results an array-in-array
          // structure: [["author",chapter,verseFrom,verseTo],["author",... ].
          // Where there is a reference only, we find and replace it by
          // the referenced gospel instead...
          for ( aux = 3;
            timeline[g][gt][e][aux][0][0] !== timeline[g][gt][e][2];)
            { aux++ 
          }
          timeline[g][gt][e][2] = timeline[g][gt][e][aux];
          // ...and delete the referenced gospel from its 
          // original place to avoid any duplication
          timeline[g][gt][e].splice(aux,1);
        }
      }
    }
  };
