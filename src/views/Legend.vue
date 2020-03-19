<template>
  <div class="legend-view">
    <Sidebar :currentSidebar="DynamicComponent">
      <!-- Search Box -->
      <search-box></search-box>
      
      <!-- Legend Title -->
      <div class="tw-flex xss:tw-hidden tw-items-center tw-py-2 tw-leading-none tw-absolute tw-top-0 tw-left-0 tw-right-0 xss:tw-static">
        <div
          class="tw-flex-grow tw-flex tw-items-center tw-justify-center tw-font-bold tw-text-lg"
        >
          Legend
        </div>
      </div>

    </Sidebar>
    <PalmBeach />
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import PalmBeach from "@/components/Map/PalmBeach.vue";
import Legend from "@/components/Legend/Legend.vue";
import SearchBox from "@/components/SearchBox.vue";

export default {
  name: "legend",
  components: {
    Sidebar,
    PalmBeach,
    SearchBox
  },
  data() {
    return {
      DynamicComponent: Legend
    };
  }
};
</script>
