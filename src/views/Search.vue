<template>
  <div class="search-view">
    <Sidebar :currentSidebar="DynamicComponent">
      <!-- Search Box -->
      <search-box></search-box>
      
      <!-- Search Title -->
      <div class="tw-flex xs:tw-hidden tw-items-center tw-py-2 tw-px-4">
        <div
          class="tw-flex-grow tw-flex tw-items-center tw-justify-center xs:tw-justify-start tw-font-bold xs:tw-font-semibold tw-text-lg"
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
