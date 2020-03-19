<template>
  <div class="draw-view dark-mode">
    <Sidebar :currentSidebar="DynamicComponent">
      <!-- Search Box -->
      <search-box></search-box>

      <!-- Draw Title -->
      <div class="tw-flex tw-items-center tw-py-2 tw-leading-none tw-absolute tw-top-0 tw-left-0 tw-right-0 xss:tw-static xss:tw-leading-normal xss:tw-py-3 xss:tw-px-5">
        <div
          class="tw-flex-grow tw-flex tw-items-center tw-justify-center xss:tw-justify-start tw-font-bold xss:tw-font-semibold tw-text-lg"
        >
          <img class="tw-mr-4 tw-hidden" src="@/assets/img/icon_draw.svg" />
          <img class="tw-mr-4 tw-hidden xss:tw-inline-flex" src="@/assets/img/icon_draw_white.svg" /> Draw
        </div>
        <img class="tw-flex-none tw-hidden xss:tw-flex" src="@/assets/img/icon_info_white.svg" />
      </div>
      
    </Sidebar>
    <PalmBeach />
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import PalmBeach from "@/components/Map/PalmBeach.vue";
import DrawComponent from "@/components/Draw/Draw.vue";
import SearchBox from "@/components/SearchBox.vue";

export default {
  name: "draw",
  components: {
    Sidebar,
    PalmBeach,
    SearchBox
  },
  data() {
    return {
      DynamicComponent: DrawComponent
    };
  }
};
</script>
