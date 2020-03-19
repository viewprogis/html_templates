<template>
  <div class="measure-view">
    <Sidebar :currentSidebar="DynamicComponent">
      <!-- Search Box -->
      <search-box></search-box>
      
      <!-- Measure Title -->
      <div class="tw-flex tw-items-center tw-py-2 tw-leading-none tw-absolute tw-top-0 tw-left-0 tw-right-0 xss:tw-static xss:tw-leading-normal xss:tw-py-3 xss:tw-px-5 xss:tw-pl-6">
        <div
          class="tw-flex-grow tw-flex tw-items-center tw-justify-center xss:tw-justify-start tw-font-bold xss:tw-font-semibold tw-text-lg"
        >
          <img src="@/assets/img/icon_measure.svg" class="tw-mr-2 tw-hidden xss:tw-inline-flex" /> Measure
        </div>
        <div class="tw-flex-none tw-hidden xss:tw-flex" data-tooltip="Click on this tool to measure length between two points and calculate area of various polygon shapes in three separate units at one time. Click delete button to clear the results." data-tooltip-position="right" data-tooltip-oneline="false">
          <img  src="@/assets/img/icon_info.svg" />
        </div>
      </div>

    </Sidebar>
    <PalmBeach />
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import PalmBeach from "@/components/Map/PalmBeach.vue";
import MeasureComponent from "@/components/Measure/Measure.vue";
import SearchBox from "@/components/SearchBox.vue";

export default {
  name: "measure",
  components: {
    Sidebar,
    PalmBeach,
    SearchBox
  },
  data() {
    return {
      DynamicComponent: MeasureComponent
    };
  }
};
</script>
