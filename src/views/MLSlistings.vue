<template>
  <div class="mls-listing-view dark-mode">
    <Sidebar :currentSidebar="DynamicComponent">
      <!-- Search Box -->
      <search-box></search-box>

      <!-- MLS listing -->
      <div class="tw-flex tw-items-center tw-py-2 tw-px-4">
        <div
          class="tw-flex-grow tw-flex tw-items-center tw-justify-center xs:tw-justify-start tw-font-bold xs:tw-font-semibold tw-text-lg"
        >
          <img class="tw-mr-2 tw-hidden" src="@/assets/img/icon_mlslisting.svg" />
          <img class="tw-mr-2 tw-hidden xs:tw-inline-flex" src="@/assets/img/icon_mlslisting_white.svg" /> MLS listings
        </div>
        <img class="tw-flex-none tw-hidden xs:tw-flex" src="@/assets/img/icon_info_white.svg" />
      </div>
      
    </Sidebar>
    <PalmBeach />
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import PalmBeach from "@/components/Map/PalmBeach.vue";
import MLSlistings from "@/components/MLSlistings/MLSlistings.vue";
import SearchBox from "@/components/SearchBox.vue";

export default {
  name: "MLSlistings",
  components: {
    Sidebar,
    PalmBeach,
    SearchBox
  },
  data() {
    return {
      DynamicComponent: MLSlistings
    };
  }
};
</script>
