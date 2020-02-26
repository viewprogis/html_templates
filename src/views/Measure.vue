<template>
  <div class="measure-view">
    <Sidebar :currentSidebar="DynamicComponent">
      <!-- Search Box -->
      <search-box></search-box>
      
      <!-- Measure Title -->
      <div class="tw-flex tw-items-center tw-py-2 tw-px-4">
        <div
          class="tw-flex-grow tw-flex tw-items-center tw-font-semibold tw-text-lg"
        >
          <img src="@/assets/img/icon_measure.svg" class="tw-mr-2" /> Measure
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
