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
  --bg-main-accordion-header: hsl(60, 73%, 77%);

  /* LemonChiffon: hsl(54, 100%, 90%) */
  --bg-light: LemonChiffon;

  --transition-duration: 500ms;
}

</style>