<template>
  <div class="home-view">
    <Sidebar />
    <PalmBeach />
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import PalmBeach from "@/components/Map/PalmBeach.vue";

export default {
  name: "home",
  components: {
    Sidebar,
    PalmBeach
  }
};
</script>
