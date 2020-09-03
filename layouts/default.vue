<template>
  <div>
    <!-- https://github.com/nuxt/nuxt.js/tree/dev/examples/with-keep-alive -->
    <nuxt keep-alive />  <!-- nuxt element is replaced by each page -->
    <Menu v-if="store.menu.initialLoad" />
  </div>
</template>

<script>
import { store } from "~/components/store";

export default {
  data: () => ({
      store,
    })
}
</script>

<style>

:root {
  /* before accordion transition: --bg-main-accordion-header: hsl(63, 90%, 75%); */
  /* YellowGreen: hsl(80, 61%, 50%) */
  /* Between:      hsl(63, 63%, 67%) */
  /* Khaki:       hsl(54, 77%, 75%) */
  --bg-main-accordion-header: hsl(60, 73%, 77%);

  /* before accordion transition: --bg-light hsl(44, 100%, 88%); */
  /* LemonChiffon: hsl(54, 100%, 90%) */
  --bg-light: LemonChiffon;
}

</style>