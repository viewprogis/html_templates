<template>
  <div class="buffer-view">
    <Sidebar :currentSidebar="DynamicComponent">
      <!-- Search Box -->
      <search-box></search-box>

      <!-- Buffer Title -->
      <div class="tw-flex tw-items-center tw-py-2 tw-px-4">
        <div
          class="tw-flex-grow tw-flex tw-items-center tw-justify-center xs:tw-justify-start tw-font-bold xs:tw-font-semibold tw-text-lg"
        >
          <img class="tw-mr-2 tw-hidden xs:tw-inline-flex" src="@/assets/img/icon_buffer.svg" /> Buffer
        </div>
        <img class="tw-flex-none tw-hidden xs:tw-flex" src="@/assets/img/icon_info.svg" />
      </div>
    </Sidebar>
    <PalmBeach />
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import PalmBeach from "@/components/Map/PalmBeach.vue";
import BufferComponent from "@/components/Buffer/Buffer.vue";
import SearchBox from "@/components/SearchBox.vue";

export default {
  name: "buffer",
  components: {
    Sidebar,
    PalmBeach,
    SearchBox
  },
  data() {
    return {
      DynamicComponent: BufferComponent
    };
  }
};
</script>
