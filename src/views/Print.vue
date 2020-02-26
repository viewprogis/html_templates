<template>
  <div class="print-view">
    <Sidebar :currentSidebar="DynamicComponent">
      <!-- Search Box -->
      <search-box></search-box>

      <!-- Print Title -->
      <div class="tw-flex tw-items-center tw-py-2 tw-px-4">
        <div
          class="tw-flex-grow tw-flex tw-items-center tw-font-semibold tw-text-lg"
        >
          <i class="material-icons tw-text-2xl tw-mr-2">print</i> Print
        </div>
        <img class="tw-flex-none" src="@/assets/img/icon_info.svg" />
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
