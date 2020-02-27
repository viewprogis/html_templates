<template>
  <div
    class="sidebar tw-relative tw-z-20 tw-bg-lightgray tw-inline-flex tw-flex-col tw-min-h-screen"
    id="sidebar"
  >
    <a href="javascript:void(0)" id="toggle-sidebar" class="toggle-sidebar"></a>

    <div
      class="tw-flex tw-items-center tw-bg-tertiary tw-px-3 tw-pr-10 tw-py-2 tw-text-white tw-relative"
      id="logoComponentsDiv"
    >
      <a href="/"><img class="tw-w-24" src="@/assets/img/logo.png"/></a>
      <a href="/" class="flex-equal-col tw-text-center tw-text-lg"
        >West Palm Beach 0.1</a
      >
      <a
        href="/"
        class="tw-text-xs tw-border-l tw-border-gray-200 tw-pl-3"
        id="zoning-map-viewer"
        ><span class="tw-text-gray-500 hover:tw-text-gray-300"
          >Zoning Map Viewer</span
        ></a
      >
    </div>
    <div class="tw-flex tw-flex-grow tw-flex-grow sidebar-content">
      <!-- Nav Items -->
      <div
        id="nav"
        class="tw-flex tw-flex-col tw-flex-none tw-py-3 tw-border-r tw-border-gray-300"
      >
        <router-link
          to="/legend"
          class="tw-block tw-text-center tw-uppercase tw-text-xs tw-mt-2 tw-mb-6"
          ><i class="fab fa-buffer tw-text-2xl tw-mb-2"></i
          ><br />Legend</router-link
        >
        <router-link
          to="/draw"
          class="tw-block tw-text-center tw-uppercase tw-text-xs tw-mb-6"
        >
          <img
            src="@/assets/img/icon_draw.svg"
            class="tw-mb-3 tw-inline-block"
          />
          <img
            src="@/assets/img/icon_draw_active.svg"
            class="tw-mb-3 tw-inline-block active"
          />
          <img
            src="@/assets/img/icon_draw_white.svg"
            class="tw-mb-3 tw-inline-block invert"
          />
          <br />Draw</router-link
        >
        <router-link
          to="/measure"
          class="tw-block tw-text-center tw-uppercase tw-text-xs tw-mb-6"
        >
          <img
            src="@/assets/img/icon_measure.svg"
            class="tw-mb-4 tw-inline-block"
          />
          <img
            src="@/assets/img/icon_measure_active.svg"
            class="tw-mb-4 tw-inline-block active"
          />
          <img
            src="@/assets/img/icon_measure_white.svg"
            class="tw-mb-4 tw-inline-block invert"
          />
          <br />Measure</router-link
        >
        <router-link
          to="/buffer"
          class="tw-group tw-block tw-text-center tw-uppercase tw-text-xs tw-mb-6"
        >
          <img
            src="@/assets/img/icon_buffer.svg"
            class="tw-mb-3 tw-inline-block"
          />
          <img
            src="@/assets/img/icon_buffer_active.svg"
            class="tw-mb-3 tw-inline-block active"
          />
          <img
            src="@/assets/img/icon_buffer_white.svg"
            class="tw-mb-3 tw-inline-block invert"
          />
          <br />Buffer</router-link
        >
        <router-link
          to="/address-mapping"
          class="tw-block tw-text-center tw-uppercase tw-text-xs tw-mb-6"
          ><i class="fas fa-cloud-upload-alt tw-text-2xl tw-mb-2"></i
          ><br />Address<br />Mapping</router-link
        >
        <router-link
          to="/print"
          class="tw-block tw-text-center tw-uppercase tw-text-xs tw-mb-6"
          ><i class="material-icons tw-text-2xl tw-mb-3">print</i
          ><br />Print</router-link
        >
        <router-link
          to="/calendar"
          class="tw-block tw-text-center tw-uppercase tw-text-xs tw-mb-6"
        >
          <img
            src="@/assets/img/icon_calendar.svg"
            class="tw-mb-4 tw-inline-block"
          />
          <img
            src="@/assets/img/icon_calendar_active.svg"
            class="tw-mb-4 tw-inline-block active"
          />
          <img
            src="@/assets/img/icon_calendar_white.svg"
            class="tw-mb-4 tw-inline-block invert"
          />
          <br />Calendar</router-link
        >
        <router-link
          to="/drop-pin"
          class="tw-group tw-block tw-text-center tw-uppercase tw-text-xs tw-mb-6"
        >
          <img
            src="@/assets/img/icon_pindrop.svg"
            class="tw-mb-2 tw-inline-block"
          />
          <img
            src="@/assets/img/icon_pindrop_active.svg"
            class="tw-mb-2 tw-inline-block active"
          />
          <img
            src="@/assets/img/icon_pindrop_white.svg"
            class="tw-mb-2 tw-inline-block invert"
          />
          <br />Drop<br />Pin</router-link
        >
        <router-link
          to="/project-info"
          class="tw-group tw-block tw-text-center tw-uppercase tw-text-xs tw-mb-6"
        >
          <img
            src="@/assets/img/icon_info.svg"
            class="tw-mb-2 tw-inline-block"
          />
          <img
            src="@/assets/img/icon_info_active.svg"
            class="tw-mb-2 tw-inline-block active"
          />
          <img
            src="@/assets/img/icon_info_white.svg"
            class="tw-mb-2 tw-inline-block invert"
          />
          <br />Project<br />Info</router-link
        >
        <div
          class="tw-mx-auto tw-w-4/5 tw-border-t tw-border-gray tw-mb-6"
        ></div>
        <router-link
          to="/heatmap-analysis"
          class="tw-group tw-block tw-text-center tw-uppercase tw-text-xs tw-mb-6"
        >
          <img
            src="@/assets/img/icon_heatmap.svg"
            class="tw-mb-2 tw-inline-block"
          />
          <img
            src="@/assets/img/icon_heatmap_active.svg"
            class="tw-mb-2 tw-inline-block active"
          />
          <img
            src="@/assets/img/icon_heatmap_white.svg"
            class="tw-mb-2 tw-inline-block invert"
          />
          <br />Heatmap<br />Analysis</router-link
        >
        <router-link
          to="/building-permit"
          class="tw-group tw-block tw-text-center tw-uppercase tw-text-xs tw-mb-6"
        >
          <img
            src="@/assets/img/icon_building.svg"
            class="tw-mb-2 tw-inline-block"
          />
          <img
            src="@/assets/img/icon_building_active.svg"
            class="tw-mb-2 tw-inline-block active"
          />
          <img
            src="@/assets/img/icon_building_white.svg"
            class="tw-mb-2 tw-inline-block invert"
          />
          <br />Building<br />Permit</router-link
        >
        <router-link
          to="/landuse-lookup"
          class="tw-group tw-block tw-text-center tw-uppercase tw-text-xs tw-mb-6"
        >
          <img
            src="@/assets/img/icon_landuse.svg"
            class="tw-mb-2 tw-inline-block"
          />
          <img
            src="@/assets/img/icon_landuse_active.svg"
            class="tw-mb-2 tw-inline-block active"
          />
          <img
            src="@/assets/img/icon_landuse_white.svg"
            class="tw-mb-2 tw-inline-block invert"
          />
          <br />Landuse<br />Lookup</router-link
        >
        <router-link
          to="/mls-listings"
          class="tw-group tw-block tw-text-center tw-uppercase tw-text-xs tw-mb-6"
        >
          <img
            src="@/assets/img/icon_mlslisting.svg"
            class="tw-mb-2 tw-inline-block"
          />
          <img
            src="@/assets/img/icon_mlslisting_active.svg"
            class="tw-mb-2 tw-inline-block active"
          />
          <img
            src="@/assets/img/icon_mlslisting_white.svg"
            class="tw-mb-2 tw-inline-block invert"
          />
          <br />MLS<br />Listings</router-link
        >
        <div class="tw-flex-grow"></div>
        <router-link
          to="/settings"
          class="tw-block tw-text-center tw-uppercase tw-text-xs"
        >
          <i class="fas fa-cog tw-text-2xl tw-mt-10"></i>
        </router-link>
      </div>
      <div class="tw-flex-grow" id="sidebarComponentsDiv">
        <div class="tw-flex tw-flex-col tw-pb-3 tw-h-full">
          <slot />
          <div class="tw-flex-grow tw-px-3 tw-overflow-auto">
            <div class="tw-relative tw-w-full tw-h-full">
              <component :is="currentSidebar" />
            </div>
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
    currentSidebar: {
      type: [String, Object],
      default: "div"
    }
  }
};
</script>
<style scoped lang="scss"></style>
