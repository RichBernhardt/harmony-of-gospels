<template>
  <div
    class="modal"
    v-show="store.menuOnShow">
    <div class="accordion">
      <div 
        class="selectable"
        style="margin: 0;"
        @click.prevent="versionsOnShow = !versionsOnShow"
      >Switch Version
      <img src="~assets/flagEN.svg" />
      </div>
      <div 
        class="version"
        v-show="versionsOnShow"
        @click.prevent="
          store.menuOnShow = !store.menuOnShow;
          versionsOnShow = !versionsOnShow;
          switchVersion('NCV');"
      >
        <img src="~assets/flagEN.svg" />
        EN-NCV
      </div>
      <div 
        class="version"
        v-show="versionsOnShow"
        @click.prevent="
          store.menuOnShow = !store.menuOnShow;
          versionsOnShow = !versionsOnShow;
          switchVersion('ERV');"
      >
        <img src="~assets/flagHU.svg" />
        HU-ERV
      </div>
    </div>
    <!-- https://github.com/nuxt/nuxt.js/issues/1786#issuecomment-334446353 -->
    <nuxt-link
      @click.prevent.native="store.menuOnShow = !store.menuOnShow"
      to="/about"
      class="selectable"
    >
      About
    </nuxt-link>
    <nuxt-link
      @click.prevent.native="store.menuOnShow = !store.menuOnShow"
      to="/"
      class="selectable"
    >
      Gospels
    </nuxt-link>
  </div>
</template>

<script>
import { store } from "~/components/store";
import timelineNCV from "~/components/timelineNCV";
import timelineERV from "~/components/timelineERV";
import NCV from "~/components/gospelsNCV";
import ERV from "~/components/gospelsERV";

export default {

  data() {
    return {
      store,
      versionsOnShow: false,
      timelineNCV,
      timelineERV,
      NCV,
      ERV,
    }
  },


  methods: {
    switchVersion(selected) {

      store.timeline = this['timeline' + selected];

      store.gospels.MT = this[selected].mt;
      store.gospels.MK = this[selected].mk;
      store.gospels.LK = this[selected].lk;
      store.gospels.JN = this[selected].jn;
      store.gospels.ACT = this[selected].act;

      store.relocateDefaultGospel();

      store.gospels.keyToRerenderOnVersionSwitch++;
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
    width: min(300px, 94% - 70px); 
    height: 94%;
    border-radius: 10px;
    border: 1px solid darkkhaki;
    background-color: rgba(255, 250, 205,70%);
    font-family: 'DejaVu Serif', serif;
    box-shadow: 6px 6px 3px 3px rgba(0,0,0,50%);
    font-size: 1.5em;
  }

  .selectable {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 5px;
    cursor: pointer;
    margin: 10px;
    padding: 5px;
    background-color: hsla(61,73%,30%,70%);
    box-shadow: 0px 0px 2px 2px hsla(61,73%,30%,70%);
    color: ivory;
    text-decoration: none;
  }

  .accordion {
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    margin: 10px;
    background-color: rgba(0,0,0,0);
    box-shadow: 0px 0px 2px 2px hsla(61,73%,30%,70%);
  }

  .version {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 0.8em;
    margin-top: 4px;
    padding: 3px;
    cursor: pointer;
  }

  .selectable:hover,
  .version:hover {
    border-radius: 3px;
    background-color: hsla(61,73%,15%,70%);
    box-shadow: 0px 0px 2px 2px hsla(61,73%,15%,70%);
  }

  img {
    width: 15%;
    height:15%;
  }

</style>