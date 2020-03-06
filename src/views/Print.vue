<template>
  <div class="print-view">
    <Sidebar :currentSidebar="DynamicComponent">
      <!-- Search Box -->
      <search-box></search-box>

      <!-- Print Title -->
      <div class="tw-flex tw-items-center tw-py-2 tw-px-4">
        <div
          class="tw-flex-grow tw-flex tw-items-center tw-justify-center xs:tw-justify-start tw-font-bold xs:tw-font-semibold tw-text-lg"
        >
          <i class="material-icons tw-text-2xl tw-mr-2 tw-hidden xs:tw-inline-flex">print</i> Print
        </div>
        <div class="tw-flex-none tw-hidden xs:tw-flex" data-tooltip="Click on this tool to print the current zoom extent of the map area. The print tool allows commonly used page sizes in portrait and landscape format." data-tooltip-position="right" data-tooltip-oneline="false">
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
import PrintComponent from "@/components/Print/Print.vue";
import SearchBox from "@/components/SearchBox.vue";

export default {
  name: "print",
  components: {
    Sidebar,
    PalmBeach,
    SearchBox
  },
  data() {
    return {
      DynamicComponent: PrintComponent
    };
  }
};
</script>
