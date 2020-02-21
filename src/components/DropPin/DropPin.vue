<template>
  <div class="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full">
    
    <!-- Drop Pin -->
    <div class="tw-flex tw-items-center tw-py-2 tw-px-3">
      <div class="tw-flex-grow tw-flex tw-items-center tw-font-semibold tw-text-lg">
        <img class="tw-mr-2" src="@/assets/img/icon_pindrop.svg"/> Drop Pin
      </div>
      <img class="tw-flex-none" src="@/assets/img/icon_info.svg"/>
    </div>

    <!-- Participate Opened -->
    <div class="panel tw-bg-white tw-rounded tw-p-3 tw-mt-2">
      <a
        href="javascript:void(0)"
        class="tw-flex tw-items-center panel-heading"
        >
        <span class="tw-text-tertiary">Question</span></a
      >

      <div class="panel-content tw-mt-4">
        <p class="tw-text-xl">
          What are the top safety issues in West Palm Beach?
        </p>

        <a
          href="/drop-pin/comments"
          class="tw-flex tw-items-center tw-relative tw-z-10 tw-mt-4 tw-rounded tw-overflow-hidden tw-py-2 tw-px-4 tw-text-sm"
        >
          <div
            class="tw-absolute tw--z-10 tw-left-0 tw-top-0 tw-w-full tw-h-full tw-bg-tertiary tw-opacity-25"
          ></div>
          <span class="tw-flex-grow">View All Comments</span
          ><a href="javascript:void(0)" class="blue-arrow-right"></a>
        </a>
      </div>
    </div>

    <!-- Drop Pin Opened -->
    <div class="panel tw-bg-white tw-rounded tw-p-3 tw-mt-2">
      <a
        href="javascript:void(0)"
        class="tw-flex tw-items-center panel-heading"
        >
        <span class="tw-text-tertiary">Drop Pin</span></a
      >

      <div class="panel-content tw-mt-4">
        <p class="tw-text-sm mb-2">Select the pin below and drop it on the map</p>

        <!-- Tertiary Pin -->
        <div
          class="tw-flex tw-items-center tw-relative tw-z-10 tw-rounded-sm tw-overflow-hidden tw-py-1 tw-px-4 tw-text-sm tw-border-l-4 tw-border-solid tw-border-tertiary"
        >
          <div
            class="tw-absolute tw--z-10 tw-left-0 tw-top-0 tw-w-full tw-h-full tw-bg-tertiary tw-opacity-25"
          ></div>

          <div class="tw-flex-grow">
            <v-switch color="tertiary" inset>
              <template v-slot:label>
                <div class="tw-flex tw-flex-col tw-text-black">
                  <b class="tw-text-base">Traffic Issues</b>
                  86 active pins
                </div>
              </template>
            </v-switch>
          </div>
          <i
            class="fas fa-map-marker-alt tw-text-tertiary tw-text-3xl tw-ml-2"
          ></i>
        </div>

        <!-- Yellow Pin -->
        <div
          class="tw-flex tw-items-center tw-relative tw-z-10 tw-mt-2 tw-rounded-sm tw-overflow-hidden tw-py-1 tw-px-4 tw-text-sm tw-border-l-4 tw-border-solid tw-border-secondary"
        >
          <div
            class="tw-absolute tw--z-10 tw-left-0 tw-top-0 tw-w-full tw-h-full tw-bg-secondary tw-opacity-25"
          ></div>
          <div class="tw-flex-grow">
            <v-switch color="secondary" inset>
              <template v-slot:label>
                <div class="tw-flex tw-flex-col tw-text-black">
                  <b class="tw-text-base">Traffic Issues</b>
                  86 active pins
                </div>
              </template>
            </v-switch>
          </div>
          <i
            class="fas fa-map-marker-alt tw-text-secondary tw-text-3xl tw-ml-2"
          ></i>
        </div>

        <!-- Red Pin -->
        <div
          class="tw-flex tw-items-center tw-relative tw-z-10 tw-mt-2 tw-rounded-sm tw-overflow-hidden tw-py-1 tw-px-4 tw-text-sm tw-border-l-4 tw-border-solid tw-border-redcustom"
        >
          <div
            class="tw-absolute tw--z-10 tw-left-0 tw-top-0 tw-w-full tw-h-full tw-bg-redcustom tw-opacity-25"
          ></div>
          <div class="tw-flex-grow">
            <v-switch color="red" inset>
              <template v-slot:label>
                <div class="tw-flex tw-flex-col tw-text-black">
                  <b class="tw-text-base">Traffic Issues</b>
                  86 active pins
                </div>
              </template>
            </v-switch>
          </div>
          <i class="fas fa-map-marker-alt tw-text-redcustom tw-text-3xl tw-ml-2"></i>
        </div>

        <!-- Primary Pin -->
        <div
          class="tw-flex tw-items-center tw-relative tw-z-10 tw-mt-2 tw-rounded-sm tw-overflow-hidden tw-py-1 tw-px-4 tw-text-sm tw-border-l-4 tw-border-solid tw-border-primary"
        >
          <div
            class="tw-absolute tw--z-10 tw-left-0 tw-top-0 tw-w-full tw-h-full tw-bg-primary tw-opacity-25"
          ></div>
          <div class="tw-flex-grow">
            <v-switch color="primary" inset>
              <template v-slot:label>
                <div class="tw-flex tw-flex-col tw-text-black">
                  <b class="tw-text-base">Traffic Issues</b>
                  86 active pins
                </div>
              </template>
            </v-switch>
          </div>
          <i class="fas fa-map-marker-alt tw-text-primary tw-text-3xl tw-ml-2"></i>
        </div>

        <!-- Blue Pin -->
        <div
          class="tw-flex tw-items-center tw-relative tw-z-10 tw-mt-2 tw-rounded-sm tw-overflow-hidden tw-py-1 tw-px-4 tw-text-sm tw-border-l-4 tw-border-solid tw-border-bluecustom"
        >
          <div
            class="tw-absolute tw--z-10 tw-left-0 tw-top-0 tw-w-full tw-h-full tw-bg-bluecustom tw-opacity-25"
          ></div>
          <div class="tw-flex-grow">
            <v-switch color="blue" inset>
              <template v-slot:label>
                <div class="tw-flex tw-flex-col tw-text-black">
                  <b class="tw-text-base">Traffic Issues</b>
                  86 active pins
                </div>
              </template>
            </v-switch>
          </div>
          <i class="fas fa-map-marker-alt tw-text-bluecustom tw-text-3xl tw-ml-2"></i>
        </div>

        <button
          class="btn-primary tw-mt-2 tw-rounded-br-15 tw-py-2 tw-px-4 tw-text-sm tw-w-full tw-opacity-25 tw-cursor-not-allowed"
        >
          Reset map
        </button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "droppin"
};
</script>
