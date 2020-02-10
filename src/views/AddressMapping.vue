<template>
  <div class="address-mapping-view">
    <Sidebar :currentSidebar="DynamicComponent" />
    <PalmBeach />
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import PalmBeach from "@/components/Map/PalmBeach.vue";
import AddressMapping from "@/components/AddressMapping/AddressMapping.vue";

export default {
  name: "addressmapping",
  components: {
    Sidebar,
    PalmBeach
  },
  data() {
    return {
      DynamicComponent: AddressMapping
    };
  }
};
</script>
