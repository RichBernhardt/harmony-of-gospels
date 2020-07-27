<template>
  <span
    class="toggle-menu"
    @click.prevent="store.menuOnShow = !store.menuOnShow"
    >
    <hr/>
    <hr/>
    <hr/>
    <hr/>
  </span>
</template>

<script>
import { store } from "~/components/store";

export default {
  data() {
    return {
      store
    }
  }
}
</script>


<style scoped>
  .toggle-menu {
    position: fixed;
    z-index: 3;
    top: 70px;
    right: 7px;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    border: 1px solid gray;
  }
</style>