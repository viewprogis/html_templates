<template>
  <div class="add-drop-pin-view">
    <Sidebar :currentSidebar="DynamicComponent">
      <!-- Breadcrumb -->
      <Breadcrumb path="/drop-pin" />
    </Sidebar>
    <PalmBeach />
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import PalmBeach from "@/components/Map/PalmBeach.vue";
import AddDropPin from "@/components/DropPin/AddDropPin.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";

export default {
  name: "adddroppin",
  components: {
    Sidebar,
    PalmBeach,
    Breadcrumb
  },
  data() {
    return {
      DynamicComponent: AddDropPin
    };
  }
};
</script>
