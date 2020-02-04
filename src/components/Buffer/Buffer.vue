<template>
  <div class="tw-flex tw-flex-col tw-min-h-full">
    <!-- Search Box -->
    <search-box></search-box>

    <!-- Buffer -->
    <div class="tw-flex tw-mt-6 tw-py-2 tw-px-3">
      <div class="tw-flex-grow tw-flex tw-items-center tw-font-semibold tw-text-lg">
        <img class="tw-mr-2" src="@/assets/img/buffer_spinner.svg"/> Buffer
      </div>
      <img class="tw-flex-none" src="@/assets/img/project_info.svg"/>
    </div>

    <!-- Buffer Opened -->
    <div class="tw-bg-white tw-rounded tw-p-3 tw-mt-3">
      <a
        href="javascript:void(0)"
        class="tw-flex tw-items-center"
        ><i
          class="fas fa-chevron-down tw-flex tw-items-center tw-justify-center tw-w-5 tw-h-5 tw-rounded-full tw-bg-tertiary tw-text-white tw-text-xs tw-mr-2"
        ></i>
        <span class="tw-text-tertiary">Choose your parameters</span></a
      >

      <div class="tw-mt-4">
        
        <!-- Select Box -->
        <div class="tw-w-full tw-relative tw-z-10 tw-rounded tw-overflow-hidden tw-my-2">
          <div
            class="tw-absolute tw--z-10 tw-left-0 tw-top-0 tw-w-full tw-h-full tw-bg-tertiary tw-opacity-25"
          ></div>
          <select class="tw-py-2 tw-px-4 tw-text-sm tw-w-full tw-placeholder-black tw-appearance-none">
            <option selected>Parcels</option>
            <option>Parcel 1</option>
            <option>Parcel 2</option>
            <option>Parcel 3</option>
          </select>
          <div class="tw-pointer-events-none tw-absolute tw-inset-y-0 tw-right-0 tw-flex tw-items-center tw-px-2 tw-text-black">
            <svg class="tw-fill-current tw-h-6 tw-w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>

        <!-- Selection -->
        <div class="tw-font-semibold tw-pt-2 tw-pb-1">Selection</div>
        <drawing-tools />

        <!-- Radius -->
        <div class="tw-font-semibold tw-pt-2 tw-pb-1">Radius</div>
        <v-slider color="black" track-color="grey lighten-2"></v-slider>

        <!-- Text field with select box -->
        <div class="tw-inline-flex tw-items-center tw-bg-lightgray tw-rounded tw-overflow-hidden">
          <input
            class="tw-flex-grow tw-w-32 tw-bg-transparent tw-border-none tw-appearance-none tw-py-2 tw-px-4 tw-text-gray-700 tw-leading-tight focus:tw-outline-none"
            type="text"
            placeholder="placeholder"
          />
          <div class="tw-flex-none tw-relative tw-z-10">
            <div
              class="tw-absolute tw--z-10 tw-left-0 tw-top-0 tw-w-full tw-h-full tw-bg-tertiary tw-opacity-25"
            ></div>
            <select class="tw-py-2 tw-px-4 tw-text-sm tw-w-full tw-placeholder-black tw-appearance-none">
              <option selected>ft</option>
              <option>inch</option>
              <option>inch</option>
              <option>inch</option>
            </select>
            <div class="tw-pointer-events-none tw-absolute tw-inset-y-0 tw-right-0 tw-flex tw-items-center tw-px-2 tw-text-black">
              <svg class="tw-fill-current tw-h-6 tw-w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
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
    <legend-panel/>
    
  </div>
</template>

<script>
import SearchBox from "@/components/SearchBox.vue";
import LegendPanel from "@/components/Legend/LegendPanel.vue";
import DrawingTools from "@/components/Draw/DrawingTools.vue";

export default {
  name: "buffer",
  components: {
    SearchBox, LegendPanel, DrawingTools
  },
  data(){
    return{
      radius: null
    }
  }
};
</script>
