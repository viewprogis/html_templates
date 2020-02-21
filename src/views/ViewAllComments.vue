<template>
  <div class="all-comments-view">
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
import ViewAllComments from "@/components/DropPin/ViewAllComments.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";

export default {
  name: "allcomments",
  components: {
    Sidebar,
    PalmBeach,
    Breadcrumb
  },
  data() {
    return {
      DynamicComponent: ViewAllComments
    };
  }
};
</script>
