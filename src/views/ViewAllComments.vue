<template>
  <div class="all-comments-view">
    <Sidebar :currentSidebar="DynamicComponent">
      <br class="tw-hidden xss:tw-block" />
      <!-- Breadcrumb -->
      <Breadcrumb path="/drop-pin" />

      <!-- Comments Title -->
      <div class="tw-flex tw-items-center tw-py-2 tw-leading-none tw-absolute tw-top-0 tw-left-0 tw-right-0 xss:tw-static xss:tw-leading-normal xss:tw-pt-2 xss:tw-pb-3 xss:tw-px-5">
        <div
          class="tw-flex-grow tw-flex tw-items-center tw-justify-center xss:tw-justify-start tw-font-bold xss:tw-font-semibold tw-text-lg"
        >
          All comments
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
