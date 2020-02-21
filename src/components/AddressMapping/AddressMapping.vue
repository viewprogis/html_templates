<template>
  <div class="tw-flex tw-flex-col tw-min-h-full">
    <!-- Search Box -->
    <search-box></search-box>

    <!-- Address Mapping -->
    <div class="tw-flex tw-items-center tw-mt-6 tw-py-2 tw-px-3">
      <div class="tw-flex-grow tw-flex tw-items-center tw-font-semibold tw-text-lg">
        <i class="fas fa-cloud-upload-alt tw-text-2xl tw-mr-2"></i
          > Address Mapping
      </div>
      <i class="fas fa-info-circle tw-text-2xl tw-flex-none"></i>
    </div>

    <!-- Uploading -->
    <div class="panel tw-bg-white tw-rounded tw-p-3 tw-mt-3">
      <a
        href="javascript:void(0)"
        class="tw-flex tw-items-center panel-heading"
        >
        <span class="tw-text-tertiary">Uploading</span></a
      >

      <div class="panel-content tw-mt-4 tw-text-sm">
        <p>
          To display addresses as a map point on the map, upload an Excel file .xslx version.
        </p>

        <button
          class="btn-primary tw-mb-4 tw-rounded-br-15 tw-py-2 tw-px-4 tw-text-sm tw-w-full"
        >
          Upload Excel
        </button>

        <p>
          All addresses must be valid mailing addresses.
        </p>
        
      </div>
    </div>

    <!-- Results -->
    <div class="panel tw-bg-white tw-rounded tw-p-3 tw-mt-3">
      <div class="tw-flex tw-items-center">
      <a
        href="javascript:void(0)"
        class="tw-flex tw-items-center tw-flex-grow panel-heading"
        >
        <span class="tw-text-tertiary">Results</span></a
      >
      <a href="javascript:void(0)"><span class="tw-text-tertiary"><i class="fas fa-times"></i> Clear</span></a>
      </div>

      <div class="panel-content tw-mt-4">
        <p class="tw-text-sm">Geocoded <b>10 locations</b></p>

        <div class="tw-bg-lightgray tw-mb-4 tw-p-1">
          
          <div class="tw-overflow-auto tw-h-80">
          <!-- Row -->
          <div class="tw-border-b tw-border-gray-400 tw-px-3 tw-py-1">
            7390 Richland Ave,
            <br/>
            Kansas City,
            <br/>
            Kansas, 66111
          </div>

           <!-- Row -->
          <div class="tw-border-b tw-border-gray-400 tw-px-3 tw-py-1">
            7390 Richland Ave,
            <br/>
            Kansas City,
            <br/>
            Kansas, 66111
          </div>

           <!-- Row -->
          <div class="tw-border-b tw-border-gray-400 tw-px-3 tw-py-1">
            7390 Richland Ave,
            <br/>
            Kansas City,
            <br/>
            Kansas, 66111
          </div>

           <!-- Row -->
          <div class="tw-border-b tw-border-gray-400 tw-px-3 tw-py-1">
            7390 Richland Ave,
            <br/>
            Kansas City,
            <br/>
            Kansas, 66111
          </div>

           <!-- Row -->
          <div class="tw-border-b tw-border-gray-400 tw-px-3 tw-py-1">
            7390 Richland Ave,
            <br/>
            Kansas City,
            <br/>
            Kansas, 66111
          </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBox from "@/components/SearchBox.vue";

export default {
  name: "addressmapping",
  components: {
    SearchBox
  }
};
</script>
