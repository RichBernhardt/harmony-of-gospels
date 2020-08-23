<template>
  <div>
    <SplitView>
        <AccordionMain
          v-for="(group,groupIndex) in store.timeline"
          :key="groupIndex"
          v-bind="{ 
            groupIndex,
            groupTitle: (Object.keys(group)).toString()
          }"
        />
    </SplitView>
    <Map />
    <ButtonMap v-bind="{ buttonMapOnShow }" />
    <ButtonMenu v-bind="{ buttonMapOnShow }" />
  </div>
</template>

<script>
import { store } from "~/components/store";
export default {

  data: () => ({
    store
  }),


  computed: {
    buttonMapOnShow() {
      return store.media.splitWidth > 
          store.media.windowWidth - store.media.windowHeight * 0.4
    },
  },

}
</script>

<style>

  /* https://css-tricks.com/forums/topic/border-radius-for-outline/ */
  :focus {
    outline: none;
    filter: brightness(95%);
  }

  html {
    font-size: 100%;
    font-family: 'Georgia', serif;
  }

  body {
    margin:0;
  }

</style>