<template>
  <div class="tw-flex tw-flex-col tw-min-h-full">
    <!-- Search Box -->
    <search-box></search-box>

    <!-- Measure -->
    <div class="tw-flex tw-items-center tw-mt-6 tw-py-2 tw-px-3">
      <div class="tw-flex-grow tw-flex tw-items-center tw-font-semibold tw-text-lg">
        <i class="fas fa-arrows-alt-h tw-text-2xl tw-mr-2"></i> Measure
      </div>
      <i class="fas fa-info-circle tw-text-2xl tw-flex-none"></i>
    </div>

    <!-- Measure -->
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

        <!-- Length Segment -->
        <table class="tw-text-sm tw-text-left tw-mt-4 tw-w-full tw-max-w-4xs tw-table-fixed">
          <tr>
            <th class="tw-p-1 tw-text-xs">Length</th>
            <th class="tw-p-1 tw-text-xs">Segment</th>
          </tr>
          <tr>
            <td class="tw-px-1">0.00 mi</td>
            <td class="tw-px-1">0.00 mi</td>
          </tr>
          <tr>
            <td class="tw-px-1">0.00 m</td>
            <td class="tw-px-1">0.00 m</td>
          </tr>
          <tr>
            <td class="tw-px-1">0.00 ft</td>
            <td class="tw-px-1">0.00 ft</td>
          </tr>
        </table>

        <!-- Area Angle -->
        <table class="tw-text-sm tw-text-left tw-mt-4 tw-w-full tw-max-w-4xs tw-table-fixed">
          <tr>
            <th class="tw-p-1 tw-text-xs">Area</th>
            <th class="tw-p-1 tw-text-xs">Angle</th>
          </tr>
          <tr>
            <td class="tw-px-1">0.00 sq mi</td>
            <td class="tw-px-1">0.00 deg</td>
          </tr>
          <tr>
            <td class="tw-px-1">0.00 acres</td>
            <td class="tw-px-1">0.00 rad</td>
          </tr>
          <tr>
            <td class="tw-px-1">0.00 sq ft</td>
            <td class="tw-px-1">&nbsp;</td>
          </tr>
        </table>

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
  name: "measure",
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
