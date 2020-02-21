<template>
  <div class="calendar-view">
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
import Calendar from "@/components/Calendar/Calendar.vue";
import SearchBox from "@/components/SearchBox.vue";

export default {
  name: "calendar",
  components: {
    Sidebar,
    PalmBeach,
    SearchBox
  },
  data() {
    return {
      DynamicComponent: Calendar
    };
  }
};
</script>
