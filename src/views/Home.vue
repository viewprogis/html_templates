<template>
  <div class="drop-pin">
    <SidebarClosed />
    <PalmBeach />
  </div>
</template>

<script>
import SidebarClosed from "@/components/SidebarClosed.vue";
import PalmBeach from "@/components/Map/PalmBeach.vue";

export default {
  name: "home",
  components: {
    SidebarClosed,
    PalmBeach
  }
};
</script>
