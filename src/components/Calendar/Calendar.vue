<template>
  <div class="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full">

    <!-- Calendar -->
    <div class="tw-flex tw-items-center tw-py-2 tw-px-3">
      <div class="tw-flex-grow tw-flex tw-items-center tw-font-semibold tw-text-lg">
        <img src="@/assets/img/icon_calendar.svg" class="tw-mr-2" /> Calendar
      </div>
      <img class="tw-flex-none" src="@/assets/img/icon_info.svg"/>
    </div>

    <!-- Upcoming Events -->
    <div class="panel tw-bg-white tw-rounded tw-p-3 tw-mt-2">
      <a
        href="javascript:void(0)"
        class="tw-flex tw-items-center panel-heading"
        >
        <span class="tw-text-tertiary">Upcoming events</span></a
      >

      <div class="panel-content tw-mt-4">

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

export default {
  name: "calendar"
};
</script>
