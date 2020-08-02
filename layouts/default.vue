<template>
  <div>
    <!-- https://github.com/nuxt/nuxt.js/tree/dev/examples/with-keep-alive -->
    <nuxt keep-alive />  <!-- nuxt element is replaced by each page -->
    <Menu />
  </div>
</template>

<script>
import Menu from "~/components/Menu"

export default {
  components: {
    Menu
  }
}
</script>