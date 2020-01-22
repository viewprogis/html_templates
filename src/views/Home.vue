<template>
  <div class="home">
    <Sidebar />
    <PalmBeach />
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import PalmBeach from "@/components/PalmBeach.vue";

export default {
  name: "home",
  components: {
    Sidebar,
    PalmBeach
  }
};
</script>
