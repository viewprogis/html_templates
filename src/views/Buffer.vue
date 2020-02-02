<template>
  <div class="buffer-view">
    <Sidebar :currentSidebar="DynamicComponent" />
    <PalmBeach />
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import PalmBeach from "@/components/Map/PalmBeach.vue";
import BufferComponent from "@/components/Buffer/Buffer.vue";

export default {
  name: "buffer",
  components: {
    Sidebar,
    PalmBeach
  },
  data() {
    return {
      DynamicComponent: BufferComponent
    };
  }
};
</script>
