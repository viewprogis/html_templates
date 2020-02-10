<template>
  <div class="search-view">
    <Sidebar :currentSidebar="DynamicComponent" />
    <PalmBeach />
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import PalmBeach from "@/components/Map/PalmBeach.vue";
import Search from "@/components/Search/Search.vue";

export default {
  name: "search",
  components: {
    Sidebar,
    PalmBeach
  },
  data() {
    return {
      DynamicComponent: Search
    };
  }
};
</script>
