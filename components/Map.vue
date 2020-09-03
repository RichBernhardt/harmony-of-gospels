<script>
import { store } from "~/components/store";

export default {

  data () {
    return {
      store,
    }
  },

  computed: {
    ontop() {
      const zIndex = (store.map.onShow) ? "" : "-";
      return zIndex;
    }
  },

}
</script>

<style scoped>
  .rootConstant { 
    position: fixed;
    stroke-linecap:round;
    stroke-linejoin:round;
    paint-order:stroke;
    transition: z-index 400ms;
  }

  .rootVariable {
    height: 100%;
    top: 0;
    right: 0;
  }
  
  /* https://stackoverflow.com/questions/36681583/ */
  @media
    (orientation: landscape) and (max-height: 528px) {
    .rootVariable {
      height: 101vw;
      transform: rotate(-90deg) translateY(-20vw) translateX(21vw);
    }
  }

  .current-area { fill:OrangeRed; opacity:0.6;}
  .current-city { stroke:OrangeRed; }
  .current-shore { visibility:visible; fill:none; stroke:OrangeRed; stroke-width:0.3em; filter:url(#shadow); }   

  .cities { stroke-width:0.1em; }
  .contour { stroke:#00000000; stroke-width:0; stroke-opacity:0 }
  .county-area { stroke:DimGray; stroke-width:1; fill:none; }
  .text-county { fill:DimGray; font-size:1rem;} 
  .river-jordan { stroke:PaleTurquoise; fill:none; stroke-width:2 }
  .text-jordan { fill:PaleTurquoise; stroke:none; font-weight:bold}
  .m1000 { fill:DarkGoldenRod }
  .m500 { fill:GoldenRod }
  .m200 { fill:Orange }
  .m100 { fill:Gold }
  .m0 { fill:OliveDrab }
  .m00-land { fill:YellowGreen }
  .m-flood { fill:MediumSeaGreen }
  .m00-sea { fill:PaleTurquoise }
  .river { stroke:PaleTurquoise; fill:none; stroke-width:1; }
  .scale > path { fill:none; stroke:DimGray; }
  .shores { visibility:hidden; }
  .text-water { fill:DodgerBlue }

  .end { text-anchor:end; }
  .center { text-anchor:middle; }

  text {
    font-size:0.6rem;
    /* font-family:'Georgia', serif; */
    white-space:pre;
    stroke-width:0.1em;
    }
</style>

<template>
  <svg
    class="rootConstant rootVariable"
    :style="{ 'z-index': ontop + '2' }"
    version="1.1"
    viewBox="0 0 270 460"
    xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="linearGradient-PaleTurquoise" gradientUnits="userSpaceOnUse">
        <stop style="stop-color:PaleTurquoise;stop-opacity:0" offset="0" />
        <stop style="stop-color:PaleTurquoise" offset=".7" />
      </linearGradient>
      <filter id="shadow" x="-133%" y="-100%" width="400%" height="300%">
        <feGaussianBlur stdDeviation="2" />
      </filter>
      <path id="text-countypath" d="m-33.3-66.7c0 50 50 100 100 100" />
    </defs>
    <g class="m00-land">
      <path d="m270 460v-460l-108 4.8e-5c-5.78 13.5-12.1 30.9-17.1 40.5-10.1 16.1-17.5 18.4-17.5 31.3-.179 8.2 1 21.5-8.69 26.1 5.04 4.35 1.69 19.9-6.99 26.9-10.6 10.3-12.8 25.8-13.7 39.9-.822 9.45-1.3 19-3.46 28.3-12.5 16.6-14.5-5.23-20.9 8.53-1.38 10.3-.167 24-4.13 34.5-7.86 43.5-13.1 87.7-27.5 130-10.3 32.6-23.5 64.3-39.4 94.5z" />
    </g>
    <g class="contour m0">
      <path d="m203 460h-38.2m38.2 0c4.52-13.5 12.9-25.5 15.6-39.6-.665-13.2-14.2-22.2-13.1-35.8 2.36-8.87 1.51-18.3-.786-27-.869-7.92 6.77-15.2 6.97-21.2 1.2-1.8-8.78-14.4-9.68-23-3.22-15.5.282-31.2 1.11-46.8.954-9.81 1.9-19.6 2.3-29.5 2.3-6.46 4.35-17.9 1.34-27-.421-9.12 3.31-15.1 2.1-20.1-1.82-8.38 5.85-22.3-10.2-15.7-6.44 2.37-11.9 8.86-19.4 7.05-6.99.308-11 10.8-5.28 15.2 6.99 2.57 10.7 12.4 5.92 18.5-2.66 7.4 3.31 10.6 6.48 16.9 2.48 8.17-1.46 21.7-9.04 26.1-5.92 1.93-14-6.86-19.8-4.17-16.1 1.91 5.23 7.36 9.46 10.4 6.57 9.55 3.93 27 9.89 36.8 2.94 7.02 4.72 14.8 9.76 20.5 3.77 2.75-4.75 16.1-13.9 9.45-12.3-8.13-8.12 2.73.611 12.8 6.27 4.35-2.62 20.2-5.65 26.2-2.81 7.09.943 15.1-2.56 22.1-2.3 11.8 4.04 23.8.213 35.5-.673 7.77-.383 15.8 2.25 23.2.295 3.3-.323 6.98-2.84 9.34" />
    </g>
    <g class="contour m100">
      <path d="m46.8 460 115 .00024c-5.78-5.9-5.8-16.2-.347-22.3 3.19-7.76-2.31-16.4 1.48-24 1.06-8.12-4.63-16.8.216-24.4 3.11-7.16-.134-14.9.585-22.3 1.23-7.65 7.92-12.3 5.97-19.4-.0632-5.7-10.2-15.5-7.96-21.4 5.18-5.17 18.8 1.29 12-14-1-14.4-6.77-28-8.25-42.2-.158-5.1-12.7-11.1-18.7-5.62-5.43 4.54-15.2 5.73-19.5-.931-5.12-6.41-7.58-15.3-15.2-19.5-9.48-8.27-10.6-21.4-17.1-31.6-3.93-7.92-11.2-11.9-16.3-6.54-4.22 7.97-.001 16.8.891 25.1 2.08 7.3.006 15 1.27 22.3 2.96 6.45 11.1 10.2 11.1 18 1.36 8.7 8.36 17.1 4.66 26.1-3.1 6.86-3.76 14.5-5.42 21.7-3.59 8.43-10.2 16.9-7.61 26.6 1 7.64 1.11 16.1-3.54 22.7-3.26 6.68-3.9 14.4-2.68 21.6-.374 6.95-3.81 13.6-8.92 18.2-6.56 10.1-3.68 23.7-11.3 33.3-3.6 6.15-7.84 12-10.7 18.5" />
      <path d="m270 460v-460l-104-.000475c-6.57 9.01-8.6 20.2-12.5 30.4-6.29 12.9-14.6 25.2-17.2 39.5-1.78 14.8-3.15 30.4-11.3 43.4-3.84 7.56-12.6 11.3-15.4 19.5-2.22 7.53 5 14.1 4.13 21.7-1.16 6.87.449 14.2 4.83 19.7 5.68 4.46 6.13 12.8 1.78 18.4-5.35 6.93-13.6 13.7-12.7 23.3 1.67 7.6 9.91 10.6 16.4 13 7.99 1.86 15.1 6.68 20 13.3 3.1 6.1 10.7 7 16.8 6.25 6.2 1.05 10.7-4.33 7.71-10.3-2.8-9.07 9.8-.445 13-4.61 2.65-7.44-8.49-10.3-9.45-16.6-1.06-7.04.165-15.6-5.85-20.6-6.96-3.34-4.92-15.3 2.47-16.7 8.58-.243 18.2-.184 25-6.68 1.06-1.71 10.9-8.29 14.8-6.35 5.71 2.52 5.65 9.97 4.78 15.2-1.58 5.45-.478 11.1-2.22 16.5-2.06 5.97-4.72 13 .58 18.2 4.65 5.47 1.64 12.5-1.17 18-3.35 4.62-2.09 14.3-3.67 21.4-.646 9.97-1.3 20-2.88 29.9-2.61 14.5-1.26 26.9 7.2 44.6 6.8 9.36 17.5 11.2.41 17.3-6.55 4.29-3.74 13.3-3.02 19.7 3.42 8.67-3.36 17.7-.131 26.4 6.82 6.88 11.9 15.9 12.6 25.7-1.57 14.7-11.7 26.4-15.1 40.5z" />
    </g>
    <g class="contour m200">
      <path d="m150 183c7.25 1.02 11.7 12.2-5.9 13.9-4.91-.757-15.4 6.31-18.2.223-2.39-7.51 10.1-15 16-12 2.7.962 4.54-2.7 8.14-2.19z" />
      <path d="m153 205c-11.7-4.34 13-9.15 14.2-1.6 3.94 7.63-1.08 18.5-9.73 19.8-8.15 3.61-16.9 8.93-26.1 6.36-8.27-3.64-5.9-18.3 3.09-19.1 6.42-1.02 13.6 4.19 19.3-.601 1.83-1.18 1.47-4.1-.644-4.89z" />
      <path d="m172 .132 97.8-.000103v460l-61.7-.00021c4.43-15.3 15.3-28.9 14.9-45.4-.681-7.69-4.75-15-10.9-19.6-4.68-11.2 1.59-23.6-3.03-34.8-1.43-6.74 3.06-11.8 11.9-13.3 20-3.47 14.6-7.26-3.7-13.8-4.77-2.16-11-20.1-12-31.2-.842-13 3.15-25.6 4.31-38.4-.0484-6.66-.759-12.5 4.52-19.3 3.01-3.1-.234-16.4 6.36-21.8 5.2-4.94 13.5-6.89 20.1-3.58 20.4 17.8 13.5 8.14 14.5.786-.932-13.5-14.2-5.92-15.6-8.53-8.58-8.49-8.53-6.23-13.5-2.99-3.68 3.01-8.77 7.83-12.4 1.71-4.12-5.48 1.7-10.3 2.78-15.5.599-6.63.0865-13.4.421-20-.498-8.15-8.03-12.7-11.8-19-5.16-11.4.322-23.7-.197-35.5-.16-5.19-3.84-11.7-9.84-10.4-7.16 1.53-9.2 10.3-7.61 16.5 1.55 13.4 11 25.8 7.95 39.7-2.03 6.85-10.4 10.7-17 8.29-10.1-.296-17.7 10.3-28.1 7.53-8.75-1.51-18.9-1.06-25.8-7.67-5.61-6.58-5.75-15.8-4.83-24-1.11-6.63-6.53-13-3.6-19.9 5.5-10.1 19.4-14 21.6-26.2 1.06-5.78 4.03-13.3 10.8-13.7 4.59 1.71 15.1 1.47 13.1-5.71-4.41-6.47-15.1 1.4-18.9-6.39-4.06-7.5 1.46-15.3 4.31-22.2 7.91-18.7 10.2-40.6 25.2-55.6" />
      <path d="m65 460h90.4c-5.57-5.32-3.21-14.6 1.78-19.4 4.05-6.62 1.91-15.9-1.55-21.5-2.5-5.04 3.95-18.4 4.31-27.9 1.84-6.68 3.82-14 1.2-20.8-1.87-11.2 3.24-22 1.89-33.2-1.58-6.2-12.2-5.92-10.4-13.5 3.77-5.95 15.8.567 16.8-8.76 3.48-12.4-5.8-24-4.91-36.4.974-6.19-3.88-14.6-10.2-9.69-4.62 3.46-6.14 11.2-12.8 11.6-9.56.656-17.4-7.45-20.6-15.8-2.42-5.44-3.42-12-8.73-15.6-4.89-3.81-11-7.76-11.6-14.6-1.34-8.27-1.93-17.8-8.78-23.6-5.32-5.15-13.6.801-12.8 7.34 1 6.41 5.29 11.7 8.71 17 6.86 9.54 14.9 19.6 15 31.9.586 6.44 1.73 12.9 4.54 18.8 1.4 11-4.88 21-5.53 31.8-2.96 11.4-12.6 21.4-10 33.8 1.52 6.95.514 14.1-3.02 20.3-2.47 6.29-2.89 13.3-1.18 19.8.0275 7.58-3.12 15-1.56 22.6-1.66 8.31-6.93 15.2-10 22.9-3.95 5.4-8.7 11.1-8.75 18.1-.402 1.56-.987 3.1-1.97 4.4" />
    </g>
    <g class="contour m500">
      <path d="m214 460c-.817-7.33 11.3-16.5 12-22.7 2.09-12.2 5.43-24.2 5.21-36.7-2.06-7.1-11.7-6.66-14.7-14-3.02-8.04-1.02-16.7-1.57-25-2.6-7.22 5.61-15.2 12.8-12.8 7.22 3.24 14.8-2.09 19.1-7.62 7.47-4.08 16.2 2.98 23.6-1.54h-4e-5l6e-5 120z" />
      <path d="m141 460c-2.38-8.46 4.1-16.8 1.22-25.2-3.25-7.19 9.4-32.1 14.5-47.9 4.18-12.8-4-26.6 2.21-39 3.1-6.41-.541-15.3-8.56-14.1-8.88.218-11.9-8.68-8.97-15.9 2.12-6.45-6.24-13.2-11.4-7.75-3.78 3.77-3.64 9.39-4.18 14.3-1.65 6.83-3.17 14.7 1.24 20.9 2.49 6.54-4.56 10.8-6.65 16.3-1.37 6.09 1.23 13.8-4.25 18.5-6.27 3.86-9.98 12.2-7.38 19.3 1.22 8.15-3.87 15.2-8.04 21.7-3.95 9.12-6.41 29.1-6.27 39z" />
      <path d="m270 244c.404 8.03-14.5 7.4-13.2-.651.148-6.92-5.69-15-13.2-13.8-6.74 3.6-4.69 12.4-2.91 18.4.605 8.38-7.36 13.3-12.9 18.2-5.93 4.95-10.9 12-10.3 20.1-.613 6.88-8.13 13.4-8.59 18-2.31 8.08 4.11 14.8 7.82 21.3 3.22 5.6 8.92 11.5 16 9.92 8.17.198 12.4-10.8 20.2-8.63 5.1 3.26 14.6 6.8 17.1-1.52z" />
      <path d="m270 203c-5.46 4.93-14.5-2.11-18-7.37-14.3-14.6-32.1-27-40.3-46.4-4.34-9.61-4.31-20.7-.596-30.5 2.19-6.09 3.25-13.2-.656-18.9-3.85-4.61-4.6-14.8-12.5-13.4-6.55 1.69-8.88 8.62-10.9 14.3-2.85 8.92-.188 18.9-4.84 27.3-2.87 5.46-6.98 12.1-3.28 18.2 3.53 5.12 7.31 12.7 2.48 18.2-8.14 6.87-19.4 3.7-29 4.34-6.24.44-13.5 4.55-19-.437-5.54-5.53.892-12.3 2.77-18 .738-7.2-6.96-14.8-1.66-22.1 4.78-4.78 8.51-10.5 12.8-15.7 3.91-5.68 10.4-8.47 17.2-8.25 8.9.242 11-9.64 16.5-14.5 6.85-4.14 7.67-14.6 2.13-20.1-9.04-8.04-17.6-19.4-15.7-32.2 3.09-6.98-1.03-14.2-1.02-21.4 3.92-6.52 10.3-10.9 15.4-16.3h88.2z" />
    </g>
    <g class="contour m1000">
      <path d="m196 .132c-7.55 0-12 11.3-5.65 15.6 2.39 7.79-8.06 11.8-11.5 18.1-3.93 7.9-.0704 19.6 8.16 22.1 7.97.448 11.4-9.95 12.1-17.1 3.35-12.2 9.11-20.5 19.7-29.4 3.39-6.85.42-3.59 3.62-9.24z" />
      <path d="m270 77.9c-10.5 3.37-18.4 4.33-14.8 14.6.566 9.31-6.82 16.2-13.1 22-4.45 4.51-11.5 8.85-17.8 5.33-5.47-3.89-3.71-11.3-4.22-17-.97-7.54-10.5-8.46-13.3-14.8-1.89-7.66 1.36-15.6 5.6-21.9 4.25-7.7 13-10.9 18.5-17.4 5.68-6.17-4.48-11.8-10-9.25-8.1 3.75-10.5-11-3.34-13.2 12.6-3.42 20.7-15.2 26.1-26.2h26.3z" />
    </g>
    <g class="contour m-flood">
      <path d="m199 460c2.16-10.2 1.4-7.79 4.72-19.2 6.22-18-4.97-23.3-5.68-37.1.252-16.2-5.11-28.7-3.19-42.2 1.57-18.5 8.23-37.8-.683-55.9-1.36-6.13 1.41-8.78-3.15-7.84-5.38-3.88-6.69 2.44-6.76 3.75-.0823 1.41 3.88 5 3.97 7.14.743 17.5 3.57 16-1.95 34-4.46 8.22-8.97 34.5-5.45 43.9 5.94 24.6-6.37 49.4-10.3 73.3z" />
    </g>
    <g class="contour m00-sea">
      <g>
        <path 
          id="lake-galilee" 
          :class="{ 'current-area': store.map.currentLocation === 'lake-galilee' }"
          d="m198 181c-11.9 3.52-13.8 6.44-15.9 13-.593 8.75 8.77 14.6 8.86 23.2.143 13.7 14.1.65 12.9-6.89-1.53-9.73 4.42-29.2-5.87-29.3" />
        <g transform="translate(195,194)">
          <text id="lake-text" class="center text-water" transform="rotate(45)">Lake</text>
          <text id="galilee-text" class="center text-water" transform="rotate(45)" y="0.8em" x="0.25em">Galilee</text>
        </g>
      </g>
      <g>
        <path id="dead-sea" d="m199 460c1.02-7.11 4.23-13 3.57-20.8-1.29-3.47-4.37-5.74-7.71-6.42-3.34-.683-6.95.213-9.31 3.06-6.62 4.48-10.7 12.3-11.1 20.2-.471 1.44-1.14 2.84-2.18 3.97z" />
        <g transform="translate(189,448)">
          <text class="center text-water" transform="rotate(45)">Dead</text>
          <text class="center text-water" transform="rotate(45)" y="0.8em">Sea</text>
        </g>
      </g>
      <path id="mediterranean-sea" d="m.132 460v-460l162 4.74e-5c-5.78 13.5-12.1 30.9-17.1 40.5-10.1 16.1-17.5 18.4-17.5 31.3-.179 8.2 1 21.5-8.69 26.1 5.04 4.35 1.69 19.9-6.99 26.9-10.6 10.3-12.8 25.8-13.7 39.9-.822 9.45-1.3 19-3.46 28.3-12.5 16.6-14.5-5.23-20.9 8.53-1.38 10.3-.167 24-4.13 34.5-7.86 43.5-13.1 87.7-27.5 130-10.3 32.6-23.5 64.3-39.4 94.5z" style="fill:url(#linearGradient-PaleTurquoise)" />
    </g>
    <g class="river">
      <g>
        <path id="river-jordan" class="river-jordan" d="m194 223c-10.1 8.92.524 24.1-1.2 28.2-3.59 13.3 1.55 23.6-2.75 40.5-.616 1.64-1.94 5.16-1.34 9.6 4.19 15.1 5.18 29.7 2.72 44.4-6.79 28.9 5.79 57.8 1.24 87.2" />
        <text><textPath class="text-jordan" startOffset="16%" xlink:href="#river-jordan"><tspan dy="-0.25em">Jordan River</tspan></textPath></text>
      </g>
      <path d="m228 .203-1.01 4.27c1.51 7.14-4.28 14.8-11.5 15.4-8.66 4.51-10.9 14.8-12.9 23.5-3.14 9.87-7.58 20.1-16.3 26.3-4.3 5.33-3.06 13.8-9.13 17.9-9.91 2.75-20-1.17-30-.277-6.67-.591-14.6-2.12-20.6-5.17" />
      <path d="m270 216c-7.9 4.21-17.7 2.74-25.2-1.71-11.6-4.04-25.1.785-32.6 10.2-6.13 4.04-13.6 6.93-17.4 13.6-1.07 1.18-2.23 2.21-3.84 2.45" />
      <path d="m202 110c7.29-5.6 16.6-8.48 22.6-15.7 1.22-11.1 15.9-17.7 25-11.4 7.62 2.75 14.4 7.53 20.1 13.2" />
      <path d="m226 214c3.72-8.61 13.6-12.8 16.5-22 6.11-8.58 15.6-16.3 15.7-27.7-.527-8.78-5.13-17-3.99-26-2.79-11.1-15.3-17.9-15.1-30-.451-3.23-.651-6.49-.846-9.74" />
      <path d="m148 34c16.6-.01 31.2-5.75 45-14.9 2.03-.757 4.15-1.32 6.31-1.57" />
      <path d="m138 51.3c6.93 8.07 17.4 10.5 25.7 16.7" />
      <path d="m126 87.5c12.6 7.07 29.3 3.02 41.4 11.4 6.82 6.08 7.78 17.7 1.74 24.7-2.76 1.77-6.5 2.35-8.26 5.41" />
      <path d="m120 114c4.77 5.01 11 8.69 16.2 13.2 8.08 1.13 15.1 4.46 15.7 11.9 1.52 4.19 3.78 8.05 5.81 12" />
      <path d="m102 142c6.97 1.75 14.8 1.2 21.8.117 7.86 3.82 16.7 4.52 25.2 5.88" />
      <path d="m101 147c8.71 2.2 19.3 2.81 28.2 2.5 11.9 3.2 21.4 11.5 32.6 16.2" />
      <path d="m199 148c-6.79 2.72-15 .578-20-4.6-8.73-2.18-15.9 5.69-19.3 12.8" />
      <path d="m184 191c-10.4-7.56-11.2-22.1-12.1-33.7" />
      <path d="m97.2 178c10.2 6.04 23.6 3.19 34.7 4.51 7.22-1.01 11.9-7.88 19.1-8.98" />
      <path d="m183 194c-5.08-4.82-13.2-6.39-19.9-3.71-8.12-2.38-9.76-13.4-5.76-19.9" />
      <path d="m191 228c-7.83.999-13.4-9.75-17.7-15.2-1.19-1.21-2.58-2.22-4.08-3.02" />
      <path d="m193 248c-14.5-3.64-29.4-13.5-35.5-27.4-.949-1.31-2.21-2.45-3.76-3" />
      <path d="m193 249c11.8-10.8 31.8-10.5 43.5.388 2.62 3.8 2.91 8.54 3.74 12.9" />
      <path d="m192 269c12.3-6.79 30.6-3.67 39.1 7.42 2.79 2.15 5.57 4.47 7.33 7.57" />
      <path d="m190 294c13.6-2.01 28.8-1.65 42-6.26" />
      <path d="m251 218c.757 8.16 4.95 15.8 10.9 21.3 2.52 16.8 1.12 33.9.824 50.8-1.79 6.77-11.3 11.4-17 6.26" />
      <path d="m193 328c13.1-.508 32.6-.382 41.9-11.4" />
      <path d="m238 340c5.89 6.69.741 16.7 5.75 23.7.672 1.43 1.25 2.94 1.33 4.53" />
      <path d="m194 425c16.6-9.64 34.7-14.6 53.9-15.6" />
      <path d="m199 405c-6.42 1.67-4.61-.843-5.26 2.05m5.26-2.05c9.02-2.18 17.3-6.8 24.4-12.8 3.44-5.03 2.3-13.5 9.09-15.9" />
      <path d="m193 402c-11.1-5.46-31.2-5.82-40.5-15-1.26-1.65-2.2-3.58-2.53-5.64" />
      <path d="m155 374c11.1-4.79 27.5-1.62 36 6.95" />
      <path d="m198 351c-1.71 4.11-4.22 6.63-8.48 7.64m8.48-7.64c2.3-8.17 12.5-12.9 20.2-9.33 9.14 1.78 19.4.173 26.6-6 7.11-2.54 14.1 1.46 20.7 3.77 1.53.0171 3.06-.456 4.29-1.37" />
      <path d="m88.1 199c9.77 11.7 14.1 28.9 26.4 38.7 1.86 1.21 3.89 2.17 6.05 2.72" />
      <path d="m92.7 206c6.66 2.76 19.5 2.92 25.3 7.92 4.39 1.55 10.2-.352 11.8-4.96" />
      <path d="m192 267c-7.74 3.22-20.7 1.34-27-4.26-8.37-3.4-19.2-5.31-23-14.7" />
      <path d="m191 290c-10.9.456-19.9.918-30.5 3.52-1.18.871-2.45 1.81-1.27 2.57" />
      <path d="m62.2 281c7.12-.659 12.2 6.74 19.4 5.19 5.98-6.32 11.8-14.8 21.3-15.3 3.44-.197 6.87.287 10.2 1" />
      <path d="m81.6 286c7.08 7.68 18.8 10 27.6 4.54 12.9-4.05 27.1-3.53 39.8 1.06" />
      <path d="m189 301c-5.38 3.72-11.3 9.62-18.4 7.24-6.13-2.36-13.4-2.13-19.1 1.35" />
      <path d="m190 358c-11.4-9.06-18.2-23.9-31.5-31-5.56-4.25-9.07-10.7-10.8-17.4" />
      <path d="m59.9 294c4.11 6.02 13 5.55 18.2 10.1 4.19 8.37 1.47 18.9 7.52 26.6 5.97 4.31 14.3-1.32 20 3.85" />
      <path d="m78.2 304c6.35 4.93 15.2 8.58 23.3 8.61 11.8 3.1 17.7 17.3 30.5 18" />
      <path d="m43.3 364c11.1-.0558 21.3-5.23 30.2-11.4 8.43-1.71 17.6 3.02 25.5-1.88 7.25-2.53 15-2.97 22.4-4.97 5.2-.0413 9.26 3.98 14.3 4.62" />
      <path d="m65.1 357c5.42 8.65 15.6 14.1 25.8 14.2 7.59 3.37 16.9-2.67 23.8 3.13 6.75 4.31 15.6 5.02 21.1 11.3" />
      <path d="m48.1 363c-1.27 9.79 5.98 19.8 15.4 22.2 7.85 4.49 17 6.94 23.7 13.3 8.7 3.9 18-.382 27-.257 2.45-.441 4.92-1.38 6.66-3.23" />
      <path d="m194 421c-8.7-4.65-23-5.94-32.2-2.09-12.6 2.9-28.4-5.12-29.7-18.9" />
      <path d="m30.1 401c7.14 1.33 12 9.31 10.3 16.3 2.08 6.98 9.38 11.4 16.5 11.5 12.2 3.12 22.9 12.7 36.1 11.3 12.4.364 26.1-3.9 33.2-14.8 1.48-3.92.122-8.19-1.5-11.8" />
      <path d="m146 460c-6.74-2.48-10.9-9.06-13.2-15.5" />
      <path d="m19.5 427c7.3 4.45 10.4 13.6 18.4 17.2 8.28 6.62 19.6 9.57 30 6.98 9.98.0375 18.6 7.3 28.8 6.06 6.03.657 12.6-3.7 18.1.399" />
      <path d="m87.3 457c.635 1.02 1.27 2.04 1.9 3.07" />
      <path d="m24.7 431c1.1 9.2 6.46 21.1 10.6 29" />
      <path d="m31.1 452c5.15 1.44 9.65 3.21 11.9 8.46" />
      <path d="m202 110c2.09-12.7-2.93-25.1-2.27-37.8 5.58-12.6 21.5-16.1 27-28.8 3.53-5.65 6.25-11.8 8.59-18" />
      <path d="m202 110c-11.1 6.98-7.46 29.2-3.31 38" style="stroke-linecap:round;stroke-linejoin:round" />
      <path d="m199 148c5.11 7.69-.01 19.7.591 28.6-.276 1.5-.348 2.94-1.26 4.18" style="stroke-linecap:round;stroke-linejoin:round" />
    </g>
    <g class="scale end" transform="translate(263)">
      <text x="5" y="11">km</text>
      <text y="21" dy="0.25em">80 </text>
      <path d="m0 21h5" />
      <text y="41" dy="0.25em">70 </text>
      <path d="m0 41h5" />
      <text y="61" dy="0.25em">60 </text>
      <path d="m0 61h5" />
      <text y="81" dy="0.25em">50 </text>
      <path d="m0 81h5" />
      <text y="101" dy="0.25em">40 </text>
      <path d="m0 101h5" />
      <text y="121" dy="0.25em">30 </text>
      <path d="m0 121h5" />
      <text y="141" dy="0.25em">20 </text>
      <path d="m0 141h5" />
      <text y="161" dy="0.25em">10 </text>
      <path d="m0 161h5" />
      <text y="181" dy="0.25em">0 </text>
      <path d="m0 181h5" />
      <text y="201" dy="0.25em">10 </text>
      <path d="m0 201h5" />
      <text y="221" dy="0.25em">20 </text>
      <path d="m0 221h5" />
      <text y="241" dy="0.25em">30 </text>
      <path d="m0 241h5" />
      <text y="261" dy="0.25em">40 </text>
      <path d="m0 261h5" />
      <text y="281" dy="0.25em">50 </text>
      <path d="m0 281h5" />
      <text y="301" dy="0.25em">60 </text>
      <path d="m0 301h5" />
      <text y="321" dy="0.25em">70 </text>
      <path d="m0 321h5" />
      <text y="341" dy="0.25em">80 </text>
      <path d="m0 341h5" />
      <text y="361" dy="0.25em">90 </text>
      <path d="m0 361h5" />
      <text y="381" dy="0.25em">100 </text>
      <path d="m0 381h5" />
      <text y="401" dy="0.25em">110 </text>
      <path d="m0 401h5" />
      <text y="421" dy="0.25em">120 </text>
      <path d="m0 421h5" />
      <text y="441" dy="0.25em">130 </text>
      <path d="m0 441h5" />
    </g>
    <g class="county-area">
      <g>
        <path
          id="galilee"
          :class="{ 'current-area': store.map.currentLocation === 'galilee' }"
           d="m154 268c-4.6-3.61 5.88-28.5 13.3-35.1 4.58-3.76 12.6-4.98 17.6-6.22 20.4-3.14 20.7-12.4 19.9-23.9 2.71-25.3-8.67-25.6-5.08-36.8.728-8.49 3.47-14.5-5.65-22.5-5.84-4.09-13.4-4.68-20.3-3.31-13.7-.197-27.6-3.41-41.1.205-8.64 5.28-9.81 16.5-9.33 25.7-.88 24.7-11.8 47.4-19 70.7-1.98 5.34-3.98 8.45-4.61 16.5 17.6 1.64 24 8.57 28.3 18.3 3.95 6.61 14.2 14.1 18.8 1.77 1.3-1.6 2.6-5.69 7.07-5.32" />
        <text transform="translate(147,200)"><textPath class="center text-county" startOffset="50%" xlink:href="#text-countypath">GALILEE</textPath></text>
      </g>
      <g>
        <path 
          id="samaria"
          :class="{ 'current-area': store.map.currentLocation === 'samaria' }"
          d="m43.3 364c9.42-32.2 16.8-65 22-98.2 6.54-3.48 15.7-.0186 20.9-6.31 4.65-6 5.88-6.2 13.3-5.93 10.9.387 19.3 5.75 22.8 9.23 4.3 5.46 9.53 19.2 18.9 17.3 5.05-1.16 4.9-11.7 12.5-11.8 7.73 1.21 11.4 9.44 12.8 16.3 2.39 12.9 1.52 14.4 6.53 20.4 5.96 7.06 15-3.66 16.9-5.41 1.32-1.22 3.45 8.94 4.18 13.9 2.13 15.1 2.25 10.3-.548 36.1-1.88 15.5-7.68 8.93-9.79 7.29-3.94-3.91-10.6-13.1-20.6-13-9.15.716-15.5 8.79-21.4 14.9-20.5 18-52.9 18.6-75.3 3.67-5.34-3.59-11.6-1.18-17.2.528-1.93.542-3.91.974-5.93 1.02z" />
        <text transform="translate(95,325)"><textPath class="center text-county" startOffset="50%" xlink:href="#text-countypath">SAMARIA</textPath></text>
      </g>
      <g>
        <path 
          id="judea"
          :class="{ 'current-area': store.map.currentLocation === 'judea' }"
          d="m171 460c5.72-4.44.378-5.41 7.32-17.6 8.5-14 16.6-6.23 17.4-15.8 1.46-14.4-1.72-36.1-2.37-41.2-.374-6.54-2.48-22.2-1.9-28.5-4.86 9.82-14.2-15.7-28.3-13.7-7.62 1.09-13 5.37-21.4 14.9-5.14 5.22-17.9 11.5-23.6 12.5-13.5 2.11-28.2 3.3-40.8-3.16-21.8-12.4-18.7-5.21-34-4.15-6.63 19.4-12 37.5-15.8 46.1-5.84 14.8-17.1 36.5-24.5 50.6z" />
        <text transform="translate(70,430)"><textPath class="center text-county" startOffset="50%" xlink:href="#text-countypath">JUDEA</textPath></text>
      </g>
      <g>
        <path
          id="decapolis"
          :class="{ 'current-area': store.map.currentLocation === 'decapolis' }"
          d="m270 220c-4.62-1.47-11.8.513-17.8-1.12-6.81-1.83-5.28-3.41-14.7-4.58-9.16-1.35-12.3-4.35-13.7-8.65-1.77-5.98-3.24-10.4-19.1-11.6-.329 6.58.446 11.1-1.03 19.5-1.94 12.9-18.5 11.1-21.9 13.6-5.68 1.52-10.7 1.44-15 5.4-7.55 6.96-18.9 33.4-13.3 35.1 3.91 1.15 3.73 1.15 6.75 3.61 4.98 6.19 6.66 14 7.64 21.5 1.06 7.21 4.21 14.4 11.4 13.6 8.66-1.86 11.7-13.2 21-13.7 13.7-2.26 29.8 1.8 37.7 14 4.44 7.37 2.98 16.3 1.34 24.2-2.33 19 8.56 37.2 4.33 56.2-1.29 7.37-1.63 10.2-1.93 17.4 12.4-1.84 14.3 1.06 28.4-7.39z" />
        <text transform="translate(227,277)"><textPath class="center text-county" startOffset="50%" xlink:href="#text-countypath">DECAPOLIS</textPath></text>
      </g>
    </g>
    <g class="cities">
      <g 
        id="sidon" 
        transform="translate(155,24)"
        :class="{ 'current-city': store.map.currentLocation === 'sidon' }">
        <circle r=".1em" />
        <text transform="rotate(45)" x="0.5em" y="0.25em">Sidon</text>
      </g>
      <g 
        id="tyre" 
        transform="translate(122,99)"
        :class="{ 'current-city': store.map.currentLocation === 'tyre' }">
        <circle r=".1em" />
        <text transform="rotate(45)" x="0.5em" y="0.25em">Tyre</text>
      </g>
      <g 
        id="caesarea-philippi" 
        transform="translate(207,104)"
        :class="{ 'current-city': store.map.currentLocation === 'caesarea-philippi' }">
        <circle r=".1em" />
        <text class="end" transform="rotate(45)" x="-0.5em">Caesarea</text>
        <text class="end" transform="rotate(45)" x="-0.5em" y="1em">Philippi</text>
      </g>
      <g 
        id="korazin" 
        transform="translate(182,174)"
        :class="{ 'current-city': store.map.currentLocation === 'korazin' }">
        <circle r=".1em" />
        <text class="end" transform="rotate(45)" x="-0.5em" y="0.25em">Korazin</text>
      </g>
      <g 
        id="bethsaida" 
        transform="translate(202,182)"
        :class="{ 'current-city': store.map.currentLocation === 'bethsaida' }">
        <circle r=".1em" />
        <text transform="rotate(45)" x="0.25em">Bethsaida</text>
      </g>
      <g 
        id="capernaum" 
        transform="translate(191,181)"
        :class="{ 'current-city': store.map.currentLocation === 'capernaum' }">
        <circle r=".1em" />
        <text class="end" transform="rotate(45)" y="-0.5em">Capernaum</text>
      </g>
      <g 
        id="gennesaret" 
        transform="translate(184,186)"
        :class="{ 'current-city': store.map.currentLocation === 'gennesaret' }">
        <circle r=".1em" />
        <text class="end" transform="rotate(45)" x="-0.5em" y="0.25em">Gennesaret</text>
      </g>
      <g 
        id="magadan" 
        transform="translate(181,193)"
        :class="{ 'current-city': store.map.currentLocation === 'magadan' }">
        <circle r=".1em" />
        <text class="end" transform="rotate(45)" x="-0.5em" y="0.25em">Magadan</text>
      </g>
      <g 
        id="magdala" 
        transform="translate(181,198)"
        :class="{ 'current-city': store.map.currentLocation === 'magdala' }">
        <circle r=".1em" />
        <text class="end" transform="rotate(45)" y="0.8em">Magdala</text>
      </g>
      <g 
        id="tiberias" 
        transform="translate(185,207)"
        :class="{ 'current-city': store.map.currentLocation === 'tiberias' }">
        <circle r=".1em" />
        <text transform="rotate(45)" y="1em">Tiberias</text>
      </g>
      <g 
        id="gadara" 
        transform="translate(211,230)"
        :class="{ 'current-city': store.map.currentLocation === 'gadara' }">
        <circle r=".1em" />
        <text transform="rotate(45)" x="0.5em" y="0.25em">Gadara</text>
      </g>
      <g 
        id="cana" 
        transform="translate(146,214)"
        :class="{ 'current-city': store.map.currentLocation === 'cana' }">
        <circle r=".1em" />
        <text class="end" transform="rotate(45)" x="-0.5em" y="0.25em">Cana</text>
      </g>
      <g 
        id="nazareth" 
        transform="translate(140,224)"
        :class="{ 'current-city': store.map.currentLocation === 'nazareth' }">
        <circle r=".1em" />
        <text class="end" transform="rotate(45)" x="-0.5em" y="0.25em">Nazareth</text>
      </g>
      <g 
        id="nain" 
        transform="translate(149,239)"
        :class="{ 'current-city': store.map.currentLocation === 'nain' }">
        <circle r=".1em" />
        <text transform="rotate(45)" x="0.5em" y="0.25em">Nain</text>
      </g>
      <g 
        id="aenon" 
        transform="translate(185,289)"
        :class="{ 'current-city': store.map.currentLocation === 'aenon' }">
        <circle r=".1em" />
        <text class="end" transform="rotate(45)" x="-0.5em" y="0.25em">Aenon</text>
      </g>
      <g 
        id="gerasa" 
        transform="translate(255,317)"
        :class="{ 'current-city': store.map.currentLocation === 'gerasa' }">
        <circle r=".1em" />
        <text class="end" transform="rotate(45)" y="1em">Gerasa</text>
      </g>
      <g 
        id="samaria-city" 
        transform="translate(123,318)"
        :class="{ 'current-city': store.map.currentLocation === 'samaria-city' }">
        <circle r=".1em" />
        <text class="end" transform="rotate(45)" x="-0.5em" y="0.25em">Samaria</text>
      </g>
      <g 
        id="sychar" 
        transform="translate(139,332)"
        :class="{ 'current-city': store.map.currentLocation === 'sychar' }">
        <circle r=".1em" />
        <text class="center" transform="rotate(45)" x="-0.3em" y="-0.5em">Sychar</text>
      </g>
      <g 
        id="jacobs-well" 
        transform="translate(141,338)"
        :class="{ 'current-city': store.map.currentLocation === 'jacobs-well' }">
        <circle r=".1em" />
        <text transform="rotate(45)" x="0.25em" y="0.8em">Jacob's</text>
        <text transform="rotate(45)" x="1em" y="1.8em">Well</text>
      </g>
      <g 
        id="arimathea" 
        transform="translate(90,377)"
        :class="{ 'current-city': store.map.currentLocation === 'arimathea' }">
        <circle r=".1em" />
        <text class="end" transform="rotate(45)" x="-0.5em" y="0.25em">Arimathea</text>
      </g>
      <g 
        id="ephraim" 
        transform="translate(135,395)"
        :class="{ 'current-city': store.map.currentLocation === 'ephraim' }">
        <circle r=".1em" />
        <text class="end" transform="rotate(45)" x="-0.5em" y="0.25em">Ephraim</text>
      </g>
      <g 
        id="jericho" 
        transform="translate(173,414)"
        :class="{ 'current-city': store.map.currentLocation === 'jericho' }">
        <circle r=".1em" />
        <text class="end" transform="rotate(45)" x="-0.5em" y="0.25em">Jericho</text>
      </g>
      <g 
        id="bethany-at-jordan" 
        transform="translate(194,420)"
        :class="{ 'current-city': store.map.currentLocation === 'bethany-at-jordan' }">
        <circle r=".1em" />
        <text transform="rotate(45)" x="0.5em">Bethany</text>
        <text transform="rotate(45)" x="0.25em" y="1em">at Jordan</text>
      </g>
      <g 
        id="bethany" 
        transform="translate(138,435)"
        :class="{ 'current-city': store.map.currentLocation === 'bethany' }">
        <circle r=".1em" />
        <text transform="rotate(45)" x="-0.5em" y="-0.5em">Bethany</text>
      </g>
      <g 
        id="jerusalem"
        transform="translate(132,433)"
        :class="{ 'current-city': store.map.currentLocation === 'jerusalem' }">
          <circle r=".1em" />
          <text class="end" transform="rotate(45)" x="-0.5em">Jerusalem</text>
      </g>
      <g 
        id="emmaus" 
        transform="translate(115,425)"
        :class="{ 'current-city': store.map.currentLocation === 'emmaus' }">
        <circle r=".1em" />
        <text class="end" transform="rotate(45)" x="-0.5em" y="0.25em">Emmaus</text>
      </g>
      <g 
        id="bethlehem" 
        transform="translate(127,448)"
        :class="{ 'current-city': store.map.currentLocation === 'bethlehem' }">
        <circle r=".1em" />
        <text class="end" transform="rotate(45)" x="-0.5em" y="0.8em">Bethlehem</text>
      </g>
      <g class="shores">
        <path 
          id="galilee-shore"
          :class="{ 'current-shore': store.map.currentLocation === 'galilee-shore' }"
          d="m198 181c-11.9 3.52-13.8 6.44-15.9 13-.593 8.75 8.77 14.6 8.86 23.2.0389 3.74 1.1 5.49 2.6 5.91" />
        <path 
          id="decapolis-shore"
          :class="{ 'current-shore': store.map.currentLocation === 'decapolis-shore' }"
          d="m194 223c1.25.348 2.81-.238 4.33-1.38 3.35-2.5 6.53-7.66 5.93-11.4-.656-4.17.0603-10.1.285-15.6" />
        <path 
          id="jordan-in-judea" 
          :class="{ 'current-shore': store.map.currentLocation === 'jordan-in-judea' }"
          d="m190 359c-1.3 24.3 6.99 48.7 3.16 73.5" />
        <circle 
          id="galilee-samaria"
          :class="{ 'current-shore': store.map.currentLocation === 'galilee-samaria' }"
          cx="141" cy="280" r=".25em" />
      </g>
    </g>
    <g>
      <text class="center" x="50%" y="1em" style="font-size:.4em">Licensed under Creative Commons BY-NC-SA 4.0 </text>
    </g>
  </svg>
</template>
