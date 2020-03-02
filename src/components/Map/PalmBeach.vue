<template>
  <div>
  <div class="tw-fixed tw-top-0 tw-w-full tw-h-full tw-overflow-hidden xs:tw-pt-0 tw-pt-16">
    <div class="tw-relative tw-w-full tw-h-full">
    <div class="map-container tw-w-full tw-h-full tw-relative tw--z-10">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26371661.859564565!2d-113.72360706725826!3d36.210406270518746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2s!4v1579731061144!5m2!1sen!2s"
        class="tw-w-full tw-h-full"
      ></iframe>
    </div>
    <a
      class="tw-absolute tw-z-10 tw-top-0 tw-right-0 tw-mt-20 tw-mr-20 tw-rounded-sm tw-border-2 tw-border-solid tw-border-black tw-bg-white tw-text-black hover:tw-bg-black hover:tw-text-white tw-py-1 tw-px-4"
      href="/drop-pin/add"
      >CLICK TO ADD A PIN</a
    >

    <div
      class="map-buttons tw-absolute tw-right-0 tw-top-0 md:tw-top-auto md:tw-bottom-0 md:tw-right-auto md:tw-left-0 tw-bottom-0 tw-z-10 tw-h-full tw-w-auto md:tw-w-full md:tw-h-auto tw-pointer-events-none"
    >
      <div class="tw-flex tw-flex-col md:tw-flex-row tw-h-full md:tw-h-auto tw-items-end md:tw-items-center tw-px-4 tw-py-4 md:tw-py-2 tw-justify-between tw-pointer-events-none">
        <ul class="tw-flex tw-flex-col md:tw-flex-row pl-0 tw-pointer-events-auto">
          <li class="tw-mb-2 md:tw-mr-3">
            <a href="javascript:void(0)" class="tw-p-2"
              ><img src="@/assets/img/icon_map_plus.svg"
            /></a>
          </li>
          <li class="tw-mb-2 md:tw-mr-3">
            <a href="javascript:void(0)" class="tw-p-2"
              ><img src="@/assets/img/icon_map_minus.svg"
            /></a>
          </li>
          <li class="tw-mb-2 md:tw-mr-3">
            <button type="button" @click.stop="dialog2 = true" class="tw-p-2">
              <img src="@/assets/img/icon_map_zoom.svg" />
            </button>
          </li>
          <li class="tw-mb-2 md:tw-mr-3">
            <a href="javascript:void(0)" id="base-map-open" class="tw-p-2"
              ><img src="@/assets/img/icon_map_base.svg"
            /></a>
          </li>
          <li class="tw-mb-2 md:tw-mr-3">
            <a href="javascript:void(0)" @click.stop="dialog = true" class="tw-p-2"
              ><img src="@/assets/img/icon_map_3d.svg"
            /></a>
          </li>
          <li class="tw-mb-2 md:tw-mr-3">
            <button type="button" class="toggle-spin tw-p-2">
              <img src="@/assets/img/icon_map_circle.svg" />
            </button>
          </li>
          <li class="tw-mb-2 md:tw-mr-3">
            <a href="javascript:void(0)" class="tw-p-2 lg:tw-p-1"
              ><img src="@/assets/img/icon_map_gps.svg"
            /></a>
          </li>
        </ul>
        <ul class="tw-hidden xs:tw-flex tw-pointer-events-auto">
          <li class="tw-mr-1">
            <a href="https://www.facebook.com" class="tw-p-2" target="_blank">
              <i class="fab fa-facebook-f"></i>
            </a>
          </li>
          <li class="tw-mr-1">
            <a href="https://www.twitter.com" class="tw-p-2" target="_blank">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li class="tw-mr-1">
            <a href="https://www.linkedin.com" class="tw-p-2" target="_blank">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li class="tw-mr-3">
            <a href="https://www.youtube.com" class="tw-p-2" target="_blank">
              <i class="fab fa-youtube"></i>
            </a>
          </li>
          <li class="no-rounded-right">
            <a href="javascript:void(0)" class="tw-w-auto" target="_blank">Custom Link 1</a>
          </li>
          <li class="no-rounded-left">
            <a href="javascript:void(0)" class="tw-w-auto" target="_blank">Custom Link 2</a>
          </li>
        </ul>
      </div>

      <!-- Results Dialog -->
      <results-dialog
        :dialog="dialog"
        @ChangeDialog="updateDialog"
      ></results-dialog>

      <!-- Warning Dialog -->
      <warning-dialog
        :dialog="dialog2"
        @ChangeDialog="updateDialog2"
      ></warning-dialog>
    </div>

    <!-- Circular menu -->
    <div id="spin-3d">
      <div class="spin-btns">
        <ul>
          <li class="active">
            <a href="javascript:void(0)" class="toggle-spin"
              ><span><i class="fas fa-times tw-text-lg"></i></span
            ></a>
          </li>
          <li>
            <a href="javascript:void(0)"
              ><span><i class="fas fa-chart-pie tw-text-lg"></i></span
            ></a>
          </li>
          <li>
            <a href="javascript:void(0)"
              ><span><img src="@/assets/img/icon_spin_download.svg"/></span
            ></a>
          </li>
          <li>
            <a href="javascript:void(0)"
              ><span><i class="material-icons tw-text-xl" style="position:relative;top:5px;">print</i
          ></span
            ></a>
          </li>
          <li>
            <a href="javascript:void(0)"
              ><span><i class="fas fa-share-alt tw-text-lg"></i></span
            ></a>
          </li>
        </ul>
      </div>
    </div>
    
    </div>
  </div>
  <!-- Base MAP -->
  <base-map />
  </div>
</template>
<script>
import ResultsDialog from "@/components/Map/ResultsDialog.vue";
import WarningDialog from "@/components/Map/WarningDialog.vue";
import BaseMap from "@/components/BaseMap/BaseMap.vue";

export default {
  name: "palmbeach",
  components: {
    ResultsDialog,
    BaseMap,
    WarningDialog
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
<style scoped lang="scss"></style>
