<template>
  <div
    class="base-map collapse tw-fixed tw-z-30 tw-bottom-0 tw-left-0 tw-z-10 tw-w-full tw-bg-white tw-rounded-tl-lg tw-rounded-tr-lg tw-p-6 tw-pt-2"
    id="base-map"
  >
    <a
      href="javascript:void(0)"
      class="tw-w-24 tw-h-1 tw-bg-graycustom tw-rounded-br-15 tw-block tw-mx-auto tw-mb-5 base-map-collapse"
    ></a>
    <div class="tw-text-center tw-font-bold tw-mb-6">Basemap</div>

    <div class="tw-flex tw-max-w-10xl tw-mx-auto">
      <div class="tw-flex tw-flex-grow tw-flex-wrap tw-justify-center tw-text-center tw-text-sm base-map-list">
        <a href="javascript:void(0)" class="sm:tw-flex-1 tw-mb-4 tw-px-2 active">
          <img
            class="tw-mx-auto tw-mb-2 tw-border-4 tw-border-solid tw-border-transparent tw-rounded-lg"
            src="@/assets/img/map.jpg"
          />
          <span>Dark Grey Canvas</span>
        </a>
        <a href="javascript:void(0)" class="sm:tw-flex-1 tw-mb-4 tw-px-2">
          <img
            class="tw-mx-auto tw-mb-2 tw-border-4 tw-border-solid tw-border-transparent tw-rounded-lg"
            src="@/assets/img/map.jpg"
          />
          <span>Light Grey Canvas</span>
        </a>
        <a href="javascript:void(0)" class="sm:tw-flex-1 tw-mb-4 tw-px-2">
          <img
            class="tw-mx-auto tw-mb-2 tw-border-4 tw-border-solid tw-border-transparent tw-rounded-lg"
            src="@/assets/img/map.jpg"
          />
          <span>Imagery with Labels</span>
        </a>
        <a href="javascript:void(0)" class="sm:tw-flex-1 tw-mb-4 tw-px-2">
          <img
            class="tw-mx-auto tw-mb-2 tw-border-4 tw-border-solid tw-border-transparent tw-rounded-lg"
            src="@/assets/img/map.jpg"
          />
          <span>National Geographic</span>
        </a>
        <a href="javascript:void(0)" class="sm:tw-flex-1 tw-mb-4 tw-px-2">
          <img
            class="tw-mx-auto tw-mb-2 tw-border-4 tw-border-solid tw-border-transparent tw-rounded-lg"
            src="@/assets/img/map.jpg"
          />
          <span>Oceans</span>
        </a>
        <a href="javascript:void(0)" class="sm:tw-flex-1 tw-mb-4 tw-px-2">
          <img
            class="tw-mx-auto tw-mb-2 tw-border-4 tw-border-solid tw-border-transparent tw-rounded-lg"
            src="@/assets/img/map.jpg"
          />
          <span>Open Street Map</span>
        </a>
        <a href="javascript:void(0)" class="sm:tw-flex-1 tw-mb-4 tw-px-2">
          <img
            class="tw-mx-auto tw-mb-2 tw-border-4 tw-border-solid tw-border-transparent tw-rounded-lg"
            src="@/assets/img/map.jpg"
          />
          <span>Imagery</span>
        </a>
        <a href="javascript:void(0)" class="sm:tw-flex-1 tw-mb-4 tw-px-2">
          <img
            class="tw-mx-auto tw-mb-2 tw-border-4 tw-border-solid tw-border-transparent tw-rounded-lg"
            src="@/assets/img/map.jpg"
          />
          <span>Streets</span>
        </a>
        <a href="javascript:void(0)" class="sm:tw-flex-1 tw-mb-4 tw-px-2">
          <img
            class="tw-mx-auto tw-mb-2 tw-border-4 tw-border-solid tw-border-transparent tw-rounded-lg"
            src="@/assets/img/map.jpg"
          />
          <span>Terrain with Labels</span>
        </a>
        <a href="javascript:void(0)" class="sm:tw-flex-1 tw-mb-4 tw-px-2">
          <img
            class="tw-mx-auto tw-mb-2 tw-border-4 tw-border-solid tw-border-transparent tw-rounded-lg"
            src="@/assets/img/map.jpg"
          />
          <span>Topographic</span>
        </a>
      </div>
      <a href="javascript:void(0)" class="tw-absolute tw-top-0 tw-right-0 tw-mt-8 tw-mr-8 sm:tw-static sm:tw-mt-8 sm:tw-ml-10 base-map-collapse"
        ><i class="fas fa-chevron-down"></i
      >Close</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "basemap"
};
</script>
