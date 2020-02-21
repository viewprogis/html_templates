<template>
  <div class="draw-view dark-mode">
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
import DrawComponent from "@/components/Draw/Draw.vue";
import SearchBox from "@/components/SearchBox.vue";

export default {
  name: "draw",
  components: {
    Sidebar,
    PalmBeach,
    SearchBox
  },
  data() {
    return {
      DynamicComponent: DrawComponent
    };
  }
};
</script>
