(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{155:function(e,t,n){var content=n(168);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(74).default)("e5be734c",content,!0,{sourceMap:!1})},167:function(e,t,n){"use strict";var o=n(155);n.n(o).a},168:function(e,t,n){(t=n(73)(!1)).push([e.i,"html{font-size:100%;font-family:Georgia,serif}body{margin:0}.split-view{width:100%;display:table}.left,.right{display:table-cell}.right{resize:horizontal;overflow:auto;transform:rotate(180deg);border-right:1px solid grey}",""]),e.exports=t},171:function(e,t,n){"use strict";n.r(t);n(29),n(12),n(59);var o=n(149),l=n(150),r=n(151),c={components:{Map:l.default,AccordionMain:r.default},data:function(){return{store:o.a}},created:function(){this.relocateDefaultGospel()},mounted:function(){var e=this;window.addEventListener("resize",(function(){requestAnimationFrame(e.onResize)})),requestAnimationFrame(this.onResize)},methods:{onResize:function(){o.a.gospels.widthWin=window.innerWidth,o.a.gospels.paralelMax=Math.min(5,Math.floor(window.innerWidth/o.a.gospels.widthMin)),o.a.gospels.paralelCurrent>o.a.gospels.paralelMax&&(o.a.gospels.paralelCurrent=o.a.gospels.paralelMax)},relocateDefaultGospel:function(){var g,e,t,n;for(g=0;g<o.a.timeline.length;g++)for(e=Object.keys(o.a.timeline[g]),t=0;t<o.a.timeline[g][e].length;t++)if(!Array.isArray(o.a.timeline[g][e][t][2])){for(n=3;o.a.timeline[g][e][t][n][0][0]!==o.a.timeline[g][e][t][2];)n++;o.a.timeline[g][e][t][2]=o.a.timeline[g][e][t][n],o.a.timeline[g][e][t].splice(n,1)}}}},d=(n(167),n(19)),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"split-view"},[n("div",{staticClass:"left"},e._l(e.store.timeline,(function(t,o){return n("AccordionMain",e._b({key:o},"AccordionMain",{groupIndex:o,groupTitle:Object.keys(t).toString()},!1))})),1),e._v(" "),n("div",{staticClass:"right"}),e._v(" "),n("Map")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{AccordionMain:n(151).default,Map:n(150).default})}}]);