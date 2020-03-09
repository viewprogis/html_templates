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
        <svg xmlns="http://www.w3.org/2000/svg" width="181.283" height="181.317" viewBox="0 0 181.283 181.317">
          <g id="circle" transform="translate(0.5 0.5)">
            <g id="Component_26_1" data-name="Component 26 – 1" transform="translate(118.781 60.933)">
              <title>Download</title>
              <path id="Intersection_10" class="intersection" data-tooltip="asd asd" data-name="Intersection 10" d="M11462.149,20019.125a49.072,49.072,0,0,0-50.445-11.752l-13.271-38.8a89.081,89.081,0,0,1,10.933-2.971,90.786,90.786,0,0,1,36.273,0,89.58,89.58,0,0,1,32.183,13.543,90.479,90.479,0,0,1,22.906,22.291l-33.354,23.838A49.18,49.18,0,0,0,11462.149,20019.125Z" transform="translate(20025.275 -11398.433) rotate(90)" fill="#37383e" stroke="#000" stroke-width="1"/>
              <path id="Icon_open-data-transfer-download" class="icon" data-name="Icon open-data-transfer-download" d="M6.98,0V6.98H2.327l6.98,6.98,6.98-6.98H11.633V0ZM0,16.287v2.327H18.613V16.287Z" transform="translate(27.201 36.585)" fill="#fff"/>
            </g>
            <g id="Component_25_1" data-name="Component 25 – 1" transform="translate(89.844 0.002)">
              <title>Chart</title>
              <path id="Intersection_9" class="intersection" data-name="Intersection 9" d="M11338,20048.5a90.812,90.812,0,0,1,1.83-18.139,89.572,89.572,0,0,1,13.545-32.18,90.462,90.462,0,0,1,24.311-24.311,89.531,89.531,0,0,1,15.288-8.293q3.28-1.389,6.679-2.518l13.012,38.887q-1.89.624-3.734,1.4A48.96,48.96,0,0,0,11379,20048.5Z" transform="translate(20048.498 -11337.996) rotate(90)" fill="#37383e" stroke="#000" stroke-width="1"/>
              <path id="chart-pie-solid" class="icon" d="M16.491,9H9.076l4.938,4.938a.5.5,0,0,0,.693.021,7.484,7.484,0,0,0,2.285-4.4A.5.5,0,0,0,16.491,9ZM16,6.979A7.518,7.518,0,0,0,9.023,0,.5.5,0,0,0,8.5.511V7.5h6.993A.5.5,0,0,0,16,6.979ZM7,9V1.588a.5.5,0,0,0-.557-.5A7.494,7.494,0,0,0,0,8.765,7.593,7.593,0,0,0,7.593,16a7.442,7.442,0,0,0,4.227-1.376.5.5,0,0,0,.049-.752Z" transform="translate(34.454 29.741)" fill="#fff"/>
            </g>
            <g id="Component_28_1" data-name="Component 28 – 1" transform="translate(0 62.002)">
              <title>Share</title>
              <path id="Intersection_7" class="intersection" data-name="Intersection 7" d="M11409.364,20136.674a88.86,88.86,0,0,1-9.824-2.6l-.015-.051,12.736-38.934a48.962,48.962,0,0,0,49.891-11.939,49.547,49.547,0,0,0,5.061-5.93l33.013,23.873.129.264a90.568,90.568,0,0,1-22.531,21.773,89.713,89.713,0,0,1-32.182,13.545,90.9,90.9,0,0,1-36.277,0Z" transform="translate(20138.502 -11399.525) rotate(90)" fill="#37383e" stroke="#000" stroke-width="1"/>
              <path id="share-alt-solid" class="icon" d="M11,10a2.987,2.987,0,0,0-1.868.653l-3.2-2a3.017,3.017,0,0,0,0-1.3l3.2-2a2.995,2.995,0,1,0-1.06-1.7l-3.2,2a3,3,0,1,0,0,4.694l3.2,2A3,3,0,1,0,11,10Z" transform="translate(16.982 34.516)" fill="#fff"/>
            </g>
            <g id="Component_27_1" data-name="Component 27 – 1" transform="translate(37.271 130)">
              <title>Print</title>
              <path id="Intersection_6" class="intersection" data-name="Intersection 6" d="M11499.763,20100.869l-32.577-23.609a48.952,48.952,0,0,0,.16-57.295l33.334-23.869q.741,1.034,1.454,2.084a89.725,89.725,0,0,1,13.54,32.18,90.853,90.853,0,0,1,0,36.277,89.694,89.694,0,0,1-13.54,32.186q-.921,1.362-1.893,2.689Z" transform="translate(20101.512 -11467.186) rotate(90)" fill="#37383e" stroke="#000" stroke-width="1"/>
              <path id="Icon_material-print" class="icon" data-name="Icon material-print" d="M20,9.5H6a3,3,0,0,0-3,3v6H7v4H19v-4h4v-6A3,3,0,0,0,20,9.5Zm-3,11H9v-5h8Zm3-7a1,1,0,1,1,1-1A1,1,0,0,1,20,13.5Zm-1-9H7v4H19Z" transform="translate(39.711 16.018)" fill="#fff"/>
            </g>
            <g id="Component_29_1" data-name="Component 29 – 1" transform="translate(4.664)">
              <title>Close</title>
              <path id="Intersection_8" class="intersection active toggle-spin" data-name="Intersection 8" d="M11396.515,20131.426a89.28,89.28,0,0,1-15.288-8.3,90.156,90.156,0,0,1-32.608-39.6,89.3,89.3,0,0,1-5.247-16.891,90.712,90.712,0,0,1-1.83-18.139h41a49.04,49.04,0,0,0,29.924,45.15q1.916.812,3.881,1.453l-12.606,38.977-.024.037Q11400.053,20132.925,11396.515,20131.426Z" transform="translate(20134.117 -11341.541) rotate(90)" fill="#37383e" stroke="#000" stroke-width="1"/>
              <g id="intersection8" class="icon" transform="translate(35.318 30.518)" style="isolation: isolate">
                <g id="Core" transform="translate(-341 -89)">
                  <g id="close" transform="translate(341 89)">
                    <path id="Shape" d="M14,1.4,12.6,0,7,5.6,1.4,0,0,1.4,5.6,7,0,12.6,1.4,14,7,8.4,12.6,14,14,12.6,8.4,7Z" fill="#fff" fill-rule="evenodd"/>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
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
