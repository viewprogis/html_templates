<template>
  <div class="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full">
    
    <!-- Uploading -->
    <div class="panel tw-bg-white tw-rounded active">
      <a
        href="javascript:void(0)"
        class="tw-flex tw-items-center panel-heading"
      >
        <span class="tw-text-tertiary">Upload</span></a
      >

      <div class="panel-content tw-mt-4 tw-text-sm">
        <p>
          To display addresses as a map point on the map, upload an Excel file
          .xslx version.
        </p>

        <button
          class="btn-primary tw-mb-4 tw-rounded-br-15 tw-py-2 tw-px-4 tw-text-sm tw-w-full tw-max-w-sm"
        >
          Upload Excel
        </button>

        <p>
          All addresses must be valid mailing addresses.
        </p>
      </div>
    </div>

    <!-- Results -->
    <div class="panel tw-bg-white tw-rounded tw-mt-2">
      <div class="tw-flex tw-items-center">
        <a
          href="javascript:void(0)"
          class="tw-flex tw-items-center tw-flex-grow panel-heading"
        >
          <span class="tw-text-tertiary">Results</span></a
        >
        <a href="javascript:void(0)"
          ><span class="tw-text-tertiary"
            ><i class="fas fa-times"></i> Clear</span
          ></a
        >
      </div>

      <div class="panel-content tw-mt-4">
        <p class="tw-text-sm">Geocoded <b>10 locations</b></p>

        <div class="tw-bg-lightgray tw-mb-4 tw-p-1">
          <div class="tw-overflow-auto tw-h-96 tw-leading-snug">
            <!-- Row -->
            <div class="tw-px-3 tw-py-1">
              7390 Richland Ave,
              <br />
              Kansas City,
              <br />
              Kansas, 66111
            </div>

            <!-- Row -->
            <div class="tw-px-3 tw-py-1">
              7390 Richland Ave,
              <br />
              Kansas City,
              <br />
              Kansas, 66111
            </div>

            <!-- Row -->
            <div class="tw-px-3 tw-py-1">
              7390 Richland Ave,
              <br />
              Kansas City,
              <br />
              Kansas, 66111
            </div>

            <!-- Row -->
            <div class="tw-px-3 tw-py-1">
              7390 Richland Ave,
              <br />
              Kansas City,
              <br />
              Kansas, 66111
            </div>

            <!-- Row -->
            <div class="tw-px-3 tw-py-1">
              7390 Richland Ave,
              <br />
              Kansas City,
              <br />
              Kansas, 66111
            </div>

            <!-- Row -->
            <div class="tw-px-3 tw-py-1">
              7390 Richland Ave,
              <br />
              Kansas City,
              <br />
              Kansas, 66111
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "addressmapping"
};
</script>
