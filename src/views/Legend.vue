<template>
  <div class="legend-view">
    <Sidebar :currentSidebar="DynamicComponent">
      <!-- Search Box -->
      <search-box></search-box>
      <div class="mt-8 tw-block xs:tw-hidden"></div>
    </Sidebar>
    <PalmBeach />
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import PalmBeach from "@/components/Map/PalmBeach.vue";
import Legend from "@/components/Legend/Legend.vue";
import SearchBox from "@/components/SearchBox.vue";

export default {
  name: "legend",
  components: {
    Sidebar,
    PalmBeach,
    SearchBox
  },
  data() {
    return {
      DynamicComponent: Legend
    };
  }
};
</script>
