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
  --bg-light: hsl(44, 100%, 88%);
  --bg-main-accordion-header: hsl(63, 90%, 75%);
}

</style>