<template>
  <div class="legend-view">
    <Sidebar :currentSidebar="DynamicComponent" />
    <PalmBeach />
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import PalmBeach from "@/components/Map/PalmBeach.vue";
import Legend from "@/components/Legend/Legend.vue";

export default {
  name: "legend",
  components: {
    Sidebar,
    PalmBeach
  },
  data() {
    return {
      DynamicComponent: Legend
    };
  }
};
</script>
