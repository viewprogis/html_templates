<template>
  <div class="drop-pin">
    <Sidebar :currentSidebar="DynamicComponent" />
    <PalmBeach />
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import PalmBeach from "@/components/Map/PalmBeach.vue";
import DropPin1 from "@/components/DropPin/DropPin1.vue";

export default {
  name: "droppin",
  components: {
    Sidebar,
    PalmBeach
  },
  data() {
    return {
      DynamicComponent: DropPin1
    };
  }
};
</script>
