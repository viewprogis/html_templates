<template>
  <v-dialog v-model="dialog" persistent max-width="380">
    <div class="tw-bg-white tw-p-6">
      <div class="tw-relative">
        <p>Are you sure you want to cancel? Your Listing will not be saved.</p>

        <div class="tw-flex tw-mt-12">
          <button
            class="btn-primary tw-block tw-mr-1 tw-rounded-br-15 tw-py-2 tw-px-4 tw-text-sm tw-w-full tw-max-w-3xs"
            @click="updateValue(false)"
          >
            No
          </button>
          <button
            class="hover:tw-bg-tertiary hover:tw-text-white tw-text-tertiary tw-block tw-ml-1 tw-rounded-br-15 tw-py-2 tw-px-4 tw-text-sm tw-w-full tw-max-w-3xs"
            @click="updateValue(false)"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  name: "warningdialog",
  props: {
    dialog: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    updateValue: function(value) {
      this.$emit("ChangeDialog", value);
    }
  }
};
</script>
