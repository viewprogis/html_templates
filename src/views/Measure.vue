<template>
  <div class="measure-view">
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
import MeasureComponent from "@/components/Measure/Measure.vue";
import SearchBox from "@/components/SearchBox.vue";

export default {
  name: "measure",
  components: {
    Sidebar,
    PalmBeach,
    SearchBox
  },
  data() {
    return {
      DynamicComponent: MeasureComponent
    };
  }
};
</script>
