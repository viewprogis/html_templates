<template>
  <div class="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full">
    
    <!-- Form -->
    <div class="tw-bg-white tw-rounded tw-p-3 tw-mt-2">
      <!-- Select Box -->
      <div
        class="tw-w-full tw-relative tw-z-10 tw-rounded tw-overflow-hidden tw-my-2"
      >
        <div
          class="tw-absolute tw--z-10 tw-left-0 tw-top-0 tw-w-full tw-h-full tw-bg-tertiary tw-opacity-25"
        ></div>
        <select
          class="tw-py-2 tw-px-4 tw-text-sm tw-w-full tw-placeholder-black tw-appearance-none"
        >
          <option selected>Poor road condition</option>
          <option>Condition 1</option>
          <option>Condition 2</option>
          <option>Condition 3</option>
        </select>
        <div
          class="tw-pointer-events-none tw-absolute tw-inset-y-0 tw-right-0 tw-flex tw-items-center tw-pr-3 tw-text-black"
        >
          <i class="fas fa-caret-down tw-fill-current"></i>
        </div>
      </div>

      <textarea
        class="tw-w-full tw-rounded tw-bg-lightbluealpha tw-placeholder-gray-700 tw-outline-none tw-resize-none tw-py-2 tw-px-3"
        rows="5"
        placeholder="Write your message..."
      ></textarea>

      <p class="tw-text-xs" style="margin-bottom: 0.5rem;">
        All comments are subject to approval process that may take up to 24
        hours. Once approved, your comment will automatically appear on the map
        with the designated category.
      </p>
      <input
        type="email"
        class="tw-w-full tw-rounded tw-bg-lightbluealpha tw-placeholder-gray-700 tw-outline-none tw-resize-none tw-py-2 tw-px-3"
        placeholder="Email"
      />

      <input
        type="text"
        class="tw-mt-2 tw-w-full tw-rounded tw-bg-lightbluealpha tw-placeholder-gray-700 tw-outline-none tw-resize-none tw-py-2 tw-px-3"
        placeholder="Screen Name (optional)"
      />

      <button
        class="btn-primary tw-mt-4 tw-rounded-br-15 tw-py-2 tw-px-4 tw-text-sm tw-w-full"
      >
        Submit
      </button>
      <button
        class="tw-text-tertiary hover:tw-bg-lightgray tw-mt-2 tw-rounded-br-15 tw-py-2 tw-px-4 tw-text-sm tw-w-full"
      >
        Cancel
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "adddroppin"
};
</script>
