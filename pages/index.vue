<template>
  <div>
    <SplitView>
        <AccordionMain
          v-for="(group,groupIndex) in store.timeline"
          ref="mainaccordion"
          :key="groupIndex"
          v-bind="{ 
            groupIndex,
            groupTitle: (Object.keys(group)).toString()
          }"
          @on-main-accordion-header-click="updateExpandedMainAccordion"
        />
    </SplitView>
    <Map />
    <ButtonMap v-show="buttonMapOnShow" />
    <ButtonMenu v-bind="{ buttonMapOnShow }" />
  </div>
</template>

<script>
import { store } from "~/components/store";
export default {

  data: () => ({
    store,
    expandedMainAccordionIncumbent: null,
  }),


  computed: {
    buttonMapOnShow() {
      return store.media.splitWidth > 
          store.media.windowWidth - store.media.windowHeight * 0.4
    },
  },


  methods: {
    updateExpandedMainAccordion(indexClicked) {
      const indexIncumbent =
        (this.expandedMainAccordionIncumbent !== null)
          ? this.expandedMainAccordionIncumbent
          : indexClicked;

      requestAnimationFrame(() => {
        if (indexIncumbent !== indexClicked) {
          this.$refs.mainaccordion[indexIncumbent].expanded = false;
        }
          
        this.expandedMainAccordionIncumbent = indexClicked;
      });
    }
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