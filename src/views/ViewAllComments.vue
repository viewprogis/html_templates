<template>
  <div class="all-comments-view">
    <Sidebar :currentSidebar="DynamicComponent" />
    <PalmBeach />
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import PalmBeach from "@/components/Map/PalmBeach.vue";
import ViewAllComments from "@/components/DropPin/ViewAllComments.vue";

export default {
  name: "allcomments",
  components: {
    Sidebar,
    PalmBeach
  },
  data() {
    return {
      DynamicComponent: ViewAllComments
    };
  }
};
</script>
