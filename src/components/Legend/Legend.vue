<template>
  <div class="tw-flex tw-flex-col tw-min-h-full">
    <!-- Search Box -->
    <search-box></search-box>

    <!-- Legend Panel -->
    <legend-panel/>

  </div>
</template>

<script>
import SearchBox from "@/components/SearchBox.vue";
import LegendPanel from "@/components/Legend/LegendPanel.vue";

export default {
  name: "legend",
  components: {
    SearchBox, LegendPanel
  }
};
</script>
