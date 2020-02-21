<template>
  <div class="address-mapping-view">
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
import AddressMapping from "@/components/AddressMapping/AddressMapping.vue";
import SearchBox from "@/components/SearchBox.vue";

export default {
  name: "addressmapping",
  components: {
    Sidebar,
    PalmBeach,
    SearchBox
  },
  data() {
    return {
      DynamicComponent: AddressMapping
    };
  }
};
</script>
