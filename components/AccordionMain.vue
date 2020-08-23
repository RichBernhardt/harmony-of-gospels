<template>
  <details>
    <summary @click="expandFirst = true">
        <!-- Safari can render <summary> width single root only -->
      <header>
        <div
          class="title"
          v-text="groupTitle"
        />
        <nav>
          <button
            @click="
              if( store.gospels.parallelCurrent > 1 )
                store.gospels.parallelCurrent--"
            >–</button>
          <button
            @click="
              if( store.gospels.parallelCurrent < store.gospels.parallelMax )
                store.gospels.parallelCurrent++"
            >+</button>
        </nav>
      </header>
    </summary>

    <template v-if="expandFirst">
      <AccordionSub
        v-for="(event,eventIndex) in store.timeline[groupIndex][groupTitle]"
        :key="eventIndex"
        v-bind="{ 
          groupIndex,
          groupTitle,
          eventIndex
        }"
      />
    </template>

  </details>
</template>

<script>
import { store } from "~/components/store";

export default {

  props: {
    groupIndex: Number,
    groupTitle: String,
  },

  data() {
    return {
      store,
      expandFirst: false,
    }
  },
  
}
</script>

<style scoped>

  details {
    all: unset;
    display: flex;
    border: 1px solid darkkhaki;
    border-radius: 5px;
    margin: 3px;
    cursor: default;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  summary {
    position: sticky;
    /* Safari */
    position: -webkit-sticky;
    top: 0px;
    z-index: 1;
    border-radius: 5px;
  }

  details[open] summary {
    border-bottom: 1px solid darkkhaki;
  }

  header {
    display: flex;
    align-items: center;
    padding-left: 5px;
    padding-right: 5px;
    background-color: hsl(63, 90%, 75%);
    border-radius: 5px;
  }

  .title {
    display: flex;
    align-items: center;
    flex: 1;
    min-height: 3em;
    text-align: left;
    font-weight: bold;
    font-family: 'Times New Roman', serif;
  }

  nav {
    display: flex;
    align-items: center;
  }

  details[open] nav {
    visibility: visible;
  }

  details:not([open]) nav {
    visibility: hidden;
  }

  button {
    all: unset;
    display: inline-block;
    text-align: center;
    width: 1.125em;
    border-radius: 1.125em;
    font-size: 2.25em;
    padding: 0;
    margin: 0;
    cursor: pointer;
    background-color: hsl(63, 90%, 75%);
  }

  button:active {
    background-color: hsl(16, 100%, 75%);
  }

  button:focus {
    filter: brightness(95%);
  }

</style>