<template>
  <div class="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full">
    
    <!-- Measure -->
    <div class="panel tw-bg-white tw-rounded tw-p-3 tw-mt-2">
      <a
        href="javascript:void(0)"
        class="tw-flex tw-items-center panel-heading"
      >
        <span class="tw-text-tertiary">Choose tool to start drawing</span></a
      >

      <div class="panel-content tw-mt-4">
        <!-- Selection -->
        <ul class="tw-list-none tw-flex tw-flex-wrap" style="padding: 0;">
          <li class="tw-p-1">
            <a
              class="tw-flex tw-items-center tw-rounded-lg tw-p-2 tw-border hover:tw-border-tertiary tw-w-12 tw-h-12"
              href="javascript:void(0)"
              data-tooltip="Measure line"
              ><img class="tw-mx-auto" src="@/assets/img/selection_line.svg"
            /></a>
          </li>
          <li class="tw-p-1">
            <a
              class="tw-flex tw-items-center tw-rounded-lg tw-p-2 tw-border hover:tw-border-tertiary tw-w-12 tw-h-12"
              href="javascript:void(0)"
              data-tooltip="Measure circle"
              ><img class="tw-mx-auto" src="@/assets/img/draw_circle.svg"
            /></a>
          </li>
          <li class="tw-p-1">
            <a
              class="tw-flex tw-items-center tw-rounded-lg tw-p-2 tw-border hover:tw-border-tertiary tw-w-12 tw-h-12"
              href="javascript:void(0)"
              data-tooltip="Measure polygon"
              ><img class="tw-mx-auto" src="@/assets/img/selection_polygon.png"
            /></a>
          </li>
          <li class="tw-p-1">
            <a
              class="tw-flex tw-items-center tw-rounded-lg tw-p-2 tw-border hover:tw-border-tertiary tw-w-12 tw-h-12"
              href="javascript:void(0)"
              data-tooltip="Measure rectangle"
              ><img class="tw-mx-auto" src="@/assets/img/draw_rectangle.svg"
            /></a>
          </li>
        </ul>
        <ul class="tw-list-none tw-flex tw-flex-wrap" style="padding: 0;">
          <li class="tw-p-1">
            <a
              class="tw-flex tw-items-center tw-rounded-lg tw-p-2 tw-border hover:tw-border-tertiary tw-w-12 tw-h-12"
              href="javascript:void(0)"
              data-tooltip="Delete"
              ><img class="tw-mx-auto" src="@/assets/img/trash_icon.svg"
            /></a>
          </li>
        </ul>

        <!-- Length Segment -->
        <table
          class="tw-text-sm tw-text-left tw-mt-4 tw-w-full tw-max-w-4xs tw-table-fixed"
        >
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
        <table
          class="tw-text-sm tw-text-left tw-mt-4 tw-w-full tw-max-w-4xs tw-table-fixed"
        >
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
    <div class="tw-mt-2"></div>
    <legend-panel />
  </div>
</template>

<script>
import LegendPanel from "@/components/Legend/LegendPanel.vue";

export default {
  name: "measure",
  components: {
    LegendPanel
  },
  data() {
    return {
      radius: null
    };
  }
};
</script>
