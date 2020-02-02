<template>
  <div class="settings-view">
    <Sidebar :currentSidebar="DynamicComponent" />
    <PalmBeach />
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import PalmBeach from "@/components/Map/PalmBeach.vue";
import Settings from "@/components/Settings/Settings.vue";

export default {
  name: "settings",
  components: {
    Sidebar,
    PalmBeach
  },
  data() {
    return {
      DynamicComponent: Settings
    };
  }
};
</script>
