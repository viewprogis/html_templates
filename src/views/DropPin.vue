<template>
  <div class="drop-pin-view">
    <Sidebar :currentSidebar="DynamicComponent">
      <!-- Search Box -->
      <search-box></search-box>

      <!-- Drop Pin Title -->
      <div class="tw-flex tw-items-center tw-py-2 tw-px-4">
        <div
          class="tw-flex-grow tw-flex tw-items-center tw-font-semibold tw-text-lg"
        >
          <img class="tw-mr-2" src="@/assets/img/icon_pindrop.svg" /> Drop Pin
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
import DropPin from "@/components/DropPin/DropPin.vue";
import SearchBox from "@/components/SearchBox.vue";

export default {
  name: "droppin",
  components: {
    Sidebar,
    PalmBeach,
    SearchBox
  },
  data() {
    return {
      DynamicComponent: DropPin
    };
  }
};
</script>
