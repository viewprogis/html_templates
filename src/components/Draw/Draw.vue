<template>
  <div class="tw-flex tw-flex-col tw-min-h-full">
    <!-- Search Box -->
    <search-box></search-box>

    <!-- Draw -->
    <div class="tw-flex tw-items-center tw-mt-6 tw-py-2 tw-px-3">
      <div class="tw-flex-grow tw-flex tw-items-center tw-font-semibold tw-text-lg">
        <i class="fas fa-pencil-alt tw-text-2xl tw-mr-2"></i
          > Draw
      </div>
      <i class="fas fa-info-circle tw-text-2xl tw-flex-none"></i>
    </div>

    <!-- Draw -->
    <div class="panel tw-bg-white tw-rounded tw-p-3 tw-mt-3">
      <a
        href="javascript:void(0)"
        class="tw-flex tw-items-center panel-heading"
        >
        <span class="tw-text-tertiary">Choose tool to start drawing</span></a
      >

      <div class="panel-content tw-mt-4">

        <!-- Selection -->
        <drawing-tools />

      </div>
    </div>

    <!-- Legend -->
    <legend-panel/>
    
  </div>
</template>

<script>
import SearchBox from "@/components/SearchBox.vue";
import LegendPanel from "@/components/Legend/LegendPanel.vue";
import DrawingTools from "@/components/Draw/DrawingTools.vue";

export default {
  name: "buffer",
  components: {
    SearchBox, LegendPanel, DrawingTools
  },
  data(){
    return{
      radius: null
    }
  }
};
</script>
