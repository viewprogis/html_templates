<template>
  <div class="sidebar tw-relative tw-z-10 tw-bg-lightgray tw-w-120 tw-min-h-screen tw-flex tw-flex-col">
    <div class="tw-flex tw-items-center tw-bg-tertiary tw-px-3 tw-pr-10 tw-py-2 tw-text-white tw-relative">
      <a href="/"><img class="tw-w-32" src="@/assets/img/logo.png" /></a>
      <a href="/" class="flex-equal-col tw-text-center tw-text-xl tw-font-light">West Palm Beach</a>
      <a href="/" class="tw-text-xs tw-border-l tw-border-gray-200 tw-pl-3 tw-text-gray-400">Zoning Map Viewer</a>

      <a href="javascript:void(0)" id="toggle-sidebar"
        class="tw-absolute tw-right-0 tw--mr-3 tw-flex tw-items-center tw-justify-center tw-w-8 tw-h-8 tw-border tw-border-lightgray tw-rounded-full tw-bg-tertiary"><i class="fas fa-chevron-left"></i></a>
    </div>
    <div class="tw-flex tw-flex-grow">

      <!-- Nav Items -->
      <div id="nav" class="tw-flex tw-flex-col tw-flex-none tw-p-3 tw-border-r tw-border-gray-300">
        <router-link to="/" class="tw-block tw-text-center tw-uppercase tw-text-xs tw-mb-5"><i class="fas fa-layer-group tw-text-2xl tw-mb-2"></i><br/>Legend</router-link>
        <router-link to="/" class="tw-block tw-text-center tw-uppercase tw-text-xs tw-mb-5"><i class="fas fa-pencil-alt tw-text-2xl tw-mb-2"></i><br/>Draw</router-link>
        <router-link to="/" class="tw-block tw-text-center tw-uppercase tw-text-xs tw-mb-5"><i class="fas fa-arrows-alt-h tw-text-2xl tw-mb-2"></i><br/>Measure</router-link>
        <router-link to="/" class="tw-block tw-text-center tw-uppercase tw-text-xs tw-mb-5"><i class="fas fa-cloud-upload-alt tw-text-2xl tw-mb-2"></i><br/>Address<br/>Mapping</router-link>
        <router-link to="/" class="tw-block tw-text-center tw-uppercase tw-text-xs tw-mb-5"><i class="material-icons tw-text-2xl tw-mb-2">print</i><br/>Print</router-link>
        <router-link to="/" class="tw-block tw-text-center tw-uppercase tw-text-xs tw-mb-5"><i class="far fa-calendar tw-text-2xl tw-mb-2"></i><br/>Calendar</router-link>
        <router-link to="/" class="tw-block tw-text-center tw-uppercase tw-text-xs tw-mb-5"><i class="fas fa-map-marker-alt tw-text-2xl tw-mb-2"></i><br/>Drop<br/>Pin</router-link>
        <router-link to="/" class="tw-block tw-text-center tw-uppercase tw-text-xs tw-mb-5"><i class="fas fa-info-circle tw-text-2xl tw-mb-2"></i><br/>Project<br/>Info</router-link>
        <div class="tw-flex-grow"></div>
        <router-link to="/" class="tw-block tw-text-center tw-uppercase tw-text-xs"><i class="fas fa-cog tw-text-2xl tw-mb-2"></i></router-link>
      </div>
      <div class="tw-flex-grow tw-p-3">
        
        <!-- Search Box -->
        <div class="tw-flex tw-items-center tw-bg-white tw-rounded">
          <i class="fas fa-search tw-flex-none tw-opacity-25 tw-px-3"></i>
          <input class="tw-flex-grow tw-bg-transparent tw-border-none tw-appearance-none tw-py-3 tw-px-4 tw-pl-0 tw-text-gray-700 tw-leading-tight focus:tw-outline-none" type="text" placeholder="Search">
        </div>

        <!-- Drop Pin -->
        <div class="tw-flex tw-mt-6 tw-py-2 tw-px-3">
          <div class="tw-flex-grow"><i class="fas fa-map-marker-alt tw-text-xl tw-mr-2"></i> Drop Pin</div>
          <i class="fas fa-info-circle tw-text-2xl tw-flex-none"></i>
        </div>

        <!-- Participate -->
        <div class="tw-bg-white tw-rounded tw-p-3">
          <a href="javascript:void(0)" class="tw-flex tw-items-center tw-text-tertiary tw-mb-4"><i class="fas fa-chevron-down tw-flex tw-items-center tw-justify-center tw-w-5 tw-h-5 tw-rounded-full tw-bg-tertiary tw-text-white tw-text-xs tw-mr-2"></i> Participate</a>

          <p class="tw-text-xl">What are the top safety issues in West Palm Beach?</p>

          <a href="javascript:void(0)" class="tw-flex tw-items-center tw-relative tw-z-10 tw-mt-4 tw-rounded tw-overflow-hidden tw-py-2 tw-px-4 tw-text-sm">
            <div class="tw-absolute tw--z-10 tw-left-0 tw-top-0 tw-w-full tw-h-full tw-bg-tertiary tw-opacity-25"></div>
            <span class="tw-flex-grow">View All Comments</span><i class="fas fa-chevron-right tw-flex tw-items-center tw-justify-center tw-w-5 tw-h-5 tw-rounded-full tw-bg-tertiary tw-text-white tw-text-xs tw-ml-2"></i>
          </a>
        </div>

        <!-- Drop Pin -->
        <div class="tw-bg-white tw-rounded tw-p-3 tw-mt-3">
          <a href="javascript:void(0)" class="tw-flex tw-items-center tw-text-tertiary tw-mb-4"><i class="fas fa-chevron-down tw-flex tw-items-center tw-justify-center tw-w-5 tw-h-5 tw-rounded-full tw-bg-tertiary tw-text-white tw-text-xs tw-mr-2"></i> Drop Pin</a>

          <p class="tw-text-sm">Select the pin below and drop it on the map</p>

          <!-- Tertiary Pin -->
          <div class="tw-flex tw-items-center tw-relative tw-z-10 tw-mt-2 tw-rounded tw-overflow-hidden tw-py-3 tw-px-4 tw-text-sm tw-border-l-4 tw-border-solid tw-border-tertiary">
            <div class="tw-absolute tw--z-10 tw-left-0 tw-top-0 tw-w-full tw-h-full tw-bg-tertiary tw-opacity-25"></div>
            <div class="tw-flex-grow">
              <b class="tw-text-base">Traffic Issues</b>
              <br/>
              86 active pins
            </div>
            <i class="fas fa-map-marker-alt tw-text-tertiary tw-text-xl tw-ml-2"></i>
          </div>

          <!-- Yellow Pin -->
          <div class="tw-flex tw-items-center tw-relative tw-z-10 tw-mt-2 tw-rounded tw-overflow-hidden tw-py-3 tw-px-4 tw-text-sm tw-border-l-4 tw-border-solid tw-border-secondary">
            <div class="tw-absolute tw--z-10 tw-left-0 tw-top-0 tw-w-full tw-h-full tw-bg-secondary tw-opacity-25"></div>
            <div class="tw-flex-grow">
              <b class="tw-text-base">Traffic Issues</b>
              <br/>
              86 active pins
            </div>
            <i class="fas fa-map-marker-alt tw-text-secondary tw-text-xl tw-ml-2"></i>
          </div>

          <!-- Red Pin -->
          <div class="tw-flex tw-items-center tw-relative tw-z-10 tw-mt-2 tw-rounded tw-overflow-hidden tw-py-3 tw-px-4 tw-text-sm tw-border-l-4 tw-border-solid tw-border-red">
            <div class="tw-absolute tw--z-10 tw-left-0 tw-top-0 tw-w-full tw-h-full tw-bg-red tw-opacity-25"></div>
            <div class="tw-flex-grow">
              <b class="tw-text-base">Traffic Issues</b>
              <br/>
              86 active pins
            </div>
            <i class="fas fa-map-marker-alt tw-text-red tw-text-xl tw-ml-2"></i>
          </div>

          <!-- Primary Pin -->
          <div class="tw-flex tw-items-center tw-relative tw-z-10 tw-mt-2 tw-rounded tw-overflow-hidden tw-py-3 tw-px-4 tw-text-sm tw-border-l-4 tw-border-solid tw-border-primary">
            <div class="tw-absolute tw--z-10 tw-left-0 tw-top-0 tw-w-full tw-h-full tw-bg-primary tw-opacity-25"></div>
            <div class="tw-flex-grow">
              <b class="tw-text-base">Traffic Issues</b>
              <br/>
              86 active pins
            </div>
            <i class="fas fa-map-marker-alt tw-text-primary tw-text-xl tw-ml-2"></i>
          </div>

          <!-- Blue Pin -->
          <div class="tw-flex tw-items-center tw-relative tw-z-10 tw-mt-2 tw-rounded tw-overflow-hidden tw-py-3 tw-px-4 tw-text-sm tw-border-l-4 tw-border-solid tw-border-blue">
            <div class="tw-absolute tw--z-10 tw-left-0 tw-top-0 tw-w-full tw-h-full tw-bg-blue tw-opacity-25"></div>
            <div class="tw-flex-grow">
              <b class="tw-text-base">Traffic Issues</b>
              <br/>
              86 active pins
            </div>
            <i class="fas fa-map-marker-alt tw-text-blue tw-text-xl tw-ml-2"></i>
          </div>

        </div>


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
