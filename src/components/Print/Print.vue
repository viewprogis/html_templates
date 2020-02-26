<template>
  <div class="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full">
    
    <!-- Print Opened -->
    <div class="panel tw-bg-white tw-rounded tw-p-3 tw-mt-2 active">
      <a
        href="javascript:void(0)"
        class="tw-flex tw-items-center panel-heading"
      >
        <span class="tw-text-tertiary">Choose your parameters</span></a
      >

      <div class="panel-content tw-mt-4">
        <!-- Size -->
        <div class="tw-font-semibold tw-pt-2 tw-pb-1">Size</div>
        <div
          class="tw-w-full tw-relative tw-z-10 tw-rounded tw-overflow-hidden tw-my-2"
        >
          <div
            class="tw-absolute tw--z-10 tw-left-0 tw-top-0 tw-w-full tw-h-full tw-bg-tertiary tw-opacity-25"
          ></div>
          <select
            class="tw-py-2 tw-px-4 tw-text-sm tw-w-full tw-placeholder-black tw-appearance-none"
          >
            <option selected>Letter (8.5” x 11”)</option>
            <option>Letter (8.5” x 11”)</option>
            <option>Letter (8.5” x 11”)</option>
            <option>Letter (8.5” x 11”)</option>
          </select>
          <div
            class="tw-pointer-events-none tw-absolute tw-inset-y-0 tw-right-0 tw-flex tw-items-center tw-pr-3 tw-text-black"
          >
            <i class="fas fa-caret-down tw-fill-current"></i>
          </div>
        </div>

        <!-- Oreintation -->
        <div class="tw-font-semibold tw-pt-2 tw-pb-1">Oreintation</div>
        <div
          class="tw-w-full tw-relative tw-z-10 tw-rounded tw-overflow-hidden tw-my-2"
        >
          <div
            class="tw-absolute tw--z-10 tw-left-0 tw-top-0 tw-w-full tw-h-full tw-bg-tertiary tw-opacity-25"
          ></div>
          <select
            class="tw-py-2 tw-px-4 tw-text-sm tw-w-full tw-placeholder-black tw-appearance-none"
          >
            <option selected>Landscape</option>
            <option>Portrait</option>
          </select>
          <div
            class="tw-pointer-events-none tw-absolute tw-inset-y-0 tw-right-0 tw-flex tw-items-center tw-pr-3 tw-text-black"
          >
            <i class="fas fa-caret-down tw-fill-current"></i>
          </div>
        </div>

        <button
          class="btn-primary tw-mt-4 tw-rounded-br-15 tw-py-2 tw-px-4 tw-text-sm tw-w-full"
        >
          Export
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "print",
  data() {
    return {
      radius: null
    };
  }
};
</script>
