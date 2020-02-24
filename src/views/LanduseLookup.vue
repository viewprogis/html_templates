<template>
  <div class="landuse-lookup-view dark-mode">
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
