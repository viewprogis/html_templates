<template>
  <div class="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full">

    <!-- Legend Panel -->
    <div class="tw-mt-2"></div>
    <legend-panel/>
  </div>
</template>

<script>
import LegendPanel from "@/components/Legend/LegendPanel.vue";

export default {
  name: "legend",
  components: {
    LegendPanel
  }
};
</script>
