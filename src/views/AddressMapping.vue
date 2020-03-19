<template>
  <div class="address-mapping-view">
    <Sidebar :currentSidebar="DynamicComponent">
      <!-- Search Box -->
      <search-box></search-box>

      <!-- Address Mapping Title -->
      <div class="tw-flex tw-items-center tw-py-2 tw-leading-none tw-absolute tw-top-0 tw-left-0 tw-right-0 xss:tw-static xss:tw-leading-normal xss:tw-py-3 xss:tw-px-5 xss:tw-pl-6">
        <div
          class="tw-flex-grow tw-flex tw-items-center tw-justify-center xss:tw-justify-start tw-font-bold xss:tw-font-semibold tw-text-lg"
        >
          <i class="fas fa-cloud-upload-alt tw-text-xl tw-mr-2 tw-hidden xss:tw-inline-flex"></i> Address
          Mapping
        </div>
        <div class="tw-flex-none tw-hidden xss:tw-flex" data-tooltip="This tool returns the geographic location of addresses on the map stored in a spreadsheet. Click clear to remove the selection." data-tooltip-position="right" data-tooltip-oneline="false">
          <img src="@/assets/img/icon_info.svg" />
        </div>
      </div>
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
