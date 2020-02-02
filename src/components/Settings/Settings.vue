<template>
  <div class="tw-flex tw-flex-col tw-min-h-full">
    <!-- Search Box -->
    <search-box></search-box>

    <!-- Settings -->
    <div class="tw-flex tw-mt-6 tw-py-2 tw-px-3">
      <div class="tw-flex-grow tw-flex tw-items-center tw-font-semibold tw-text-lg">
        <i class="fas fa-question tw-mr-2"></i> Settings
      </div>
      <img class="tw-flex-none" src="@/assets/img/project_info.svg"/>
    </div>

    <!-- Settings -->
    <div class="tw-bg-white tw-rounded tw-p-3 tw-mt-3">
      <a
        href="javascript:void(0)"
        class="tw-flex tw-items-center"
        ><i
          class="fas fa-chevron-down tw-flex tw-items-center tw-justify-center tw-w-5 tw-h-5 tw-rounded-full tw-bg-tertiary tw-text-white tw-text-xs tw-mr-2"
        ></i>
        <span class="tw-text-tertiary">Settings</span></a
      >

      <div class="tw-mt-4">

        <!-- Color Mode -->
        <div class="tw-font-semibold tw-pt-2 tw-pb-1">Color Mode</div>
        <div class="tw-inline-flex tw-whitespace-no-wrap">
        <button
          class="tw-rounded-br-15 tw-bg-tertiary tw-text-white tw-m-2 tw-py-1 tw-px-4 tw-text-sm tw-w-full tw-opacity-25"
        >
          Light Theme
        </button>
        <button
          class="tw-rounded-br-15 tw-bg-tertiary tw-text-white tw-m-2 tw-py-1 tw-px-4 tw-text-sm tw-w-full"
        >
          Dark Theme
        </button>
        </div>

        <!-- Information -->
        <div class="tw-font-semibold tw-pt-2 tw-pb-1">Information</div>
        <a class="tw-block hover:tw-text-tertiary" href="javascript:void(0)">About</a>
        <a class="tw-block hover:tw-text-tertiary" href="javascript:void(0)">Disclaimer</a>
        <a class="tw-block hover:tw-text-tertiary" href="javascript:void(0)">Terms of Use</a>

      </div>
    </div>

    <!-- Login -->
    <login-panel />

    <!-- Activate Private Layers -->
    <private-layers-panel />
    
    
  </div>
</template>

<script>
import SearchBox from "@/components/SearchBox.vue";
import LoginPanel from "@/components/Settings/LoginPanel.vue";
import PrivateLayersPanel from "@/components/Settings/PrivateLayersPanel.vue";

export default {
  name: "settings",
  components: {
    SearchBox, LoginPanel, PrivateLayersPanel
  }
};
</script>
