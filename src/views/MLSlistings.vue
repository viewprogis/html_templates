<template>
  <div class="mls-listing-view dark-mode">
    <Sidebar :currentSidebar="DynamicComponent">
      <!-- Search Box -->
      <search-box></search-box>
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
