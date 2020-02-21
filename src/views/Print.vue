<template>
  <div class="print-view">
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
import PrintComponent from "@/components/Print/Print.vue";
import SearchBox from "@/components/SearchBox.vue";

export default {
  name: "print",
  components: {
    Sidebar,
    PalmBeach,
    SearchBox
  },
  data() {
    return {
      DynamicComponent: PrintComponent
    };
  }
};
</script>
