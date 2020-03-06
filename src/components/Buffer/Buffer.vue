<template>
  <div class="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full">
    
    <!-- Buffer Opened -->
    <div class="panel tw-bg-white tw-rounded tw-p-3 tw-mt-2">
      <a
        href="javascript:void(0)"
        class="tw-flex tw-items-center panel-heading"
      >
        <span class="tw-text-tertiary">Choose your parameters</span></a
      >

      <div class="panel-content tw-mt-4">
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
            <option selected>Parcels</option>
            <option>Parcel 1</option>
            <option>Parcel 2</option>
            <option>Parcel 3</option>
          </select>
          <div
            class="tw-pointer-events-none tw-absolute tw-inset-y-0 tw-right-0 tw-flex tw-items-center tw-pr-3 tw-text-black"
          >
            <i class="fas fa-caret-down tw-fill-current"></i>
          </div>
        </div>

        <!-- Selection -->
        <div class="tw-font-semibold tw-pt-2 tw-pb-1">Selection</div>
        <ul class="tw-list-none tw-flex tw-flex-wrap" style="padding: 0;">
          <li class="tw-p-1">
            <a
              class="tw-flex tw-items-center tw-rounded-lg tw-p-2 tw-border hover:tw-border-tertiary tw-w-12 tw-h-12"
              href="javascript:void(0)"
              data-tooltip="Draw point"
              ><img class="tw-mx-auto" src="@/assets/img/pin_icon.svg"
            /></a>
          </li>
          <li class="tw-p-1">
            <a
              class="tw-flex tw-items-center tw-rounded-lg tw-p-2 tw-border hover:tw-border-tertiary tw-w-12 tw-h-12"
              href="javascript:void(0)"
              data-tooltip="Draw line"
              ><img class="tw-mx-auto" src="@/assets/img/selection_line.svg"
            /></a>
          </li>
          <li class="tw-p-1">
            <a
              class="tw-flex tw-items-center tw-rounded-lg tw-p-2 tw-border hover:tw-border-tertiary tw-w-12 tw-h-12"
              href="javascript:void(0)"
              data-tooltip="Draw polygon"
              ><img class="tw-mx-auto" src="@/assets/img/selection_polygon.png"
            /></a>
          </li>
          <li class="tw-p-1">
            <a
              class="tw-flex tw-items-center tw-rounded-lg tw-p-2 tw-border hover:tw-border-tertiary tw-w-12 tw-h-12"
              href="javascript:void(0)"
              data-tooltip="Select parcel"
              ><img class="tw-mx-auto" src="@/assets/img/selection_layer.svg"
            /></a>
          </li>
          <li class="tw-p-1">
            <a
              class="tw-flex tw-items-center tw-rounded-lg tw-p-2 tw-border hover:tw-border-tertiary tw-w-12 tw-h-12"
              href="javascript:void(0)"
              data-tooltip="Delete"
              ><img class="tw-mx-auto" src="@/assets/img/trash_icon.svg"
            /></a>
          </li>
        </ul>

        <!-- Radius -->
        <div class="tw-font-semibold tw-pt-2 tw-pb-1">Radius</div>
        <v-slider
          class="tw-mt-2 tw-mb-5 tw-ml-3"
          hide-details
          color="black"
          track-color="white"
          track-fill-color="#F0F2F4"
          loader-height="40"
        ></v-slider>

        <!-- Text field with select box -->
        <div
          class="tw-inline-flex tw-items-center tw-bg-lightgray tw-rounded tw-overflow-hidden"
        >
          <input
            class="tw-flex-grow tw-w-32 tw-bg-transparent tw-border-none tw-appearance-none tw-py-2 tw-px-4 tw-text-gray-700 tw-leading-tight focus:tw-outline-none"
            type="text"
            placeholder="placeholder"
          />
          <div class="tw-flex-none tw-relative tw-z-10">
            <div
              class="tw-absolute tw--z-10 tw-left-0 tw-top-0 tw-w-full tw-h-full tw-bg-tertiary tw-opacity-25"
            ></div>
            <select
              class="tw-py-2 tw-px-4 tw-text-sm tw-w-full tw-placeholder-black tw-appearance-none"
            >
              <option selected>ft</option>
              <option>inch</option>
              <option>inch</option>
              <option>inch</option>
            </select>
            <div
              class="tw-pointer-events-none tw-absolute tw-inset-y-0 tw-right-0 tw-flex tw-items-center tw-pr-3 tw-text-black"
            >
              <i class="fas fa-caret-down tw-fill-current"></i>
            </div>
          </div>
        </div>

        <table class="tw-text-sm tw-text-left tw-mt-4">
          <tr class="tw-border-b tw-border-solid">
            <th class="tw-p-1 tw-text-xs">Area</th>
            <td class="tw-p-1">0 acres</td>
          </tr>
          <tr>
            <th class="tw-p-1 tw-text-xs">Features</th>
            <td class="tw-p-1">0</td>
          </tr>
        </table>

        <button
          class="btn-primary tw-mt-4 tw-rounded-br-15 tw-py-2 tw-px-4 tw-text-sm tw-w-full"
        >
          Export
        </button>
      </div>
    </div>

    <!-- Legend -->
    <div class="tw-mt-2"></div>
    <legend-panel />
  </div>
</template>

<script>
import LegendPanel from "@/components/Legend/LegendPanel.vue";

export default {
  name: "buffer",
  components: {
    LegendPanel
  },
  data() {
    return {
      radius: null
    };
  }
};
</script>
