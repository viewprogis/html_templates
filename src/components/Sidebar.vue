<template>
  <div
    class="sidebar tw-relative tw-z-10 tw-bg-lightgray tw-w-120 tw-min-h-screen tw-inline-flex tw-flex-col"
  >
    <div
      class="tw-flex tw-items-center tw-bg-tertiary tw-px-3 tw-pr-10 tw-py-2 tw-text-white tw-relative"
    >
      <a href="/"><img class="tw-w-32" src="@/assets/img/logo.png"/></a>
      <a href="/" class="flex-equal-col tw-text-center tw-text-xl tw-font-light"
        >West Palm Beach</a
      >
      <a
        href="/"
        class="tw-text-xs tw-border-l tw-border-gray-200 tw-pl-3"
        ><span class="tw-text-gray-400">Zoning Map Viewer 0.2</span></a
      >

      <a
        href="javascript:void(0)"
        id="toggle-sidebar"
        class="tw-absolute tw-right-0 tw--mr-3 tw-flex tw-items-center tw-justify-center tw-w-8 tw-h-8 tw-border tw-border-lightgray tw-rounded-full tw-bg-tertiary"
        ><i class="fas fa-chevron-left"></i
      ></a>
    </div>
    <div class="tw-flex tw-flex-grow">
      <!-- Nav Items -->
      <div
        id="nav"
        class="tw-flex tw-flex-col tw-flex-none tw-p-3 tw-border-r tw-border-gray-300"
      >
        <router-link
          to="/legend"
          class="tw-block tw-text-center tw-uppercase tw-text-xs tw-mt-2 tw-h-20"
          ><i class="fab fa-buffer tw-text-2xl tw-mb-2"></i
          ><br />Legend</router-link
        >
        <router-link
          to="/draw"
          class="tw-block tw-text-center tw-uppercase tw-text-xs tw-h-20"
          ><i class="fas fa-pencil-alt tw-text-2xl tw-mb-2"></i
          ><br />Draw</router-link
        >
        <router-link
          to="/measure"
          class="tw-block tw-text-center tw-uppercase tw-text-xs tw-h-20"
          ><i class="fas fa-arrows-alt-h tw-text-2xl tw-mb-2"></i
          ><br />Measure</router-link
        >
        <router-link
          to="/buffer"
          class="tw-group tw-block tw-text-center tw-uppercase tw-text-xs tw-h-20"
          >
          <i class="fas fa-circle-notch tw-text-2xl tw-mb-2"></i>
          <!--<img class="non-active mx-auto tw-mb-3 group-hover:tw-hidden" src="@/assets/img/buffer_spinner.svg"/>
          <img class="active mx-auto tw-mb-3 tw-hidden group-hover:tw-block" src="@/assets/img/buffer_spinner_active.svg"/>--><br/>Buffer</router-link
        >
        <router-link
          to="/address-mapping"
          class="tw-block tw-text-center tw-uppercase tw-text-xs tw-h-20"
          ><i class="fas fa-cloud-upload-alt tw-text-2xl tw-mb-2"></i
          ><br />Address<br />Mapping</router-link
        >
        <router-link
          to="/print"
          class="tw-block tw-text-center tw-uppercase tw-text-xs tw-h-20"
          ><i class="material-icons tw-text-2xl tw-mb-2">print</i
          ><br />Print</router-link
        >
        <router-link
          to="/calendar"
          class="tw-block tw-text-center tw-uppercase tw-text-xs tw-h-20"
          ><i class="far fa-calendar tw-text-2xl tw-mb-2"></i
          ><br />Calendar</router-link
        >
        <router-link
          to="/drop-pin"
          class="tw-group tw-block tw-text-center tw-uppercase tw-text-xs tw-h-20"
          >
          <i class="fas fa-map-marker-alt tw-text-2xl tw-mb-2"></i>
          <!--<img class="non-active mx-auto tw-mb-1 group-hover:tw-hidden" src="@/assets/img/pin_drop.svg"/>
          <img class="active mx-auto tw-mb-1 tw-hidden group-hover:tw-block" src="@/assets/img/pin_drop_active.svg"/>--><br/>Drop<br />Pin</router-link
        >
        <router-link
          to="/project-info"
          class="tw-group tw-block tw-text-center tw-uppercase tw-text-xs tw-h-20"
          >
          <i class="fas fa-info-circle tw-text-2xl tw-mb-2"></i>
          <!--<img class="non-active mx-auto tw-mb-1 group-hover:tw-hidden" src="@/assets/img/project_info.svg"/>
          <img class="active mx-auto tw-mb-1 tw-hidden group-hover:tw-block" src="@/assets/img/project_info_active.svg"/>--><br/>Project<br />Info</router-link
        >
        <div class="tw-flex-grow"></div>
        <router-link
          to="/settings"
          class="tw-block tw-text-center tw-uppercase tw-text-xs"
          >
          <i class="fas fa-cog tw-text-2xl tw-mb-2"></i>
          </router-link>
        
      </div>
      <div class="tw-flex-grow tw-p-3">
        <component :is="currentSidebar" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sidebar",
  props: {
    currentSidebar: {
      type: [String, Object],
      default: "div"
    }
  }
};
</script>
<style scoped lang="scss"></style>
