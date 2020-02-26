<template>
  <div class="add-drop-pin-view">
    <Sidebar :currentSidebar="DynamicComponent">
      <!-- Breadcrumb -->
      <Breadcrumb path="/drop-pin" />

      <!-- Add Drop Pin Title -->
      <div class="tw-flex tw-items-center tw-py-2 tw-px-4">
        <div
          class="tw-flex-grow tw-flex tw-items-center tw-font-semibold tw-text-lg"
        >
          Add Pin details
        </div>
        <img class="tw-flex-none" src="@/assets/img/icon_info.svg" />
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
