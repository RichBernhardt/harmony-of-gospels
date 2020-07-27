<template>
  <div
    class="modal"
    v-show="store.menuOnShow">
    <!-- https://github.com/nuxt/nuxt.js/issues/1786#issuecomment-334446353 -->
    <nuxt-link
      @click.native="store.menuOnShow = !store.menuOnShow"
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
  }

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
    width: 300px;
    height: 94%;
    border-radius: 10px;
    /* padding: 5px; */
    /* border: 1px solid gray; */
    background-color: rgba(0,0,0,50%);
    /* color: ivory; */
    font-family: 'DejaVu Serif', serif;
    box-shadow: 0px 0px 5px 5px rgba(0,0,0,50%);
    font-size: 2em;
  }

  .page {
    display: flex;
    justify-content: center;
    align-items: center;  
    /* min-height: 3em; */
    /* border: 1px solid gray; */
    border-radius: 5px;
    cursor: pointer;
    background-color: rgba(0,0,0,20%);
    margin: 10px;
    box-shadow: 0px 0px 3px 3px rgba(0,0,0,20%);
    padding: 5px;
    color: ivory;
    text-decoration: none;

  }

  .page:hover {
    background-color: rgba(0,0,0,40%);
    box-shadow: 0px 0px 3px 3px rgba(0,0,0,40%);
  }

</style>