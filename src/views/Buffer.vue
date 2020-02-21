<template>
  <div class="buffer-view">
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
import BufferComponent from "@/components/Buffer/Buffer.vue";
import SearchBox from "@/components/SearchBox.vue";

export default {
  name: "buffer",
  components: {
    Sidebar,
    PalmBeach,
    SearchBox
  },
  data() {
    return {
      DynamicComponent: BufferComponent
    };
  }
};
</script>
