<template>
  <div class="drop-pin">
    <Sidebar :currentSidebar="DynamicComponent" />
    <PalmBeach />
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import PalmBeach from "@/components/Map/PalmBeach.vue";
import Calendar from "@/components/Calendar/Calendar.vue";

export default {
  name: "calendar",
  components: {
    Sidebar,
    PalmBeach
  },
  data() {
    return {
      DynamicComponent: Calendar
    };
  }
};
</script>
