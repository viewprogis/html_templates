<template>
  <div class="tw-absolute tw-top-0 tw-w-full tw-h-full tw-overflow-hidden">
    <div class="map-container tw-w-full tw-h-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26371661.859564565!2d-113.72360706725826!3d36.210406270518746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2s!4v1579731061144!5m2!1sen!2s"
        class="tw-w-full tw-h-full"
      ></iframe>
      <a
        class="tw-absolute tw-z-10 tw-top-0 tw-right-0 tw-mt-20 tw-mr-20 tw-rounded-sm tw-border-2 tw-border-solid tw-border-black tw-bg-white tw-text-black hover:tw-bg-black hover:tw-text-white tw-py-1 tw-px-4"
        href="/drop-pin/add"
        >CLICK TO ADD A PIN</a
      >
    </div>

    <div
      class="map-buttons tw-absolute tw-left-0 tw-bottom-0 tw-px-6 tw-py-5 tw-w-full tw-z-10"
    >
      <div class="tw-flex tw-items-center tw-justify-between">
        <ul class="tw-flex">
          <li class="tw-mr-3">
            <a href="javascript:void(0)"
              ><img src="@/assets/img/icon_map_plus.svg"
            /></a>
          </li>
          <li class="tw-mr-3">
            <a href="javascript:void(0)"
              ><img src="@/assets/img/icon_map_minus.svg"
            /></a>
          </li>
          <li class="tw-mr-3">
            <button type="button" @click.stop="dialog3 = true">
              <img src="@/assets/img/icon_map_zoom.svg" />
            </button>
          </li>
          <li class="tw-mr-3">
            <a href="javascript:void(0)" id="base-map-open"
              ><img src="@/assets/img/icon_map_base.svg"
            /></a>
          </li>
          <li class="tw-mr-3">
            <a href="javascript:void(0)" id="toggle-spin"
              ><img src="@/assets/img/icon_map_3d.svg"
            /></a>
          </li>
          <li class="tw-mr-3">
            <button type="button" @click.stop="dialog2 = true">
              <img src="@/assets/img/icon_map_circle.svg" />
            </button>
          </li>
          <li class="tw-mr-3">
            <a href="javascript:void(0)"
              ><img src="@/assets/img/icon_map_gps.svg"
            /></a>
          </li>
        </ul>
        <ul class="tw-flex">
          <li class="tw-mr-3">
            <button type="button" @click.stop="dialog = true">
              <img class="tw-h-6" src="@/assets/img/icon_map_question.svg" />
            </button>
          </li>
          <li class="no-rounded-right">
            <a href="javascript:void(0)" class="tw-w-auto">Custom Link 1</a>
          </li>
          <li class="no-rounded-left">
            <a href="javascript:void(0)" class="tw-w-auto">Custom Link 2</a>
          </li>
        </ul>
      </div>

      <!-- Help Dialog -->
      <help-dialog :dialog="dialog" @ChangeDialog="updateDialog"></help-dialog>

      <!-- Results Dialog -->
      <results-dialog
        :dialog="dialog2"
        @ChangeDialog="updateDialog2"
      ></results-dialog>

      <!-- Warning Dialog -->
      <warning-dialog
        :dialog="dialog3"
        @ChangeDialog="updateDialog3"
      ></warning-dialog>
    </div>

    <!-- Circular menu -->
    <div id="spin-3d">
      <div class="spin-btns">
        <ul>
          <li class="active">
            <a href="#"
              ><span><img src="@/assets/img/icon_spin_shorttext.svg"/></span
            ></a>
          </li>
          <li>
            <a href="#"
              ><span><img src="@/assets/img/icon_spin_info.svg"/></span
            ></a>
          </li>
          <li>
            <a href="#"
              ><span><img src="@/assets/img/icon_spin_download.svg"/></span
            ></a>
          </li>
          <li>
            <a href="#"
              ><span><img src="@/assets/img/icon_spin_share.svg"/></span
            ></a>
          </li>
          <li>
            <a href="#"
              ><span><img src="@/assets/img/icon_spin_people.svg"/></span
            ></a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Base MAP -->
    <base-map />
  </div>
</template>
<script>
import HelpDialog from "@/components/Settings/HelpDialog.vue";
import ResultsDialog from "@/components/Map/ResultsDialog.vue";
import WarningDialog from "@/components/Map/WarningDialog.vue";
import BaseMap from "@/components/BaseMap/BaseMap.vue";

export default {
  name: "palmbeach",
  components: {
    HelpDialog,
    ResultsDialog,
    BaseMap,
    WarningDialog
  },
  data() {
    return {
      dialog: false,
      dialog2: false,
      dialog3: false
    };
  },
  methods: {
    updateDialog(value) {
      this.dialog = value;
    },
    updateDialog2(value) {
      this.dialog2 = value;
    },
    updateDialog3(value) {
      this.dialog3 = value;
    }
  }
};
</script>
<style scoped lang="scss"></style>
