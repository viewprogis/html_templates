<template>
  <div class="tw-flex tw-flex-col tw-min-h-full">
    <!-- Search Box -->
    <search-box></search-box>

    <!-- Calendar -->
    <div class="tw-flex tw-items-center tw-mt-6 tw-py-2 tw-px-3">
      <div class="tw-flex-grow tw-flex tw-items-center tw-font-semibold tw-text-lg">
        <i class="far fa-calendar tw-text-2xl tw-mr-2"></i> Calendar
      </div>
      <i class="fas fa-info-circle tw-text-2xl tw-flex-none"></i>
    </div>

    <!-- Upcoming Events -->
    <div class="tw-bg-white tw-rounded tw-p-3 tw-mt-3">
      <a
        href="javascript:void(0)"
        class="tw-flex tw-items-center"
        ><i
          class="fas fa-chevron-down tw-flex tw-items-center tw-justify-center tw-w-5 tw-h-5 tw-rounded-full tw-bg-tertiary tw-text-white tw-text-xs tw-mr-2"
        ></i>
        <span class="tw-text-tertiary">Upcoming events</span></a
      >

      <div class="tw-mt-4">

        <!-- Event 1 -->
        <div class="tw-border-t tw-border-solid tw-border-gray-300 tw-py-4">
            <h1 class="tw-text-2xl tw-font-bold tw-mb-2 tw-leading-tight">Upcoming Event 1</h1>

            <div class="tw-mb-0">
              <span class="tw-mr-8">11/24/2019</span> Wednesday
            </div>
            <div>
              9:00 — 11:00 AM
            </div>
            <div>
              Address: Houston, TX
            </div>
          </div>

          <!-- Event 2 -->
          <div class="tw-border-t tw-border-solid tw-border-gray-300 tw-py-4">
            <h1 class="tw-text-2xl tw-font-bold tw-mb-2 tw-leading-tight">Upcoming Event 2</h1>

            <div class="tw-mb-0">
              <span class="tw-mr-8">11/24/2019</span> Wednesday
            </div>
            <div>
              9:00 — 11:00 AM
            </div>
            <div>
              Address: Houston, TX
            </div>
          </div>

          <!-- Event 3 -->
          <div class="tw-border-t tw-border-solid tw-border-gray-300 tw-py-4">
            <h1 class="tw-text-2xl tw-font-bold tw-mb-2 tw-leading-tight">Upcoming Event 3</h1>

            <div class="tw-mb-0">
              <span class="tw-mr-8">11/24/2019</span> Wednesday
            </div>
            <div>
              9:00 — 11:00 AM
            </div>
            <div>
              Address: Houston, TX
            </div>
          </div>

      </div>
    </div>

  </div>
</template>

<script>
import SearchBox from "@/components/SearchBox.vue";

export default {
  name: "calendar",
  components: {
    SearchBox
  }
};
</script>
