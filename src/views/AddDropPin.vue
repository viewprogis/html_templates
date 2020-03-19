<template>
  <div class="add-drop-pin-view">
    <Sidebar :currentSidebar="DynamicComponent">
      <!-- Breadcrumb -->
      <br class="tw-hidden xss:tw-block" />
      <Breadcrumb path="/drop-pin" />

      <!-- Add Drop Pin Title -->
      <div class="tw-flex tw-items-center tw-py-2 tw-leading-none tw-absolute tw-top-0 tw-left-0 tw-right-0 xss:tw-static xss:tw-leading-normal xss:tw-pt-2 xss:tw-pb-3 xss:tw-px-5">
        <div
          class="tw-flex-grow tw-flex tw-items-center tw-justify-center xss:tw-justify-start tw-font-bold xss:tw-font-semibold tw-text-lg"
        >
          Add Pin details
        </div>
        <img class="tw-flex-none tw-hidden xss:tw-flex" src="@/assets/img/icon_info.svg" />
      </div>
    </Sidebar>
    <PalmBeach />
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import PalmBeach from "@/components/Map/PalmBeach.vue";
import AddDropPin from "@/components/DropPin/AddDropPin.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";

export default {
  name: "adddroppin",
  components: {
    Sidebar,
    PalmBeach,
    Breadcrumb
  },
  data() {
    return {
      DynamicComponent: AddDropPin
    };
  }
};
</script>
