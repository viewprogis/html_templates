<template>
  <div class="all-comments-view">
    <Sidebar :currentSidebar="DynamicComponent">
      <!-- Breadcrumb -->
      <Breadcrumb path="/drop-pin" />

      <!-- Comments Title -->
      <div class="tw-flex tw-items-center tw-py-2 tw-px-4">
        <div
          class="tw-flex-grow tw-flex tw-items-center tw-justify-center xs:tw-justify-start tw-font-bold xs:tw-font-semibold tw-text-lg"
        >
          All comments
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
import ViewAllComments from "@/components/DropPin/ViewAllComments.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";

export default {
  name: "allcomments",
  components: {
    Sidebar,
    PalmBeach,
    Breadcrumb
  },
  data() {
    return {
      DynamicComponent: ViewAllComments
    };
  }
};
</script>
