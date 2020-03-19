<template>
  <div class="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full">
    
    <!-- Settings -->
    <div class="panel tw-bg-white tw-rounded active">
      <a
        href="javascript:void(0)"
        class="tw-flex tw-items-center panel-heading"
      >
        <span class="tw-text-tertiary">Settings</span></a
      >

      <div class="panel-content tw-mt-4">
        <!-- Color Mode -->
        <div class="tw-font-semibold tw-pt-2 tw-pb-1">Color Mode</div>
        <div class="tw-inline-flex tw-whitespace-no-wrap">
          <button
            class="tw-bg-lightgray tw-rounded-lg tw-my-2 tw-py-2 tw-px-4 tw-text-sm tw-w-full"
          >
            Light Theme
          </button>
          <button
            class="tw-rounded-lg tw-my-2 tw-py-2 tw-px-4 tw-text-sm tw-w-full"
          >
            Dark Theme
          </button>
        </div>

        <!-- Information -->
        <div class="tw-text-sm">
        <div class="tw-font-semibold tw-pt-2 tw-pb-1">Information</div>
        <a
          class="tw-block hover:tw-text-tertiary tw-mb-1"
          href="javascript:void(0)"
          >About</a
        >
        <button
          class="tw-block hover:tw-text-tertiary tw-mb-1"
          type="button"
          @click.stop="dialog = true"
        >
          Support
        </button>
        <button
          class="tw-block hover:tw-text-tertiary tw-mb-1"
          type="button"
          @click.stop="dialog2 = true"
        >
          Disclaimer
        </button>
        <a
          class="tw-block hover:tw-text-tertiary tw-mb-1"
          href="javascript:void(0)"
          >Terms of Use</a
        >
        </div>
        

        <!-- Help Dialog -->
        <help-dialog
          :dialog="dialog"
          @ChangeDialog="updateDialog"
        ></help-dialog>

        <!-- Disclaimer Dialog -->
        <disclaimer-dialog
          :dialog="dialog2"
          @ChangeDialog="updateDialog2"
        ></disclaimer-dialog>
      </div>
    </div>

    <!-- Login -->
    <login-panel />

    <!-- Activate Private Layers -->
    <private-layers-panel />
  </div>
</template>

<script>
import LoginPanel from "@/components/Settings/LoginPanel.vue";
import PrivateLayersPanel from "@/components/Settings/PrivateLayersPanel.vue";
import HelpDialog from "@/components/Settings/HelpDialog.vue";
import DisclaimerDialog from "@/components/Settings/DisclaimerDialog.vue";

export default {
  name: "settings",
  components: {
    LoginPanel,
    PrivateLayersPanel,
    HelpDialog,
    DisclaimerDialog
  },
  data() {
    return {
      dialog: false,
      dialog2: false
    };
  },
  methods: {
    updateDialog(value) {
      this.dialog = value;
    },
    updateDialog2(value) {
      this.dialog2 = value;
    }
  }
};
</script>
