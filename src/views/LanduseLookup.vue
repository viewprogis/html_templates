<template>
  <div class="landuse-lookup-view dark-mode">
    <Sidebar :currentSidebar="DynamicComponent">
      <!-- Search Box -->
      <search-box></search-box>

      <!-- Landuse Lookup Title -->
      <div class="tw-flex tw-items-center tw-py-2 tw-px-4">
        <div
          class="tw-flex-grow tw-flex tw-items-center tw-font-semibold tw-text-lg"
        >
          <img class="tw-mr-2 tw-hidden" src="@/assets/img/icon_landuse.svg" />
          <img class="tw-mr-2" src="@/assets/img/icon_landuse_white.svg" /> Landuse Lookup
        </div>
        <img class="tw-flex-none" src="@/assets/img/icon_info_white.svg" />
      </div>

    </Sidebar>
    <PalmBeach />
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import PalmBeach from "@/components/Map/PalmBeach.vue";
import LanduseLookup from "@/components/LanduseLookup/LanduseLookup.vue";
import SearchBox from "@/components/SearchBox.vue";

export default {
  name: "landuselookup",
  components: {
    Sidebar,
    PalmBeach,
    SearchBox
  },
  data() {
    return {
      DynamicComponent: LanduseLookup
    };
  }
};
</script>
