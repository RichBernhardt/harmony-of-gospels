<template>
  <div
    class="modal"
    v-show="store.menuOnShow">
    <!-- https://github.com/nuxt/nuxt.js/issues/1786#issuecomment-334446353 -->
    <nuxt-link
      @click.prevent.native="store.menuOnShow = !store.menuOnShow"
      to="/"
      class="page"
    >
      Gospels
    </nuxt-link>
    <nuxt-link
      @click.prevent.native="store.menuOnShow = !store.menuOnShow"
      to="/about"
      class="page"
    >
      About
    </nuxt-link>
  </div>
</template>

<script>
import { store } from "~/components/store";

export default {

  data() {
    return {
      store
    }
  },

}
</script>

<style scoped>
  .modal {
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 3;
    top: 3%;
    right: 70px;
    width: min(300px, 94% - 70px); 
    height: 94%;
    border-radius: 10px;
    background-color: rgba(255, 250, 205,70%);
    font-family: 'DejaVu Serif', serif;
    box-shadow: 0px 0px 3px 3px rgba(0,0,0,50%);
    font-size: 2em;
  }

  .page {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    cursor: pointer;
    background-color: hsla(61,73%,30%,70%);
    margin: 10px;
    box-shadow: 0px 0px 2px 2px hsla(61,73%,30%,70%);
    padding: 5px;
    color: ivory;
    text-decoration: none;

  }

  .page:hover {
    background-color: hsla(61,73%,15%,70%);
    box-shadow: 0px 0px 2px 2px hsla(61,73%,15%,70%);
  }

</style>