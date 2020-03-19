<template>
  <div class="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full">
    
    <!-- MLS listing -->
    <div class="panel tw-bg-white tw-rounded active">
      <a
        href="javascript:void(0)"
        class="tw-flex tw-items-center panel-heading"
      >
        <span class="tw-text-tertiary">Show on the map</span></a
      >

      <div class="panel-content tw-mt-4">
        
        <v-switch
            color="bluepurple"
            inset
            hide-details
            label="Property For Sale"
            v-model="isChecked1"
          />
        <v-switch
          color="primary"
          inset
          hide-details
          label="Property For Sale"
          v-model="isChecked2"
        />
        <br/>
      </div>
    </div>

    <!-- Legend -->
    <div class="tw-mt-2"></div>
    <legend-panel />
  </div>
</template>

<script>

export default {
  name: "MLSlistings",
  data(){
    return{
      isChecked1: true,
      isChecked2: true
    }
  }
};
</script>
