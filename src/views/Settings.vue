<template>
  <div class="settings-view">
    <Sidebar :currentSidebar="DynamicComponent">
      <!-- Search Box -->
      <search-box></search-box>

      <!-- Settings Title -->
      <div class="tw-flex tw-items-center tw-py-2 tw-px-4">
        <div
          class="tw-flex-grow tw-flex tw-items-center tw-font-semibold tw-text-lg"
        >
          <i class="fas fa-cog tw-mr-2"></i> Settings
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
import Settings from "@/components/Settings/Settings.vue";
import SearchBox from "@/components/SearchBox.vue";

export default {
  name: "settings",
  components: {
    Sidebar,
    PalmBeach,
    SearchBox
  },
  data() {
    return {
      DynamicComponent: Settings
    };
  }
};
</script>
