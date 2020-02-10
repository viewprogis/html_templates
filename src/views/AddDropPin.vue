<template>
  <div class="add-drop-pin-view">
    <Sidebar :currentSidebar="DynamicComponent" />
    <PalmBeach />
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import PalmBeach from "@/components/Map/PalmBeach.vue";
import AddDropPin from "@/components/DropPin/AddDropPin.vue";

export default {
  name: "adddroppin",
  components: {
    Sidebar,
    PalmBeach
  },
  data() {
    return {
      DynamicComponent: AddDropPin
    };
  }
};
</script>
