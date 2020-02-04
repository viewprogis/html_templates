<template>
  <div class="measure-view">
    <Sidebar :currentSidebar="DynamicComponent" />
    <PalmBeach />
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import PalmBeach from "@/components/Map/PalmBeach.vue";
import MeasureComponent from "@/components/Measure/Measure.vue";

export default {
  name: "measure",
  components: {
    Sidebar,
    PalmBeach
  },
  data() {
    return {
      DynamicComponent: MeasureComponent
    };
  }
};
</script>
