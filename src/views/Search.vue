<template>
  <div class="search-view">
    <Sidebar :currentSidebar="DynamicComponent">
      <!-- Search Box -->
      <search-box></search-box>
      
      <!-- Search Title -->
      <div class="tw-flex xss:tw-hidden tw-items-center tw-py-2 tw-leading-none tw-absolute tw-top-0 tw-left-0 tw-right-0 xss:tw-static xss:tw-leading-normal xss:tw-py-2 xss:tw-px-4">
        <div
          class="tw-flex-grow tw-flex tw-items-center tw-justify-center xss:tw-justify-start tw-font-bold xss:tw-font-semibold tw-text-lg"
        >
          Search
        </div>
      </div>

      <!-- Search Box -->
      <search-box-mobile></search-box-mobile>

    </Sidebar>
    <PalmBeach />
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import PalmBeach from "@/components/Map/PalmBeach.vue";
import Search from "@/components/Search/Search.vue";
import SearchBox from "@/components/SearchBox.vue";
import SearchBoxMobile from "@/components/SearchBoxMobile.vue";

export default {
  name: "search",
  components: {
    Sidebar,
    PalmBeach,
    SearchBox,
    SearchBoxMobile
  },
  data() {
    return {
      DynamicComponent: Search
    };
  }
};
</script>
