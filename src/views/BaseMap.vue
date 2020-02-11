<template>
  <div class="base-map-view">
    <base-map />
    <PalmBeach />
  </div>
</template>

<script>
import BaseMap from "@/components/BaseMap/BaseMap.vue";
import PalmBeach from "@/components/Map/PalmBeach.vue";

export default {
  name: "basemap",
  components: {
    BaseMap,
    PalmBeach
  }
};
</script>
