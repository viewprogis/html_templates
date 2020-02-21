<template>
  <div class="tw-flex tw-flex-col tw-min-h-full">
    <!-- Search Box -->
    <search-box></search-box>

    <!-- Address Results -->
    <div class="panel tw-bg-white tw-rounded tw-p-3 tw-mt-3">
      <a
        href="javascript:void(0)"
        class="tw-flex tw-items-center panel-heading"
        >
        <span class="tw-text-tertiary">Address results</span></a
      >

      <div class="panel-content tw-mt-4 tw-text-sm">

        <div class="tw-mb-4">
          
          <!-- Row -->
          <div class="tw-border-b tw-border-gray-400 tw-py-2">
            7390 Richland Ave, Kansas City, Kansas, 66111
          </div>
          
          <!-- Row -->
          <div class="tw-border-b tw-border-gray-400 tw-py-2">
            7390 Richland Ave, Kansas City, Kansas, 66111
          </div>

          <!-- Row -->
          <div class="tw-border-b tw-border-gray-400 tw-py-2">
            7390 Richland Ave, Kansas City, Kansas, 66111
          </div>

          <!-- Row -->
          <div class="tw-border-b tw-border-gray-400 tw-py-2">
            7390 Richland Ave, Kansas City, Kansas, 66111
          </div>

          <!-- Row -->
          <div class="tw-border-b tw-border-gray-400 tw-py-2">
            7390 Richland Ave, Kansas City, Kansas, 66111
          </div>
          

        </div>
        
      </div>
    </div>

    <!-- Parcel Results -->
    <div class="panel tw-bg-white tw-rounded tw-p-3 tw-mt-3">
      <a
        href="javascript:void(0)"
        class="tw-flex tw-items-center panel-heading"
        >
        <span class="tw-text-tertiary">Parcel results</span></a
      >

      <div class="panel-content tw-mt-4 tw-text-sm">

        <div class="tw-mb-4">
          
          <!-- Row -->
          <div class="tw-border-b tw-border-gray-400 tw-py-2">
            7390 Richland Ave, Kansas City, Kansas, 66111
          </div>
          
          <!-- Row -->
          <div class="tw-border-b tw-border-gray-400 tw-py-2">
            7390 Richland Ave, Kansas City, Kansas, 66111
          </div>

          <!-- Row -->
          <div class="tw-border-b tw-border-gray-400 tw-py-2">
            7390 Richland Ave, Kansas City, Kansas, 66111
          </div>

          <!-- Row -->
          <div class="tw-border-b tw-border-gray-400 tw-py-2">
            7390 Richland Ave, Kansas City, Kansas, 66111
          </div>

          <!-- Row -->
          <div class="tw-border-b tw-border-gray-400 tw-py-2">
            7390 Richland Ave, Kansas City, Kansas, 66111
          </div>
          

        </div>
        
      </div>
    </div>

  </div>
</template>

<script>
import SearchBox from "@/components/SearchBox.vue";

export default {
  name: "search",
  components: {
    SearchBox
  }
};
</script>
