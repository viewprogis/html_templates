<template>
  <div class="draw-view">
    <Sidebar :currentSidebar="DynamicComponent" />
    <PalmBeach />
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import PalmBeach from "@/components/Map/PalmBeach.vue";
import DrawComponent from "@/components/Draw/Draw.vue";

export default {
  name: "draw",
  components: {
    Sidebar,
    PalmBeach
  },
  data() {
    return {
      DynamicComponent: DrawComponent
    };
  }
};
</script>
