<template>
  <div class="sidebar tw-bg-lightgray tw-w-1/3 tw-h-screen tw-flex tw-flex-col">
    <div class="tw-flex tw-items-center tw-bg-tertiary tw-px-3 tw-pr-10 tw-py-2 tw-text-white tw-relative">
      <a href="/"><img class="tw-w-32" src="@/assets/img/logo.png" /></a>
      <a href="/" class="flex-equal-col tw-text-center tw-text-xl tw-font-light">West Palm Beach</a>
      <a href="/" class="tw-text-xs tw-border-l tw-border-gray-200 tw-pl-3 tw-text-gray-400">Zoning Map Viewer</a>

      <a href="javascript:void(0)" id="toggle-sidebar"
        class="tw-absolute tw-right-0 tw--mr-3 tw-flex tw-items-center tw-justify-center tw-w-8 tw-h-8 tw-border tw-border-lightgray tw-rounded-full tw-bg-tertiary"><i class="fas fa-chevron-left"></i></a>
    </div>
    <div class="tw-flex tw-flex-grow">
      <div id="nav" class="tw-flex-none tw-p-3">
        <router-link to="/" class="tw-block tw-text-center tw-uppercase tw-text-xs tw-mb-5"><i class="fas fa-layer-group tw-text-2xl tw-mb-2"></i><br/>Legend</router-link>
        <router-link to="/" class="tw-block tw-text-center tw-uppercase tw-text-xs tw-mb-5"><i class="fas fa-pencil-alt tw-text-2xl tw-mb-2"></i><br/>Draw</router-link>
        <router-link to="/" class="tw-block tw-text-center tw-uppercase tw-text-xs tw-mb-5"><i class="fas fa-arrows-alt-h tw-text-2xl tw-mb-2"></i><br/>Measure</router-link>
        <router-link to="/" class="tw-block tw-text-center tw-uppercase tw-text-xs tw-mb-5"><i class="fas fa-cloud-upload-alt tw-text-2xl tw-mb-2"></i><br/>Address<br/>Mapping</router-link>
        <router-link to="/" class="tw-block tw-text-center tw-uppercase tw-text-xs tw-mb-5"><i class="fas fa-print tw-text-2xl tw-mb-2"></i><br/>Print</router-link>
        <router-link to="/" class="tw-block tw-text-center tw-uppercase tw-text-xs tw-mb-5"><i class="far fa-calendar tw-text-2xl tw-mb-2"></i><br/>Calendar</router-link>
        <router-link to="/" class="tw-block tw-text-center tw-uppercase tw-text-xs tw-mb-5"><i class="fas fa-map-marker-alt tw-text-2xl tw-mb-2"></i><br/>Drop<br/>Pin</router-link>
        <router-link to="/" class="tw-block tw-text-center tw-uppercase tw-text-xs tw-mb-5"><i class="fas fa-info-circle tw-text-2xl tw-mb-2"></i><br/>Project<br/>Info</router-link>
      </div>
      <div class="tw-flex-grow tw-p-3">
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sidebar",
  props: {
    msg: String
  }
};
</script>
<style scoped lang="scss"></style>
