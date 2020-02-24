<template>
  <div class="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full">
    <!-- Draw -->
    <div class="tw-flex tw-items-center tw-py-2 tw-px-3">
      <div
        class="tw-flex-grow tw-flex tw-items-center tw-font-semibold tw-text-lg"
      >
        <img class="tw-mr-2 tw-hidden" src="@/assets/img/icon_mlslisting.svg" />
        <img class="tw-mr-2" src="@/assets/img/icon_mlslisting_white.svg" /> MLS listings
      </div>
      <img class="tw-flex-none" src="@/assets/img/icon_info_white.svg" />
    </div>

    <!-- Draw -->
    <div class="panel tw-bg-white tw-rounded tw-p-3 tw-mt-2 active">
      <a
        href="javascript:void(0)"
        class="tw-flex tw-items-center panel-heading"
      >
        <span class="tw-text-tertiary">Show on the map</span></a
      >

      <div class="panel-content tw-mt-4">
        
        <v-switch
            color="#6641FF"
            inset
            hide-details
            label="Property For Sale"
            v-model="isChecked1"
          />
        <v-switch
          color="primary"
          inset
          hide-details
          label="Property For Sale"
          v-model="isChecked2"
        />
        <br/>
      </div>
    </div>

    <!-- Legend -->
    <div class="tw-mt-2"></div>
    <legend-panel />
  </div>
</template>

<script>

export default {
  name: "MLSlistings",
  data(){
    return{
      isChecked1: true,
      isChecked2: true
    }
  }
};
</script>
