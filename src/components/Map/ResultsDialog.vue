<template>
  <v-dialog
    v-model="dialog"
    persistent
    max-width="380"
    content-class="results-dialog"
  >
    <div class="tw-bg-white">
      <div
        class="tw-flex tw-items-center tw-justify-between tw-bg-tertiary tw-text-lg tw-font-bold tw-text-white tw-px-4 tw-py-2 tw-relative"
      >
        Results
        <button type="button" @click="updateValue(false)">
          <img src="@/assets/img/icon_close.svg" />
        </button>
      </div>

      <!-- Parcel Opened -->
      <div class="panel active">
        <a
          href="javascript:void(0)"
          class="tw-flex tw-items-center tw-justify-between tw-font-bold panel-heading right tw-px-4 tw-py-2 tw-relative tw-z-10"
        >
          <div
            class="tw-absolute tw--z-10 tw-left-0 tw-top-0 tw-w-full tw-h-full tw-bg-tertiary tw-opacity-25"
          ></div>
          <span class="tw-text-tertiary">Parcel</span></a
        >

        <div class="panel-content tw-py-3 tw-px-4">
          <table class="tw-text-sm tw-text-left">
            <tr class="tw-border-b tw-border-solid">
              <td
                class="tw-py-1 tw-px-2 tw-text-right tw-align-top tw-whitespace-no-wrap"
              >
                Zoining Codes
              </td>
              <td class="tw-py-1 tw-px-2">B-P</td>
            </tr>
            <tr class="tw-border-b tw-border-solid">
              <td class="tw-py-1 tw-px-2 tw-text-right tw-align-top">
                Zoining Description
              </td>
              <td class="tw-py-1 tw-px-2">
                Planned Business Park District nned Business Park District
              </td>
            </tr>
            <tr>
              <td class="tw-py-1 tw-px-2 tw-text-right tw-align-top">
                Zone Hyperlinks
              </td>
              <td class="tw-py-1 tw-px-2">
                <a href="javascript:void(0)"
                  ><span class="tw-text-tertiary"
                    >Zone District Regulations</span
                  >
                  <br
                /></a>
                <a href="javascript:void(0)"
                  ><span class="tw-text-tertiary">Accessory Uses</span></a
                >
                <br />
                <a href="javascript:void(0)"
                  ><span class="tw-text-tertiary"
                    >Landscape Requirements</span
                  ></a
                >
                <br />
                <a href="javascript:void(0)"
                  ><span class="tw-text-tertiary">Sign Regulations</span></a
                >
              </td>
            </tr>
          </table>
        </div>
      </div>

      <!-- Zoning Opened -->
      <div class="panel active">
        <a
          href="javascript:void(0)"
          class="tw-flex tw-items-center tw-justify-between tw-font-bold panel-heading right tw-px-4 tw-py-2 tw-relative tw-z-10"
        >
          <div
            class="tw-absolute tw--z-10 tw-left-0 tw-top-0 tw-w-full tw-h-full tw-bg-tertiary tw-opacity-25"
          ></div>
          <span class="tw-text-tertiary">Zoning</span></a
        >

        <div class="panel-content tw-py-3 tw-px-4">
          <table class="tw-text-sm tw-text-left">
            <tr class="tw-border-b tw-border-solid">
              <td
                class="tw-py-1 tw-px-2 tw-text-right tw-align-top tw-whitespace-no-wrap"
              >
                Zoining Codes
              </td>
              <td class="tw-py-1 tw-px-2">B-P</td>
            </tr>
            <tr class="tw-border-b tw-border-solid">
              <td class="tw-py-1 tw-px-2 tw-text-right tw-align-top">
                Zoining Description
              </td>
              <td class="tw-py-1 tw-px-2">
                Planned Business Park District nned Business Park District
              </td>
            </tr>
          </table>

          <button
            class="btn-primary tw-mt-8 tw-font-bold tw-rounded-br-15 tw-py-2 tw-px-4 tw-text-sm tw-w-full"
          >
            Open Analytical Tools
          </button>
        </div>
      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  name: "resultsdialog",
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
