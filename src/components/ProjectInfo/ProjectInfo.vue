<template>
  <div class="tw-flex tw-flex-col tw-min-h-full">
    <!-- Search Box -->
    <search-box></search-box>

    <!-- Project Info -->
    <div class="tw-flex tw-items-center tw-mt-6 tw-py-2 tw-px-3">
      <div class="tw-flex-grow tw-flex tw-items-center tw-font-semibold tw-text-lg">
        <i class="fas fa-info-circle tw-text-2xl tw-mr-2"></i> Project Info
      </div>
      <i class="fas fa-info-circle tw-text-2xl tw-flex-none"></i>
    </div>

    <!-- Information -->
    <div class="tw-bg-white tw-rounded tw-p-3 tw-mt-3">
      <a
        href="javascript:void(0)"
        class="tw-flex tw-items-center"
        ><i
          class="fas fa-chevron-down tw-flex tw-items-center tw-justify-center tw-w-5 tw-h-5 tw-rounded-full tw-bg-tertiary tw-text-white tw-text-xs tw-mr-2"
        ></i>
        <span class="tw-text-tertiary">Information</span></a
      >

      <div class="tw-mt-4 tw-text-sm">
        <p>
          The TxDOT El Paso District is developing a Corridor Plan for 142 miles of US 67, from I-10 west of Fort Stockton to the Presidio/Ojinaga Port of Entry on the U.S./Mexico border. US 67 provides access to the towns of Marfa, Alpine, Presidio and surrounding communities, as well as Big Bend National Park, Sul Ross State University, the Marfa Lights, Big Bend Ranch State Park, Fort Leaton State Park, and Fort Davis attractions. It serves multiple communities with diverse needs and priorities. This rural area has experienced signficant growth in recent years, and TxDOT is undertaking a corridor study to help determine the current and future transportation needs to best serve the communities along US 67.
        </p>

        <ul>
          <li class="mb-1"><a href="javascript:void(0)" class="hover:tw-underline"><span class="tw-text-tertiary">Presentation from April 4 Workgroup meeting</span></a></li>
          <li class="mb-1"><a href="javascript:void(0)" class="hover:tw-underline"><span class="tw-text-tertiary">Comment Sheet from April 4 Workgroup meeting</span></a></li>
          <li class="mb-1"><a href="javascript:void(0)" class="hover:tw-underline"><span class="tw-text-tertiary">Online Engagement Instructions</span></a></li>
          <li class="mb-1"><a href="javascript:void(0)" class="hover:tw-underline"><span class="tw-text-tertiary">Fact Sheet</span></a></li>
          <li class="mb-1"><a href="javascript:void(0)" class="hover:tw-underline"><span class="tw-text-tertiary">Study Location Map</span></a></li>
          <li class="mb-1"><a href="javascript:void(0)" class="hover:tw-underline"><span class="tw-text-tertiary">US 67 GIS Viewer for the Project Study</span></a></li>
          <li class="mb-1"><a href="javascript:void(0)" class="hover:tw-underline"><span class="tw-text-tertiary">US 67 Mindmixer; Community Outreach Site</span></a></li>
          <li class="mb-1"><a href="javascript:void(0)" class="hover:tw-underline"><span class="tw-text-tertiary">US 67 Traffic Study – Press release (English)</span></a></li>
          <li class="mb-1"><a href="javascript:void(0)" class="hover:tw-underline"><span class="tw-text-tertiary">US 67 Traffic Study – Press release (Spanish)</span></a></li>
          <li class="mb-1"><a href="javascript:void(0)" class="hover:tw-underline"><span class="tw-text-tertiary">Fact Sheet (Spanish)</span></a></li>
        </ul>
        
      </div>
    </div>

    <!-- Contact Information -->
    <div class="tw-bg-white tw-rounded tw-p-3 tw-mt-3">
      <a
        href="javascript:void(0)"
        class="tw-flex tw-items-center"
        ><i
          class="fas fa-chevron-down tw-flex tw-items-center tw-justify-center tw-w-5 tw-h-5 tw-rounded-full tw-bg-tertiary tw-text-white tw-text-xs tw-mr-2"
        ></i>
        <span class="tw-text-tertiary">Contact Information</span></a
      >

      <div class="tw-mt-4">
        <p class="tw-text-sm">TxDOT El Paso District 13301 Gateway Blvd. W. El Paso, TX 79928-5410 <a herf="tel:9157904200">(915) 790-4200</a>
        <br/>
        <br/>
        <a href="javascript:void(0)"><span class="tw-text-tertiary tw-underline">Contact Us Form</span></a></p>

      </div>
    </div>
  </div>
</template>

<script>
import SearchBox from "@/components/SearchBox.vue";

export default {
  name: "projectinfo",
  components: {
    SearchBox
  }
};
</script>
