<template>
  <div class="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full">

    <!-- Draw -->
    <div class="tw-flex tw-items-center tw-py-2 tw-px-3">
      <div class="tw-flex-grow tw-flex tw-items-center tw-font-semibold tw-text-lg">
        <img class="tw-mr-2 tw-hidden" src="@/assets/img/icon_draw.svg"/>
        <img class="tw-mr-2" src="@/assets/img/icon_draw_white.svg"/> Draw
      </div>
      <img class="tw-flex-none" src="@/assets/img/icon_info_white.svg"/>
    </div>

    <!-- Draw -->
    <div class="panel tw-bg-white tw-rounded tw-p-3 tw-mt-2">
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
    <div class="tw-mt-2"></div>
    <legend-panel/>
    
  </div>
</template>

<script>
import LegendPanel from "@/components/Legend/LegendPanel.vue";
import DrawingTools from "@/components/Draw/DrawingTools.vue";

export default {
  name: "buffer",
  components: {
    LegendPanel, DrawingTools
  },
  data(){
    return{
      radius: null
    }
  }
};
</script>
