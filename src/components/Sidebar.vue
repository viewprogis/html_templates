<template>
  <div
    class="sidebar tw-relative tw-z-20 tw-text-inherit xs:tw-bg-lightgray tw-inline-flex tw-flex-col xs:tw-w-full xs:tw-min-h-screen"
    id="sidebar"
  >

    <!-- Sidebar Activate/inActivate - Desktop -->
    <a href="javascript:void(0)" class="toggle-sidebar"></a>

    <!-- Sidebar Activate/inActivate - Tablet -->
    <div class="tablet-menu-btn-wrap tw-fixed tw-bottom-0 tw-left-0 tw-px-4 tw-py-4 tw-z-10 tw-hidden xs:tw-block md:tw-hidden">
      <a href="javascript:void(0)" class="tablet-menu-btn tw-flex md:tw-hidden tw-bg-white tw-w-12 tw-h-12 tw-rounded-sm tw-items-center tw-justify-center"><img src="@/assets/img/mobile_menu.svg"/></a>
    </div>

    <!-- Toolbox Activate/inActivate - Mobile -->
    <div class="mobile-toolbox-btn-wrap tw-fixed tw-bottom-0 tw-left-0 tw-px-4 tw-py-4 tw-z-10 tw-block xs:tw-hidden">
      <a href="javascript:void(0)" class="mobile-toolbox-btn tw-flex md:tw-hidden tw-bg-white tw-w-12 tw-h-12 tw-rounded-sm tw-items-center tw-justify-center"><img src="@/assets/img/mobile_menu.svg"/></a>
    </div>

    <div
      class="tw-flex tw-items-center tw-bg-tertiary tw-px-3 xs:tw-pr-10 xs:tw-py-2 tw-text-white xs:tw-relative xs:tw-w-auto tw-h-16 xs:tw-h-auto tw-fixed tw-top-0 tw-left-0 tw-w-full"
      id="logoComponentsDiv"
    >
      <a href="/"><img class="tw-w-24" src="@/assets/img/logo.png"/></a>
      <a href="/" class="flex-equal-col tw-text-center tw-text-lg"
        >West Palm Beach</a
      >
      <a
        href="/"
        class="tw-text-xs xs:tw-border-l tw-border-gray-200 xs:tw-pl-3 tw-invisible xs:tw-visible"
        id="zoning-map-viewer"
        ><span class="tw-text-gray-500 hover:tw-text-gray-300"
          >Zoning Map Viewer</span
        ></a
      >
    </div>
    <div class="sidebar-content tw-flex tw-flex-grow tw-flex-grow tw-flex-col xs:tw-flex-row">

      <!-- Nav Items -->
      <div
        id="nav"
        class="tw-flex tw-flex-wrap tw-flex-col tw-flex-none 
        tw-fixed tw-bottom-0 tw-left-0 tw-w-full xs:tw-w-auto tw-rounded-tl-lg tw-rounded-tr-lg xs:tw-rounded-none tw-px-4 tw-py-8 xss:tw-px-8 xs:tw-static xs:tw-p-0 tw-bg-white xs:tw-bg-transparent"
      >
        <!-- Mobile Title -->
        <div class="tw-relative tw-text-lg tw-font-bold tw-text-center tw-mb-10 xs:tw-hidden">
          Toolbox
          <a href="javascript:void(0)" class="mobile-toolbox-btn tw-absolute tw-right-0"><span class="tw-text-tertiary">Close</span></a>
        </div>
        
        <div class="nav-links tw-flex tw-flex-wrap xs:tw-flex-col tw-flex-none xs:tw-pt-3 xs:tw-border-r xs:tw-border-gray-300">
          <router-link
            to="/legend"
            class="tw-block tw-text-center tw-px-2 xs:tw-px-0 xs:tw-mx-auto tw-w-16 xs:tw-w-auto tw-uppercase tw-text-xs xs:tw-mt-2 tw-mb-6"
            ><span class="tw-text-inherit tw-bg-lightgray xs:tw-bg-transparent tw-w-12 tw-h-12 tw-mx-auto tw-mb-2 xs:tw-mb-0 tw-p-3 xs:tw-p-0 tw-flex tw-items-center tw-justify-center tw-rounded-full xs:tw-rounded-none xs:tw-block xs:tw-w-auto xs:tw-h-auto"><i class="fab fa-buffer tw-text-2xl xs:tw-mb-2"></i
            ></span>Legend</router-link
          >
          <router-link
            to="/draw"
            class="tw-block tw-text-center tw-px-2 xs:tw-px-0 xs:tw-mx-auto tw-w-16 xs:tw-w-auto tw-uppercase tw-text-xs tw-mb-6"
          >
            <span class="tw-text-inherit tw-bg-lightgray xs:tw-bg-transparent tw-w-12 tw-h-12 tw-mx-auto tw-mb-2 xs:tw-mb-0 tw-p-3 xs:tw-p-0 tw-flex tw-items-center tw-justify-center tw-rounded-full xs:tw-rounded-none xs:tw-block xs:tw-w-auto xs:tw-h-auto">
            <img
              src="@/assets/img/icon_draw.svg"
              class="xs:tw-mb-3 tw-inline-block"
            />
            <img
              src="@/assets/img/icon_draw_active.svg"
              class="xs:tw-mb-3 tw-inline-block active"
            />
            <img
              src="@/assets/img/icon_draw_white.svg"
              class="xs:tw-mb-3 tw-inline-block invert"
            />
            </span>
            Draw</router-link
          >
          <router-link
            to="/measure"
            class="tw-block tw-text-center tw-px-2 xs:tw-px-0 xs:tw-mx-auto tw-w-16 xs:tw-w-auto tw-uppercase tw-text-xs tw-mb-6"
          >
            <span class="tw-text-inherit tw-bg-lightgray xs:tw-bg-transparent tw-w-12 tw-h-12 tw-mx-auto tw-mb-2 xs:tw-mb-0 tw-p-3 xs:tw-p-0 tw-flex tw-items-center tw-justify-center tw-rounded-full xs:tw-rounded-none xs:tw-block xs:tw-w-auto xs:tw-h-auto">
            <img
              src="@/assets/img/icon_measure.svg"
              class="xs:tw-mb-4 tw-inline-block"
            />
            <img
              src="@/assets/img/icon_measure_active.svg"
              class="xs:tw-mb-4 tw-inline-block active"
            />
            <img
              src="@/assets/img/icon_measure_white.svg"
              class="xs:tw-mb-4 tw-inline-block invert"
            />
            </span>
            Measure</router-link
          >
          <router-link
            to="/buffer"
            class="tw-group tw-block tw-text-center tw-px-2 xs:tw-px-0 xs:tw-mx-auto tw-w-16 xs:tw-w-auto tw-uppercase tw-text-xs tw-mb-6"
          >
            <span class="tw-text-inherit tw-bg-lightgray xs:tw-bg-transparent tw-w-12 tw-h-12 tw-mx-auto tw-mb-2 xs:tw-mb-0 tw-p-3 xs:tw-p-0 tw-flex tw-items-center tw-justify-center tw-rounded-full xs:tw-rounded-none xs:tw-block xs:tw-w-auto xs:tw-h-auto">
            <img
              src="@/assets/img/icon_buffer.svg"
              class="xs:tw-mb-3 tw-inline-block"
            />
            <img
              src="@/assets/img/icon_buffer_active.svg"
              class="xs:tw-mb-3 tw-inline-block active"
            />
            <img
              src="@/assets/img/icon_buffer_white.svg"
              class="xs:tw-mb-3 tw-inline-block invert"
            />
            </span>
            Buffer</router-link
          >
          <router-link
            to="/address-mapping"
            class="tw-block tw-text-center tw-px-2 xs:tw-px-0 xs:tw-mx-auto tw-w-16 xs:tw-w-auto tw-uppercase tw-text-xs tw-mb-6"
            >
            <span class="tw-text-inherit tw-bg-lightgray xs:tw-bg-transparent tw-w-12 tw-h-12 tw-mx-auto tw-mb-2 xs:tw-mb-0 tw-p-3 xs:tw-p-0 tw-flex tw-items-center tw-justify-center tw-rounded-full xs:tw-rounded-none xs:tw-block xs:tw-w-auto xs:tw-h-auto">
            <i class="fas fa-cloud-upload-alt tw-text-xl xs:tw-text-2xl xs:tw-mb-2"></i
            >
            </span>Address<br />Mapping</router-link
          >
          <router-link
            to="/print"
            class="tw-block tw-text-center tw-px-2 xs:tw-px-0 xs:tw-mx-auto tw-w-16 xs:tw-w-auto tw-uppercase tw-text-xs tw-mb-6"
            ><span class="tw-text-inherit tw-bg-lightgray xs:tw-bg-transparent tw-w-12 tw-h-12 tw-mx-auto tw-mb-2 xs:tw-mb-0 tw-p-3 xs:tw-p-0 tw-flex tw-items-center tw-justify-center tw-rounded-full xs:tw-rounded-none xs:tw-block xs:tw-w-auto xs:tw-h-auto"><i class="material-icons tw-text-2xl xs:tw-mb-3">print</i
            ></span>Print</router-link
          >
          <div
            class="tw-hidden xs:tw-block tw-mx-auto tw-w-4/5 tw-border-t tw-border-gray tw-mb-6"
          ></div>
          <router-link
            to="/calendar"
            class="tw-block tw-text-center tw-px-2 xs:tw-px-0 xs:tw-mx-auto tw-w-16 xs:tw-w-auto tw-uppercase tw-text-xs tw-mb-6"
          >
            <span class="tw-text-inherit tw-bg-lightgray xs:tw-bg-transparent tw-w-12 tw-h-12 tw-mx-auto tw-mb-2 xs:tw-mb-0 tw-p-3 xs:tw-p-0 tw-flex tw-items-center tw-justify-center tw-rounded-full xs:tw-rounded-none xs:tw-block xs:tw-w-auto xs:tw-h-auto">
            <img
              src="@/assets/img/icon_calendar.svg"
              class="xs:tw-mb-4 tw-inline-block"
            />
            <img
              src="@/assets/img/icon_calendar_active.svg"
              class="xs:tw-mb-4 tw-inline-block active"
            />
            <img
              src="@/assets/img/icon_calendar_white.svg"
              class="xs:tw-mb-4 tw-inline-block invert"
            />
            </span>
            Calendar</router-link
          >
          <router-link
            to="/drop-pin"
            class="tw-group tw-block tw-text-center tw-px-2 xs:tw-px-0 xs:tw-mx-auto tw-w-16 xs:tw-w-auto tw-uppercase tw-text-xs tw-mb-6"
          >
            <span class="tw-text-inherit tw-bg-lightgray xs:tw-bg-transparent tw-w-12 tw-h-12 tw-mx-auto tw-mb-2 xs:tw-mb-0 tw-p-4 xs:tw-p-0 tw-flex tw-items-center tw-justify-center tw-rounded-full xs:tw-rounded-none xs:tw-block xs:tw-w-auto xs:tw-h-auto">
            <img
              src="@/assets/img/icon_pindrop.svg"
              class="xs:tw-mb-2 tw-inline-block"
            />
            <img
              src="@/assets/img/icon_pindrop_active.svg"
              class="xs:tw-mb-2 tw-inline-block active"
            />
            <img
              src="@/assets/img/icon_pindrop_white.svg"
              class="xs:tw-mb-2 tw-inline-block invert"
            />
            </span>
            Drop<br />Pin</router-link
          >
          <router-link
            to="/project-info"
            class="tw-group tw-block tw-text-center tw-px-2 xs:tw-px-0 xs:tw-mx-auto tw-w-16 xs:tw-w-auto tw-uppercase tw-text-xs tw-mb-6"
          >
            <span class="tw-text-inherit tw-bg-lightgray xs:tw-bg-transparent tw-w-12 tw-h-12 tw-mx-auto tw-mb-2 xs:tw-mb-0 tw-p-3 xs:tw-p-0 tw-flex tw-items-center tw-justify-center tw-rounded-full xs:tw-rounded-none xs:tw-block xs:tw-w-auto xs:tw-h-auto">
            <img
              src="@/assets/img/icon_info.svg"
              class="xs:tw-mb-2 tw-inline-block"
            />
            <img
              src="@/assets/img/icon_info_active.svg"
              class="xs:tw-mb-2 tw-inline-block active"
            />
            <img
              src="@/assets/img/icon_info_white.svg"
              class="xs:tw-mb-2 tw-inline-block invert"
            />
            </span>
            Project<br />Info</router-link
          >
          <router-link
            to="/heatmap-analysis"
            class="tw-group tw-block tw-text-center tw-px-2 xs:tw-px-0 xs:tw-mx-auto tw-w-16 xs:tw-w-auto tw-uppercase tw-text-xs tw-mb-6"
          >
            <span class="tw-text-inherit tw-bg-lightgray xs:tw-bg-transparent tw-w-12 tw-h-12 tw-mx-auto tw-mb-2 xs:tw-mb-0 tw-p-3 xs:tw-p-0 tw-flex tw-items-center tw-justify-center tw-rounded-full xs:tw-rounded-none xs:tw-block xs:tw-w-auto xs:tw-h-auto">
            <img
              src="@/assets/img/icon_heatmap.svg"
              class="xs:tw-mb-2 tw-inline-block"
            />
            <img
              src="@/assets/img/icon_heatmap_active.svg"
              class="xs:tw-mb-2 tw-inline-block active"
            />
            <img
              src="@/assets/img/icon_heatmap_white.svg"
              class="xs:tw-mb-2 tw-inline-block invert"
            />
            </span>
            Heatmap<br />Analysis</router-link
          >
          <router-link
            to="/building-permit"
            class="tw-group tw-block tw-text-center tw-px-2 xs:tw-px-0 xs:tw-mx-auto tw-w-16 xs:tw-w-auto tw-uppercase tw-text-xs tw-mb-6"
          >
            <span class="tw-text-inherit tw-bg-lightgray xs:tw-bg-transparent tw-w-12 tw-h-12 tw-mx-auto tw-mb-2 xs:tw-mb-0 tw-p-3 xs:tw-p-0 tw-flex tw-items-center tw-justify-center tw-rounded-full xs:tw-rounded-none xs:tw-block xs:tw-w-auto xs:tw-h-auto">
            <img
              src="@/assets/img/icon_building.svg"
              class="xs:tw-mb-2 tw-inline-block"
            />
            <img
              src="@/assets/img/icon_building_active.svg"
              class="xs:tw-mb-2 tw-inline-block active"
            />
            <img
              src="@/assets/img/icon_building_white.svg"
              class="xs:tw-mb-2 tw-inline-block invert"
            />
            </span>
            Building<br />Permit</router-link
          >
          <router-link
            to="/landuse-lookup"
            class="tw-group tw-block tw-text-center tw-px-2 xs:tw-px-0 xs:tw-mx-auto tw-w-16 xs:tw-w-auto tw-uppercase tw-text-xs tw-mb-6"
          >
            <span class="tw-text-inherit tw-bg-lightgray xs:tw-bg-transparent tw-w-12 tw-h-12 tw-mx-auto tw-mb-2 xs:tw-mb-0 tw-p-3 xs:tw-p-0 tw-flex tw-items-center tw-justify-center tw-rounded-full xs:tw-rounded-none xs:tw-block xs:tw-w-auto xs:tw-h-auto">
            <img
              src="@/assets/img/icon_landuse.svg"
              class="xs:tw-mb-2 tw-inline-block"
            />
            <img
              src="@/assets/img/icon_landuse_active.svg"
              class="xs:tw-mb-2 tw-inline-block active"
            />
            <img
              src="@/assets/img/icon_landuse_white.svg"
              class="xs:tw-mb-2 tw-inline-block invert"
            />
            </span>
            Landuse<br />Lookup</router-link
          >
          <router-link
            to="/mls-listings"
            class="tw-group tw-block tw-text-center tw-px-2 xs:tw-px-0 xs:tw-mx-auto tw-w-16 xs:tw-w-auto tw-uppercase tw-text-xs tw-mb-6"
          >
            <span class="tw-text-inherit tw-bg-lightgray xs:tw-bg-transparent tw-w-12 tw-h-12 tw-mx-auto tw-mb-2 xs:tw-mb-0 tw-p-3 xs:tw-p-0 tw-flex tw-items-center tw-justify-center tw-rounded-full xs:tw-rounded-none xs:tw-block xs:tw-w-auto xs:tw-h-auto">
            <img
              src="@/assets/img/icon_mlslisting.svg"
              class="xs:tw-mb-2 tw-inline-block"
            />
            <img
              src="@/assets/img/icon_mlslisting_active.svg"
              class="xs:tw-mb-2 tw-inline-block active"
            />
            <img
              src="@/assets/img/icon_mlslisting_white.svg"
              class="xs:tw-mb-2 tw-inline-block invert"
            />
            </span>
            MLS<br />Listings</router-link
          >
          <div class="tw-flex-grow tw-hidden xs:tw-flex"></div>
          <router-link
            to="/settings"
            class="tw-block tw-text-center tw-px-2 xs:tw-px-0 xs:tw-px-0 xs:tw-mx-auto tw-w-16 xs:tw-w-auto tw-uppercase tw-text-xs tw-mb-6"
          >
            <span class="tw-text-inherit tw-border tw-border-gray-500 xs:tw-border-none xs:tw-bg-transparent tw-w-12 tw-h-12 tw-mx-auto tw-mb-2 xs:tw-mb-0 tw-p-3 xs:tw-p-0 tw-flex tw-items-center tw-justify-center tw-rounded-full xs:tw-rounded-none xs:tw-block xs:tw-w-auto xs:tw-h-auto">
            <i class="fas fa-cog tw-text-xl xs:tw-text-2xl xs:tw-mt-10"></i>
            </span>
            <div class="tw-block xs:tw-hidden">Settings</div>
          </router-link>
          <router-link
            to="/search"
            class="tw-group tw-block xs:tw-hidden tw-text-center tw-px-2 xs:tw-px-0 xs:tw-mx-auto tw-w-16 xs:tw-w-auto tw-uppercase tw-text-xs tw-mb-6"
          >
            <span class="tw-text-inherit tw-border tw-border-gray-500 xs:tw-border-none xs:tw-bg-transparent tw-w-12 tw-h-12 tw-mx-auto tw-mb-2 xs:tw-mb-0 tw-p-3 xs:tw-p-0 tw-flex tw-items-center tw-justify-center tw-rounded-full xs:tw-rounded-none xs:tw-block xs:tw-w-auto xs:tw-h-auto">
            <img
              src="@/assets/img/icon_mobile_search.svg"
              class="xs:tw-mb-2 tw-inline-block"
            />
            <img
              src="@/assets/img/icon_mobile_search_active.svg"
              class="xs:tw-mb-2 tw-inline-block active"
            />
            <img
              src="@/assets/img/icon_mobile_search_white.svg"
              class="xs:tw-mb-2 tw-inline-block invert"
            />
            </span>
            Search</router-link
          >
        </div>
      </div>
      <div class="tw-flex-grow
      tw-fixed tw-bottom-0 tw-left-0 tw-w-full xs:tw-w-auto tw-rounded-tl-lg tw-rounded-tr-lg xs:tw-rounded-none tw-px-2 tw-pt-8 xs:tw-static xs:tw-p-0 tw-bg-lightgray xs:tw-bg-transparent" id="sidebarComponentsDiv">
        <div class="tw-relative xs:tw-static tw-flex tw-flex-col xs:tw-pb-3 tw-h-full">
          <a href="javascript:void(0)" class="mobile-menu-btn tw-absolute tw-left-0 tw-mt-2 tw-ml-6 tw-font-bold tw-text-lg xs:tw-hidden"><img src="@/assets/img/mobile_menu_tertiary.svg"/></a>
          <a href="javascript:void(0)" class="mobile-toolbox-active tw-absolute tw-right-0 tw-mt-2 tw-mr-6 tw-font-bold tw-text-lg xs:tw-hidden"><span class="tw-text-tertiary">Close</span></a>
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
