<template>
  <v-dialog v-model="dialog" persistent max-width="900">
    <div class="tw-bg-white tw-p-6">
      <div class="tw-relative tw-min-h-80">
        <button
          type="button"
          @click="updateValue(false)"
          class="tw-text-tertiary tw-absolute tw-top-0 tw-right-0 tw-font-bold"
        >
          Close
        </button>

        <h1 class="tw-text-2xl tw-mb-2">Video</h1>

        <div id="section-1" class="help-video active">
          <div class="tw-my-5 video-wrap">
            <img
              src="https://s3.amazonaws.com/vpg-static/help-tour/Draw_Final.gif"
              onerror="this.style.display='none'"
            />
          </div>

          <div class="tw-text-lg tw-font-bold tw-mb-1">Draw Tool</div>
          <p class="description">
            Click on this tool to draw various objects such as Point, Line,
            Freehand Curve, Circle, and Polygons. These objects will remain on
            the map until either the map viewer is refreshed or a user clicks on
            “Delete Drawing” button.
          </p>
        </div>

        <div id="section-2" class="help-video">
          <div class="tw-my-5 video-wrap">
            <img
              src="https://s3.amazonaws.com/vpg-static/help-tour/Measure_Final.gif"
              onerror="this.style.display='none'"
            />
          </div>

          <div class="tw-text-lg tw-font-bold tw-mb-1">Measure Tool</div>
          <p class="description">
            Click on this tool to measure length between two points and
            calculate area of various polygon shapes in three separate units at
            one time. Calculate length tool can measure the last segment length
            and the total length of the entire segment at the same time.
          </p>
        </div>

        <div id="section-3" class="help-video">
          <div class="tw-my-5 video-wrap">
            <img
              src="https://s3.amazonaws.com/vpg-static/help-tour/Buffer_Final.gif"
              onerror="this.style.display='none'"
            />
          </div>

          <div class="tw-text-lg tw-font-bold tw-mb-1">Buffer Tool</div>
          <p class="description">
            Buffer tool allows you to select data within a desire buffer
            distance from the point of selection. The selection is made by
            drawing a line, polygon, point or selecting individual parcel
            polygons on the map. User can use the horizontal scroll bar or put a
            manual entry to assign buffer distance. The user can also change the
            distance unit at any time.
          </p>
        </div>

        <div id="section-4" class="help-video">
          <div class="tw-my-5 video-wrap">
            <img
              src="https://s3.amazonaws.com/vpg-static/help-tour/MailMerge_Final.gif"
              onerror="this.style.display='none'"
            />
          </div>

          <div class="tw-text-lg tw-font-bold tw-mb-1">
            Mail-Merge Functionality
          </div>
          <p class="description">
            This functionality is embedded inside the Buffer Tool. Upon the
            desired buffer selection on the map, the user can export the pre-set
            layer by clicking on the Export button. This will trigger an output
            of the map layer in an Excel format. This Excel spreadsheet can be
            imported to Microsoft Word using mail-merge tool and help create
            citizen notices and shipping labels in no time.
          </p>
        </div>

        <div id="section-5" class="help-video">
          <div class="tw-my-5 video-wrap">
            <img
              src="https://s3.amazonaws.com/vpg-static/help-tour/Address_Mapping_Final.gif"
              onerror="this.style.display='none'"
            />
          </div>

          <div class="tw-text-lg tw-font-bold tw-mb-1">
            Address Mapping Tool
          </div>
          <p class="description">
            This tool returns the geographic location of any addresses on the
            map stored in a spreadsheet (.xlsx format). All addresses are
            required to be stored in a single cell. The address location on the
            map will be cleared when the user clicks on Clear button.
          </p>
        </div>

        <div id="section-6" class="help-video">
          <div class="tw-my-5 video-wrap">
            <img
              src="https://s3.amazonaws.com/vpg-static/help-tour/Print_Final.gif"
              onerror="this.style.display='none'"
            />
          </div>

          <div class="tw-text-lg tw-font-bold tw-mb-1">Export to PDF</div>
          <p class="description">
            Click on this tool to generate PDF document of the current zoom
            extent of the map. The export tool allows the user to export the map
            extent in most commonly used paper sizes (i.e. 8.5x11, 11x17) in
            portrait and landscape format.
          </p>
        </div>

        <div id="section-7" class="help-video">
          <div class="tw-my-5 video-wrap">
            <img
              src="https://s3.amazonaws.com/vpg-static/help-tour/Search_Final.gif"
              onerror="this.style.display='none'"
            />
          </div>

          <div class="tw-text-lg tw-font-bold tw-mb-1">
            Search Functionality
          </div>
          <p class="description">
            This functionality allows the user to search through various
            variables of any data layer. Upon finding the search results, the
            user can click on any of the result and the map will auto center
            based on the selected layer’s extent. This functionality is flexible
            and can search multiple layers at one time that matches the search
            criteria.
          </p>
        </div>

        <div id="section-8" class="help-video">
          <div class="tw-my-5 video-wrap">
            <img
              src="https://s3.amazonaws.com/vpg-static/help-tour/Menu_Final.gif"
              onerror="this.style.display='none'"
            />
          </div>

          <div class="tw-text-lg tw-font-bold tw-mb-1">Menu</div>
          <p class="description">
            Menu button stores various functionalities under one button. These
            functionalities can include but not limited to storing Legend,
            Commercial Listing data and Land Use Look Up search results stacks.
            The menu will collapse once the user clicks on the “X” symbol.
          </p>
        </div>

        <div id="section-9" class="help-video">
          <div class="tw-my-5 video-wrap">
            <img
              src="https://s3.amazonaws.com/vpg-static/help-tour/Landuse_Lookup_Final.gif"
              onerror="this.style.display='none'"
            />
          </div>

          <div class="tw-text-lg tw-font-bold tw-mb-1">Land Use Look Up</div>
          <p class="description">
            This functionality is embedded inside the Menu button. The user can
            go to enCodePlus specific project link to generate “Allowed”,
            “Permitted” or “Restricted” land use results and directly tie it
            back to the map viewer with narrowed results. The map viewer will
            auto center based on the results. The user can navigate through
            specific zones by turning the radio button on or off. The user can
            go back to the original state of the map by clicking on “Clear
            Results” link.
          </p>
        </div>

        <div id="section-10" class="help-video">
          <div class="tw-my-5 video-wrap">
            <img
              src="https://s3.amazonaws.com/vpg-static/help-tour/Legend_Final.gif"
              onerror="this.style.display='none'"
            />
          </div>

          <div class="tw-text-lg tw-font-bold tw-mb-1">Legend</div>
          <p class="description">
            This functionality is embedded inside the Menu button. The user can
            turn on or off any data layer using the radio buttons. Keep in mind
            that some layers may only activate at a certain zoom scale and
            Legend functionality will only show layers that are active in the
            map viewer.
          </p>
        </div>

        <div id="section-11" class="help-video">
          <div class="tw-my-5 video-wrap">
            <img
              src="https://s3.amazonaws.com/vpg-static/help-tour/Basemap_Final.gif"
              onerror="this.style.display='none'"
            />
          </div>

          <div class="tw-text-lg tw-font-bold tw-mb-1">Change Basemap</div>
          <p class="description">
            The user can change the basemap setting by clicking on Personalize
            Map Style icon at the lower right corner of the map viewer. The
            basemap setting will revert to its original basemap when the user
            refreshes the map viewer or load it again.
          </p>
        </div>

        <div class="tw-flex tw-flex-col" id="pagination">
          <div class="tw-flex tw-flex-row tw-justify-center tw-mb-2 pagination-numbers">
            <button type="button" class="active">1</button>
            <button type="button">2</button>
            <button type="button">3</button>
            <button type="button">4</button>
            <button type="button">5</button>
            <button type="button">6</button>
            <button type="button">7</button>
            <button type="button">8</button>
            <button type="button">9</button>
            <button type="button">10</button>
            <button type="button">11</button>
          </div>
          <div
            class="tw-flex tw-flex-row tw-justify-between pagination-buttons"
          >
            <button
              type="button"
              class="btn-primary tw-rounded-br-15 tw-py-2 tw-px-4 tw-text-sm tw-w-40"
              id="prev"
            >
              Previous
            </button>
            <button
              type="button"
              class="btn-primary tw-rounded-br-15 tw-py-2 tw-px-4 tw-text-sm tw-w-40 active"
              id="next"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  name: "helpvideodialog",
  props: {
    dialog: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    updateValue: function(value) {
      this.$emit("ChangeDialog", value);
    }
  }
};
</script>
