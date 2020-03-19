<template>
  <div class="buffer-view">
    <Sidebar :currentSidebar="DynamicComponent">
      <!-- Search Box -->
      <search-box></search-box>

      <!-- Buffer Title -->
      <div class="tw-flex tw-items-center tw-py-2 tw-leading-none tw-absolute tw-top-0 tw-left-0 tw-right-0 xss:tw-static xss:tw-leading-normal xss:tw-py-3 xss:tw-px-5 xss:tw-pl-6">
        <div
          class="tw-flex-grow tw-flex tw-items-center tw-justify-center xss:tw-justify-start tw-font-bold xss:tw-font-semibold tw-text-lg"
        >
          <img class="tw-mr-3 tw-hidden xss:tw-inline-flex" src="@/assets/img/icon_buffer.svg" /> Buffer
        </div>
        <div class="tw-flex-none tw-hidden xss:tw-flex" data-tooltip="This tool allows you to select data within a desired buffer distance from the point of selection. The selection can be made by drawing a line, polygon, point or selecting individual parcels polygons." data-tooltip-position="right" data-tooltip-oneline="false">
          <img src="@/assets/img/icon_info.svg" />
        </div>
      </div>
    </Sidebar>
    <PalmBeach />
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import PalmBeach from "@/components/Map/PalmBeach.vue";
import BufferComponent from "@/components/Buffer/Buffer.vue";
import SearchBox from "@/components/SearchBox.vue";

export default {
  name: "buffer",
  components: {
    Sidebar,
    PalmBeach,
    SearchBox
  },
  data() {
    return {
      DynamicComponent: BufferComponent
    };
  }
};
</script>
