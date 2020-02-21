<template>
  <div class="project-info-view">
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
import ProjectInfo from "@/components/ProjectInfo/ProjectInfo.vue";
import SearchBox from "@/components/SearchBox.vue";

export default {
  name: "projectinfo",
  components: {
    Sidebar,
    PalmBeach,
    SearchBox
  },
  data() {
    return {
      DynamicComponent: ProjectInfo
    };
  }
};
</script>
