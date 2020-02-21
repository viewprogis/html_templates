<template>
  <div class="drop-pin-view">
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
import DropPin from "@/components/DropPin/DropPin.vue";
import SearchBox from "@/components/SearchBox.vue";

export default {
  name: "droppin",
  components: {
    Sidebar,
    PalmBeach,
    SearchBox
  },
  data() {
    return {
      DynamicComponent: DropPin
    };
  }
};
</script>
