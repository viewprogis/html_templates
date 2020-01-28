<template>
  <div class="drop-pin">
    <Sidebar :currentSidebar="DynamicComponent" />
    <PalmBeach />
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import PalmBeach from "@/components/Map/PalmBeach.vue";
import ProjectInfo from "@/components/ProjectInfo/ProjectInfo.vue";

export default {
  name: "projectinfo",
  components: {
    Sidebar,
    PalmBeach
  },
  data() {
    return {
      DynamicComponent: ProjectInfo
    };
  }
};
</script>
